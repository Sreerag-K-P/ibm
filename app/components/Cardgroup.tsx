import {
  ArrowRightIcon,
  ChartPieIcon,
  CodeBracketIcon,
  CommandLineIcon,
  IdentificationIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ServerStackIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline'

export const Cardgroup = () => {
  const cardItems = [
    {
      heading: 'AI & machine learning',
      icon: <LightBulbIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'Analytics',
      icon: <ChartPieIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'Compute & servers',
      icon: <ServerStackIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'Databases',
      icon: <TableCellsIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'DevOps',
      icon: <CodeBracketIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'IT automation',
      icon: <PresentationChartLineIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'Quantum',
      icon: <CommandLineIcon className="h-10 w-10 text-gray-800" />,
    },
    {
      heading: 'Security & identity',
      icon: <IdentificationIcon className="h-10 w-10 text-gray-800" />,
    },
  ]
  return (
    <section className="max-w-screen-2xl mx-auto my-16">
      <div className="grid lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 border mx-5">
        {cardItems.map(({ heading, icon }) => (
          <div className="p-4 h-40 border">
            <div className="flex justify-start items-start h-1/2">{icon}</div>
            <div className="flex justify-between items-end h-1/2">
              <h5>{heading}</h5>
              <ArrowRightIcon className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
