import React from 'react'
import Image from 'next/image'

function ServiceCard({ serviceIcon, serviceTitle, serviceDescription }) {
  return (
    <div className=" mt-4 pb-4 md:basis-[50%] sm:max-w-[50%] px-4 relative w-full">
      <div className=" h-[540px] p-10 overflow-hidden z-10 bg-[#0b0b13] transition-all ease-in-out duration-300 flex flex-wrap sm:flex-nowrap items-start hover:bg-[#2fbf71]">
        <div className=" w-full sm:w-[70px] h-[70px] leading-10 text-white text-center sm:inline-block ">
          <Image
            src={serviceIcon}
            height={100}
            width={100}
            alt="icono del servicio"
          />
        </div>
        <div className=" flex-1 pl-6">
          <h5 className=" font-medium leading-5 mt-0 text-white mb-4 text-xl ">
            {serviceTitle}
          </h5>
          <p className=" m-0">{serviceDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
