import { ContactSection } from '@/components/features/contact/ContactSection'
import { Container } from '@/components/ui/container'

export default function ContactPage() {
  return (
    <Container className="mt-32 sm:mt-40 mb-24 sm:mb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Speak with Our Friendly Team
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 max-w-xl mx-auto">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <ContactSection />
      </div>
    </Container>
  )
}
