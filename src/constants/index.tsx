import React from "react"
import {pageLinks} from "./routes"

export const githubRepoURL = "https://github.com/antinomyhq/forge"
export const tailCallBenchmarkUrl = "https://github.com/tailcallhq/graphql-benchmarks#benchmark-results"
export const zapierLink = "https://hooks.zapier.com/hooks/catch/2793322/3a1gxp2/"

export enum cookieConstants {
  USER_CONSENT = "userConsent",
}

export const algoliaConstants = {
  categoryFacet: "category",
  searchModalPlaceholder: "What do you want to now about code forge ?",
}
// FIXME: change the list of items and logos
export const companies: PartnerImage[] = [
  {name: "Dream11", logo: require("@site/static/icons/companies/dream11.png").default},
  {name: "Agoda", logo: require("@site/static/icons/companies/agoda.png").default},
  {name: "Amazon", logo: require("@site/static/icons/companies/amazon.png").default},
  {name: "Branch", logo: require("@site/static/icons/companies/branch.png").default},
  {name: "ClearTax", logo: require("@site/static/icons/companies/cleartax.png").default},
  {name: "Commvault", logo: require("@site/static/icons/companies/commvault.png").default},
  {name: "CoreEdge", logo: require("@site/static/icons/companies/coredge.png").default},
]

export const partnerImages: PartnerImage[] = [
  {
    name: "Digital Ocean",
    logo: require("@site/static/icons/companies/digital-ocean.png").default,
  },
  {
    name: "Vercel",
    logo: require("@site/static/icons/companies/vercel.png").default,
  },
  {
    name: "Fastly",
    logo: require("@site/static/icons/companies/fastly.png").default,
  },
  {
    name: "Cloud Flare",
    logo: require("@site/static/icons/companies/cloudflare.png").default,
  },
  {
    name: "AWS",
    logo: require("@site/static/icons/companies/aws.png").default,
  },
  {
    name: "Google Cloud",
    logo: require("@site/static/icons/companies/google-cloud.png").default,
  },
  {
    name: "Fly",
    logo: require("@site/static/icons/companies/fly-io.png").default,
  },
]

const Highlight = ({text}: {text: string}) => (
  <>
    <span className="text-content-tiny font-bold sm:text-title-tiny lg:text-title-small bg-tailCall-yellow rounded-[4px] sm:rounded-md px-SPACE_01">
      {text}
    </span>
  </>
)

export const features: Feature[] = [
  {
    logo: require("@site/static/images/home/orchestration.png").default,
    title: "Orchestration",
    content: (
      <>
        Tailcall provides first-class primitives to perform API Orchestration across protocols such as{" "}
        <Highlight text="gRPC, REST, GraphQL," />. This allow developers to enrich existing APIs with more data, perform
        transformations or build a completely new set of aggregation APIs.
      </>
    ),
    alt: "Orchestration",
  },
  {
    logo: require("@site/static/images/home/governance.png").default,
    title: "Governance",
    content: (
      <>
        With Tailcall, your focus shifts to the 'what'—such as entities, their relationships, access control, security,
        authentication, caching, and more—rather than the 'how'. This shift is enabled by the Tailcall DSL, embodying a
        true <Highlight text="declarative approach" /> to managing APIs.
      </>
    ),
    alt: "Governance",
  },
  {
    logo: require("@site/static/images/home/efficiency.png").default,
    title: "Efficiency",
    content: (
      <>
        Tailcall can introspect all orchestration requirements <Highlight text="ahead of time" /> and automatically
        generate a highly efficient data access layer. This results in achieving much lower resource utilization and
        opens up opportunities to use in ultra-low latency workloads.
      </>
    ),
    alt: "Efficiency",
  },
  // {
  //   logo: require("@site/static/images/home/resiliency.png").default,
  //   title: "Resiliency",
  //   content: (
  //     <>
  //       Tailcall offers advanced resiliency primitives including automatic failover, rate limiting and circuit breakers,
  //       ensuring high availability and stability across any distributed systems. It maintains optimal performance and
  //       reliability under varying loads and potential threats. Engineered for enterprise resilience, Tailcall guarantees
  //       robust performance under any conditions. Our platform is designed for{" "}
  //       <Highlight text="high availability and fault tolerance," /> ensuring uninterrupted service and reliability at
  //       scale.
  //     </>
  //   ),
  // },
  {
    logo: require("@site/static/images/home/extendability.png").default,
    title: "Extendability",
    content: (
      <>
        At times, the built-in primitives may not fully satisfy specific orchestration needs. In such instances,
        Tailcall offers a lightweight embedded <Highlight text="JavaScript" /> runtime. This feature enables you to
        attach custom hooks for monitoring events within Tailcall, allowing you to directly issue commands for the
        subsequent actions Tailcall should execute.
      </>
    ),
    alt: "Extendability",
  },
]

