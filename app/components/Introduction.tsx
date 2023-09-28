import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Introduction = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto">
      <div className="flex max-lg:flex-col max-xl:gap-10 justify-center w-full md:mx-4 px-4 py-16">
        <div className="w-1/2 max-lg:w-full">
          <h2 className="text-5xl max-md:text-3xl max-md:font-normal max-xl:text-4xl  2xl:text-[3.3rem] xl:tracking-tight max-2xl:tracking-normal font-IBM font-thin pr-4">
            Browse our technology
          </h2>
        </div>
        <div className="w-1/2 flex flex-col gap-8 max-lg:w-full">
          <p className="text-xl 2xl:text-2xl xl:ps-4">
            From our flagship products for enterprise
            <br className="xl:block 2xl:hidden" />
            <Link className="text-blue-600" href="">
              hybrid cloud infrastructure
            </Link>{' '}
            &nbsp;to next-generation AI, security and storage solutions, find
            the answer to your business challenge.
          </p>
          <span className="xl:ps-4 text-blue-600 flex gap-3 justify-start text-base items-center">
            View all products <ArrowRightIcon className="w-6 h-6 " />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Introduction
