import React, {useEffect, useState} from "react"
import Heading from "@theme/Heading"
import {ArrowRight} from "lucide-react"
import ForgeLogo from "@site/static/images/favicon-light.svg"

type GitHubStats = {
  stars: number
  forks: number
  contributorAvatars: string[]
}

const GITHUB_REPO = "antinomyhq/forge"
const GITHUB_URL = "https://github.com/antinomyhq/forge"

const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

const StatCard: React.FC<{label: string; value: string}> = ({label, value}) => (
  <div className="flex flex-col items-center justify-center bg-tailCall-dark-500/80 border border-dashed border-[rgba(245,245,240,0.176)] rounded-none col-span-3 row-span-2">
    <span className="text-content-tiny text-tailCall-light-600">{label}</span>
    <span className="text-title-small sm:text-title-medium lg:text-title-large text-white font-bold">{value}</span>
  </div>
)

const LogoCell: React.FC<{id: string}> = ({id}) => (
  <div
    key={id}
    className="w-full aspect-square rounded-none bg-tailCall-dark-500/80 border border-dashed border-[rgba(245,245,240,0.176)] flex items-center justify-center opacity-50"
  >
    <ForgeLogo className="w-3/5 h-3/5 [&_path]:fill-white" />
  </div>
)

const FALLBACK_AVATARS = [
  "https://avatars.githubusercontent.com/u/194482?v=4",
  "https://avatars.githubusercontent.com/u/23661702?v=4",
  "https://avatars.githubusercontent.com/u/43403528?v=4",
  "https://avatars.githubusercontent.com/u/62684960?v=4",
  "https://avatars.githubusercontent.com/u/96689162?v=4",
  "https://avatars.githubusercontent.com/u/48511543?v=4",
  "https://avatars.githubusercontent.com/u/37656900?v=4",
  "https://avatars.githubusercontent.com/u/11161695?v=4",
  "https://avatars.githubusercontent.com/u/115935108?v=4",
  "https://avatars.githubusercontent.com/u/209796540?v=4",
  "https://avatars.githubusercontent.com/u/36256097?v=4",
  "https://avatars.githubusercontent.com/u/54071841?v=4",
  "https://avatars.githubusercontent.com/u/74098276?v=4",
  "https://avatars.githubusercontent.com/u/133862694?v=4",
  "https://avatars.githubusercontent.com/u/1849754?v=4",
  "https://avatars.githubusercontent.com/u/65483435?v=4",
  "https://avatars.githubusercontent.com/u/5052549?v=4",
  "https://avatars.githubusercontent.com/u/200368570?v=4",
  "https://avatars.githubusercontent.com/u/84420566?v=4",
  "https://avatars.githubusercontent.com/u/2268250?v=4",
  "https://avatars.githubusercontent.com/u/16136510?v=4",
  "https://avatars.githubusercontent.com/u/4953069?v=4",
]

