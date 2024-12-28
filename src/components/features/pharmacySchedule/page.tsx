import { timelineData } from "@/lib/data/mock"

interface Schedule {
  day: string
  hours: string
  initials: string
  bgColor: string
}

const schedules: Schedule[] = [
  {
    day: "Mon-Fri",
    hours: "8:00 AM - 9:00 PM",
    initials: "MF",
    bgColor: "bg-blue-500",
  },
  {
    day: "Saturday",
    hours: "9:00 AM - 7:00 PM",
    initials: "SA",
    bgColor: "bg-green-500",
  },
  {
    day: "Holidays",
    hours: "10:00 AM - 4:00 PM",
    initials: "HO",
    bgColor: "bg-red-500",
  },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ")
}

export default function PharmacySchedule(): React.JSX.Element {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn about our milestones and achievements
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {timelineData.map((item) => (
              <article key={item.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gray-50 object-cover" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={item.date} className="text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0" />
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
