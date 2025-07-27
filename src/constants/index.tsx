import React from "react"
import {pageLinks} from "./routes"
import {Terminal, Shuffle, Key, Bot, ReplaceAll, BrainCircuit} from "lucide-react"

export const githubRepoURL = "https://github.com/antinomyhq/forge"
export const tailCallBenchmarkUrl = "https://github.com/tailcallhq/graphql-benchmarks#benchmark-results"
export const zapierLink = "https://hooks.zapier.com/hooks/catch/2793322/3a1gxp2/"

export enum cookieConstants {
  USER_CONSENT = "userConsent",
}

export const algoliaConstants = {
  categoryFacet: "category",
  searchModalPlaceholder: "What do you want to know about Forge ?",
}
// Import SVG logos as React components
import Dream11Logo from "@site/static/icons/companies/dream11.svg"
import AgodaLogo from "@site/static/icons/companies/agoda.svg"
import AmazonLogo from "@site/static/icons/companies/amazon.svg"
import BranchLogo from "@site/static/icons/companies/branch.svg"
import ClearTaxLogo from "@site/static/icons/companies/cleartax.svg"
import CommvaultLogo from "@site/static/icons/companies/commvault.svg"
import CoreEdgeLogo from "@site/static/icons/companies/coreedge.svg"

import Dream11ClientLogo from "@site/static/icons/client/dream11.svg"
import AgodaClientLogo from "@site/static/icons/client/agoda.svg"
import AmazonClientLogo from "@site/static/icons/client/amazon.svg"
import BranchClientLogo from "@site/static/icons/client/branch.svg"
import ClearTaxClientLogo from "@site/static/icons/client/cleartax.svg"
import CommvaultClientLogo from "@site/static/icons/client/commvault.svg"
import CoreEdgeClientLogo from "@site/static/icons/client/coreedge.svg"
import AirbnbLogo from "@site/static/icons/client/airbnb-dark.svg"
import DeelLogo from "@site/static/icons/client/deel-dark.svg"
import DoordashLogo from "@site/static/icons/client/doordash-dark.svg"
import GoogleLogo from "@site/static/icons/client/google-dark.svg"
import MetaLogo from "@site/static/icons/client/meta-dark.svg"
import NetflixLogo from "@site/static/icons/client/netflix-dark.svg"
import RedditLogo from "@site/static/icons/client/reddit-dark.svg"
import SalesforceLogo from "@site/static/icons/client/salesforce-dark.svg"
import XLogo from "@site/static/icons/client/x-dark.svg"

import Dream11ClientLogoLight from "@site/static/icons/client/dream11-light.svg"
import AgodaClientLogoLight from "@site/static/icons/client/agoda-light.svg"
import AmazonClientLogoLight from "@site/static/icons/client/amazon-light.svg"
import BranchClientLogoLight from "@site/static/icons/client/branch-light.svg"
import ClearTaxClientLogoLight from "@site/static/icons/client/cleartax-light.svg"
import CommvaultClientLogoLight from "@site/static/icons/client/commvault-light.svg"
import CoreEdgeClientLogoLight from "@site/static/icons/client/coreedge-light.svg"
import AirbnbLogoLight from "@site/static/icons/client/airbnb.svg"
import DeelLogoLight from "@site/static/icons/client/deel.svg"
import DoordashLogoLight from "@site/static/icons/client/doordash.svg"
import GoogleLogoLight from "@site/static/icons/client/google.svg"
import MetaLogoLight from "@site/static/icons/client/meta.svg"
import NetflixLogoLight from "@site/static/icons/client/netflix.svg"
import RedditLogoLight from "@site/static/icons/client/reddit.svg"
import SalesforceLogoLight from "@site/static/icons/client/salesforce.svg"
import XLogoLight from "@site/static/icons/client/x.svg"

