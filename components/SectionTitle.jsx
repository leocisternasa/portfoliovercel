import React from 'react'

function SectionTitle({ title }) {
  return (
    <div className="pl-[50px]">
      <div className="mb-[40px]">
        <div className="relative">
          <div className="absolute bottom-[-5px] left-0 right-0 w-16 bg-[#2fbf71] h-[1px]"></div>
          <div className="absolute bottom-[-7px] left-16 h-[6px] w-[6px] rounded-full bg-[#2fbf71]"></div>

          <h3 className="m-0 text-white relative font-light text-3xl inline-block align-top uppercase tracking-[6px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SectionTitle
