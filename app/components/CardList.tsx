import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const CardList = () => {
  const cardlistItems = [
    {
      img: '/images/listimg1.jpg',
      heading: 'Career at IBM',
      text: 'From safer food supply to ethical AI, tackle the worlds toughest problems',
      icon: <ArrowRightIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      img: '/images/ilstimg2.png',
      heading: 'IBM Reserch',
      text: 'See the latest technology developed by IBM scientists and design thinkers',
      icon: <ArrowRightIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      img: '/images/listimg3.jpg',
      heading: 'Training and Skills',
      text: 'Power your future in tech with job skills, courses and credentials—for free',
      icon: <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      img: '/images/listimg4.jpg',
      heading: 'Corporate social responsibilities',
      text: 'IBM aspires to make a positive impact on the world and the places where we work and live',
      icon: <ArrowRightIcon className="w-6 h-6 text-blue-400" />,
    },
  ]
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="mx-4 grid max-md:grid-cols-1 grid-cols-2 xl:grid-cols-4 bg-slate-100 ">
        {cardlistItems.map(({ img, heading, text, icon }) => (
          <div className="flex flex-col border hover:bg-gray-200">
            <div className="w-full">
              <Image
                src={img}
                width={1022}
                height={766}
                className="object-cover"
                alt="image from list"
              />
            </div>
            <div className="h-1/2 p-4 flex flex-col relative">
              <div className="flex flex-col mb-32 w-[90%] max-w-[40rem]">
                <h6 className="text-sm text-gray-700 mb-2">{heading}</h6>
                <h2 className="text-xl tracking-wide 2xl:text-2xl">{text}</h2>
              </div>
              <div className="absolute bottom-4">{icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardList
