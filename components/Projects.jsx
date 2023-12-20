import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import maquinasDeTatuarImg from '../public/projects/maquinasdetatuar.png'
import ProjectItem from './ProjectCard'
import cryptoImg from '../public/projects/crypto.jpg'
import allmaDentalImg from '../public/projects/allmaDentalMain.png'
import getTranscriptImg from '../public/projects/getTranscript.png'
import foodeDeliverybg from '../public/projects/foodBg.png'
import SectionTitle from './SectionTitle'
function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <SectionTitle title={'Projects'} />
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sitio de venta de Maquinas de tatuar"
            backgroundImg={maquinasDeTatuarImg}
            projectUrl="/maquinasDeTatuar"
            stack="ReactJs, NextJs, Tailwind"
          />
          <ProjectItem
            title="Clinica Odontologica AllmaDental"
            backgroundImg={allmaDentalImg}
            projectUrl="/allmaDental"
            stack="NextJs, ReactJs, Tailwind"
          />
          <ProjectItem
            title="Sitio Web Transcripciones Youtube"
            backgroundImg={getTranscriptImg}
            projectUrl="/getTranscript"
            stack="SvelteKit, Tailwind"
          />
          <ProjectItem
            title="Movil Food Delivery Clone React Native"
            backgroundImg={foodeDeliverybg}
            projectUrl="/foodDeliveryClone"
            stack="React Native, Expo, Firebase"
          />
        </div>
      </div>
    </div>
  )
}
export default Projects
