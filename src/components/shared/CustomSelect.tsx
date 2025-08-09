import React, {useState, useRef, useEffect} from "react"
import {ChevronDown} from "lucide-react"
import {UseFormRegister} from "react-hook-form"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  label: string
  name: string
  defaultValue: string
  options: Option[]
  leftIcon?: React.ReactNode
  onChange?: (value: string) => void
  register: UseFormRegister<any>
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  defaultValue,
  options,
  leftIcon,
  onChange,
  register,
}) => {
  const [selected, setSelected] = useState<Option>(options.find((o) => o.value === defaultValue) || options[0])
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">("bottom")

  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (option: Option) => {
    setSelected(option)
    onChange?.(option.value)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top

      setDropdownPosition(spaceBelow < 200 && spaceAbove > 200 ? "top" : "bottom")
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative flex flex-col gap-3 w-full" ref={wrapperRef}>
      <label
        htmlFor={name}
        className="text-title-small leading-5 !font-medium text-tailCall-darkMode---neutral-500 dark:text-gray-300"
      >
        {label}
      </label>

      {/* Hidden input to register with react-hook-form */}
      <input type="hidden" {...register(name, {value: selected.value})} value={selected.value} />

      <button
        type="button"
        onClick={toggleDropdown}
        ref={buttonRef}
        className="flex font-kanit text-title-tiny font-normal w-full pr-3 py-2 border border-solid border-tailCall-darkMode---neutral-1100 rounded-md bg-white dark:bg-black text-sm dark:text-white focus:outline-none focus:ring-1 focus:ring-tailCall-lightMode---primary-600 focus:hover:ring-tailCall-lightMode---primary-400"
      >
        <div className="flex items-center">
          {leftIcon && <span className="text-gray-500">{leftIcon}</span>}
          <span className="ml-5">{selected.label}</span>
        </div>
      </button>

      {/* Chevron */}
      <div className={`absolute top-11 right-5 pointer-events-none text-gray-400`}>
        <div
          className={`
      transition-transform duration-500 ease-in-out 
      transform origin-center
     flex items-center justify-center
      ${isOpen ? "rotate-180" : "rotate-0"}
    `}
        >
          <ChevronDown />
        </div>
      </div>

      {/* Options dropdown */}
      {isOpen && (
        <ul
          className={`absolute pl-0 list-none z-10 w-full bg-tailCall-darkMode---neutral-50 dark:bg-tailCall-darkMode---neutral-900 border border-solid border-tailCall-lightMode---primary-1200 shadow-lg overflow-auto text-sm
          ${dropdownPosition === "top" ? "bottom-8 rounded-b-none rounded-t-md" : "top-[80px] rounded-t-none rounded-b-md"}
        `}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer py-2 px-3 text-tailCall-darkMode---neutral-600 dark:text-tailCall-darkMode---neutral-200 hover:bg-tailCall-darkMode---neutral-200 hover:dark:bg-tailCall-darkMode---neutral-800 ${
                selected.value === option.value
                  ? "text-tailCall-darkMode---neutral-800 dark:text-tailCall-darkMode---neutral-50 bg-tailCall-darkMode---neutral-200 dark:bg-tailCall-darkMode---neutral-800 font-medium"
                  : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
