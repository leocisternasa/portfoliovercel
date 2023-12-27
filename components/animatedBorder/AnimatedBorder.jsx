// AnimatedBorder.jsx
'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

const AnimatedBorder = ({ text, width, href, isDownload }) => {
  useEffect(() => {
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0.5,
    }
    const CONTAINER = document.querySelector('.container')
    const CARDS = document.querySelectorAll('article')

    const PROXIMITY = 10

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect()

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1)
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity)
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ]

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE
        CARD.style.setProperty('--start', ANGLE + 90)
      }
    }
    document.body.addEventListener('pointermove', UPDATE)
    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap)
      CONTAINER.style.setProperty('--blur', CONFIG.blur)
      CONTAINER.style.setProperty('--spread', CONFIG.spread)
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      )
    }

    // Verificar si estamos en el entorno del navegador antes de usar dat.gui
    if (typeof window !== 'undefined') {
      RESTYLE()
      UPDATE()

      // Cleanup event listener on component unmount
      return () => {
        document.body.removeEventListener('pointermove', UPDATE)
      }
    }
  }, [])
  console.log(width)
  return (
    <div className="container">
      <a
        href={href}
        target="_self"
        rel="noopener noreferrer"
        download={isDownload}
        className="absolute z-10 top-[50px] transition-all duration-300 text-white hover:text-green-500 font-medium"
      >
        {text}
      </a>
      <article style={{ width: width }}>
        <div className="glows"></div>
      </article>
    </div>
  )
}

export default AnimatedBorder
