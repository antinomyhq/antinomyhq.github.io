import React, {useState} from "react"
import ReactMarkdown from "react-markdown"

interface Tab {
  name: string
  content: string
}

interface TabsProps {
  tabs: Tab[]
}

const ReleaseTabs: React.FC<TabsProps> = ({tabs}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full mx-auto">
      {/* Tab Header */}
      <div className="flex gap-0 overflow-scroll" style={{borderBottom: "1px solid #FFFFFF66"}}>
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => setActiveIndex(index)}
            className={`px-8 py-3 bg-transparent border-solid border-b text-content-medium font-kanit transition-all duration-150 hover:cursor-pointer
              ${
                index === activeIndex
                  ? "border-b-tailCall-cyan text-tailCall-cyan font-bold"
                  : "border-transparent text-gray-500 border-b-transparent font-light"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-black border border-t-0 border-gray-200 text-tailCall-white rounded-b">
        <ReactMarkdown>{tabs[activeIndex].content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ReleaseTabs
