/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import {SidebarsConfig} from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "introduction",
        "installation",
        "quickstart",
        "custom-providers", // New combined document replacing quick-setup and shell-integration
      ],
    },
    {
      type: "category",
      label: "Features", // Renamed from "Core Features" for better hierarchy
      collapsed: false,
      items: ["commands", "shell-commands", "auto-complete", "operating-agents", "custom-rules"],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "plan-and-act-guide",
          label: "Plan First, Then Act",
        },
        {
          type: "doc",
          id: "model-selection-guide",
          label: "Switching Models",
        },
        {
          type: "doc",
          id: "custom-rules-guide",
          label: "Working with Custom Rules",
        },
        {
          type: "doc",
          id: "file-tagging-guide",
          label: "File Tagging with @",
        },
      ],
    },
    {
      type: "category",
      label: "Tools & Resources", // New category specifically for tools
      collapsed: false,
      items: [
        "tools-reference", // Dedicated category highlights importance of tools
      ],
    },
    {
      type: "category",
      label: "Advanced Configuration",
      collapsed: false,
      items: [
        "workflow-config",
        "environment-configuration",
        "mcp-integration",
        "context-compaction",
        "custom-commands",
        "security-features",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting", // New category for operational concerns
      collapsed: true,
      items: [
        "npm-troubleshooting", // Node.js and npm installation issues
        "error-handling", // Moved from Advanced Features
        "logging", // Moved from Reference
      ],
    },
  ],
}

module.exports = sidebars
