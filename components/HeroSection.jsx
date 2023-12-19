import React from 'react'
import Image from 'next/image'
import TypingAnimation from '../components/TypingAnimation'
import perfil from '../public/img/perfil.png'
import AnimatedBorder from './animatedBorder/AnimatedBorder'

function HeroSection() {
  return (
    <section className="py-[100px] border-2 border-green-500 min-h-[100vh] flex items-center flex-wrap mx-[-15px]">
      <div className="border-2 border-green-200 basis-1/2 max-w-[50%] relative px-4 w-full">
        <div className="py-10">
          <h6 className="text-white pb-5 text-2xl font-medium">Hello, I am</h6>
          <h1 className="text-white text-6xl font-bold pb-5">
            Leonardo Cisternas
          </h1>
          <div className="mb-4">
            <span className="text-white text-lg font-semibold">
              Una malaya{' '}
            </span>
            <TypingAnimation />
          </div>
          <p className="text-white text-lg max-w-md mt-0 mb-4">
            I design and develop services for customers <br /> of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>

          <AnimatedBorder text={'Download Cv'} width={'270px'} />
        </div>
      </div>
      <div className="border-2 border-pink-400 basis-1/2 max-w-[50%] relative px-4 w-full">
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
