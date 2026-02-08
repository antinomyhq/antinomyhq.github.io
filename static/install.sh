#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Installing Forge and dependencies (fzf, bat, fd)...${NC}"

# Check for required dependencies
DOWNLOADER=""
if command -v curl > /dev/null 2>&1; then
  DOWNLOADER="curl"
elif command -v wget > /dev/null 2>&1; then
  DOWNLOADER="wget"
else
  echo -e "${RED}Error: Either curl or wget is required but neither is installed${NC}" >&2
  exit 1
fi

# Download function that works with both curl and wget
download_file() {
  download_url="$1"
  download_output="$2"

  if [ "$DOWNLOADER" = "curl" ]; then
    # First try default transport
    if curl -fsSL -o "$download_output" "$download_url"; then
      return 0
    fi

    # Fallback for intermittent HTTP/2 issues on some networks
    sleep 1
    curl -fsSL --http1.1 -o "$download_output" "$download_url"
  elif [ "$DOWNLOADER" = "wget" ]; then
    wget -q -O "$download_output" "$download_url"
  else
    return 1
  fi
}

# Function to check if a tool is already installed
check_tool_installed() {
  local tool_name="$1"
  if command -v "$tool_name" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ $tool_name is already installed${NC}"
    return 0
  fi
  return 1
}

# Function to get latest release version from GitHub
get_latest_version() {
  local repo="$1"
  if [ "$DOWNLOADER" = "curl" ]; then
    curl -fsSL "https://api.github.com/repos/$repo/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/'
  else
    wget -qO- "https://api.github.com/repos/$repo/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/'
  fi
}

# Function to install fzf
install_fzf() {
  if check_tool_installed "fzf"; then
    return 0
  fi

  echo -e "${BLUE}Installing fzf...${NC}"

  local fzf_version=$(get_latest_version "junegunn/fzf")
  if [ -z "$fzf_version" ]; then
    echo -e "${YELLOW}Warning: Could not determine fzf version, skipping${NC}"
    return 1
  fi

  # Strip 'v' prefix from version for URL construction
  fzf_version="${fzf_version#v}"

  local fzf_url=""
  local fzf_binary="fzf"

  # Determine fzf download URL based on platform
  if [ "$OS" = "darwin" ]; then
    if [ "$ARCH" = "aarch64" ]; then
      fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-darwin_arm64.tar.gz"
    else
      fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-darwin_amd64.tar.gz"
    fi
  elif [ "$OS" = "linux" ]; then
    if is_android; then
      # For Android, use the Linux arm64 binary
      fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-android_arm64.tar.gz"
    elif [ "$ARCH" = "aarch64" ]; then
      fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-linux_arm64.tar.gz"
    else
      fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-linux_amd64.tar.gz"
    fi
  elif [[ "$OS" =~ msys|mingw|cygwin|windows ]]; then
    fzf_url="https://github.com/junegunn/fzf/releases/download/v${fzf_version}/fzf-${fzf_version}-windows_amd64.zip"
    fzf_binary="fzf.exe"
  else
    echo -e "${YELLOW}Warning: fzf not supported on $OS, skipping${NC}"
    return 1
  fi

  local fzf_temp="$TMP_DIR/fzf-${fzf_version}"
  mkdir -p "$fzf_temp"

  if download_file "$fzf_url" "$fzf_temp/fzf_archive"; then
    # Extract based on archive type
    if [[ "$fzf_url" == *.zip ]]; then
      if command -v unzip > /dev/null 2>&1; then
        unzip -q "$fzf_temp/fzf_archive" -d "$fzf_temp"
      else
        echo -e "${YELLOW}Warning: unzip not found, cannot extract fzf${NC}"
        return 1
      fi
    else
      tar -xzf "$fzf_temp/fzf_archive" -C "$fzf_temp"
    fi

    # Find and install the binary
    if [ -f "$fzf_temp/$fzf_binary" ]; then
      cp "$fzf_temp/$fzf_binary" "$INSTALL_DIR/$fzf_binary"
      chmod +x "$INSTALL_DIR/$fzf_binary"
      echo -e "${GREEN}✓ fzf installed successfully${NC}"
    elif [ -f "$fzf_temp/fzf" ]; then
      cp "$fzf_temp/fzf" "$INSTALL_DIR/fzf"
      chmod +x "$INSTALL_DIR/fzf"
      echo -e "${GREEN}✓ fzf installed successfully${NC}"
    else
      echo -e "${YELLOW}Warning: Could not find fzf binary in archive${NC}"
      return 1
    fi
  else
    echo -e "${YELLOW}Warning: Failed to download fzf, skipping${NC}"
    return 1
  fi

  rm -rf "$fzf_temp"
  return 0
}

