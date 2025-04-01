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
        "using-forge", // New combined document replacing quick-setup and shell-integration
      ],
    },
    {
      type: "category",
      label: "Basic Features", // Renamed from "Core Features" for better hierarchy
      collapsed: false,
      items: ["commands", "operation-modes", "custom-rules"],
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
      label: "Advanced Configuration", // More descriptive than "Advanced Features"
      collapsed: false,
      items: [
        "environment-configuration", // Moved from Core Features
        "agent-configuration",
        "context-compaction",
        "custom-commands", // Moved from Basic Features to Advanced Configuration
        "custom-workflows", // Moved from Core Features as it's an advanced topic
        "security-features", // Moved from Core Features as it's a configuration concern
      ],
    },
    {
      type: "category",
      label: "Troubleshooting & Maintenance", // New category for operational concerns
      collapsed: true,
      items: [
        "error-handling", // Moved from Advanced Features
        "logging", // Moved from Reference
      ],
    },
  ],
}

module.exports = sidebars
