import { timelineData } from '@/lib/data/mock';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Timeline() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Journey</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            The St Peter's Pharmacy Story
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-8">
            {timelineData.map((item: TimelineItem) => (
              <div key={item.id} className="relative">
                <div className="relative flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="ml-4">
                    <time className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</time>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
