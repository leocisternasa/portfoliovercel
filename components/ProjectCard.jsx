'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import dynamic from 'next/dynamic'

const ProjectModal = dynamic(() => import('../pages/ProjectModal'), {
  ssr: false,
})
const ModalButton = dynamic(() => import('../pages/ModalButton'), {
  ssr: false,
})

function ProjectCard({ title, backgroundImg, projectUrl, stack }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="relative flex items-center justify-center w-full shadow-xl rounded-xl p-4 group hover:bg-[#2fbf71] bg-black ">
        <div className="image-cotainer">
          <Image
            className="rounded-xl group-hover:opacity-10 object-contain  "
            src={backgroundImg}
            alt="/"
            height={400}
            width={550}
          />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white -tracking-wider text-center text font-medium">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center font-normal">
            {stack}
          </p>
          <ModalButton setShowModal={setShowModal} />
        </div>
        <ProjectModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  )
}

export default ProjectCard
