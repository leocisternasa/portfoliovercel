import React from 'react'
import Image from 'next/image'
import TypingAnimation from '../components/TypingAnimation'
import perfil from '../public/img/perfil.png'
import AnimatedBorder from './animatedBorder/AnimatedBorder'

function HeroSection() {
  return (
    <section
      id="heroSection"
      className=" pt-12 sm:pb-[100px]  min-h-[100vh] flex items-center flex-wrap mx-[-15px]"
    >
      <div className="basis-1/2 sm:max-w-[50%] relative px-4 w-full">
        <div className="py-10">
          <h6 className="text-white pb-5 text-2xl font-medium">Hello, I am</h6>
          <h1 className="text-white text-6xl font-bold pb-5">
            Leonardo Cisternas
          </h1>
          <div className="mb-4">
            <span className="text-white text-lg font-semibold">
              I Am Passionate{' '}
            </span>
            <TypingAnimation />
          </div>
          <p className="text-white text-lg max-w-md mt-0 mb-4">
            {' '}
            I&apos;m a full-stack web developer specializing in building digital
            solutions and experiences focused on customer&apos;s needs.
          </p>

          <AnimatedBorder
            text={'Download Cv'}
            width={'270px'}
            href={'/Resume_Leonardo.pdf'}
            isDownload={true}
          />
        </div>
      </div>
      <div className=" sm:basis-1/2 sm:max-w-[50%] relative px-4 w-full">
        <div className="flex bg-[#2fbf71]  lg:h-[450px] lg:w-[450px] rounded-full  justify-center overflow-hidden mb-20">
          <Image
            src={perfil}
            width={450}
            height={450}
            alt="Picture of Leonardo"
            className=" self-center"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
