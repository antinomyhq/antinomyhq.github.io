import React, {useEffect} from "react"
import Layout from "@theme/Layout"
import ReactGA from "react-ga4"
import {useLocation} from "@docusaurus/router"
import {Trophy} from "lucide-react"

import HomePage from "../components/home"
import {PageDescription, PageTitle} from "../constants/titles"
import Announcement from "../components/shared/Announcement"

const Home = (): JSX.Element => {
  const isDevelopment = process.env.NODE_ENV === "development"
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname, title: "Home Page"})
  }, [])

  return (
    <Layout title={PageTitle.HOME} description={PageDescription.HOME}>
      <Announcement refLink="https://openrouter.ai/rankings" refText={<>View Rankings →</>} variant="gradient">
        <Trophy className="inline w-6 h-6 mr-1 text-yellow-500 align-middle font-bold translate-y-[-2px]" /> #1 CLI
        Coding Agent on OpenRouter • Over 1 billion tokens processed every day.
      </Announcement>
      <HomePage />
      {!isDevelopment && (
        <img
          style={{height: 0, width: 0}}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://static.scarf.sh/a.png?x-pxid=45ec365f-ab8a-4848-a6a9-bd4ffecfe72e"
          alt="pixel"
        />
      )}
    </Layout>
  )
}

export default Home
