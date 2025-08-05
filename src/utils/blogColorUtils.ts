const LOCAL_STORAGE_KEY = "blogCardColors"

export function getBlogCardColorMap(): Record<string, number> {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function setBlogCardColorMap(map: Record<string, number>) {
  if (typeof window === "undefined") return
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map))
}

export function assignBgIndices(permalinks: string[]): Record<string, number> {
  const existing = getBlogCardColorMap()
  let colorMap = {...existing}
  let counter = Object.values(colorMap).length

  for (const permalink of permalinks) {
    if (!(permalink in colorMap)) {
      const bgIndex = counter % 6
      colorMap[permalink] = bgIndex
      counter++
    }
  }

  setBlogCardColorMap(colorMap)
  return colorMap
}
