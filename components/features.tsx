'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import helpdeskImage from '@/public/images/helpdesk.gif';
import catalogImage from '@/public/images/catalog.gif';
import BigCustomers from '@/app/(auth)/compare-against/BigCustomers'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative mt-4 mb-4 pb-4 bg-white rounded-4 border-4 border border-gray-600">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="inset-0 bg-white pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Already use Notion?  Why not use it for everything else too.</h1>
            <p className="text-xl text-gray-600">supersalesagro is designed for all types from content curation to content creation. Build company blogs, helpdesks, company wiki, documentations,  or even catalog and directories.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="grid gap-4 mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 1 ? 'bg-gray-200' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >

                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text '>Helpdesk</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 2 ? 'bg-gray-200' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >


                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text '>Blog</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 3 ? 'bg-gray-200' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >



                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text '>Catalog</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 4 ? 'bg-gray-200' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >

                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to  <span className='bg-clip-text '>Company Wiki</span></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 grid gap-4 mb-8 md:mb-0 md:order-1 m-auto w-full">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={helpdeskImage}
                        unoptimized
                        width={500}
                        height={462} alt="Features bg" />
                        <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">A simpler alternative to <img alt="Ana" src="./images/simpler-helpdesk2.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-helpdesk.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg" src="/images/blog.gif" unoptimized width={500} height="462" alt="Features bg" />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">A simpler alternative to <img alt="Ana" src="./images/simpler-blog.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-blog2.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={catalogImage} width={500} height={462}
                        unoptimized
                        alt="Features bg" />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">A simpler alternative to <img alt="Ana" src="./images/simpler-catalogue2.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-catalogue.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={"/path/to/your/fourth-tab-image.gif"} // Update this path
                        width={500}
                        height={462}
                        unoptimized
                        alt="Fourth tab gif" />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">A simpler alternative to <img alt="Ana" src="./images/webflow-icon.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/framer-icon.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <br />
      <br />


<BigCustomers />

    </section>
  )
}