export const companies: PartnerImage[] = [
  {name: "Airbnb", logo: AirbnbLogoLight},
  // {name: "Apple", logo: "/icons/client/apple.svg"},
  {name: "Deel", logo: DeelLogoLight},
  {name: "Doordash", logo: DoordashLogoLight},
  // {name: "Google", logo: GoogleLogoLight},
  {name: "Instacart", logo: "/icons/client/instacart.svg"},
  // {name: "Meta", logo: MetaLogoLight},
  // {name: "Microsoft", logo: "/icons/client/microsoft.svg"},
  // {name: "Netflix", logo: NetflixLogoLight},
  {name: "Reddit", logo: RedditLogoLight},
  {name: "Salesforce", logo: SalesforceLogoLight},
  {name: "X", logo: XLogoLight},
  {name: "Dream11", logo: Dream11Logo},
  {name: "Agoda", logo: AgodaLogo},
  {name: "Amazon", logo: AmazonLogo},
  {name: "Branch", logo: BranchLogo},
  {name: "ClearTax", logo: ClearTaxLogo},
  {name: "Commvault", logo: CommvaultLogo},
  {name: "CoreEdge", logo: CoreEdgeLogo},
]

export const companiesLight: PartnerImage[] = [
  {name: "Airbnb", logo: AirbnbLogo},
  {name: "Apple", logo: "/icons/client/apple-dark.svg"},
  {name: "Deel", logo: DeelLogo},
  {name: "Doordash", logo: DoordashLogo},
  {name: "Google", logo: GoogleLogo},
  {name: "Instacart", logo: "/icons/client/instacart-dark.svg"},
  {name: "Meta", logo: MetaLogo},
  {name: "Microsoft", logo: "/icons/client/microsoft-dark.svg"},
  {name: "Netflix", logo: NetflixLogo},
  {name: "Reddit", logo: RedditLogo},
  {name: "Salesforce", logo: SalesforceLogo},
  {name: "X", logo: XLogo},
  {name: "Dream11", logo: Dream11ClientLogoLight},
  {name: "Agoda", logo: AgodaClientLogoLight},
  {name: "Amazon", logo: AmazonClientLogoLight},
  {name: "Branch", logo: BranchClientLogoLight},
  {name: "ClearTax", logo: ClearTaxClientLogoLight},
  {name: "Commvault", logo: CommvaultClientLogoLight},
  {name: "CoreEdge", logo: CoreEdgeClientLogoLight},
]

export const clientLogos: PartnerImage[] = [
  {name: "Dream11", logo: Dream11ClientLogo},
  {name: "Agoda", logo: AgodaClientLogo},
  {name: "Amazon", logo: AmazonClientLogo},
  {name: "Branch", logo: BranchClientLogo},
  {name: "ClearTax", logo: ClearTaxClientLogo},
  {name: "Commvault", logo: CommvaultClientLogo},
  {name: "CoreEdge", logo: CoreEdgeClientLogo},
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
    image: Shuffle,
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
    title: "Use your favorite IDE",
    description:
      "Forge works natively with your CLI, so you don't need to switch IDEs. Whether you use VS Code, Xcode, Neovim, IntelliJ, Android Studio, or any other IDE, Forge integrates seamlessly with your shell and can access all the CLI tools you already have. It shows you the exact same logs and output that you'd see if you ran the tools directly, maintaining your familiar development workflow.",
    image: Terminal,
    redirection_url: "/docs",
  },
  {
    id: 2,
    title: "Control speed vs accuracy",
    description:
      "Pick the right model for each task. Need to plan something complex? Use a thinking model. Want quick code changes? Use a fast model. Working with large files? Choose a big context model. You can even mix models - plan with one, then code with another. It's all about using the best tool for the job.",
    image: BrainCircuit,
    redirection_url: "/docs/",
  },
  {
    id: 3,
    title: "Work with your existing AI providers",
    description:
      "Already have API keys and credits? Forge gives enterprise teams complete control over where your codebase goes - use self-hosted LLMs, cloud providers, while maintaining full visibility and governance.",
    image: Key,
    redirection_url: "/docs/custom-providers/",
  },
  {
    id: 4,
    title: "Create and share specialized agents",
    description:
      "You can build and share agents specific for your usecase, for example you can build a Frontend agent, Backend agent, DevOps agent, etc. You can also share these agents with your team members.",
    image: Bot,
    redirection_url: "/docs/",
  },
  {
    id: 5,
    title: "Handle massive refactors",
    description:
      "Handle codebase migrations and large-scale refactors with built-in task management, progress tracking, and intelligent context management without worrying about going out of context.",
    image: ReplaceAll,
    redirection_url: "/docs/",
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

export const NavbarItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Docs",
    link: "/docs",
  },
  {
    name: "Blog",
    link: "/blog",
  },
]

