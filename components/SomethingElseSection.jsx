'use client'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import SectionTitle from './SectionTitle'
import Swiper from 'swiper'
import Image from 'next/image'
import dentistIcon from '../public/dentist.png'
import { FaReact } from 'react-icons/fa'
import devIcon from '../public/javascript-flatline.png'
import devIcon2 from '../public/code-development-two-color.png'
import goalIcon from '../public/achievement-isometric.png'
import goalIcon2 from '../public/motivation-isometric-50064.png'

register()

const SomethingElseSection = () => {
  const swiperElRef = useRef(null)

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail
      // console.log(progress)
    })

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      // console.log('slide changed')
    })

    new Swiper('.swiper', {
      pagination: {
        el: '.pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="dot swiper-pagination-bullet">${index}</span>`
        },
      },
    })
  }, [])

  return (
    <>
      <div className=" lg:w-[950px] lg:max-w-[1440px] px-4 mx-auto">
        <SectionTitle title={'SOMETHING ELSE...'} />
      </div>

      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="false"
        pagination="true"
        pagination-clickable="true"
        slider-per-group-skip="1"
        autoplay-delay="2500"
        loop="true"
        pagination-width="50%"
        keyboard="true"
        style={{
          '--swiper-pagination-color': '#2fbf71',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '8px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
          '--swiper-pagination-left': 'auto',
          '--swiper-pagination-top': 'auto',
        }}
      >
        <swiper-slide>
          <div className="max-w-full w-[340px] sm:w-[647.5px] sm:mx-auto bg-[#01ADC7] mt-5 rounded-md">
            <div className="flex justify-center items-center relative">
              <div>
                <Image
                  src={dentistIcon}
                  height={250}
                  width={250}
                  alt="Imagen de la seccion something else about me"
                />
              </div>
              <div className=" text-black absolute ml-10 mt-4">
                <FaReact />
              </div>
            </div>
            <div className="media-body p-4 h-[200px] sm:h-[125px] ">
              <p className="px-4 pb-4 font-semibold ">
                With 6 years of experience as a dentist, I have led dental
                teams, coordinated the procurement of medications and supplies,
                and managed the acquisition of cutting-edge technologies for the
                dental field.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className=" max-w-full w-[340px] sm:w-[647.5px] sm:mx-auto bg-[#8B80F9] mt-5 rounded-md">
            <div className="flex justify-center items-baseline align-bottom mt-4 px-4 pb-0 pt-4">
              <div className="mt-4">
                <Image
                  src={devIcon}
                  height={200}
                  width={200}
                  alt="Imagen de la seccion something else about me"
                />
              </div>
              <div className="mt-4">
                <Image
                  src={devIcon2}
                  height={200}
                  width={200}
                  alt="Imagen de la seccion something else about me"
                />
              </div>
            </div>
            <div className="media-body px-4 pb-4 pt-4 ">
              <p className="px-4 pb-4 pt-0 font-semibold h-[200px] sm:h-[110px]">
                Fueled by curiosity and a passion for technological
                advancements, I embarked on a professional reinvention. I
                completed courses and bootcamps in web development, starting
                with frontend and currently wrapping up a full-stack program,
                gaining insights into both frontend and backend technologies.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className=" max-w-full w-[340px] sm:w-[647.5px] sm:mx-auto bg-[#DF928E] mt-5 rounded-md">
            <div className="flex justify-center items-baseline align-bottom mt-4 px-4 pb-0 pt-4">
              <div className="mt-4">
                <Image
                  src={goalIcon}
                  height={200}
                  width={200}
                  alt="Imagen de la seccion something else about me"
                />
              </div>
              <div className="mt-4">
                <Image
                  src={goalIcon2}
                  height={200}
                  width={200}
                  alt="Imagen de la seccion something else about me"
                />
              </div>
            </div>
            <div className="media-body px-4 pb-4 pt-4 ">
              <p className=" font-semibold px-4 pb-4 pt-0 h-[200px] sm:h-[110px]">
                I am actively seeking opportunities to apply my diverse skill
                set. Trustworthy and always on the lookout for ways to
                contribute, I am confident in my ability to bring value to any
                project or team. Let&apos;s connect and explore how we can
                create something impactful together!
              </p>
            </div>
          </div>
          <div id="dots" className="mt-10"></div>
        </swiper-slide>
      </swiper-container>
    </>
  )
}
export default SomethingElseSection
