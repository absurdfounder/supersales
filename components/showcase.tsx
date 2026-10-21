import Image from 'next/image'
import showcaseImage from '@/public/images/showcase.jpg'
import Link from 'next/link'

export default function showcases() {
  return (


    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-16">
            <h2 className="h2 mb-4 p-2">Incredible sites built with supersalesagro</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Browse through examples of live Notion websites, built with supersalesagro</p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300"><div><a className="btn-face btn-primary mb-4 w-full px-5 py-3 sm:mb-0 sm:w-auto" href="https://app.supersalesagro.com">Ask our Designer for Help</a></div><div><a className="btn-face btn-dark w-full px-5 py-3 sm:ml-4 sm:w-auto" href="/template">View all Templates</a></div></div>


          </div>


          {/* showcases */}
          <div className="mx-auto mt-20" data-aos="zoom-y-out">

            <div role="list" className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="https://catalog-xi.vercel.app" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://dazzling-cat.netlify.app/catalog-xi.vercel.app_.png" alt="PreviewX" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">PreviewX</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="https://supportgroups.vercel.app" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://dazzling-cat.netlify.app/supportgroups.vercel.app_.png" alt="Support Groups" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">Support Groups</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="https://agencydatahub.vercel.app" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://dazzling-cat.netlify.app/agencydatahub.vercel.app_.png" alt="Bear Vocal : Agency Hub" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">Bear Vocal : Agency Hub</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="http://eventstown.vercel.app" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://dazzling-cat.netlify.app/eventstown.vercel.app_.png" alt="Event Town" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">Event Town</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="https://workremotelyeverywhere.vercel.app" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://dazzling-cat.netlify.app/workremotelyeverywhere.vercel.app.png" alt="Work Remote Jobs" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">Work Remote Jobs</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
              <div role="listitem" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
                <a href="https://stevemarksvoice.com/" target="_blank" className="block" rel="noopener noreferrer">
                  <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0776_brandbird%20(53).jpg" alt="Steve Marks Voice" className="w-auto mx-auto" />
                  <div className="p-4">
                    <h2 className="text-start mt-2 font-bold mb-4">Steve Marks Voice</h2>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
                    <div className="flex mt-2 gap-4">
                      <Link className="btn-face btn-dark my-2 mt-4 w-full px-5 py-3 text-center text-base" href="#0">Duplicate</Link>
                      <Link className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded" href="#0">View Site</Link>
                    </div>

                  </div>
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>


  )
}
