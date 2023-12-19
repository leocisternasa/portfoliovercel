import React from 'react'

function ExperienceCard() {
  return (
    <div className=" p-9 ">
      <div className="flex flex-wrap mx-[-15px]">
        <div className=" md:max-w-[16.7%] md:basis-[16.7%] px-4 w-full relative">
          <div className=" md:border-r-[1px] md:border-r-slate-700 md:border-solid min-h-full text-center">
            Foto Logo de la empresa donde he trabajado o foto que remarque la
            posicion en la empresa.
          </div>
        </div>
        <div className=" md:max-w-[83.3%] md:basis-[83.3%] px-4 w-full relative">
          <div>
            <h6 className=" mb-1 font-medium text-xl text-white">
              Front-end Developer
            </h6>
            <label
              htmlFor="Role description"
              className=" mb-3 text-xs inline-block"
            >
              WeLab | Remote | Jan 2019 - Present
            </label>
            <div className=" inline-block py-1 px-2 text-white bg-[#2fbf71] text-xs font-light uppercase tracking-wide absolute top-0 right-0">
              Full Time
            </div>
            <p className=" max-w-[80%] mb-0 mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repudiandae voluptatibus sed. Assumenda labore vero iusto minima
              repellat voluptate. Quam facilis recusandae temporibus quisquam
              nihil molestiae modi odit autem accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