# Function to install bat
install_bat() {
  if check_tool_installed "bat"; then
    return 0
  fi

  echo -e "${BLUE}Installing bat...${NC}"

  local bat_version=$(get_latest_version "sharkdp/bat")
  if [ -z "$bat_version" ]; then
    echo -e "${YELLOW}Warning: Could not determine bat version, skipping${NC}"
    return 1
  fi

  # Strip 'v' prefix from version for URL construction
  bat_version="${bat_version#v}"

  local bat_url=""
  local bat_binary="bat"

  # Determine bat download URL based on platform
  if [ "$OS" = "darwin" ]; then
    if [ "$ARCH" = "aarch64" ]; then
      bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-aarch64-apple-darwin.tar.gz"
    else
      bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-x86_64-apple-darwin.tar.gz"
    fi
  elif [ "$OS" = "linux" ]; then
    if is_android; then
      # For Android, use the Linux musl arm64 build
      bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-aarch64-unknown-linux-musl.tar.gz"
    elif [ "$ARCH" = "aarch64" ]; then
      bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-aarch64-unknown-linux-musl.tar.gz"
    else
      bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-x86_64-unknown-linux-musl.tar.gz"
    fi
  elif [[ "$OS" =~ msys|mingw|cygwin|windows ]]; then
    bat_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-x86_64-pc-windows-msvc.zip"
    bat_binary="bat.exe"
  else
    echo -e "${YELLOW}Warning: bat not supported on $OS, skipping${NC}"
    return 1
  fi

  local bat_temp="$TMP_DIR/bat-${bat_version}"
  mkdir -p "$bat_temp"

  if download_file "$bat_url" "$bat_temp/bat_archive"; then
    # Extract based on archive type
    if [[ "$bat_url" == *.zip ]]; then
      if command -v unzip > /dev/null 2>&1; then
        unzip -q "$bat_temp/bat_archive" -d "$bat_temp"
      else
        echo -e "${YELLOW}Warning: unzip not found, cannot extract bat${NC}"
        return 1
      fi
    else
      tar -xzf "$bat_temp/bat_archive" -C "$bat_temp"
    fi

    # Find and install the binary
    local bat_extracted_dir=$(find "$bat_temp" -mindepth 1 -maxdepth 1 -type d -name "bat-*" | head -n 1)
    if [ -n "$bat_extracted_dir" ] && [ -f "$bat_extracted_dir/$bat_binary" ]; then
      cp "$bat_extracted_dir/$bat_binary" "$INSTALL_DIR/$bat_binary"
      chmod +x "$INSTALL_DIR/$bat_binary"
      echo -e "${GREEN}✓ bat installed successfully${NC}"
    elif [ -f "$bat_temp/$bat_binary" ]; then
      cp "$bat_temp/$bat_binary" "$INSTALL_DIR/$bat_binary"
      chmod +x "$INSTALL_DIR/$bat_binary"
      echo -e "${GREEN}✓ bat installed successfully${NC}"
    else
      echo -e "${YELLOW}Warning: Could not find bat binary in archive${NC}"
      return 1
    fi
  else
    echo -e "${YELLOW}Warning: Failed to download bat, skipping${NC}"
    return 1
  fi

  rm -rf "$bat_temp"
  return 0
}

