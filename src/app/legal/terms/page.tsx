import { Card, CardBody } from '@nextui-org/react'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-900">
        <CardBody className="prose dark:prose-invert max-w-none p-8">
          <h1>Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 3, 2025</p>

          <section className="mt-8">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using St Peter&apos;s Pharmacy services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
              from using or accessing our services.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. You are
              responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section className="mt-8">
            <h2>4. Service Availability</h2>
            <p>
              We strive to provide our services 24/7, but we do not guarantee that our services will be available at
              all times. We may experience hardware, software, or other problems, need to perform maintenance, resulting
              in interruptions, delays, or errors.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall St Peter&apos;s Pharmacy be liable for any damages arising out of the use or inability
              to use our services, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section className="mt-8">
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes by
              posting the new Terms of Service on this page.
            </p>
          </section>

          <section className="mt-8">
            <h2>7. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
              <br />
              Email: legal@stpeterspharmacy.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </CardBody>
      </Card>
    </div>
  )
}
