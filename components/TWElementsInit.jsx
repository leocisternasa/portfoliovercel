'use client'
import { useEffect } from 'react'

export const TWElementsInit = () => {
  useEffect(() => {
    const init = async () => {
      const { Modal, Ripple, initTE } = await import('tw-elements-react')
      initTE({ Modal, Ripple })
    }
    init()
  }, [])
  return null
}
