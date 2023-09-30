import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import simpleimage from '@/public/images/simple_image.jpg'

const MeatOurGlobal = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto">
      <div className="flex max-lg:flex-col max-xl:gap-10 justify-center w-full md:mx-4 px-4 py-36">
        <div className="w-1/2 max-lg:w-full">
          <h2 className="text-5xl max-md:text-3xl max-md:font-normal max-xl:text-4xl  2xl:text-[3.3rem] xl:tracking-tight max-2xl:tracking-normal font-IBM font-thin pr-4">
            Meet our global consultants
          </h2>
        </div>
        <div className="w-1/2 flex flex-col gap-8 max-lg:w-full">
          <p className="text-xl 2xl:text-2xl xl:ps-4">
            Bringing together a diverse set of voices with new technology, we
            collaborate closely, ideate freely and swiftly apply breakthrough
            innovations that drive big impact.
          </p>
          <span className="xl:ps-4 text-blue-600 flex gap-3 justify-start text-base items-center">
            View IBM Consulting <ArrowRightIcon className="w-6 h-6 " />
          </span>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={simpleimage}
          className="w-full h-full object-cover"
          width={1312}
          height={738}
          alt="people"
        />
      </div>
      <div className="flex max-lg:flex-col max-xl:gap-10 justify-center w-full md:mx-4 px-4 py-36">
        <div className="w-1/2 max-lg:w-full">
          <h2 className="text-5xl max-md:text-3xl max-md:font-normal max-xl:text-4xl  2xl:text-[3.3rem] xl:tracking-tight max-2xl:tracking-normal font-IBM font-thin pr-4">
            Inside IBM
          </h2>
        </div>
        <div className="w-1/2 flex flex-col gap-8 max-lg:w-full">
          <p className="text-xl 2xl:text-2xl xl:ps-4">
            Solving the world’s problems through technology wouldn’t be possible
            without our most important invention: the IBMer. Have a look at our
            talented teams.
          </p>
          <span className="xl:ps-4 text-blue-600 flex gap-3 justify-start text-base items-center">
            About IBM <ArrowRightIcon className="w-6 h-6 " />
          </span>
        </div>
      </div>
    </section>
  )
}

export default MeatOurGlobal
