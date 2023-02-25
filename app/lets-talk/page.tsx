"use client"

import { FormEventHandler, InputHTMLAttributes, type FC } from "react"
import LayoutWithHeader from "~/layouts/LayoutWithHeader"
import { toSnakeCase } from "~/utils/functions"

interface ContactUsPageProps {}

const interests = [
  "Individual Programs",
  "Professional Programs",
  "Positive Community Changemakers",
  "Signature Programs",
  "Other",
]

interface InputElementPropTypes
  extends InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
  > {
  isTextArea?: boolean
}

const InputElement: FC<InputElementPropTypes> = props => {
  return (
    <div className="relative">
      <div
        className={`absolute bg-[#2926B3] w-full rounded-[35px] opacity-[0.15] blur-md h-full`}
      ></div>
      {props.isTextArea ? (
        <textarea
          rows={5}
          cols={25}
          {...props}
          className={`${props.className} focus:ring-0 px-6 drop-shadow-sm placeholder:text-black/30 border-0 py-4 placeholder:font-urbanist rounded-[35px] bg-[#FFF8EF]`}
        ></textarea>
      ) : (
        <input
          {...props}
          className={`${props.className} focus:ring-0 px-6 drop-shadow-sm placeholder:text-black/30 border-0 py-1.5 placeholder:font-urbanist rounded-[35px] bg-[#FFF8EF]`}
        />
      )}
    </div>
  )
}

const ContactUsPage: FC<ContactUsPageProps> = () => {
  const sumbitHandler: FormEventHandler = e => {
    e.preventDefault()
    console.log("Submitted")
  }

  return (
    <LayoutWithHeader>
      <section className="max-w-8xl flex flex-col items-start justify-start py-32 mx-auto">
        <form
          name="contact-us-form"
          method="POST"
          onSubmit={sumbitHandler}
          className="flex flex-col items-start justify-start w-full space-y-12"
        >
          <div className="flex flex-col items-start justify-start w-full space-y-8">
            <h4 className="font-urbanist text-3xl font-medium">
              Send us a message and we will get back to you.
            </h4>
            <div className="flex items-center justify-start w-full space-x-10">
              <InputElement
                type="text"
                name="first-name"
                placeholder="First Name"
                className=""
              />
              <InputElement
                type="text"
                name="last-name"
                placeholder="Last Name"
              />
            </div>
            <InputElement
              type="email"
              name="email"
              placeholder="Email"
            />
            <InputElement
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
            <InputElement
              type="text"
              name="profession"
              placeholder="Profession"
            />

            {/* I am interested in section */}
            <div className="flex flex-col gap-4">
              <span className="text-black/75 font-urbanist text-lg">
                I am interested in:
              </span>
              <div className="grid grid-cols-2 gap-4">
                {interests.map(interest => (
                  <div
                    className="flex items-center gap-1"
                    key={interest}
                  >
                    <input
                      type="radio"
                      id={toSnakeCase(interest)}
                      name={toSnakeCase(interest)}
                      value="Individual Programs"
                      className="checked:bg-black/75
                    checked:border-black/75 w-2.5 h-2.5 transition duration-200 bg-[#FFF8EF] border border-black/75 rounded-full appearance-none mt-0.5 hover:checked:bg-black focus:checked:ring-0 focus:checked:ring-offset-0 focus:checked:bg-black"
                    />
                    <label
                      htmlFor={toSnakeCase(interest)}
                      className="text-black/75 font-urbanist text-lg"
                    >
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message section */}
            <InputElement
              isTextArea
              name="message"
              placeholder="Hello..."
            />
          </div>
          <div className="relative">
            <div
              className="absolute w-full h-full"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #2926B3 0deg, #FF6300 44.86deg, #FF6300 137.94deg, #2926B3 182.35deg, #2926B3 227.49deg, #FF6300 308.3deg, #2926B3 360deg)",
                opacity: 0.25,
                filter: "blur(12.5px)",
                borderRadius: 35,
              }}
            ></div>
            <button
              type="submit"
              className="focus:ring-0 rounded-[50px] px-10 bg-[#FFF8EF] border-0 py-2.5 text-xl drop-shadow-sm font-urbanist text-black/90"
            >
              Send In
            </button>
          </div>
        </form>
      </section>
    </LayoutWithHeader>
  )
}

export default ContactUsPage
