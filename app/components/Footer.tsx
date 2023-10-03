import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GlobeAmericasIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const footerdatas = [
    {
      heading: 'Discover',
      items: [
        'Products',
        'trails',
        'Services',
        'Industries',
        'IBM Discounts',
        'Case Studies',
        'Financing',
      ],
    },
    {
      heading: 'Connect with us',
      items: [
        'Engage IBM Consulting',
        'Support',
        'ServFind a Business Partnerices',
        'Developers',
        'Business Partners',
      ],
    },
    {
      heading: 'Follow IBM',
      items: ['LinkedIn', 'Twitter', 'Instagram'],
    },
    {
      heading: 'Learn about',
      items: [
        'What is IaaS ,PaaS & SaaS?',
        'What is Cloud Computing?',
        'What is Virtual Machine?',
        'What is Object Storage?',
        'What is Contenarization?',
        'What is Kubernetes?',
        'What is FaaS?',
      ],
    },
    {
      heading: 'About IBM',
      items: [
        'Careers',
        'Latest news',
        'Investor relations',
        'Corporate responsibility',
        'About IBM',
      ],
    },
  ]
  const footerlist = [
    'Contact',
    'Privacy',
    'Terms of use',
    'Accessibility',
    'Cookie Preferences',
  ]
  return (
    <footer className="w-full text-white bg-black/90 mt-16">
      <section className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col md:mx-4">
          <div className="flex max-md:flex-col max-md:gap-10 justify-between items-start my-12  max-md:p-4">
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="157px"
              height="65px"
              viewBox="0 0 58 23"
              data-di-res-id="8b7a075b-4536542f"
              data-di-rand="1695713840457"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="ibm-8-bar-logo--h15-copy" fill="#ffffff">
                  <path
                    d="M58,21.4666667 L58,23 L50.3684211,23 L50.3684211,21.4666667 L58,21.4666667 Z M39.6842105,21.4666667 L39.6842105,23 L32.0526316,23 L32.0526316,21.4666667 L39.6842105,21.4666667 Z M45.6385329,21.4666667 L45.0245693,23 L44.41871,21.4666667 L45.6385329,21.4666667 Z M28.5421053,21.4666667 C27.4471432,22.4188667 26.0029202,23 24.3905263,23 L24.3905263,23 L12.2105263,23 L12.2105263,21.4666667 Z M10.6842105,21.4666667 L10.6842105,23 L0,23 L0,21.4666667 L10.6842105,21.4666667 Z M39.6842105,18.4 L39.6842105,19.9333333 L32.0526316,19.9333333 L32.0526316,18.4 L39.6842105,18.4 Z M46.8318522,18.4 L46.2377311,19.9333333 L43.8212353,19.9333333 L43.2226426,18.4 L46.8318522,18.4 Z M30.0684211,18.4 C29.9306437,18.9451697 29.7105614,19.4599515 29.4273684,19.9333333 L29.4273684,19.9333333 L12.2105263,19.9333333 L12.2105263,18.4 Z M10.6842105,18.4 L10.6842105,19.9333333 L0,19.9333333 L0,18.4 L10.6842105,18.4 Z M58,18.4 L58,19.9333333 L50.3684211,19.9333333 L50.3684211,18.4 L58,18.4 Z M54.9473684,15.3333333 L54.9473684,16.8666667 L50.3684211,16.8666667 L50.3684211,15.3333333 L54.9473684,15.3333333 Z M39.6842105,15.3333333 L39.6842105,16.8666667 L35.1052632,16.8666667 L35.1052632,15.3333333 L39.6842105,15.3333333 Z M48.0292704,15.3333333 L47.4295831,16.8666667 L42.6233978,16.8666667 L42.019006,15.3333333 L48.0292704,15.3333333 Z M29.8547368,15.3333333 C29.991899,15.8221879 30.0684211,16.3357152 30.0684211,16.8666667 L30.0684211,16.8666667 L24.4210526,16.8666667 L24.4210526,15.3333333 Z M19.8421053,15.3333333 L19.8421053,16.8666667 L15.2631579,16.8666667 L15.2631579,15.3333333 L19.8421053,15.3333333 Z M7.63157895,15.3333333 L7.63157895,16.8666667 L3.05263158,16.8666667 L3.05263158,15.3333333 L7.63157895,15.3333333 Z M54.9473684,12.2666667 L54.9473684,13.8 L50.3684211,13.8 L50.3684211,12.2666667 L54.9473684,12.2666667 Z M39.6842105,12.2666667 L39.6842105,13.8 L35.1052632,13.8 L35.1052632,12.2666667 L39.6842105,12.2666667 Z M49.2252679,12.2666667 L48.6284686,13.8 L41.4089474,13.8 L40.8168134,12.2666667 L49.2252679,12.2666667 Z M27.9773684,12.2666667 C28.5037637,12.6994848 28.9570701,13.2181697 29.3052632,13.8 L29.3052632,13.8 L15.2631579,13.8 L15.2631579,12.2666667 Z M7.63157895,12.2666667 L7.63157895,13.8 L3.05263158,13.8 L3.05263158,12.2666667 L7.63157895,12.2666667 Z M44.5987396,9.2 L45.0263158,10.4393515 L45.4535426,9.2 L54.9473684,9.2 L54.9473684,10.7333333 L50.3684211,10.7333333 L50.3684211,9.32433939 L49.8494737,10.7333333 L40.1878947,10.7333333 L39.6842105,9.3242 L39.6842105,10.7333333 L35.1052632,10.7333333 L35.1052632,9.2 L44.5987396,9.2 Z M7.63157895,9.2 L7.63157895,10.7333333 L3.05263158,10.7333333 L3.05263158,9.2 L7.63157895,9.2 Z M29.3052632,9.2 C28.9570701,9.7818303 28.5037637,10.3003758 27.9773684,10.7333333 L27.9773684,10.7333333 L15.2631579,10.7333333 L15.2631579,9.2 Z M54.9473684,6.13333333 L54.9473684,7.66666667 L45.9831118,7.66666667 L46.5234001,6.13333333 L54.9473684,6.13333333 Z M43.534302,6.13333333 L44.0745993,7.66666667 L35.1052632,7.66666667 L35.1052632,6.13333333 L43.534302,6.13333333 Z M30.0684211,6.13333333 C30.0684211,6.66414545 29.991899,7.17767273 29.8547368,7.66666667 L29.8547368,7.66666667 L24.4210526,7.66666667 L24.4210526,6.13333333 Z M19.8421053,6.13333333 L19.8421053,7.66666667 L15.2631579,7.66666667 L15.2631579,6.13333333 L19.8421053,6.13333333 Z M7.63157895,6.13333333 L7.63157895,7.66666667 L3.05263158,7.66666667 L3.05263158,6.13333333 L7.63157895,6.13333333 Z M42.4774196,3.06666667 L43.0079113,4.6 L32.0527757,4.6 L32.0526316,3.06666667 L42.4774196,3.06666667 Z M58,3.06666667 L58,4.6 L47.0390632,4.6 L47.5903678,3.06666667 L58,3.06666667 Z M29.4273684,3.06666667 C29.7105614,3.54004848 29.9306437,4.0548303 30.0684211,4.6 L30.0684211,4.6 L12.2105263,4.6 L12.2105263,3.06666667 Z M10.6842105,3.06666667 L10.6842105,4.6 L0,4.6 L0,3.06666667 L10.6842105,3.06666667 Z M41.4056725,0 L41.9462722,1.53333333 L32.05278,1.53333333 L32.0526316,0 L41.4056725,0 Z M58,0 L58,1.53333333 L48.1188427,1.53333333 L48.6466706,0 L58,0 Z M24.3905263,0 C25.9912083,0 27.4472798,0.581133333 28.5421053,1.53333333 L28.5421053,1.53333333 L12.2105263,1.53333333 L12.2105263,0 Z M10.6842105,0 L10.6842105,1.53333333 L0,1.53333333 L0,0 L10.6842105,0 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </svg>
            <div className="border-white border flex items-center justify-between p-4 max-md:mx-auto max-md:h-14 h-12 max-md:w-full w-[22.8rem] ">
              <span>India — English</span>
              <GlobeAmericasIcon className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="border-t-[1px] xl:ml-auto xl:w-9/12 p-4 flex flex-wrap max-md:hidden">
            {footerdatas.map(({ heading, items }) => (
              <div className="w-1/3 mb-12">
                <h2 className="font-bold py-1">{heading}</h2>
                {items.map((item, key) => (
                  <h5
                    className="py-1 cursor-pointer text-sm text-gray-300 hover:underline hover:text-gray-50"
                    key={key}
                  >
                    {item}
                  </h5>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t-[1px] max-md:flex-col md:hidden">
            {footerdatas.map(({ heading }, key) => (
              <div>
                <h2
                  className="border-t-[0.8px] flex text-sm justify-between p-4"
                  key={key}
                >
                  {heading}
                  <ChevronDownIcon className="h-6 w-6 text-gray-100" />
                </h2>
              </div>
            ))}
          </div>
          <div className="border-t-[1px] ml-auto w-full p-4 xl:ml-auto xl:w-9/12  flex flex-wrap max-md:flex-col">
            {footerlist.map((value, key) => (
              <h5
                className="py-1 cursor-pointer text-sm text-gray-300 hover:underline hover:text-gray-50 w-1/3 "
                key={key}
              >
                {value}
              </h5>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
