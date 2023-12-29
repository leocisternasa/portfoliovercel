'use client'
import { useState } from 'react'
import React from 'react'
import { FcAbout } from 'react-icons/fc'

import dynamic from 'next/dynamic'

const EducationModal = dynamic(() => import('./EducationModal'), {
  ssr: false,
})

// const {FcAbout} = dynamic(()=> import())

const TERipple = dynamic(() =>
  import('tw-elements-react').then((res) => res.TERipple)
)

function Education({
  year,
  course,
  company,
  informationTitle,
  informationContent,
  hasInformation,
  stack,
}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li className=" p-5 ">
        <div className="flex justify-between">
          <div className=" bg-[#2fbf71] text-white text-xs py-[1px] px-2 inline-block align-top tracking-wide ml-[-24px] mb-2 relative">
            {year}
            <div className=" content-none border-t-4 border-t-[#165934] border-b-4 border-b-transparent absolute bottom-[-5px] left-0 box-border w-[2px]"></div>
          </div>
          {hasInformation && (
            <div className="group">
              <div className=" cursor-pointer">
                <TERipple rippleColor="white">
                  <button type="button" onClick={() => setShowModal(true)}>
                    <FcAbout />
                  </button>
                </TERipple>
              </div>
              <div className="hidden group-hover:block absolute transform z-[999] bg-black p-4 rounded transition-opacity duration-500 opacity-0 group-hover:opacity-100 w-[550px] h-[535px] ml-16 -top-3">
                <h1 className="p-4 my-1 text-center text-base font-medium">
                  {informationTitle}
                </h1>
                <ul className="p-4 gap-1 list-disc">
                  {informationContent &&
                    informationContent.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
              </div>
              <EducationModal
                showModal={showModal}
                setShowModal={setShowModal}
                informationContent={informationContent}
                informationTitle={informationTitle}
                stack={stack}
              />
            </div>
          )}
        </div>
        <h6 className=" py-1 text-white text-base font-medium leading-5">
          {course}
        </h6>
        <p className="m-0">{company}</p>
      </li>
    </>
  )
}

export default Education
