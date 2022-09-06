import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import blogImg from '../public/assets/projects/blogImg.jpeg'
import ProjectItem from './ProjectItem';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import cotizadorImg from '../public/assets/projects/cotizadorImg.jpeg'
function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl -tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I`ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Ruby on Rails Blog' backgroundImg={blogImg} projectUrl='/property' />
          <ProjectItem title='Cotizador de préstamo' backgroundImg={cotizadorImg} projectUrl='/cotizador' />
      
        </div>

      </div>

    </div>
  )
}
export default Projects;