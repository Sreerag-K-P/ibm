import Image from 'next/image'
import React from 'react'
import featureimage from '@/public/images/feature_card_section.jpg'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const FeatureStory = () => {
  return (
    <section className=" bg-gray-100 max-w-screen-2xl mx-auto">
      <div className="flex flex-col xl:mx-4 lg:flex-row">
        <div className="xl:w-1/2 w-full">
          <div className="md:m-4 px-0 max-lg:px-6 max-xl:px-4 max-xl:py-6 lg:max-w-[44.5rem] md:max-w-lg xl:max-w-lg">
            <span className="text-sm text-gray-700">Featured story</span>
            <h2 className="mt-4 mb-8 text-6xl max-lg:text-4xl font-light">
              Parle Products collaborates with IBM
            </h2>
            <span className="text-sm text-gray-700">
              AI-powered solutions enable Parle Products to reshape operations
              and lay foundation for an agile and data-driven future
            </span>
          </div>
        </div>
        <div className="xl:w-1/2 max-lg:w-full relative">
          <Image src={featureimage} alt="feature" className="object-cover" />
          <div className=" bg-stone-700 w-96 h-48 max-sm:w-72 max-sm:h-40 absolute bottom-0 right-0 xl:right-4 p-4 flex flex-col justify-between">
            <h5 className="text-white text-base">Read the story</h5>
            <ArrowRightIcon className="w-6 h-6 mt-4 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureStory
