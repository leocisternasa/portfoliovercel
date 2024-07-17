import React from 'react'
import Image from 'next/image'

type ExperienceCardProps = {
  position: string
  company: string
  schedule: string
  workDescription: string
  workFunctions: string[]
  companyLogo: string
  stack: string[][]
}

function ExperienceCard({
  position,
  company,
  schedule,
  workDescription,
  workFunctions,
  companyLogo,
  stack,
}: ExperienceCardProps) {
  return (
    <div className=" p-9 ">
      <div className="flex flex-wrap mx-[-15px]">
        <div className=" md:max-w-[16.7%] md:basis-[16.7%] px-4 w-full relative mb-8 sm:mb-0">
          <div className=" md:border-r-[1px] md:border-r-slate-700 md:border-solid min-h-full text-center">
            <Image
              src={companyLogo}
              height={100}
              width={100}
              alt="Company Logo"
            />
          </div>
        </div>
        <div className=" md:max-w-[83.3%] md:basis-[83.3%] px-4 w-full relative">
          <div>
            <h6 className=" mb-1 font-medium text-xl text-white">{position}</h6>
            <label
              htmlFor="Role description"
              className=" mb-2 text-xs inline-block"
            >
              {company}
            </label>
            <div className="mb-4 flex gap-1">
              {stack &&
                stack.map((stackItem, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center rounded-md bg-${stackItem[1]}-500/10 px-2 py-1 text-xs font-medium text-${stackItem[1]}-400 ring-1 ring-inset ring-${stackItem[1]}-500/20`}
                  >
                    {stackItem[0]}
                  </span>
                ))}
            </div>
            <div className=" inline-block py-1 px-2 text-white bg-[#2fbf71] text-xs font-light uppercase tracking-wide absolute -top-14 sm:top-0 right-0">
              {schedule}
            </div>
            <p className=" max-w-[80%] mb-3 mt-0 font-medium">
              {workDescription}
            </p>
            <ul className=" list-disc">
              {workFunctions &&
                workFunctions.map((functionItem, index) => (
                  <li key={index}>{functionItem}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
