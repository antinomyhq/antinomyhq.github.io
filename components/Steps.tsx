import React, {ReactNode} from "react"

export interface StepProps {
  title: string
  children: ReactNode
  number: number
}

export const Step = ({title, children, number}: StepProps) => (
  <div className="flex gap-4 mb-8">
    <div className="flex-shrink-0">
      <div className="h-7 w-7 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-tailCall-border-light-100 font-semibold text-base">
        {number}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-lg leading-6 text-tailCall-border-light-100 mb-1">{title}</h3>
      <div className="text-base text-gray-800">{children}</div>
    </div>
  </div>
)

export interface StepsProps {
  children: ReactNode[]
}

export const Steps = ({children}: StepsProps) => {
  // Number the Step children automatically
  const steps = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {number: i + 1})
      }
      return child
    })
  return <div>{steps}</div>
}

export default Steps
