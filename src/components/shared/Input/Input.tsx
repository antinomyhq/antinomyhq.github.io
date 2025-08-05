// components/LabeledInput.tsx
import React from "react"
import {FieldError, RegisterOptions, UseFormRegister} from "react-hook-form"

type InputType = "text" | "email" | "textarea" | "select"

interface LabeledInputProps {
  label: string
  type: InputType
  name: string
  icon?: React.ReactNode
  placeholder?: string
  options?: string[] // only for select
  register: UseFormRegister<any>
  error?: FieldError
  required?: boolean
  validation?: RegisterOptions
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  type,
  name,
  icon,
  placeholder = "",
  options = [],
  register,
  error,
  required = false,
}) => {
  const baseInputStyles =
    "font-kanit text-title-tiny font-normal w-full pl-12 pr-3 py-3 border border-solid border-[#545F71] rounded-md bg-white dark:bg-black text-sm dark:text-white focus:outline-none focus:ring-1 focus:ring-tailCall-lightMode---primary-600 focus:hover:ring-tailCall-lightMode---primary-400"

  const validation = {
    required: required ? "This field is required" : false,
    ...(type === "email" && {
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Please enter a valid email address",
      },
    }),
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <label
        htmlFor={name}
        className="text-title-small leading-5 !font-medium text-tailCall-darkMode---neutral-500 dark:text-gray-300"
      >
        {label}
      </label>

      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
            {icon}
          </div>
        )}

        {type === "textarea" ? (
          <textarea
            id={name}
            placeholder={placeholder}
            {...register(name, validation)}
            className={`${baseInputStyles} !pl-3 min-h-[100px] resize-none`}
          />
        ) : type === "select" ? (
          <select id={name} {...register(name, validation)} className={`${baseInputStyles} appearance-none`}>
            <option value="">-- Select --</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            {...register(name, validation)}
            className={baseInputStyles}
          />
        )}
      </div>

      {error && <p className="text-sm text-red-500 !m-0">{error.message}</p>}
    </div>
  )
}

export default LabeledInput
