import Image from 'next/image'
import React from 'react'
import aboutImg from '../public/assets/teamWork.jpeg'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl -tracking-widest text-[#5651e5'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'> I am not your normal developer</p>
          <p className='py-2 text-gray-600'> I have spent the last 9 years in the health public service as a professional dentist. I have always had a knack for technology and working with computers. In 2018 I started learning by my self doing tutorials and attending online courses. In 2020 I did a practice as junior developer at Docmovi, a startup in health cares. My work there was to implement new features and maintaining other improving styles. In there I worked with React Js and Meteor </p>
          <p className='py-2 text-gray-600'>Currently, I want to use my professional experience and learned skills in web development and the tech industry. I’m passionate about technology and building apps centres on user needs. I’m an avid learner and I love new challenges. Team working is my goal these days in order to have more experience and to know different views and working manners.</p>
          <p className='py-2 text-gray-600'>I don’t mind starting from scratch in this area; I’m willing to leave everything for the opportunity to learn and show how much I can contribute to the team.</p>
         
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={aboutImg}  alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About