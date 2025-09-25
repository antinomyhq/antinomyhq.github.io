import Layout from "@theme/Layout"
import React, {useEffect, useState} from "react"
import SpotlightSpan from "../components/home/components/SpotlightCursor"
import {
  UserIcon,
  IdCard,
  MailOpen,
  AlignLeft,
  SquarePen,
  BriefcaseBusiness,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
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
  additional_comments?: string
}

interface SubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

const contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {errors, isValid},
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      job_title: JOB_TITLE[0].value,
      company_strength: COMPANY_STRENGTH[0].value,
    },
  })

  const [isMobile, setIsMobile] = useState(false)
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const onSubmit = async (data: FormInputs) => {
    setSubmissionState({
      isSubmitting: true,
      isSuccess: false,
      error: null,
    })

    try {
      const response = await fetch("https://contact-to-slack.tailcall.workers.dev/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          job_title: data.job_title,
          company: data.company,
          company_strength: data.company_strength,
          additional_comments: data.additional_comments || "",
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`)
      }

      // Success
      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      })

      reset() // Reset form after successful submission

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmissionState((prev) => ({
          ...prev,
          isSuccess: false,
        }))
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
      })
    }
  }
  return (
    <Layout title="Contact" description="Contact Us">
      <div className="flex justify-center">
        <div className="flex flex-col w-full xl:max-w-[1320px] mx-auto">
          <div className="flex flex-col items-center px-4 py-7 md:px-14 md:py-7 xl:px-5 xl:py-10">
            <div className="flex flex-col lg:gap-0 items-start xl:items-center xl:flex-row justify-between w-full py-5 px-2 md:px-0">
              <div className="flex flex-col mt-2">
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
              <span className="block -mt-5 md:mt-0 max-w-[500px] xl:mt-20 !font-normal lg:leading-8 xl:leading-[32px] text-[16px] md:text-title-small lg:text-[24px] xl:text-[26px] text-tailCall-darkMode---neutral-500 tracking-normal">
                Ready to accelerate your development workflow? Let's explore how Forgecode can enhance your team's
                productivity.
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex xl:justify-evenly lg:items-center justify-center xl:items-center xl:flex-row w-full px-4 py-7 md:px-14 md:py-7 xl:px-0 xl:py-14">
              <div className="w-full xl:w-auto">
                <h1 className="text-tailCall-darkMode---neutral-800 dark:text-white text-display-medium !font-normal">
                  Hi
                </h1>
                <form className="flex flex-col gap-10 mt-16" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col sm:flex-row gap-8">
                    <LabeledInput
                      label="First Name"
                      name="first_name"
                      type="text"
                      icon={<IdCard />}
                      register={register}
                      error={errors.first_name}
                      required
                      validation={{
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "First name must be at least 2 characters",
                        },
                      }}
                    />
                    <LabeledInput
                      label="Last Name"
                      name="last_name"
                      type="text"
                      icon={<AlignLeft />}
                      register={register}
                      error={errors.last_name}
                      required
                      validation={{
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "Last name must be at least 2 characters",
                        },
                      }}
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
                    validation={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address",
                      },
                    }}
                  />
                  <CustomSelect
                    label="Job Title"
                    name="job_title"
                    register={register}
                    defaultValue={JOB_TITLE[0].value}
                    options={JOB_TITLE}
                    leftIcon={<SquarePen />}
                    onChange={(value) => setValue("job_title", value)}
                    error={errors.job_title}
                    required
                    validation={{
                      required: "Job title is required",
                    }}
                  />
                  <div className="flex flex-col sm:flex-row gap-8">
                    <LabeledInput
                      label="Company"
                      name="company"
                      type="text"
                      icon={<BriefcaseBusiness />}
                      register={register}
                      error={errors.company}
                      required
                      validation={{
                        required: "Company name is required",
                        minLength: {
                          value: 2,
                          message: "Company name must be at least 2 characters",
                        },
                      }}
                    />
                    <CustomSelect
                      label="Company Strength"
                      name="company_strength"
                      defaultValue={COMPANY_STRENGTH[0].value}
                      register={register}
                      options={COMPANY_STRENGTH}
                      leftIcon={<UserIcon />}
                      onChange={(value) => setValue("company_strength", value)}
                      error={errors.company_strength}
                      required
                      validation={{
                        required: "Company strength is required",
                      }}
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

                  {/* Success Message */}
                  {submissionState.isSuccess && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 text-sm">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {/* Error Message */}
                  {submissionState.error && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-200 text-sm">{submissionState.error}</span>
                    </div>
                  )}
                  <div className="flex items-start">
                    <button
                      type="submit"
                      disabled={!isValid || submissionState.isSubmitting}
                      className={`cursor-pointer relative flex items-center justify-center border-none bg-transparent transition-opacity duration-200 ${
                        !isValid || submissionState.isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                      }`}
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
                      <span className="text-white dark:text-black text-title-small font-light absolute flex items-center gap-2">
                        {submissionState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                        {submissionState.isSubmitting ? "Submitting..." : "Submit"}
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
