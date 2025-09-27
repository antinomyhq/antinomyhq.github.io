---
slug: forge-v0.98.0-release-article
title: "Forge v0.98.0: Integrated Authentication and Developer Experience Improvements"
authors: [forge]
tags: ["Release"]
date: 2025-07-07
description: "Forge v0.98.0 release brings browser-based authentication, AI safety limits, and enhanced file operations for AI coding assistants. Streamline your terminal development workflow with improved reliability and developer experience."
hide_table_of_contents: false
---

_July 6, 2025_ - Forge v0.98.0 introduces browser-based authentication, tool failure limits, and enhanced file operations to improve reliability and user experience.

<!-- truncate -->

## What's New

### Browser-Based Authentication

v0.98.0 replaces manual API key configuration with browser-based authentication that integrates with `app.forgecode.dev`.

#### Setup Process

1. Run `npx forgecode@latest`
2. Forge opens your browser to `app.forgecode.dev`
3. Sign in with Google or GitHub
4. Authorize the app
5. Return to terminal - authentication is complete

<img src="/images/blog/login-newuser.gif" alt="Forge Code browser authentication setup - AI coding assistant terminal login process showing seamless Google and GitHub integration" style={{width: "100%", maxWidth: "800px"}} />

_Complete authentication setup in under 30 seconds_

The system waits for the authentication server until login completes.

<img src="/images/blog/login-progress.png" alt="Terminal Authentication Progress" style={{width: "100%", maxWidth: "800px"}} />

_Terminal shows authentication progress with clear status updates_

#### Migration from API Keys

**Existing users**: Your current API key configuration will continue working. The browser-based auth is optional and can be used alongside existing setups.

**For automation/CI**: API key authentication remains available for scripts and automated environments where browser access isn't available.

### Safety Limits and Auto-Stop

Forge now includes automatic safety limits to prevent infinite loops and runaway processes. There are two separate systems that work together to keep things under control.

#### System 1: Consecutive Tool Failure Limit (Hard Stop)

**What it does:** Tracks tool failures in a row and terminates the conversation when too many happen consecutively.

**Default limit:** 5 consecutive failures
**What triggers it:** File permission errors, invalid parameters, network issues - anything that makes tools fail repeatedly
**What happens:** Forge asks: "Do you want to continue anyway?"

```
Tool execution failure limit exceeded - terminating conversation
to prevent infinite retry loops.
```

**Key point:** This counter resets when any tool succeeds. It only cares about failures happening back-to-back.

<img src="/images/blog/tool-call-limit.gif" alt="Tool Failure Limit Dialog" style={{width: "100%", maxWidth: "800px"}} />

_Hard stop when consecutive failures hit the limit_

#### System 2: Overall Turn Limits (User Intervention)

**What it does:** Monitors the total activity in a single conversation turn and asks if you want to continue when limits are hit.

**Default limits:**

- 50 total requests per turn

**What happens:** Forge asks: "Do you want to continue anyway?"

**Configuration in forge.yaml:**

```yaml
max_requests_per_turn: 50 # Total requests before asking user
max_tool_failure_per_turn: 3 # Total failures before asking user
```

**Problem solved:** Prevents scenarios where agents get stuck in retry cycles due to environmental issues, permission problems, or invalid parameters that require human intervention rather than continued automated attempts.

> _Safety mechanism activates when operational limits are reached_

### Enhanced File Operations

#### Replace-All Patch Operation

The file patching system now supports `replace_all` operations for comprehensive refactoring tasks.

**Previous behavior**: `replace` operation only modified the first occurrence
**New behavior**: `replace_all` operation modifies all occurrences in the target file

<img src="/images/blog/replace-all.gif" alt="Replace All Operation Demo" style={{width: "100%", maxWidth: "800px"}} />

Replace-all operation updating multiple function names across a file

This is particularly useful for:

- Variable and function renaming
- Import statement updates
- Consistent refactoring across large files

## Breaking Changes

**None**. v0.98.0 maintains backward compatibility with existing API key configurations.

## Troubleshooting

### Authentication Issues

**Browser doesn't open**: Manually navigate to the URL displayed in the terminal
**Login timeout**: Check network connectivity and retry
**Permission errors**: Ensure Forge has permission to write to config directory

### Safety Limits and Auto-Stop

**Frequent limit hits**: Check file permissions.
**Need higher limits**: Adjust configuration in `forge.yaml`
**Unexpected failures**: Review error messages for specific tool issues

## Getting Started

### New Users

```bash
npx forgecode@latest
# Follow browser authentication prompts
```

<!-- ![New User Setup Flow](screenshots/new-user-setup.gif) -->

_Complete setup experience for first-time users_

### Existing Users

```bash
npx forgecode@latest
# Optionally set up browser auth (by removing API keys from .env)
# Continue using existing API key if preferred
```

<!-- ![Existing User Migration](screenshots/existing-user-migration.png) -->

_Smooth transition options for users with existing API key setups_

### Automation/CI

Continue using API key authentication for automated environments:

```bash
export FORGE_KEY=your_key
npx forgecode@latest
```

## Resources

- [Documentation](/docs) - Setup guides and API reference
- [GitHub Repository](https://github.com/antinomyhq/forge) - Source code and issues
- [Discord Community](https://discord.gg/kRZBPpkgwq) - Support and discussions
- [Release Notes](https://github.com/antinomyhq/forge/releases/tag/v0.98.0) - Complete changelog

---

v0.98.0 focuses on reliability and ease of use while maintaining the flexibility developers need for various workflows. The browser-based authentication removes setup friction for new users while preserving API key support for automation and power users.
