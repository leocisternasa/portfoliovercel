import React from 'react'

function Experiencia({ year, position, company }) {
  return (
    <>
      <li className=" p-5">
        <div className=" bg-[#2fbf71] text-white text-xs py-[1px] px-2 inline-block align-top tracking-wide ml-[-24px] mb-2 relative">
          {year}
          <div className=" content-none border-t-4 border-t-[#165934] border-b-4 border-b-transparent absolute bottom-[-5px] left-0 box-border w-[2px]"></div>
        </div>
        <h6 className=" py-1 text-white text-base font-medium leading-5">
          {position}
        </h6>
        <p className="m-0">{company}</p>
      </li>
    </>
  )
}

export default Experiencia