# Function to install fd
install_fd() {
  if check_tool_installed "fd"; then
    return 0
  fi

  echo -e "${BLUE}Installing fd...${NC}"

  local fd_version=$(get_latest_version "sharkdp/fd")
  if [ -z "$fd_version" ]; then
    echo -e "${YELLOW}Warning: Could not determine fd version, skipping${NC}"
    return 1
  fi

  # Strip 'v' prefix from version for URL construction
  fd_version="${fd_version#v}"

  local fd_url=""
  local fd_binary="fd"

  # Determine fd download URL based on platform
  if [ "$OS" = "darwin" ]; then
    if [ "$ARCH" = "aarch64" ]; then
      fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-aarch64-apple-darwin.tar.gz"
    else
      fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-x86_64-apple-darwin.tar.gz"
    fi
  elif [ "$OS" = "linux" ]; then
    if is_android; then
      # For Android, use the Linux musl arm64 build
      fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-aarch64-unknown-linux-musl.tar.gz"
    elif [ "$ARCH" = "aarch64" ]; then
      fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-aarch64-unknown-linux-musl.tar.gz"
    else
      fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-x86_64-unknown-linux-musl.tar.gz"
    fi
  elif [[ "$OS" =~ msys|mingw|cygwin|windows ]]; then
    fd_url="https://github.com/sharkdp/fd/releases/download/v${fd_version}/fd-v${fd_version}-x86_64-pc-windows-msvc.zip"
    fd_binary="fd.exe"
  else
    echo -e "${YELLOW}Warning: fd not supported on $OS, skipping${NC}"
    return 1
  fi

  local fd_temp="$TMP_DIR/fd-${fd_version}"
  mkdir -p "$fd_temp"

  if download_file "$fd_url" "$fd_temp/fd_archive"; then
    # Extract based on archive type
    if [[ "$fd_url" == *.zip ]]; then
      if command -v unzip > /dev/null 2>&1; then
        unzip -q "$fd_temp/fd_archive" -d "$fd_temp"
      else
        echo -e "${YELLOW}Warning: unzip not found, cannot extract fd${NC}"
        return 1
      fi
    else
      tar -xzf "$fd_temp/fd_archive" -C "$fd_temp"
    fi

    # Find and install the binary
    local fd_extracted_dir=$(find "$fd_temp" -mindepth 1 -maxdepth 1 -type d -name "fd-*" | head -n 1)
    if [ -n "$fd_extracted_dir" ] && [ -f "$fd_extracted_dir/$fd_binary" ]; then
      cp "$fd_extracted_dir/$fd_binary" "$INSTALL_DIR/$fd_binary"
      chmod +x "$INSTALL_DIR/$fd_binary"
      echo -e "${GREEN}✓ fd installed successfully${NC}"
    elif [ -f "$fd_temp/$fd_binary" ]; then
      cp "$fd_temp/$fd_binary" "$INSTALL_DIR/$fd_binary"
      chmod +x "$INSTALL_DIR/$fd_binary"
      echo -e "${GREEN}✓ fd installed successfully${NC}"
    else
      echo -e "${YELLOW}Warning: Could not find fd binary in archive${NC}"
      return 1
    fi
  else
    echo -e "${YELLOW}Warning: Failed to download fd, skipping${NC}"
    return 1
  fi

  rm -rf "$fd_temp"
  return 0
}

# Detect architecture
ARCH=$(uname -m)
case $ARCH in
  x86_64 | x64 | amd64)
    ARCH="x86_64"
    ;;
  aarch64 | arm64)
    ARCH="aarch64"
    ;;
  *)
    echo -e "${RED}Unsupported architecture: $ARCH${NC}"
    echo -e "${YELLOW}Supported architectures: x86_64, aarch64${NC}"
    exit 1
    ;;
esac

# Check if running on Android
is_android() {
  # Check for Termux environment
  if [ -n "$PREFIX" ] && echo "$PREFIX" | grep -q "com.termux"; then
    return 0
  fi

  # Check for Android-specific environment variables
  if [ -n "$ANDROID_ROOT" ] || [ -n "$ANDROID_DATA" ]; then
    return 0
  fi

  # Check for Android-specific system properties
  if [ -f "/system/build.prop" ]; then
    return 0
  fi

  # Try getprop command (Android-specific)
  if command -v getprop > /dev/null 2>&1; then
    if getprop ro.build.version.release > /dev/null 2>&1; then
      return 0
    fi
  fi

  return 1
}