export const StatsForDevelopers = [
  {
    title: "Tokens / day",
    stat: 9.5,
    suffix: "B+",
    decimals: 1,
  },
  {
    title: "Lines of code / day",
    stat: 6.1,
    suffix: "M+",
    decimals: 1,
  },
  {
    title: "Github Stars",
    stat: 3.9,
    suffix: "K+",
    decimals: 1,
  },
]

export const TechDetails = [
  {
    title: "Backend - Code Understanding",
    descriptions: [
      "# Set up a GET and POST route in FastAPI",
      "# Create a Flask API that returns a list of users",
      "#  Build a JWT-based authentication system using Node.js",
    ],
    avatars: ["/images/home/avatar1.svg", "/images/home/avatar2.svg", "/images/home/avatar3.svg"],
  },
  {
    title: "Devops - Code Understanding",
    descriptions: [
      "# Set up a GET and POST route in FastAPI",
      "# Create a Flask API that returns a list of users",
      "#  Build a JWT-based authentication system using Node.js",
    ],
    avatars: ["/images/home/avatar1.svg", "/images/home/avatar2.svg", "/images/home/avatar3.svg"],
  },
  {
    title: "Security & infra - Code Understanding",
    descriptions: [
      "# Set up a GET and POST route in FastAPI",
      "# Create a Flask API that returns a list of users",
      "#  Build a JWT-based authentication system using Node.js",
    ],
    avatars: ["/images/home/avatar1.svg", "/images/home/avatar2.svg", "/images/home/avatar3.svg"],
  },
  {
    title: "Solo dev - Code Understanding",
    descriptions: [
      "# Set up a GET and POST route in FastAPI",
      "# Create a Flask API that returns a list of users",
      "#  Build a JWT-based authentication system using Node.js",
    ],
    avatars: ["/images/home/avatar1.svg", "/images/home/avatar2.svg", "/images/home/avatar3.svg"],
  },
]

export const TECHS = ["Backend", "Devops", "Security & infra", "Solo Dev"]

export const BENEFITS = [
  {
    imageUrl: "/icons/basic/gear.svg",
    imageLightUrl: "/icons/basic/gear-light.svg",
    title: "Use your favorite IDE",
    smallText: true,
    description:
      "Forge works natively with your CLI, so you don't need to switch IDEs. Whether you use VS Code, Xcode, Neovim, IntelliJ, Android Studio, or any other IDE, Forge integrates seamlessly with your shell and can access all the CLI tools you already have.",
  },
  {
    imageUrl: "/icons/basic/target.svg",
    imageLightUrl: "/icons/basic/target-light.svg",
    title: "Control speed vs accuracy",
    smallText: true,
    description:
      "Pick the right model for each task. Need to plan something complex? Use a thinking model. Want quick code changes? Use a fast model. Working with large files? Choose a big context model. You can even mix models - plan with one, then code with",
  },
  {
    imageUrl: "/icons/basic/puzzlePiece.svg",
    imageLightUrl: "/icons/basic/puzzlePiece-light.svg",
    title: "Work with your existing AI providers",
    smallText: false,
    description:
      "Already have API keys and credits? Forge gives enterprise teams complete control over where your codebase goes - use self-hosted LLMs, cloud providers, while maintaining full visibility and governance.",
  },
  {
    imageUrl: "/icons/basic/robot.svg",
    imageLightUrl: "/icons/basic/robot-light.svg",
    title: "Create and share specialized agents",
    smallText: false,
    description:
      "You can build and share agents specific for your usecase, for example you can build a Frontend agent, Backend agent, DevOps agent, etc. You can also share these agents with your team members.",
  },
  {
    imageUrl: "/icons/basic/swap.svg",
    imageLightUrl: "/icons/basic/swap-light.svg",
    title: "Handle massive refactors",
    smallText: true,
    description:
      "Handle codebase migrations and large-scale refactors with built-in task management, progress tracking, and intelligent context management without worrying about going out of context.",
  },
]

