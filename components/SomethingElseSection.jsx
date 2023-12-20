'use client'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import SectionTitle from './SectionTitle'
import Swiper from 'swiper'

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
          <div className=" w-[447.5px] mr-6 bg-black ml-60 mt-5">
            <div className="avatar">IMagen 1</div>
            <div className="media-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the {`industry's`} standard dummy
                text ever since the 1500s.
              </p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className=" w-[447.5px] mr-10 bg-black ml-60 mt-5">
            <div className="avatar">IMagen 2</div>
            <div className="media-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the {`industry's`} standard dummy
                text ever since the 1500s.
              </p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-[447.5px] mr-6 bg-black ml-60 mt-5">
            <div className="avatar">IMagen 3</div>
            <div className="media-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the {`industry's`} standard dummy
                text ever since the 1500s.
              </p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
          <div id="dots" className="mt-10"></div>
        </swiper-slide>
      </swiper-container>
    </>
  )
}
export default SomethingElseSection