const OpenSource: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 4600,
    forks: 1164,
    contributorAvatars: FALLBACK_AVATARS,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [repoRes, contributorsRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${GITHUB_REPO}`),
          fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=30`),
        ])

        if (repoRes.ok && contributorsRes.ok) {
          const repo = await repoRes.json()
          const contributors = await contributorsRes.json()
          const humanContributors = contributors.filter((c: any) => !c.login.includes("[bot]"))
          setStats({
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            contributorAvatars: humanContributors.map((c: any) => c.avatar_url),
          })
        }
      } catch {
        // Use fallback values
      }
    }

    fetchStats()
  }, [])

  // Each avatar appears exactly once — split unique avatars across both grids
  const allAvatars = stats.contributorAvatars.length > 0 ? stats.contributorAvatars : FALLBACK_AVATARS
  const mid = Math.ceil(allAvatars.length / 2)
  const leftPool = allAvatars.slice(0, mid)
  const rightPool = allAvatars.slice(mid)

  type SpecialCell = {row: number; col: number} & ({type: "stat"; label: string; value: string} | {type: "logo"})

  // Deterministic shuffle using a seed so layout is stable across renders
  const seededShuffle = <T,>(arr: T[], seed: number): T[] => {
    const result = [...arr]
    let s = seed
    for (let i = result.length - 1; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647
      const j = s % (i + 1)
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
  }

  const renderGridHalf = (avatarPool: string[], side: "left" | "right", specialCells: SpecialCell[]) => {
    const cols = 7
    const rows = 4
    const cells: React.ReactNode[] = []

    // Build occupied cells: stat cards are 3x2, logo is 1x1
    const occupied = new Set<string>()
    for (const cell of specialCells) {
      if (cell.type === "stat") {
        for (let r = cell.row; r < cell.row + 2; r++) {
          for (let c = cell.col; c < cell.col + 3; c++) {
            occupied.add(`${r}-${c}`)
          }
        }
      } else {
        occupied.add(`${cell.row}-${cell.col}`)
      }
    }

    // Collect all fillable cell positions (not occupied by stat cards or explicit logos)
    const fillablePositions: {r: number; c: number}[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const key = `${r}-${c}`
        if (!occupied.has(key) && !specialCells.find((s) => s.row === r && s.col === c)) {
          fillablePositions.push({r, c})
        }
      }
    }

    // Create a mixed array of avatars and logos, then shuffle deterministically
    type FillItem = {type: "avatar"; url: string} | {type: "logo"}
    const fillItems: FillItem[] = [
      ...avatarPool.map((url) => ({type: "avatar" as const, url})),
      ...Array(Math.max(0, fillablePositions.length - avatarPool.length)).fill({type: "logo" as const}),
    ]
    const seed = side === "left" ? 42 : 137
    const shuffled = seededShuffle(fillItems, seed)

    // Build a map of position -> fill item
    const fillMap = new Map<string, FillItem>()
    fillablePositions.forEach((pos, i) => {
      fillMap.set(`${pos.r}-${pos.c}`, shuffled[i])
    })

    // Render grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const key = `${r}-${c}`
        const special = specialCells.find((s) => s.row === r && s.col === c)

        if (special?.type === "stat") {
          cells.push(<StatCard key={`stat-${side}-${key}`} label={special.label} value={special.value} />)
          continue
        }
        if (special?.type === "logo") {
          cells.push(<LogoCell key={`logo-${side}-${key}`} id={`logo-${side}-${key}`} />)
          continue
        }
        if (occupied.has(key)) continue

        const item = fillMap.get(key)
        if (item?.type === "avatar") {
          cells.push(
            <div
              key={`${side}-${key}`}
              className="w-full aspect-square border border-dashed border-[rgba(245,245,240,0.176)] overflow-hidden"
            >
              <img
                src={`${item.url}&s=80`}
                alt=""
                className="block w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
            </div>,
          )
        } else {
          cells.push(<LogoCell key={`empty-${side}-${key}`} id={`empty-${side}-${key}`} />)
        }
      }
    }

    return <div className="hidden lg:grid grid-cols-7 gap-3 xl:gap-4 content-center">{cells}</div>
  }

  return (
    <div className="bg-tailCall-dark-700 w-full border-y border-tailCall-dark-400/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] xl:grid-cols-[1fr_320px_1fr] gap-3 xl:gap-4 items-stretch">
          {/* Left avatar grid: Forks stat at top-right area */}
          {renderGridHalf(leftPool, "left", [
            {type: "stat", row: 0, col: 4, label: "Forks", value: formatNumber(stats.forks)},
          ])}

          {/* Center content panel */}
          <div className="flex flex-col items-center justify-center text-center px-6 py-6 bg-tailCall-dark-600/50 border border-dashed border-[rgba(245,245,240,0.176)] rounded-none">
            <Heading as="h2" className="text-title-large sm:text-display-tiny text-white mb-3">
              Open source
            </Heading>
            <p className="text-content-small sm:text-content-medium text-tailCall-light-500 mb-6 font-mono leading-relaxed">
              Forge is built by a global community of developers.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-content-small font-medium text-white hover:text-white no-underline hover:no-underline border border-tailCall-light-600/40 rounded px-5 py-2.5 transition-all hover:border-tailCall-light-600/70"
            >
              Start contributing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right avatar grid: Stars stat at bottom-left area */}
          {renderGridHalf(rightPool, "right", [
            {type: "stat", row: 2, col: 0, label: "Stars", value: formatNumber(stats.stars)},
          ])}
        </div>

        {/* Mobile stats */}
        <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden">
          <StatCard label="Stars" value={formatNumber(stats.stars)} />
          <StatCard label="Forks" value={formatNumber(stats.forks)} />
        </div>
      </div>
    </div>
  )
}

export default OpenSource
