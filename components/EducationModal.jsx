'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

const TEModal = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModal)
)
const TERipple = dynamic(() =>
  import('tw-elements-react').then((res) => res.TERipple)
)

const TEModalDialog = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModalDialog)
)
const TEModalContent = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModalContent)
)

const TEModalHeader = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModalHeader)
)
const TEModalBody = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModalBody)
)

const TEModalFooter = dynamic(() =>
  import('tw-elements-react').then((res) => res.TEModalFooter)
)

export default function BasicExample({
  showModal,
  setShowModal,
  informationTitle,
  informationContent,
  stack,
}) {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} scrollable>
        <TEModalDialog centered>
          <TEModalContent>
            <div className=" bg-black rounded-md overflow-y-scroll overflow-x-hidden">
              <TEModalHeader>
                {/* <!--Modal title--> */}
                <h5 className="text-xl font-bold leading-normal text-white dark:text-neutral-200">
                  {informationTitle}
                </h5>
                {/* <!--Close button--> */}
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              {/* <!--Modal body--> */}
              <TEModalBody>
                <div>
                  <h6 className=" mb-1 font-medium text-xl text-white"></h6>
                  <div className="mb-4 flex gap-1 max-w-full flex-wrap">
                    {stack &&
                      stack.map((stackItem, index) => (
                        <span
                          key={index}
                          className={`flex items-center rounded-md bg-${stackItem[1]}-500/10 px-2 py-1 text-xs font-medium text-${stackItem[1]}-400 ring-1 ring-inset ring-${stackItem[1]}-500/20`}
                        >
                          {stackItem[0]}
                        </span>
                      ))}
                  </div>
                  <ul className="p-4 gap-1 list-disc">
                    {informationContent &&
                      informationContent.map((el, i) => <li key={i}>{el}</li>)}
                  </ul>
                </div>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="ml-2 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 hover:text-white bg-green-500 transition duration-150 ease-in-out hover:bg focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </TERipple>
              </TEModalFooter>
            </div>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  )
}
