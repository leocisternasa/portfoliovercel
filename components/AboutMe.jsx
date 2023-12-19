import React from 'react'
import AnimatedBorder from './animatedBorder/AnimatedBorder'
import Separator from './Separator'
import SectionTitle from './SectionTitle'

function AboutMe() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] justify-center items-center">
        <div className="border-2 border-green-900 relative w-full px-4 lg:max-w-[50%] lg:basis-2/4 mt-4 pb-4">
          <div>Imagen de About ME</div>
        </div>

        <div className="border-2 border-rose-900 relative w-full px-4 lg:max-w-[50%] lg:basis-2/4 mt-4 pb-4">
          <SectionTitle title={'ABOUT ME.'} />
          <h3 className="mt-0 leading-8 font-medium text-[1.75rem] mb-6 text-white">
            I&#39;m a Freelancer Front-end Developer with over 3 years of
            experience.
          </h3>
          <p className="my-0 mb-4">
            I&apos;m a Freelancer Front-end Developer with over 3 years of
            experience. I&apos;m from San Francisco. I code and create web
            elements for amazing people around the world. I like work with new
            people. New people new Experiences.
          </p>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="relative px-4 basis-auto w-auto max-w-full">
              <div className="flex flex-nowrap items-center pt-3">
                <span className="min-w-[55px] font-semibold text-white text-5xl leading-4 ">
                  5K
                </span>
                <div className=" shrink grow pl-3 leading-5">
                  Projects <br />
                  Completed.
                </div>
              </div>
            </div>
            <div className="relative px-4 basis-auto w-auto max-w-full">
              <div className="flex flex-nowrap items-center pt-3">
                <span className="min-w-[55px] font-semibold text-white text-5xl leading-4 ">
                  3K
                </span>
                <div className=" shrink grow pl-3 leading-5">
                  Satisfied <br />
                  Clients.
                </div>
              </div>
            </div>
            <div className=" flex">
              <AnimatedBorder text={'Contact Me'} width={'175px'} />
              <AnimatedBorder text={'Portfolio'} width={'175px'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
