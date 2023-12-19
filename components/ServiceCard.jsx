import React from 'react'

function ServiceCard() {
  return (
    <div className=" mt-4 pb-4 md:basis-[50%] max-w-[50%] px-4 relative w-full">
      <div className=" p-10 overflow-hidden z-10 bg-[#0b0b13] transition-all ease-in-out duration-300 flex items-start hover:bg-[#2fbf71]">
        <div className=" w-[60px] h-[60px] leading-10 text-white text-center inline-block">
          Icono
        </div>
        <div className=" flex-1 pl-6">
          <h5 className=" font-medium leading-5 mt-0 text-white mb-4 text-xl ">
            Web Design
          </h5>
          <p className=" m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
