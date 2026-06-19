import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Affiliate Program',
  description: 'Join the supersalesagro affiliate program to become our partner. Spread the website builder and earn money with us.',
}

export default function ResetPassword() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-4">
            <h1 className="h1 mb-4">Earn <b className="text-green-600">₹ 1,00,000 per month</b>*  promoting an award-winning wholesale business with 250+ happy users.</h1>
            <p className="text-xl text-gray-600">For every paid client you refer to supersalesagro, you will be paid 33% of the recurring commission. Forever.</p>
          </div>

          <div className="m-auto text-center"><a className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://supersalesagro.lemonsqueezy.com/affiliates">Sign Up</a></div>




          {/* Items */}
          <div className="max-w-sm mx-auto items-start md:max-w-2xl lg:max-w-none mt-20">


            <div className="py-12">
              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <h2 className="h2 font-bold leading-tight">How it works</h2>
                  <div className="mt-4 text-gray-600">
                    <p className="text-md mt-4 mb-4 text-gray-800">You can start earning money in 30 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ul className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="/images/Group 8770.png" alt="Become a partner" className="h-40 p-4" />
                      <div className="absolute -right-4 -bottom-4">
                        {/* SVG icon */}
                      </div>
                    </div>
                    <div className="mt-4 text-center">Join supersalesagro's affiliate program, grab your unique link and share it.</div>
                  </li>
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="/images/Group 8771 (1).png" alt="Earn money" className="h-40 p-4" />
                      <div className="absolute -right-4 -bottom-4">
                        {/* SVG icon */}
                      </div>
                    </div>
                    <div className="mt-4 text-center">Someone clicks your link and upgrades to a paid plan. You earn 33% of all their payments.</div>
                  </li>
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="/images/Group 8772.png" alt="Cash out in one click" className="h-40 p-4" />
                    </div>
                    <div className="mt-4 text-center">Check in anytime to view referrals. Cash out in one click (Bank, Paypal, Wise).</div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <a href="https://supersalesagro.lemonsqueezy.com/affiliates" target="_self" className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0">Become our Partner</a>
              </div>
            </div>


          </div>




          <div className="container mx-auto py-8">
            <div className="flex gap-4 justify-center space-x-4 relative items-center p-6 bg-white rounded shadow-xl text-center h-full border w-fit m-auto">
              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <img src="/images/🤑.png" alt="Cash out in one click" className="h-10" />
                <h2 className="h2 font-semibold">33%</h2>
                <span className="text-base text-gray-600">your commission</span>
              </a>

              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <img src="/images/🍪.png" alt="Cash out in one click" className="h-10" />
                <h2 className="h2 font-semibold">60 days</h2>
                <span className="text-base text-gray-600">cookie period</span>
              </a>

              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <img src="/images/partyblow.png" alt="Cash out in one click" className="h-10" />
                <h2 className="h2 font-semibold">10%</h2>
                <span className="text-base text-gray-600">2nd tier commission</span>
              </a>
            </div>
          </div>





          <div className="flex mx-auto px-4 py-8 mt-8">
            <div className="w-full lg:w-1/2 p-8 m-auto">
              <h2 className="h2 font-bold text-accent">An essential collection of banners</h2>
              <br />
              <p className="text-md mt-4 mb-4 text-gray-800">We prepared designs for you to download and use right away — no extra work. Missing a format? Just ask and we will make unique design files just for you. Free of charge.</p>
            </div>
            <img src="https://dazzling-cat.netlify.app/nb-assets.png" alt="Banners free pack" className="w-full lg:w-1/2 p-8 m-auto" />
          </div>


          <div className="flex mx-auto px-4 py-8 mt-8">
            <img src="https://dazzling-cat.netlify.app/freelancer-mockup.webp" alt="Design agency" className="w-full lg:w-1/2 p-8 m-auto" />
            <div className="w-full lg:w-1/2 p-8 m-auto">
              <h2 className="h2 font-bold mb-8">You’re a freelancer or an agency</h2>
              <p className="text-md mt-4 mb-4 text-gray-800">Demonstrate your industry knowledge by recommending supersalesagro to your clients and fellow marketers. This will help you create an additional revenue source for your business. "Diversification is the key to financial resilience." — Warren Buffett.</p>
            </div>
          </div>


          <div className="flex mx-auto px-4 py-8 mt-8">
            <div className="w-full lg:w-1/2 p-8 m-auto">
              <h2 className="h2 font-bold mb-8">You have an audience</h2>
              <p className="text-md mt-4 mb-4 text-gray-800">Have an X.com account that is followed by marketers? Or a website about web design? Monetize your audience by recommending them a great tool. Use our affiliate program link alongside with your existing monetization. Boost your earnings!</p>
            </div>
            <img src="https://dazzling-cat.netlify.app/influencer-mockup.webp" alt="Influencer" className="w-full lg:w-1/2 p-8 m-auto" />
          </div>




          <div className="pt-12 pb-16 relative z-10 bg-white">
            <div className="max-w-lg mx-auto text-center mb-12">
              <h2 className="h2 font-semibold mb-4 mt-8">Make Passive Income!</h2>
              <p className="text-md mt-4 mb-4 text-gray-800">Just imagine this amount of cash coming into your bank account every single month. *Calculations are based on the Startup plan.</p>
            </div>
            <div className="container mx-auto">
              <ul className="flex flex-wrap justify-center">
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow border-gray-600 border">
                    <div className="text-center mb-4 p-4">

                      <span className="h4">🐻 BEAR</span>
                      <h2 className="h2 mt-4">$<b className="font-bold">146</b></h2>
                      <p className="text-md mt-4 mb-4 text-gray-800">per month</p>

                    </div>
                    <div className="text-center">
                      20 people = $191/m
                    </div>
                  </div>
                </li>
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow border-gray-600 border">
                    <div className="text-center mb-4 p-4">
                      <span className="h4">🐴 HORSE</span>
                      <h2 className="h2 mt-4">$<b className="font-bold">957</b></h2>
                      <p className="text-md mt-4 mb-4 text-gray-800">per month</p>
                    </div>
                    <div className="text-center">
                      100 people = $957/m
                    </div>
                  </div>
                </li>
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow border-gray-600 border">
                    <div className="text-center mb-4 p-4">
                      <span className="h4">🦄 UNICORN</span>
                      <h2 className="h2 mt-4">$<b className="font-bold">4785</b></h2>
                      <p className="text-md mt-4 mb-4 text-gray-800">per month</p>
                    </div>
                    <div className="text-center">
                      500 people = $4785/m
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-8">
                <a href="https://partner.supersalesagro.com/" target="_self" className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0">Start to earn money</a>
              </div>
            </div>
          </div>



          <div className="mt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-4xl font-bold ">We are interested in your growth</h2>
              <p className=" mt-4">Every partner gets our full support because <strong>our</strong> growth depends on <strong>your</strong> growth.</p>
            </div>
            <div className="mt-8">
              <ul className="flex flex-wrap justify-center">
                <li className="w-full md:w-1/3 px-4 py-2">
                  <div className="text-center">
                    <img src="/images/🧑_🏫.png" alt="Free coaching" className="mx-auto h-20" />
                    <h3 className="h4 font-semibold mt-2 ">Free coaching</h3>
                    <p className=" mt-1">Struggling with growing your blog or agency? Let us consult you. Our team has experts in the niche.</p>
                  </div>
                </li>
                <li className="w-full md:w-1/3 px-4 py-2">
                  <div className="text-center">
                    <img src="/images/💻.png" alt="Personal dashboard" className="mx-auto h-20" />
                    <h3 className="h4 font-semibold mt-2 ">Personal dashboard</h3>
                    <p className=" mt-1">Track every campaign, URL click, and dollar you earn. Easy and convenient.</p>
                  </div>
                </li>
                <li className="w-full md:w-1/3 px-4 py-2">
                  <div className="text-center">
                    <img src="/images/🧑_🎨.png" alt="Have our designer for $0" className="mx-auto h-20" />
                    <h3 className="h4 font-semibold mt-2 ">Have our designer for $0</h3>
                    <p className=" mt-1">Not satisfied with our media kit? Just ask! Our design crew will prepare exclusive images and videos.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>



          <div className="py-20 bg-white relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-semibold">Questions?</h2>
              </div>

              <div className="mt-8">
                <div className="space-y-6">
                  <div className='p-8 border rounded-md border-gray-600'>
                    <h3 className="font-bold text-xl">Who is supersalesagro for?</h3>
                    <br />
                    <p className="text-md mt-4 mb-4 text-gray-800">supersalesagro is a quick business builder for startup founders. Our users can quickly create a beautiful web apps, blogs, and helpdesks for a mobile or desktop, for a SaaS product, for a plugin, an open-source project, a SMM tool etc.</p>
                    <p className="text-md mt-4 mb-4 text-gray-800">If your audience are tech guys, supersalesagro is for them. They will be more willing to use a tailored tool for startups rather than generic old-fashioned Webflow or Wordpress.</p>
                  </div>

                  <div className='p-8 border rounded-md border-gray-600'>
                    <h3 className="font-bold text-xl">Why promote you while I can promote some other website builder?</h3>
                    <br />
                    <p className="text-md mt-4 mb-4 text-gray-800">The key advantage is the approach. We are building a landing page generator for startups only. That means, we pay all the attention to startups-only demands. In particular, we will provide not-so-popular integrations, specific components and templates.</p>
                    <p className="text-md mt-4 mb-4 text-gray-800">This is why startup founders love supersalesagro more than other tools.</p>
                    <p className="text-md mt-4 mb-4 text-gray-800">Why believe me? Just A/B test it yourself. Put a Wix affiliate link for a month, measure your earnings. Then put our link. Compare. Pick the winner.</p>
                  </div>

                  <div className='p-8 border rounded-md border-gray-600'>
                    <h3 className="font-bold text-xl">What is the minimum payout amount?</h3>
                    <br />
                    <ul>
                      <li>Wise with min. payout of $200</li>
                      <li>Paypal with min. payout of $50</li>
                      <li>Bank (Australia) with min. payout of $50</li>
                      <li>Bank (Canada) with min. payout of $50</li>
                      <li>Bank (UK) with min. payout of $50</li>
                      <li>Bank (US) with min. payout of $50</li>
                      <li>Bank (international) with min. payout of $200</li>
                      <li>Bank (IBAN) with min. payout of $200</li>
                    </ul>
                  </div>

                  <div className='p-8 border rounded-md border-gray-600'>
                    <h3 className="font-bold text-xl">Can I have multiple affiliate offers on the same page?</h3>
                    <br />
                    <p className="text-md mt-4 mb-4 text-gray-800">Yes. Nothing stops your from selling let's say an analytics tool or a social media scheduler alongside with a landing page builder. Take the maximum out of your resource!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white border border-gray-600 border-2 border-dashed py-20 rounded-md">
            <div className="max-w-md mx-auto text-center">
              <h2 className="h2 font-bold">Start earning cash by referring customers to supersalesagro</h2>
              <br />
              <p className="mt-4 text-gray-400">Quick payouts to Wise, Paypal or your local bank. Premium support and cross-promotions from us.</p>

              <div className="mt-8">
                <a href="https://supersalesagro.lemonsqueezy.com/affiliates" target="_blank" className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0">Become our partner</a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
