'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

import supersalesagro_character  from '../public/images/supersalesagro-herosec.png';


interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Video thumbnail */}
      <div>
        <div className="justify-center mb-8 mt-8" data-aos="zoom-y-out" data-aos-delay="450">
        <Image className="md:max-w-none mx-auto rounded" 
          src={supersalesagro_character}
         width={750} height={462}
         unoptimized
          alt="Features bg" />

          <div className="banner-bottom-wrapper">

            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full mx-auto rounded-2 object-cover border border-4 bg-black p-1" 
              style={{borderRadius: '0.3rem', imageRendering: 'auto' }} 
              poster="https://web3summary.com/assets/videos/mainvid.jpg"
            >
              <source src="https://web3summary.com/assets/videos/mainvid.mp4" type="video/mp4" />
            </video>
          </div>


          <button className="relative top-full flex items-center transform -translate-y-1/2 rounded-full font-medium group p-4 shadow-lg border border-4 border-gray-100 bg-green-600 text-black m-auto" onClick={() => { setModalOpen(true) }}>
            <svg className="w-6 h-6 fill-current text-gray-900 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
              <path d="M10 17l6-5-6-5z" />
            </svg>
            <span className="ml-3">Watch the full video (2 min)</span>
          </button>
        </div>


        <div>

        <p className="text-center">Trusted by 250+ Farmers & Businesses</p>

            <div className="flex flex-row flex-wrap max-w-800 gap-4 mx-auto justify-center flex items-center p-6">
                {/* Image 1 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="144"
                        height="42.48"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90"
                    />
                </div>
                {/* Image 2 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="200"
                        height="34"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1ea0aa17-ae1d-48f6-a613-2b9aa5ad3db3/gumroad-min_(1)/w=736,quality=90"
                    />
                </div>
                {/* Image 3 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="120"
                        height="35.4"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/8f49a317-faff-4d7b-b378-a151042a1ce3/circle/w=294.4,quality=90"
                    />
                </div>
                {/* Image 4 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="144"
                        height="39.6"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90"
                    />
                </div>
                {/* Image 5 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="192"
                        height="30.72"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fe61ffd3-2569-4810-b59c-06ff0f58e32f/Clubhouse/w=441.59999999999997,quality=90"
                    />
                </div>
                {/* Image 6 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="144"
                        height="72.50704225352112"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90"
                    />
                </div>
                {/* Image 7 */}
                <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                    <img
                        alt="image"
                        loading="lazy"
                        width="240"
                        height="48"
                        decoding="async"
                        className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90"
                    />
                </div>
            </div>
        </div>



      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}