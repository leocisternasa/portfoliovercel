import Image from 'next/image'
import React from 'react'
import perfil from '../public/img/perfil.png'
import homeIcon from '../public/home1svg.svg'
import aboutMeIcon from '../public/id-card.svg'
import servicesIcon from '../public/services.svg'
import portfolioIcon from '../public/briefcase-portfolio.svg'
import contactIcon from '../public/contact-laptop.svg'

function Header() {
  return (
    <>
      <div className="bg-[#0c0c14] lg:w-[250px] fixed top-0 bottom-0 border-2 border-red-600 -z-10">
        <div className="relative">
          {/* <!-- semicirculo background --> */}
          <div className="absolute top-[-220px] left-[-80px] -z-10 w-[350px] h-[350px] rounded-full bg-[#2fbf71] " />
          {/* <!-- Contenido principal del div --> */}
          <div className="flex flex-col items-center justify-center align-middle">
            <div className="flex bg-yellow-500 border-[5px] border-white h-[120px] w-[120px] rounded-full  justify-center overflow-hidden mt-16">
              <Image
                src={perfil}
                width={120}
                height={120}
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
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#home"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={homeIcon}
                  height={30}
                  width={27}
                  alt="Icono con forma de casa"
                />

                <span>Home</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="about" className="w-full">
            <a
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#about"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={aboutMeIcon}
                  height={30}
                  width={27}
                  alt="Icono con forma de casa"
                />

                <span>About Me</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="services" className="w-full">
            <a
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#services"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={servicesIcon}
                  height={30}
                  width={27}
                  alt="Icono con forma de casa"
                />

                <span>Services</span>
              </div>
            </a>
          </li>
          <li data-menuanchor="work" className="w-full">
            <a
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#work"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={portfolioIcon}
                  height={30}
                  width={27}
                  alt="Icono con forma de casa"
                />

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
              className="px-[30px] py-[15px] block tracking-[3px] uppercase leading-4 text-xs"
              href="#contactus"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={contactIcon}
                  height={30}
                  width={27}
                  alt="Icono con forma de casa"
                />

                <span>Contact Me</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 right-0 left-0 px-0 py-3">
          social media icons
        </div>
      </div>
    </>
  )
}

export default Header
