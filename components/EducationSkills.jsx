import React from 'react'
import SectionTitle from './SectionTitle'
import Experiencia from './Experiencia'
import Skills from './Skills'

function EducationSkills() {
  return (
    <>
      <div className=" mb-9">
        <SectionTitle title={'EDUCATION & SKILLS'} />
      </div>
      <div className="flex flex-wrap mx-[-15px] justify-center items-center">
        <div className=" relative w-full px-4 lg:max-w-[33.5%] lg:basis-1/3 mt-4 pb-4">
          <ul className=" m-0 p-0 bg-[#0b0b13] list-none h-full">
            <Experiencia
              year={'2012-2023'}
              position={'Front end Developer'}
              company={'Google'}
            />
            <Experiencia
              year={'2012-2023'}
              position={'Front end Developer'}
              company={'Google'}
            />
            <Experiencia
              year={'2012-2023'}
              position={'Front end Developer'}
              company={'Google'}
            />
            <Experiencia
              year={'2012-2023'}
              position={'Front end Developer'}
              company={'Google'}
            />
          </ul>
        </div>
        <div className=" relative w-full px-4 lg:max-w-[58.3%] lg:basis-2/3 mt-4 pb-4 h-auto mb-[21px]">
          <div className=" block">
            <h3 className=" font-medium leading-5 text-2xl pb-4">My Skills</h3>
            <p className=" mt-0 mb-4 pb-2 ">
              I&apos;m a Freelancer Front-end Developer with over 3 years of
              experience. I code and create web elements for amazing people
              around the world. I like work with new people. New people new
              Experiences.
            </p>
            <Skills title={'HTML5'} percentage={'92%'} />
            <Skills title={'Node Js'} percentage={'67%'} />
            <Skills title={'React Js'} percentage={'80%'} />
            <Skills title={'Next Js'} percentage={'80%'} />
            <Skills title={'Express'} percentage={'50%'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationSkills
