import React from 'react'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'

function ExperienceSection() {
  return (
    <>
      <div className=" mb-9">
        <SectionTitle title={'EXPERIENCE'} />
      </div>
      <div className="bg-[#0b0b13] mt-4 w-full align-top inline-block ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </>
  )
}

export default ExperienceSection
