import {themes as prismThemes} from "prism-react-renderer"
import type * as Preset from "@docusaurus/preset-classic"
import prismTheme from "./src/theme/CodeBlock/theme"
import type {Config} from "@docusaurus/types"
import {getNavDropdownItemHtml} from "./src/utils"

const title = "Forge Code"
const organization = "Forge Code"
const project = "antinomyhq.github.io"

export default {
  title,
  trailingSlash: true,
  tagline: "AI for everyone",
  headTags: [
    // Bulletproof theme script - prevents any interference from the start
    {
      tagName: "script",
      attributes: {},
      innerHTML: `
        (function() {
          // Immediately apply theme before anything else loads
          try {
            var match = document.cookie.match(/theme-preference=(dark|light)/);
            var theme = match ? match[1] : 'dark';
            
            // Force apply theme
            document.documentElement.classList.remove('dark', 'light');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.add('light');
            }
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.style.setProperty('--theme-mode', theme);
            
            // Prevent any other scripts from changing theme
            var originalSetAttribute = document.documentElement.setAttribute;
            document.documentElement.setAttribute = function(name, value) {
              if (name === 'class' || name === 'data-theme') {
                // Only allow theme changes if they match our stored preference
                var storedTheme = document.cookie.match(/theme-preference=(dark|light)/);
                if (storedTheme && storedTheme[1] === theme) {
                  originalSetAttribute.call(this, name, value);
                }
              } else {
                originalSetAttribute.call(this, name, value);
              }
            };
            
          } catch (e) {
            console.warn('Theme application failed:', e);
            // Fallback to dark theme
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        })();
      `,
    },
    // Adaptive favicon implementation - automatically switches based on system theme
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/images/favicon-light.svg",
        type: "image/svg+xml",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/images/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    },

    {
      tagName: "script",
      attributes: {
        defer: "defer",
        "data-domain": "forgecode.dev",
        src: "https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js",
      },
    },
    {
      tagName: "script",
      attributes: {},
      innerHTML:
        "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "ForgeCode",
        url: "https://forgecode.dev/",
      }),
    },
    {
      tagName: "script",
      attributes: {},
      innerHTML: `!function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
    (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
    h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8432087.js';
    h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
        
    snid('verify', '8432087');`,
    },
    {
      tagName: "script",
      attributes: {},
      innerHTML: `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/0OV0VHL3P56Z.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("0OV0VHL3P56Z");}();`,
    },
  ],
  url: "https://forgecode.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organization, // Usually your GitHub org/user name.
  projectName: project, // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch that GitHub pages will deploy from.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
      },
    },
  },
  future: {
    experimental_faster: false, // Required for faster production builds. For reference: https://docusaurus.io/blog/releases/3.6#adoption-strategy
  },
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      {
        docs: {
          // docRootComponent: require.resolve("./src/components/docs/Layout.tsx"),
          sidebarPath: require.resolve("./sidebars.ts"),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organization}/${project}/tree/main`,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/blogs/**"],
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {name: "twitter:card", content: "summary_large_image"},
      {name: "twitter:image", content: "/images/opengraph.png"},
      {property: "og:image", content: "https://forgecode.dev/images/opengraph.png"},
      {property: "og:image:width", content: "1200"},
      {property: "og:image:height", content: "630"},
    ],
    algolia: {
      appId: "748OFOGLOE",
      apiKey: "878290b0384a15f677fb6a4f94fe34cb",
      indexName: "forgecode",
      contextualSearch: false,
      searchParameters: {
        facetFilters: [],
      },
    },

    navbar: {
      hideOnScroll: true,
      items: [],
    },
    prism: {
      theme: prismTheme,
      darkTheme: prismTheme,
      additionalLanguages: ["protobuf", "json", "diff", "bash"],
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    tableOfContents: {},
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "./plugins/custom-blog-plugin.ts",
      {
        path: "blog",
        editLocalizedFiles: false,
        blogTitle: "Feed of ForgeCode blogs",
        blogDescription: "List of blog posts on ForgeCode blog",
        blogSidebarCount: 10,
        blogSidebarTitle: "Recent Blog Posts",
        routeBasePath: "blog",
        include: ["**/*.{md,mdx}"],
        exclude: ["**/_*.{js,jsx,ts,tsx,md,mdx}", "**/_*/**", "**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**"],
        postsPerPage: "ALL",
        blogListComponent: "@theme/BlogListPage",
        blogPostComponent: "@theme/BlogPostPage",
        blogTagsListComponent: "@theme/BlogTagsListPage",
        blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Tailcall, Inc.`,
        },
        onInlineAuthors: "throw",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "privacy",
        path: "privacy",
        routeBasePath: "privacy",
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./privacy/sidebar.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "releases",
        path: "releases",
        routeBasePath: "releases",
        showLastUpdateTime: true,
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}: any) {
          const sidebarItems = await defaultSidebarItemsGenerator(args)
          return sidebarItems.reverse()
        },
      },
    ],
    async function tailwindPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          return {
            ...postcssOptions,
            plugins: [...postcssOptions.plugins, require("tailwindcss"), require("autoprefixer")],
          }
        },
      }
    },
  ],
} satisfies Config