export const CARDS_DATA = [
  {
    imageUrl: "/images/home/people.png",
    title: "Forge keeps improving with every release. It's now part of my daily workflow. Super useful.",
    author: "Ashish,",
    designation: "VP Engineering, The Souled Store",
  },
  {
    imageUrl: "/images/home/people1.png",
    title: "Forge set a strong example by enabling AI pair programming. Looking forward to similar support in Rust",
    author: "Rahul,",
    designation: "Lead Software Engineer, Agoda",
  },
  {
    imageUrl: "/images/home/people2.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Shouvik Ghosh,",
    designation: "Software Developer, Mosaic Wellness",
  },
  {
    imageUrl: "/images/home/people3.png",
    title: "This is absolutely amazing. I would genuinely love lifetime access to this platform.",
    author: "Hammond Pereira,",
    designation: "Head of Engineering, Augnito",
  },
  {
    imageUrl: "/images/home/people4.png",
    title: "The Muse + Forge combo works great it really helps validate plans before execution.",
    author: "Profiteer",
    designation: "",
  },
]

export const FORGE_CODE_INSTALL_COMMAND = "npx forgecode@latest"

export const JOB_TITLE = [
  {
    label: "Software Developer",
    value: "Software Developer",
  },
  {
    label: "Frontend Developer",
    value: "Frontend Developer",
  },
  {
    label: "Backend Developer",
    value: "Backend Developer",
  },
  {
    label: "Full Stack Developer",
    value: "Full Stack Developer",
  },
  {
    label: "DevOps Engineer",
    value: "DevOps Engineer",
  },
  {
    label: "Tech Lead",
    value: "Tech Lead",
  },
]

export const COMPANY_STRENGTH = [
  {
    value: "2-10",
    label: "2-10",
  },
  {
    value: "11-25",
    label: "11-25",
  },
  {
    value: "26-50",
    label: "26-50",
  },
  {
    value: "51-100",
    label: "51-100",
  },
  {
    value: "101-250",
    label: "101-250",
  },
  {
    value: "251-500",
    label: "251-500",
  },
  {
    value: "501-1000",
    label: "501-1000",
  },
  {
    value: "1000+",
    label: "1000+",
  },
]

