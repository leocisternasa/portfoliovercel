import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET`S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi, I`m <span className='text-[#5656e5]'>Leonardo</span></h1>
          <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I`m a front-end web developer specializing in building exceptional digital experiences.Curently, I`m focusing on improving my fron-end skills while learning back-end technologies</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            <a href='https://www.linkedin.com/in/leonardo-cisternas-674813249/' target='_blank' rel="noopener noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />

              </div>
            </a>

            <a href='https://github.com/leocisternasa' target='_blank' rel="noopener noreferrer">

              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Main