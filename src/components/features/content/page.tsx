import type { StaticImageData } from 'next/image'
import nursePic from "@/public/images/nurse.jpg"
import Image from "next/image"

export default function ContentPage(): JSX.Element {
  return (
    <div className='mt-32 overflow-hidden sm:mt-40'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our people
            </h2>
            <p className='mt-6 text-xl leading-8 text-gray-600'>
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <Image
                src={nursePic}
                alt='Nurse'
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
