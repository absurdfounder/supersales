import React from 'react';


const TemplateDesign = () => {
    return (
        <section>

        <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
            <div className="max-w-sm">
                <div className="flex items-center space-x-4">
                    <div className="space-y-2">
                        <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Your content lives in Notion</h1>
                        <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                            Your work stays in a place you control and love, while supersalesagro handles the technical parts of publishing it to your website. This means you can focus what’s actually important to you: creating content and building your brand without worrying about configurations, plugins, downtime, performance, or security.

                        </p>
                    </div>
                </div>
                <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                    <a href="https://app.supersalesagro.com/integrations/arcade" className="btn-face btn-dark px-5 py-3 text-base" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></a>
                </div>
            </div>
            <div className="relative w-full"><img src="https://dazzling-cat.netlify.app/write%20on%20notion.png" alt="" className="h-full w-full rounded-2xl object-cover" /></div>
        </div>




        </section>
    );
};

export default TemplateDesign;
