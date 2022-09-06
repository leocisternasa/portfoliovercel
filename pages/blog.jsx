import Image from 'next/image'
import React from 'react'
import blogImg from '../public/assets/projects/blogImg.jpeg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
function blog() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={blogImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2>Blog</h2>
          <h3>Ruby on Rails / Bootstrap / Sqlite3</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This app is a blog where you can sign up/in, create articles and store them. Front end and back end made with Ruby on rails and bootstrap. I used this tutorial as introduction to back end technologies.</p>
          <a href='https://github.com/leocisternasa/Blog' target='_blank' rel="noopener noreferrer">
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Ruby on Rails</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Sqlite3</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Bootstrap</p>
              
            </div>
          </div>

        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default blog