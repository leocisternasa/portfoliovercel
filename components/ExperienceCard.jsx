import React from 'react'
import Image from 'next/image'

function ExperienceCard({
  position,
  company,
  schedule,
  workDescription,
  workFunctions,
  companyLogo,
}) {
  return (
    <div className=" p-9 ">
      <div className="flex flex-wrap mx-[-15px]">
        <div className=" md:max-w-[16.7%] md:basis-[16.7%] px-4 w-full relative">
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
              className=" mb-3 text-xs inline-block"
            >
              {company}
            </label>
            <div className=" inline-block py-1 px-2 text-white bg-[#2fbf71] text-xs font-light uppercase tracking-wide absolute top-0 right-0">
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

            <div>
              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
