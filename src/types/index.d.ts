type ClientImage = {
  name: string
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
  lightLogo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
}

type PartnerImage = {
  // id: number
  name: string
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
}

type Feature = {
  logo: string
  title: string
  content: React.JSX.Element
  alt: string
}

type MoreFeatures = {
  id: number
  title: string
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

type Social = {
  id: number
  name: string
  image?: FunctionComponent<SVGProps<SVGSVGElement>> | undefined
  href: string
}

type ChooseTailcall = {
  id: number
  title: string
  description: string
  image: string
}

type TailcallFeatures = {
  id: number
  title: string
  image: string
  redirection_url: string
}

type Benefits = {
  id: number
  title: string
  description: string
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  redirection_url: string
}

type UseCase = {
  id: number
  title: string
  description: string
  icon: string
  examples: string[]
}

type EnterpriseFeature = {
  id: number
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

type AdditionalEnterpriseFeatures = {
  id: number
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
}

type PricingPlans = {
  id: number
  name: string
  price: string
  for: string
  billing?: string
  volumeDiscounts?: string
  features: Array<{
    id: number
    name: string
  }>
  buttonText: string
  mostPopular: boolean
  href: string
}

type Founder = {
  id: number
  name: string
  title: string
  image: string
  socialLinks: Social[]
}

type Investor = {
  id: number
  image: string
  image2x: string
  name: string
  title: string
}

type RadioOptions = {
  id: string
  name: string
  value: string
}

type SidebarLink = {
  type: "link"
  label: string
  href: string
  docId: string
  unlisted: boolean
}

type SidebarCategory = {
  type: "category"
  label: string
  collapsible: boolean
  collapsed: boolean
  items: SidebarLink[]
}

type SidebarItem = {
  type: "category" | "link"
  label: string
  collapsible?: boolean
  collapsed?: boolean
  items?: SidebarLink[]
  href?: string
  docId?: string
  unlisted?: boolean
}

type SidebarConfig = {
  sidebar: SidebarItem[]
  hiddenSidebarContainer: boolean
}

type CustomerFeedback = {
  id: number
  citation: string
  designation: string
  name?: string
  department?: string
}

type BlogTag = {
  label: string
  permalink: string
}

declare module "docusaurus-lunr-search/src/theme/SearchBar"
declare module "react-platform-js"

type RecentBlogPostItem = {
  date: string
  title: string
  description: string
  authors: Author[]
  permalink: string
  tags: TagMetadata[]
}

type FooterLink = {
  name: string
  link: string
}

type FooterItem = {
  title: string
  items: FooterLink[]
}
