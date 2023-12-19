import React from 'react'

function Skills({ title, percentage }) {
  return (
    <div className=" block relative mt-[25px]">
      <h3 className=" mb-3">{title}</h3>
      <div className="relative bg-slate-600 w-full block">
        <div
          className={`bg-[#2fbf71] h-[5px] transition-all duration-500 relative`}
          style={{ width: percentage }}
        >
          <span className="top-[-5px] right-[-1px] absolute rounded-full w-4 bg-[#2fbf71] h-4"></span>
        </div>
      </div>
    </div>
  )
}

export default Skills