# Get libc type and glibc compatibility
get_libc_info() {
  # Check for musl library files first (faster and more reliable)
  if [ -f "/lib/libc.musl-x86_64.so.1" ] || [ -f "/lib/libc.musl-aarch64.so.1" ]; then
    echo "musl"
    return
  fi

  # Find ls binary dynamically (more portable)
  libc_ls_binary=$(command -v ls 2> /dev/null || echo "/bin/ls")

  # Check if ldd reports musl (if ldd exists)
  if command -v ldd > /dev/null 2>&1; then
    if ldd "$libc_ls_binary" 2>&1 | grep -q musl; then
      echo "musl"
      return
    fi
  fi

  # Try ldd for glibc version (if ldd exists)
  if command -v ldd > /dev/null 2>&1; then
    libc_ldd_output=$(ldd --version 2>&1 | head -n 1 || true)

    # Double-check it's not musl
    if echo "$libc_ldd_output" | grep -qiF "musl"; then
      echo "musl"
      return
    fi

    # Extract glibc version
    libc_version=$(echo "$libc_ldd_output" | grep -oE '[0-9]+\.[0-9]+' | head -n 1)

    # If no version found from ldd, try getconf
    if [ -z "$libc_version" ]; then
      if command -v getconf > /dev/null 2>&1; then
        libc_getconf_output=$(getconf GNU_LIBC_VERSION 2> /dev/null || true)
        libc_version=$(echo "$libc_getconf_output" | grep -oE '[0-9]+\.[0-9]+' | head -n 1)
      fi
    fi

    # If we have a version, check if it's sufficient (>= 2.39)
    if [ -n "$libc_version" ]; then
      # Convert version to comparable number (e.g., 2.39 -> 239)
      libc_major=$(echo "$libc_version" | cut -d. -f1)
      libc_minor=$(echo "$libc_version" | cut -d. -f2)
      libc_version_num=$((libc_major * 100 + libc_minor))

      # Our binary requires glibc 2.39 or higher
      if [ "$libc_version_num" -ge 239 ]; then
        echo "gnu"
        return
      else
        echo "musl"
        return
      fi
    fi
  fi

  # If ldd doesn't exist or we couldn't determine, default to gnu
  # (most common on standard Linux distributions)
  echo "gnu"
}

# Detect OS
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

# Check for Android first
if [ "$OS" = "linux" ] && is_android; then
  TARGET="$ARCH-linux-android"
  BINARY_NAME="forge"
  if [ -z "$PREFIX" ]; then
    INSTALL_DIR="$HOME/.local/bin"
  else
    INSTALL_DIR="$PREFIX/bin"
  fi
  USE_SUDO=false
else
  case $OS in
    linux)
      # Check for FORCE_MUSL environment variable
      if [ "$FORCE_MUSL" = "1" ]; then
        LIBC_SUFFIX="-musl"
      else
        # Detect libc type and version
        LIBC_TYPE=$(get_libc_info)
        LIBC_SUFFIX="-$LIBC_TYPE"
      fi
      TARGET="$ARCH-unknown-linux$LIBC_SUFFIX"
      BINARY_NAME="forge"
      # Prefer user-local directory to avoid sudo
      INSTALL_DIR="$HOME/.local/bin"
      USE_SUDO=false
      ;;
    darwin)
      TARGET="$ARCH-apple-darwin"
      BINARY_NAME="forge"
      # Prefer user-local directory to avoid sudo
      INSTALL_DIR="$HOME/.local/bin"
      USE_SUDO=false
      ;;
    msys* | mingw* | cygwin* | windows*)
      TARGET="$ARCH-pc-windows-msvc"
      BINARY_NAME="forge.exe"
      # Windows install to user's local bin or AppData
      if [ -n "$LOCALAPPDATA" ]; then
        INSTALL_DIR="$LOCALAPPDATA/Programs/Forge"
      else
        INSTALL_DIR="$HOME/.local/bin"
      fi
      USE_SUDO=false
      ;;
    *)
      echo -e "${RED}Unsupported operating system: $OS${NC}"
      echo -e "${YELLOW}Supported operating systems: Linux, macOS (Darwin), Windows${NC}"
      echo -e "${BLUE}For installation instructions, visit:${NC}"
      echo -e "${BLUE}https://github.com/antinomyhq/forge#installation${NC}"
      exit 1
      ;;
  esac
fi

echo -e "${BLUE}Detected platform: $TARGET${NC}"

# Allow optional version argument, defaulting to "latest"
VERSION="${1:-latest}"

# Construct download URLs
if [ "$VERSION" = "latest" ]; then
  DOWNLOAD_URLS="https://github.com/antinomyhq/forge/releases/latest/download/forge-$TARGET"
else
  DOWNLOAD_URLS="https://github.com/antinomyhq/forge/releases/download/$VERSION/forge-$TARGET"
  case "$VERSION" in
    v*) ;;

    *)
      DOWNLOAD_URLS="$DOWNLOAD_URLS https://github.com/antinomyhq/forge/releases/download/v$VERSION/forge-$TARGET"
      ;;
  esac
fi

# Create temp directory
TMP_DIR=$(mktemp -d)
TEMP_BINARY="$TMP_DIR/$BINARY_NAME"