export const footerItems: FooterItem[] = [
  {
    title: "Developers",
    items: [
      {
        name: "Docs",
        link: pageLinks.docs,
      },
      {
        name: "Releases",
        link: pageLinks.releases,
      },
      // {
      //   name: "Report a Bug",
      //   link: "",
      // },
      // {
      //   name: "Contributors",
      //   link: "",
      // },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        name: "Privacy Policy",
        link: pageLinks.privacyPolicy,
      },
      // {
      //   name: "Terms",
      //   link: "",
      // },
      {
        name: "Cookie Settings",
        link: "",
      },
    ],
  },
  // {
  //   title: "Company",
  //   items: [
  //     {
  //       name: "Contact",
  //       link: "",
  //     },
  //     {
  //       name: "Testimonials",
  //       link: "",
  //     },
  //     {
  //       name: "Hiring",
  //       link: "https://forms.gle/F8dQkLqtCsFwctLa6",
  //     },
  //   ],
  // },
  {
    title: "Resources",
    items: [
      {
        name: "Blogs",
        link: pageLinks.blog,
      },
    ],
  },
  {
    title: "Plans",
    items: [
      {
        name: "Pricing",
        link: pageLinks.pricing,
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

export const COMMANDS = [
  {
    command: " what are the main components and how do they interact?",
    output: [
      "⏺ [12:15:22] Read README.md",
      "⏺ [12:15:22] Read package.json",
      "⏺ [12:15:22] Search at src",
      "-  Now let me examine the main configuration files and key entry points:",
      "⏺ [21:39:59] Read docusaurus.config.ts",
      "⏺ [21:40:00] Read src/pages/index.tsx",
      "⏺ [21:40:01] Read src/components/home/index.tsx",
      "synthesizing 20s ctrl+C to interrupt",
      "- Based on my analysis of the codebase, here are the main components and how they interact:",
      "Main Components Overview",
      "- This is a Docusaurus 2 based website for Forge Code - an AI coding platform. The architecture follows a modern React/TypeScript pattern with custom theming and components.",
    ],
  },
  {
    command: " how do I update?",
    output: [
      "- I need clarification on what you'd like to update. Here are the common update scenarios for this Docusaurus website:",
      "1. Update Website Content",
      "1. Update Dependencies",
      "2. Update Docusaurus Framework",
      "3. Deploy Updates",
      "4. Update Configuration",
    ],
  },
  {
    command: " /muse",
    output: ["[21:40:20] - Switched to agent MUSE"],
  },
  {
    command: " /exit",
    output: ["[21:40:40] - Exiting session...", "Goodbye."],
  },
]

export const GUIDES = [
  {
    title: "New Conversation",
    details: "/new",
  },
  {
    title: "Get started",
    details: "/info, /help",
  },
  {
    title: "Switch agent",
    details: "/forge or /muse",
  },
  {
    title: "update",
    details: "/update",
  },
  {
    title: "quit",
    details: "/exit or <CTRL+D>",
  },
]

export const FAQS = [
  {
    question: "How do I purchase additional prompts?",
    answer: `Additional prompts can be purchased directly through your ForgeCode dashboard when you approach your
              monthly limit.<strong>Pro users</strong> can buy 250 additional prompts for $10 USD, while These additional prompts are added to
              your current month's allowance.`,
  },
  {
    question: "What's the difference between Free, Pro, and Max plans?",
    answer: `<strong>Free ($0):</strong> Basic AI model access with limited daily usage, perfect for getting started.<br/>
              <strong>Pro ($20/month):</strong> Access to premium models (OpenAI, Claude, Gemini) with 500 requests per month and priority support.<br/>
              <strong>Max ($200/month):</strong> Unlimited access.`,
  },
  {
    question: "What are 'top tier' models?",
    answer: `Top tier models include the most advanced AI models like GPT-4, Claude-4, and Gemini 2.5 - the premium models
              from each provider that offer the best performance for complex coding tasks.`,
  },
  {
    question: "How does the Max plan unlimited usage work?",
    answer: `Max plan users get truly unlimited access to all AI models during this limited-time early access
              offer. Normally, Max provides 10,000 prompts per month, but early access users enjoy unlimited
              requests with no rate limits, daily caps, or usage restrictions at $200/month price.`,
  },
  {
    question: "What happens when I exceed my monthly prompt limit?",
    answer: `<strong>Free users:</strong> Hit daily usage limits and need to wait for reset or upgrade.<br/>
            <strong>Pro users:</strong> After using your 500 included prompts, you can purchase additional prompts: 250 prompts for $10 USD.`,
  },
  {
    question: "Is my code secure and private?",
    answer: `Absolutely. ForgeCode runs entirely on your local machine using your own API keys. Your code never 
              leaves your computer - no cloud processing, complete privacy and security.`,
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: `Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at your next billing cycle.`,
  },
  {
    question: "Do I need my own API keys?",
    answer: `For Free users, you'll need your own API keys for AI models. Pro and Max users get included access to premium
             models without needing separate API keys, plus the option to use your own keys for additional providers.`,
  },
]

export const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try before you commit",
    features: [
      "Dynamic request limit (adjusts based on server load)",
      "Community support",
      "BYOK (Bring Your Own Key)",
    ],
    cta: "Get Started Free",
    href: pageLinks.signup,
    popular: true,
    icons: ["/icons/basic/settings_pricing.svg"],
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "Most popular for individual developers",
    features: [
      "Everything in Free",
      "Premium AI models (GPT-4, Claude-4, Grok-4, Gemini-2.5)",
      "Up to 1000 AI requests daily",
    ],
    cta: "Start Pro Plan",
    href: pageLinks.signup,
    popular: true,
    icons: ["/icons/basic/SketchLogo.svg"],
  },
  {
    name: "Max",
    price: "$100",
    // originalPrice: "$200",
    period: "/month",
    description: "Best for power users",
    features: ["Everything in Pro", "Up to 5000 AI requests daily"],
    // cta: "Coming Soon",
    // href: pageLinks.signup,
    popular: false,
    special: true,
    icons: ["/icons/basic/colorfilter.svg"],
  },
]
