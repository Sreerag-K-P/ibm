import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import cardimage from '@/public/images/cardimage.png'

const HeroCards = () => {
  const cardsdatas = [
    {
      imagepath: '/images/cardimage.png',
      heading: 'IBM Storage FlashSystem',
      content: 'Sustainable and cyber resilent storage for your enterprise',
    },
    {
      imagepath: '/images/cardimage2.jpg',
      heading: 'Guardium Data Protection',
      content: 'Simplify data privacy and protection',
    },
    {
      imagepath: '/images/cardimage3.png',
      heading: 'IBM Instana',
      content: 'Real time observability for your applications',
    },
    {
      imagepath: '/images/cardimage4.jpg',
      heading: 'IBM Envizi',
      content: 'Streamline ESG reporting to meet compliance',
    },
  ]
  return (
    <section className="max-w-screen-2xl mx-auto mt-24 ">
      <div className="flex max-xl:flex-wrap mx-4">
        {cardsdatas.map(({ imagepath, heading, content }) => (
          <div className="flex gap-3 p-4 border max-md:w-full max-xl:w-1/2 xl:w-1/4 hover:bg-gray-200">
            <div className="w-1/2 xl:w-32 xl:h-1/2 2xl:h-[11.3rem] 2xl:w-auto lg:h-52">
              <Image
                src={`${imagepath}`}
                alt="card image"
                width={364}
                height={364}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 2xl:w-44 lg:w-40 2xl:h-auto h-auto xl:h-36 xl:w-auto">
              <div className="pt-2 h-full flex flex-col justify-between">
                <div>
                  <h5 className="mb-4 text-xs leading-[0.32px] text-gray-700">
                    {heading}
                  </h5>
                  <p className="text-base font-normal leading-6 ">{content}</p>
                </div>

                <Link href="">
                  <ArrowRightIcon className="w-6 h-6 mt-4 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroCards
