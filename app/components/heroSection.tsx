import Image from 'next/image'
import HeroImage from '@/public/images/leadspace_expanded_02.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-around max-w-screen-2xl mx-auto font-IBM my-8 max-xl:m-8 max-2xl:m-6 max-sm:m-4">
      <div className=" max-xl:w-full w-4/12 flex flex-col justify-between">
        <h2 className=" text-6xl font-light leading-tight max-xl:text-[2.625rem] max-xl:mb-16 max-2xl:text-[3.375rem] 2xl:text-7xl">
          Multiply the power of AI with watsonx
        </h2>
        <div className="flex flex-col justify-between gap-5 items-start">
          <p className="text-2xl font-IBM font-normal leading-8 max-xl:text-lg max-2xl:text-xl max-xl:mb-3">
            IBM’s next-generation AI and data platform is now available for free
            trial
          </p>
          <button
            type="button"
            className="flex relative bg-blue-500 items-center justify-between border-[0.8px] box-border cursor-pointer text-base max-sm:w-full max-w-xs min-h-[48px] outline-white py-3 pl-4 pr-16 text-white"
          >
            Take a tour <ArrowRightIcon className="w-6 h-6 absolute right-4" />
          </button>
        </div>
      </div>
      <div className="w-[47%] max-xl:w-full max-lg:h-[44rem] max-xl:h-[60rem] max-2xl:w-[37rem] max-2xl:h-[37rem] max max-sm:h-[22rem] h-[44rem] max-xl:my-8">
        <Image
          src={HeroImage}
          alt="hero image"
          width={3584}
          height={1633}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[13%] max-xl:w-full">
        <div className="p-4 pb-6 pt-16 border-b">
          <h5 className="mb-4 text-xs leading-[0.32px]">What is New</h5>
          <p className="text-base font-normal leading-6 pe-4 text-[rgb(15,98,254)] hover:underline">
            The CEO’s Guide to Generative AI
          </p>
          <Link href="">
            <ArrowRightIcon className="w-6 h-6 mt-4 text-blue-600" />
          </Link>
        </div>
        <div className="p-4 pb-6 pt-16 border-b">
          <h5 className="mb-4 text-xs leading-[0.32px]">Read the blog</h5>
          <p className="text-base font-normal leading-6 pe-4 text-[rgb(15,98,254)] hover:underline">
            Generative AI capabilities of watsonx at US open
          </p>
          <Link href="">
            <ArrowRightIcon className="w-6 h-6 mt-4 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
