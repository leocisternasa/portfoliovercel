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
import foodDeliveryImage from '../public/projects/foodCloneImg.png'
import foodDeliveryImage2 from '../public/projects/2.png'
import foodDeliveryImage3 from '../public/projects/3.png'
import foodDeliveryImage4 from '../public/projects/4.png'
import foodDeliveryImage5 from '../public/projects/5.png'
import foodDeliveryImage6 from '../public/projects/6.png'
import foodDeliveryImage7 from '../public/projects/7.png'
import foodDeliveryImage8 from '../public/projects/8.png'
import foodDeliveryImage9 from '../public/projects/9.png'

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <SectionTitle title={'Projects'} />
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sitio Web Transcripciones Youtube"
            backgroundImg={getTranscriptImg}
            projectUrl="https://www.getyoutubetranscript.com/"
            stack={[
              ['SvelteKit', 'yellow'],
              ['Tailwind', 'pink'],
              ['HTML', 'red'],
            ]}
            projectDescription={
              'This is a project that utilizes SvelteKit and Tailwind. The backend is built with Python. It provides the transcription of the YouTube link you paste.'
            }
            goToWebSiteButtonText={'Go to Website'}
          />
          <ProjectItem
            title="Clinica Odontologica AllmaDental"
            backgroundImg={allmaDentalImg}
            projectUrl="https://allma-dental.vercel.app/"
            stack={[
              ['NextJS', 'purple'],
              ['Tailwind CSS', 'pink'],
              ['ReactJS', 'green'],
            ]}
            projectDescription={
              'This is an ongoing project where I am creating the website of the dental clinic of an orthodontic specialist. The project is deployed in vercel to show the progress to Dr. The technologies used are JS (React), CSS (Tailwind) and HTML.'
            }
            goToWebSiteButtonText={'Go to Website'}
          />
          <ProjectItem
            title="Sitio de venta de Maquinas de tatuar"
            backgroundImg={maquinasDeTatuarImg}
            projectUrl="https://github.com/leocisternasa/maquinas-de-tatuar"
            stack={[
              ['Astro', 'purple'],
              ['Tailwind', 'pink'],
              ['ReactJS', 'green'],
              ['JavaScript', 'green'],
            ]}
            projectDescription={
              'site created on demand to sell tattoo machines on amazon. The client provided the design'
            }
            goToWebSiteButtonText={'Go to web site'}
          />
          <ProjectItem
            title="Movil Food Delivery Clone React Native"
            backgroundImg={foodeDeliverybg}
            projectUrl="https://github.com/leocisternasa/FoodDeliveryClone"
            stack={[
              ['React Native', 'red'],
              ['Expo', 'purple'],
              ['Tailwind', 'pink'],
              ['Firebase', 'green'],
            ]}
            projectDescription={
              'This is a personal project to practice using React Native and Expo as a framework. It is a clone of a food delivery application. Authentication is done using Firebase Auth'
            }
            projectImages={[
              foodDeliveryImage,
              foodDeliveryImage2,
              foodDeliveryImage3,
              foodDeliveryImage4,
              foodDeliveryImage5,
              foodDeliveryImage6,
              foodDeliveryImage7,
              foodDeliveryImage8,
              foodDeliveryImage9,
            ]}
            goToWebSiteButtonText={'Github Repository'}
          />
        </div>
      </div>
    </div>
  )
}
export default Projects
