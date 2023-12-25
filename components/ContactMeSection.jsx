'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import SectionTitle from './SectionTitle'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import AnimatedBorder from './animatedBorder/AnimatedBorder'

function ContactMeSection() {
  async function handleOnSubmit(e) {
    e.preventDefault()

    const formData = {
      from: 'Contacto Portafolio <onboarding@resend.dev>',
      to: 'leocisal@gmail.com',
      subject: 'Te quieren contactar desde tu sitio web portafolio en vercel',
      emailProps: {
        name: e.target[0].value,
        email: e.target[2].value,
        phone: e.target[1].value,
        asunto: e.target[3].value,
        message: e.target[4].value,
      },
    }

    fetch('/api/mail', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
  }
  return (
    <div id="contactMe" className="w-full lg:h-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <SectionTitle title={'CONTACT ME'} />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-black rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                {/* <Image
                  className="rounded hover:scale-105 ease-in duration-300"
                  src={}
                  alt="/"
                /> */}
              </div>
              <div id="contact">
                <h2 className="py-4">Get in Touch</h2>
                <h2 className="py-2">Leonardo Cisternas</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let`s talk
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/leonardo-cisternas/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-900 hover:bg-slate-800">
                      <FaLinkedinIn className="h-auto w-[25px]" />
                    </div>
                  </Link>
                  <Link href="https://github.com/leocisternasa" target="_blank">
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-900 hover:bg-slate-800">
                      <FaGithub className="h-auto w-[25px]" />
                    </div>
                  </Link>
                  <Link href="#contact">
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-900 hover:bg-slate-800">
                      <AiOutlineMail className="h-auto w-[25px]" />
                    </div>
                  </Link>
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4 bg-black">
            <div className="p-4">
              <form method="POST" onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="rounded-lg p-3 flex text-black border-black focus:outline-[#2fbf71]"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex text-black border-black focus:outline-[#2fbf71]"
                      type="text"
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="text-black border-2 rounded-lg p-3 flex border-black focus:outline-[#2fbf71]"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="text-black border-2 rounded-lg p-3 flex border-black focus:outline-[#2fbf71]"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="text-black border-2 rounded-lg p-3 border-black focus:outline-[#2fbf71]"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <AnimatedBorder text={'Send Message'} width={'270px'} />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#mobile-menu">
            <div className="rounded-full shadow-l p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-black">
              <HiOutlineChevronDoubleUp
                className="text-white hover:text-[#2fbf71]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactMeSection
