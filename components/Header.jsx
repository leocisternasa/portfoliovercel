import Image from 'next/image'
import React from 'react'
import perfil from '../public/img/perfil.png'
import homeIcon from '../public/home1svg.svg'
import aboutMeIcon from '../public/id-card.svg'
import servicesIcon from '../public/services.svg'
import portfolioIcon from '../public/briefcase-portfolio.svg'
import contactIcon from '../public/contact-laptop.svg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import HomeIcon from './HomeIcon'
import ServiceIcon from './ServiceIcon'
import PortfolioIcon from './PortfolioIcon'
import ContactMeIcon from './ContactMeIcon'
import AboutMeIcon from './AboutMeIcon'

function Header() {
  return (
    <>
      <div className="bg-[#0c0c14] lg:w-[250px] fixed top-0 bottom-0 -z-10">
        <div className="relative">
          {/* <!-- semicirculo background --> */}
          <div className="absolute top-[-220px] left-[-80px] -z-10 w-[350px] h-[350px] rounded-full bg-[#2fbf71] " />
          {/* <!-- Contenido principal del div --> */}
          <div className="flex flex-col items-center justify-center align-middle">
            <div className="flex bg-yellow-500 border-[5px] border-white lg:h-[100px] lg:w-[100px] rounded-full  justify-center overflow-hidden mt-16">
              <Image
                src={perfil}
                width={100}
                height={100}
                alt="Picture of Leonardo"
                className=" self-center"
              />
            </div>
            <h5 className="tracking-[2px] mt-4">@Leocisal</h5>
          </div>
        </div>
        {/* <div className="border-2 border-lime-50">Menu</div> */}
        <ul className="py-[45px] flex flex-wrap" id="pp-menu">
          <li data-menuanchor="home" className="w-full">
            <a
              className="px-[30px] py-[10px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#home"
            >
              <div className="green-stroke hover:text-[#2fbf71] flex space-x-4 items-center">
                <HomeIcon />
                <span>Home</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="about" className="w-full">
            <a
              className="px-[30px] py-[10px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#about"
            >
              <div className="green-fill hover:text-[#2fbf71] flex space-x-4 items-center">
                <AboutMeIcon />
                <span>About Me</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="services" className="w-full">
            <a
              className="px-[30px] py-[10px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#services"
            >
              <div className="green-stroke hover:text-[#2fbf71] flex space-x-4 items-center">
                <ServiceIcon />
                <span>Services</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="work" className="w-full">
            <a
              className="px-[30px] py-[10px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#work"
            >
              <div className="green-fill hover:text-[#2fbf71] flex space-x-4 items-center">
                <PortfolioIcon />
                <span>Portfolio</span>
              </div>
            </a>
          </li>
          {/* <li data-menuanchor="blog" className="w-full">
            <a
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#blog"
            >
              <div className="flex space-x-3 items-center">
                <Image
                  src={homeIcon}
                  height={23}
                  width={20}
                  alt="Icono con forma de casa"
                />

                <span>Blogs</span>
              </div>
            </a>
          </li> */}
          <li data-menuanchor="contactus" className="w-full">
            <a
              className="px-[30px] py-[10px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#contactus"
            >
              <div className="green-fill hover:text-[#2fbf71] flex space-x-4 items-center">
                <ContactMeIcon />
                <span>Contact Me</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 right-0 left-0 px-0 py-3">
          <div className="flex items-center justify-around py-4 w-[80%]">
            <Link
              href="https://www.linkedin.com/in/leonardo-cisternas/"
              target="_blank"
            >
              <div className=" cursor-pointer">
                <FaLinkedinIn className="h-auto w-[15px] hover:text-green-500 ease-in duration-200 " />
              </div>
            </Link>
            <Link href="https://github.com/leocisternasa" target="_blank">
              <div className=" cursor-pointer">
                <FaGithub className="h-auto w-[15px] hover:text-green-500 ease-in duration-200" />
              </div>
            </Link>
            <Link href="#contact">
              <div className=" cursor-pointer">
                <AiOutlineMail className="h-auto w-[15px] hover:text-green-500 ease-in duration-200" />
              </div>
            </Link>
            {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