export const moreFeatures: MoreFeatures[] = [
  {
    id: 1,
    title: "Ahead of Time Optimizations",
    logo: require("@site/static/icons/basic/rocket-icon.svg").default,
  },
  {
    id: 2,
    title: "Composable Orchestration Primitives",
    logo: require("@site/static/icons/basic/extension.svg").default,
  },
  {
    id: 3,
    title: "Macro Resiliency Capabilities",
    logo: require("@site/static/icons/basic/shield.svg").default,
  },
  {
    id: 4,
    title: "Protocol agnostic",
    logo: require("@site/static/icons/basic/check-done.svg").default,
  },
  {
    id: 5,
    title: "High Performance",
    logo: require("@site/static/icons/basic/line-chart-up.svg").default,
  },
  {
    id: 6,
    title: "Security",
    logo: require("@site/static/icons/basic/security.svg").default,
  },
  {
    id: 7,
    title: "Edge Compatible",
    logo: require("@site/static/icons/basic/puzzle.svg").default,
  },
  {
    id: 8,
    title: "Compile time Checks",
    logo: require("@site/static/icons/basic/clock.svg").default,
  },
  {
    id: 9,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Adaptive performance improvements",
  },
  // {
  //   id: 10,
  //   logo: require("@site/static/icons/basic/rate-limit.svg").default,
  //   title: "Global rate limiting",
  // },
  {
    id: 11,
    logo: require("@site/static/icons/basic/insight.svg").default,
    title: "Telemetry",
  },
  {
    id: 12,
    logo: require("@site/static/icons/basic/connect.svg").default,
    title: "Scripting Flexibility",
  },
]

export const socials: Social[] = [
  {
    id: 1,
    name: "github",
    image: require("@site/static/icons/companies/github-footer.svg").default,
    href: "https://github.com/antinomyhq/forge",
  },
  {
    id: 2,
    name: "discord",
    image: require("@site/static/icons/companies/discord-gray.svg").default,
    href: "https://discord.gg/kRZBPpkgwq",
  },
  {
    id: 3,
    name: "linkedin",
    image: require("@site/static/icons/companies/linkedin-gray.svg").default,
    href: "https://www.linkedin.com/company/forgecodehq",
  },
  {
    id: 4,
    name: "twitter",
    image: require("@site/static/icons/companies/x-gray.svg").default,
    href: "https://x.com/forgecodehq",
  },
]

export const chooseTailcall: ChooseTailcall[] = [
  {
    id: 1,
    title: "Top developer experience",
    description: "Design your APIs, with syntax highlighting and lint checks within your favourite IDE.",
    image: require("@site/static/images/home/dev-experience.png").default,
  },
  {
    id: 2,
    title: "Performance",
    description: "Get performance that's higher than your hand optimized implementation",
    image: require("@site/static/images/home/performance.png").default,
  },
  {
    id: 3,
    title: "Scale Fearlessly",
    description: "Leverage built-in best practices that guarantee robustness at any scale.",
    image: require("@site/static/images/home/scale.png").default,
  },
]

