import React from 'react'

function Button({ title }) {
  return (
    <div className="relative group pt-[20px] w-[40%]">
      <div className="absolute left-0 top-0 bg-white shadow-md transform translate-x-4 translate-y-4 w-4/5 h-4/5 transition duration-500 duration-0.5s ease-in-out group-hover:bg-[#2fbf71] group-hover:shadow-green"></div>
      <a
        className="relative px-6 inline-block leading-10 font-normal text-sm tracking-wider p-4 bg-[#2fbf71] transition  duration-500 ease-in-out group-hover:bg-white group-hover:text-[#2fbf71] text-white h-[73px]"
        href="#"
      >
        {title}
      </a>
    </div>
  )
}

export default Button
