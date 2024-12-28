import { Container } from '@/components/ui/container'
import { GradientBackground } from '@/components/ui/gradient'
import { Heading, Lead, Subheading } from '@/components/ui/typography'

function MissionHeader() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Empowering Health Through Accessible Care</Heading>
      <Lead className="mt-6 max-w-3xl text-gray-600">
        We&apos;re on a mission to transform healthcare delivery by combining modern pharmaceutical
        services with personalized care and education.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight text-emerald-800">Our Mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At St. Peter&apos;s Pharmacy, we are dedicated to revolutionizing the pharmacy experience
            through personalized care, education, and innovative health solutions. Our mission
            is to be more than just a pharmacy – we strive to be a trusted healthcare partner
            in our community&apos;s wellness journey.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We believe in patient-centered care — taking the time to understand each individual&apos;s
            unique health needs and providing tailored solutions. Through our comprehensive
            services, from prescription management to health education, we ensure that every
            patient receives the attention and care they deserve.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50">
              <img
                alt="Pharmacist consulting with patient"
                src="/mission/mission-1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50 lg:-mt-32">
              <img
                alt="Modern pharmacy interior"
                src="/mission/mission-2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50">
              <img
                alt="Health education session"
                src="/mission/mission-3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50 lg:-mt-32">
              <img
                alt="Digital prescription services"
                src="/mission/mission-4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Our Impact</Subheading>
          <hr className="mt-6 border-t border-emerald-100" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-emerald-100 pb-4">
              <dt className="text-sm/6 text-gray-600">Years of Service</dt>
              <dd className="order-first text-6xl font-medium tracking-tight text-emerald-700">
                25+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-emerald-100 pb-4">
              <dt className="text-sm/6 text-gray-600">Patients Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight text-emerald-700">
                50K+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-emerald-100 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Health Programs</dt>
              <dd className="order-first text-6xl font-medium tracking-tight text-emerald-700">
                20+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Community Partners</dt>
              <dd className="order-first text-6xl font-medium tracking-tight text-emerald-700">
                15+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Values() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <Subheading>Our Values</Subheading>
      <Heading as="h2" className="mt-4">
        Guided by Care and Innovation
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-emerald-50/50 p-8">
          <h3 className="text-xl font-semibold text-emerald-800">Patient-Centered Care</h3>
          <p className="mt-4 text-gray-600">
            We put our patients first, ensuring personalized attention and care that addresses
            individual health needs and concerns.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50/50 p-8">
          <h3 className="text-xl font-semibold text-emerald-800">Innovation in Healthcare</h3>
          <p className="mt-4 text-gray-600">
            We embrace modern technology and innovative solutions to enhance the pharmacy
            experience and improve health outcomes.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50/50 p-8">
          <h3 className="text-xl font-semibold text-emerald-800">Community Wellness</h3>
          <p className="mt-4 text-gray-600">
            We&apos;re committed to promoting health education and preventive care to build a
            healthier community.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <GradientBackground className="from-emerald-50" />
      <MissionHeader />
      <Values />
    </section>
  )
}
