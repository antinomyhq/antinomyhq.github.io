import Layout from "@theme/Layout"
import React, {useEffect, useState} from "react"
import SpotlightSpan from "../components/home/components/SpotlightCursor"
import {UserIcon, IdCard, MailOpen, AlignLeft, SquarePen, BriefcaseBusiness} from "lucide-react"
import LabeledInput from "../components/shared/Input/Input"
import {useForm} from "react-hook-form"
import {COMPANY_STRENGTH, JOB_TITLE} from "../constants"
import CustomSelect from "../components/shared/CustomSelect"

interface FormInputs {
  first_name: string
  last_name: string
  email: string
  job_title: string
  company: string
  company_strength: string
  additional_comments: string
}

const contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {errors},
  } = useForm<FormInputs>()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const onSubmit = (data: FormInputs) => {
    console.log("Form Submitted:", data)
    reset()
  }
  return (
    <Layout title="Contact" description="Contact Us">
      <div className="flex_column__center">
        <div className="flex__column w-full xl:max-w-[1320px] mx-auto">
          <div className="flex__column items-center px-4 py-7 md:px-14 md:py-7 xl:px-5 xl:py-10">
            <div className="flex__column lg:gap-0 items-start xl:items-center xl:flex-row justify-between w-full py-5 px-2 md:px-0">
              <div className="flex__column mt-2">
                <SpotlightSpan
                  className="font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
                  text="Have a questions?"
                  showHighlighted
                />
                <SpotlightSpan
                  className="-mt-8 md:-mt-5 lg:-mt-4 xl:-mt-8 font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
                  text="Let's talk code."
                  showHighlighted
                />
              </div>
              <span className="block -mt-5 md:mt-0 max-w-[500px] xl:mt-20 font-kanit !font-normal lg:leading-8 xl:leading-[32px] text-[16px] md:text-title-small lg:text-[24px] xl:text-[26px] text-tailCall-darkMode---neutral-500 tracking-normal">
                Whether it's support, feedback, or partnerships we're all ears (and keyboards).
              </span>
            </div>
          </div>
          <div className="w-full flex__row__center">
            <div className="flex__row__center xl:justify-evenly lg:items-center xl:items-center xl:flex-row w-full px-4 py-7 md:px-14 md:py-7 xl:px-0 xl:py-14">
              <div className="w-full xl:w-auto">
                <h1 className="text-tailCall-darkMode---neutral-800 dark:text-white font-kanit text-display-medium !font-normal">
                  Hi
                </h1>
                <form className="flex__column gap-10 mt-16" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex__column sm:flex-row gap-8">
                    <LabeledInput
                      label="First Name"
                      name="first_name"
                      type="text"
                      icon={<IdCard />}
                      register={register}
                      error={errors.first_name}
                      required
                    />
                    <LabeledInput
                      label="Last Name"
                      name="last_name"
                      type="text"
                      icon={<AlignLeft />}
                      register={register}
                      error={errors.last_name}
                      required
                    />
                  </div>
                  <LabeledInput
                    label="Email"
                    name="email"
                    type="email"
                    icon={<MailOpen />}
                    register={register}
                    error={errors.email}
                    required
                  />
                  <CustomSelect
                    label="Job Title"
                    name="job_title"
                    register={register}
                    defaultValue={JOB_TITLE[0].value}
                    options={JOB_TITLE}
                    leftIcon={<SquarePen />} // Emoji or any React component
                    onChange={(value) => setValue("job_title", value)}
                  />
                  <div className="flex__column sm:flex-row gap-8">
                    <LabeledInput
                      label="Company"
                      name="company"
                      type="text"
                      icon={<BriefcaseBusiness />}
                      register={register}
                      error={errors.company}
                      required
                    />
                    <CustomSelect
                      label="Company Strength"
                      name="company_strength"
                      defaultValue={COMPANY_STRENGTH[0].value}
                      register={register}
                      options={COMPANY_STRENGTH}
                      leftIcon={<UserIcon />} // Emoji or any React component
                      onChange={(value) => setValue("company_strength", value)}
                    />
                  </div>
                  <LabeledInput
                    label="Additional Comments"
                    name="additional_comments"
                    type="textarea"
                    placeholder="Describe"
                    register={register}
                    error={errors.additional_comments}
                  />
                  <div className="flex items-start">
                    <button
                      type="submit"
                      className="cursor-pointer relative flex items-center justify-center border-none bg-transparent"
                    >
                      <img
                        src="/images/home/curly-background.svg"
                        alt="curly-background"
                        height={60}
                        className="hidden dark:block"
                      />
                      <img
                        src="/images/home/curly-background-light.svg"
                        alt="curly-background"
                        height={60}
                        className="block dark:hidden"
                      />
                      <span className="text-white dark:text-black font-kanit text-title-small font-light absolute">
                        Submit
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              {!isMobile ? (
                <div>
                  <img src="/images/home/contact.svg" alt="Contact Image" className="hidden dark:block" />
                  <img src="/images/home/contact-light.svg" alt="Contact Image" className="block dark:hidden" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