export const tailcallFeatures: TailcallFeatures[] = [
  {
    id: 1,
    title: "Powerful Batching Primitive",
    image: require("@site/static/images/choose-tailcall/rocket.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 2,
    title: "Extensions with plugins and JS support",
    image: require("@site/static/images/choose-tailcall/grid.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 3,
    title: "Field based Authentication & Authorisation",
    image: require("@site/static/images/choose-tailcall/shield-tick.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 4,
    title: "Protocol agnostic",
    image: require("@site/static/images/choose-tailcall/check-done.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 5,
    title: "Performance",
    image: require("@site/static/images/choose-tailcall/line-chart-up.png").default,
    redirection_url: "https://github.com/tailcallhq/graphql-benchmarks",
  },
  {
    id: 6,
    title: "Security",
    image: require("@site/static/images/choose-tailcall/lock.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 7,
    title: "Edge Compatible",
    image: require("@site/static/images/choose-tailcall/puzzle-piece.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 8,
    title: "Compile time checks",
    image: require("@site/static/images/choose-tailcall/clock-stopwatch.png").default,
    redirection_url: "/docs/",
  },
]

export const benefits: Benefits[] = [
  {
    id: 1,
    title: "Developer-Controlled & Secure",
    description:
      "Your code never leaves your machine – Forge runs locally with your own API keys. No cloud processing, no data collection, just private and secure AI assistance that keeps you in complete control.",
    image: require("@site/static/images/home/secure-icon.png").default,
    redirection_url: "/docs/",
  },
  {
    id: 2,
    title: "Seamless Terminal Integration",
    description:
      "No new IDE to learn. Forge lives in your terminal and plugs into your existing workflow with near zero setup. It understands your entire codebase and git history.",
    image: require("@site/static/images/home/customizable-icon.png").default,
    redirection_url: "/docs",
  },
  {
    id: 3,
    title: "Model-Agnostic Flexibility",
    description:
      "Leverage the best of AI now and in the future. Forge works with OpenAI, Anthropic Claude, and hundreds of other models (300+ supported) including open-source and on-premise models.",
    image: require("@site/static/images/home/performance.png").default,
    redirection_url: "/docs",
  },
  {
    id: 4,
    title: "Customizable & Extensible",
    description:
      "Adapt Forge to how you work. Define custom workflows or commands. Being open-source, Forge invites you to extend its capabilities – whether automating repetitive tasks or integrating with your team's internal tools.",
    image: require("@site/static/images/home/open-source-icon.png").default,
    redirection_url: "https://github.com/antinomyhq/forge",
  },
]
export const useCases: UseCase[] = [
  {
    id: 1,
    title: "Code Understanding",
    description:
      "Quickly grasp unfamiliar codebases, understand complex logic, and navigate large projects with intelligent explanations.",
    icon: require("@site/static/images/home/dev-experience.png").default,
    examples: [
      "Explain this function's purpose and how it works",
      "Show me the data flow through this module",
      "What does this regex pattern match?",
    ],
  },
  {
    id: 2,
    title: "Feature Implementation",
    description: "Transform ideas into working code with natural language descriptions and intelligent scaffolding.",
    icon: require("@site/static/images/home/orchestration.png").default,
    examples: [
      "Add user authentication to this endpoint",
      "Create a responsive navbar component",
      "Implement pagination for this API",
    ],
  },
  {
    id: 3,
    title: "Debugging & Troubleshooting",
    description: "Identify bugs faster, understand error messages, and get contextual solutions for complex issues.",
    icon: require("@site/static/images/home/efficiency.png").default,
    examples: [
      "Why is this test failing?",
      "Fix this memory leak in my React component",
      "Diagnose this database connection issue",
    ],
  },
  {
    id: 4,
    title: "Code Reviews & Quality",
    description:
      "Enhance code quality with intelligent suggestions, security checks, and best practice recommendations.",
    icon: require("@site/static/images/home/secure-icon.png").default,
    examples: [
      "Review this pull request for security issues",
      "Suggest performance improvements",
      "Check this code against best practices",
    ],
  },
  {
    id: 5,
    title: "Learning & Exploration",
    description: "Master new technologies, understand patterns, and learn from your existing codebase.",
    icon: require("@site/static/images/home/governance.png").default,
    examples: [
      "How does async/await work in this context?",
      "Explain this design pattern",
      "Show me examples of dependency injection here",
    ],
  },
  {
    id: 6,
    title: "Database Design & Queries",
    description:
      "Design efficient schemas, optimize queries, and manage database migrations with intelligent assistance.",
    icon: require("@site/static/images/home/performance.png").default,
    examples: [
      "Design a schema for this user management system",
      "Optimize this slow SQL query",
      "Create a migration for these schema changes",
    ],
  },
  {
    id: 7,
    title: "Refactoring & Modernization",
    description: "Safely modernize legacy code, improve architecture, and maintain backward compatibility.",
    icon: require("@site/static/images/home/customizable-icon.png").default,
    examples: [
      "Refactor this class to use modern patterns",
      "Convert this to TypeScript",
      "Split this monolithic function into modules",
    ],
  },
  {
    id: 8,
    title: "Git Operations & History",
    description: "Navigate git history, understand changes, and manage complex merge scenarios with confidence.",
    icon: require("@site/static/images/home/extendability.png").default,
    examples: [
      "What changed in the last 5 commits?",
      "Help me resolve this merge conflict",
      "Find when this bug was introduced",
    ],
  },
]

export const enterpriseFeatures: EnterpriseFeature[] = [
  {
    id: 1,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Adaptive performance improvements",
    description: "Adaptive optimisation by analysing the hot queries in your Production environment",
  },
  // {
  //   id: 2,
  //   logo: require("@site/static/icons/basic/rate-limit.svg").default,
  //   title: "Global rate limiting",
  //   description: "Ability to set global rate limits on access of each field of your data graph.",
  // },
  {
    id: 3,
    logo: require("@site/static/icons/basic/reflect.svg").default,
    title: "Managed Solution",
    description: "The change in any GraphQL config gets seamlessly reflected on your GraphQL. ",
  },
  {
    id: 4,
    logo: require("@site/static/icons/basic/insight.svg").default,
    title: "Telemetry",
    description: "Low level insights of execute vs IO time for each query.",
  },
  {
    id: 5,
    logo: require("@site/static/icons/basic/connect.svg").default,
    title: "Scripting Flexibility",
    description: "Ability to write custom resolvers in Javascript.",
  },
]

export const additionalEnterpriseFeatures: AdditionalEnterpriseFeatures[] = [
  {
    id: 1,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Circuit breaking",
  },
  {
    id: 2,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Custom SLA",
  },
  {
    id: 3,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Schema redundancy detection",
  },
  {
    id: 4,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Query cost analysis",
  },
  {
    id: 5,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Breaking change detection",
  },
  {
    id: 6,
    logo: require("@site/static/icons/basic/adaptive.svg").default,
    title: "Expert 24x7 technical support",
  },
]

export const pricingPlans: PricingPlans[] = [
  {
    id: 1,
    name: "Basic plan",
    price: "Free",
    for: "For individuals & small companies",
    features: [
      {
        id: 1,
        name: "Access to all open source features",
      },

      {
        id: 2,
        name: "Basic reporting and analytics",
      },
    ],

    buttonText: "Get Started",
    mostPopular: false,
    href: "/docs/getting-started-with-graphql",
  },
  {
    id: 3,
    name: "Enterprise plan",
    price: "$1000/year",
    for: "per core",
    billing: "Billed Annually",
    volumeDiscounts: "(Volume discounts available)",
    features: [
      {
        id: 1,
        name: "Access to all advanced plan features",
      },
      {
        id: 2,
        name: "Custom SLA",
      },
      {
        id: 3,
        name: "Priority 24x7 Support",
      },
      {
        id: 4,
        name: "Advanced Security & Compliance",
      },
      {
        id: 5,
        name: "On premise deployment",
      },
      {
        id: 6,
        name: "Custom Plugin Development",
      },
    ],
    buttonText: "Contact Sales",
    mostPopular: false,
    href: "/",
  },
]

export const radioOptions: RadioOptions[] = [
  {id: "1", name: "Evaluating", value: "evaluating"},
  {
    id: "2",
    name: "Monolith",
    value: "monolith",
  },
  {
    id: "3",
    name: "Multiple Graphql with Bff",
    value: "bff",
  },
  {
    id: "4",
    name: "Federated",
    value: "federated",
  },
]

// Define an enum for theme options
export enum Theme {
  Light = "light",
  Dark = "dark",
  Gray = "gray",
  Tailcall = "tailcall",
}

export const testimonials: CustomerFeedback[] = [
  {
    id: 1,
    citation: `With a fully open-source GraphQL solution at your disposal, you gain complete control to tailor it precisely to your requirements. This approach provides unparalleled transparency and flexibility, allowing you to work independently of backend teams. You can iterate, develop, and deploy your frontend applications more efficiently than ever before.`,
    designation: `Sr. Frontend Engineer`,
    name: "John Doe",
    department: "Front-end",
  },
  {
    id: 2,
    citation: `By eliminating the need to manage GraphQL for frontend teams, you can focus on your core responsibilities—optimizing microservices and streamlining backend operations. The clear separation of concerns enhances collaboration, while Tailcall's static verification ensures you can expose APIs with confidence and reliability.`,
    designation: `Sr. Backend Engineer - Big Co. Inc.`,
    name: "John Doe",
    department: "Backend",
  },
  {
    id: 3,
    citation: `Adopting a proven, open-source GraphQL solution transforms your operational workflows. It offers robust reliability, simplifies management, and scales seamlessly to meet growing demands. With enhanced security and faster iteration cycles, you can dedicate more time to strategic challenges and high-impact projects.`,
    designation: `Sr. Frontend Engineer - Big Co. Inc.`,
    name: "John Doe",
    department: "Ops",
  },
]

// Add the missing blogTagsMapping constant
export const blogTagsMapping: Record<string, BlogTag[]> = {
  "General Topics": [{label: "Welcome", permalink: "/blog/tags/welcome"}],
}

export enum CookiePreferenceCategory {
  NECESSARY = "Necessary",
  ANALYTICS = "Analytics",
  PREFERENCE = "Preference",
  MARKETING = "Marketing",
}

export const footerItems: FooterItem[] = [
  {
    title: "Developers",
    items: [
      {
        name: "Docs",
        link: pageLinks.docs,
      },
      {
        name: "Blogs",
        link: pageLinks.blog,
      },
      {
        name: "Releases",
        link: pageLinks.releases,
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "Pricing",
        link: pageLinks.pricing,
      },
      {
        name: "Privacy Policy",
        link: pageLinks.privacyPolicy,
      },
      {
        name: "We're Hiring",
        link: "https://forms.gle/F8dQkLqtCsFwctLa6",
      },
    ],
  },
]

export const gtagScriptContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FLJBT3GYVJ');
`