# Download Forge
download_success=false
for DOWNLOAD_URL in $DOWNLOAD_URLS; do
  echo -e "${BLUE}Downloading Forge from $DOWNLOAD_URL...${NC}"
  if download_file "$DOWNLOAD_URL" "$TEMP_BINARY"; then
    download_success=true
    break
  fi
done

if [ "$download_success" != "true" ]; then
  echo -e "${RED}Failed to download Forge.${NC}" >&2
  echo -e "${YELLOW}Please check:${NC}" >&2
  echo -e "  - Your internet connection" >&2
  echo -e "  - The version '$VERSION' exists" >&2
  echo -e "  - The target '$TARGET' is supported" >&2
  rm -rf "$TMP_DIR"
  exit 1
fi

# Create install directory if it doesn't exist
if [ ! -d "$INSTALL_DIR" ]; then
  echo -e "${BLUE}Creating installation directory: $INSTALL_DIR${NC}"
  if [ "$USE_SUDO" = true ]; then
    sudo mkdir -p "$INSTALL_DIR"
  else
    mkdir -p "$INSTALL_DIR"
  fi
fi

# Install
INSTALL_PATH="$INSTALL_DIR/$BINARY_NAME"
echo -e "${BLUE}Installing to $INSTALL_PATH...${NC}"
if [ "$USE_SUDO" = true ]; then
  sudo mv "$TEMP_BINARY" "$INSTALL_PATH"
  sudo chmod +x "$INSTALL_PATH"
else
  mv "$TEMP_BINARY" "$INSTALL_PATH"
  chmod +x "$INSTALL_PATH"
fi

# Add to PATH if necessary (for Windows or non-standard install locations)
if [ "$OS" = "windows" ] || [ "$OS" = "msys" ] || [ "$OS" = "mingw" ] || [ "$OS" = "cygwin" ]; then
  if ! echo "$PATH" | grep -q "$INSTALL_DIR"; then
    echo -e "${YELLOW}Note: You may need to add $INSTALL_DIR to your PATH${NC}"
  fi
fi

# Verify installation
echo ""
if command -v forge > /dev/null 2>&1; then
  echo -e "${GREEN}✓ Forge has been successfully installed!${NC}"
  forge --version 2> /dev/null || true
  echo -e "${BLUE}Run 'forge' to get started.${NC}"
else
  echo -e "${GREEN}✓ Forge has been installed to $INSTALL_PATH${NC}"
  echo ""
  echo -e "${YELLOW}The 'forge' command is not in your PATH yet.${NC}"

  # Check if the install directory is in PATH
  if ! echo "$PATH" | grep -q "$INSTALL_DIR"; then
    echo -e "${BLUE}Add it to your PATH by running:${NC}"

    # Provide shell-specific instructions
    if [ -n "$ZSH_VERSION" ]; then
      echo -e "  echo 'export PATH=\"$INSTALL_DIR:\$PATH\"' >> ~/.zshrc"
      echo -e "  source ~/.zshrc"
    elif [ -n "$BASH_VERSION" ]; then
      echo -e "  echo 'export PATH=\"$INSTALL_DIR:\$PATH\"' >> ~/.bashrc"
      echo -e "  source ~/.bashrc"
    elif [ -n "$FISH_VERSION" ]; then
      echo -e "  fish_add_path $INSTALL_DIR"
    else
      echo -e "  export PATH=\"$INSTALL_DIR:\$PATH\""
    fi
  else
    echo -e "${BLUE}Restart your shell or run:${NC}"

    # Detect shell and provide appropriate source command
    shell_name=$(basename "${SHELL:-bash}")
    case "$shell_name" in
      zsh)
        echo -e "  source ~/.zshrc"
        ;;
      bash)
        echo -e "  source ~/.bashrc"
        ;;
      fish)
        echo -e "  Restart your terminal (fish doesn't need source)"
        ;;
      *)
        echo -e "  Restart your terminal"
        ;;
    esac
  fi
fi

# Install dependencies (fzf, bat, fd)
echo ""
echo -e "${BLUE}Installing dependencies...${NC}"
install_fzf || true
install_bat || true
install_fd || true

echo ""
echo -e "${GREEN}Installation complete!${NC}"
echo -e "${BLUE}Tools installed: forge, fzf, bat, fd${NC}"

# Cleanup temp directory
rm -rf "$TMP_DIR"
