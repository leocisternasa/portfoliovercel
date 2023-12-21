import React from 'react'
import { TERipple } from 'tw-elements-react'

function ModalButton({ setShowModal }) {
  return (
    <TERipple rippleColor="white">
      <button
        type="button"
        className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:text-[#2fbf71] hover:scale-105 ease-in duration-300 right-3 ml-5 w-44"
        onClick={() => setShowModal(true)}
      >
        More Info
      </button>
    </TERipple>
  )
}

export default ModalButton
