import { Card, CardBody } from '@nextui-org/react'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-900">
        <CardBody className="prose dark:prose-invert max-w-none p-8">
          <h1>Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 3, 2025</p>

          <section className="mt-8">
            <h2>1. Introduction</h2>
            <p>
              Welcome to St Peter&apos;s Pharmacy. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul>
              <li>Identity Data (name, username)</li>
              <li>Contact Data (email address, phone number)</li>
              <li>Technical Data (IP address, browser type)</li>
              <li>Profile Data (preferences, feedback)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide our pharmacy services</li>
              <li>Manage your account</li>
              <li>Send important notifications</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
              used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Your Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to correct your personal data</li>
              <li>The right to erase your personal data</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: privacy@stpeterspharmacy.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </CardBody>
      </Card>
    </div>
  )
}
