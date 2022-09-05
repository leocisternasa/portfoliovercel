import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import contactThanks from '../public/assets/contactThanks.jpg'
import Image from 'next/image'

function ContactResponse() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='pt-[80px]'>
          <Image className='rounded-xl object-cover' src={contactThanks} alt='/' height={2200} />
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET`S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>I will contact you back <span className='text-[#5656e5]'>As soon as possible</span></h1>
          
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

export default ContactResponse