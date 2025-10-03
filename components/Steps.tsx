import React, {ReactNode} from "react"

export interface StepProps {
  title: string
  children: ReactNode
  number?: number
  isLast?: boolean
}

export const Step = ({title, children, number, isLast = false}: StepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-10 w-10 rounded-full flex items-center justify-center font-normal text-sm bg-gray-900 text-white flex-shrink-0">
          {number}
        </div>

        {!isLast && (
          <div
            style={{
              width: "1px",
              minHeight: "48px",
              backgroundColor: "#bdbdbd",
              flex: 1,
            }}
          />
        )}
      </div>

      <div className="flex-1 min-w-0 pl-4 pb-6">
        <h3 className="text-lg font-normal leading-tight text-gray-900 dark:text-gray-100 m-0 mb-3 mt-2">{title}</h3>

        <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export interface StepsProps {
  children: ReactNode[]
}

export const Steps = ({children}: StepsProps) => {
  const steps = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, i) => {
      if (React.isValidElement<StepProps>(child)) {
        const stepNumber = i + 1
        const isLast = i === React.Children.count(children) - 1

        return React.cloneElement(child, {
          number: stepNumber,
          isLast,
        } as Partial<StepProps>)
      }
      return child
    })

  return <div className="my-8">{steps}</div>
}

export default Steps
