import { Card, CardBody } from '@nextui-org/react'

export default function DataDeletionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-900">
        <CardBody className="prose dark:prose-invert max-w-none p-8">
          <h1>Data Deletion Instructions</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 3, 2025</p>

          <section className="mt-8">
            <h2>How to Delete Your Data</h2>
            <p>
              You can request deletion of your personal data in one of the following ways:
            </p>
            <ol>
              <li>
                <strong>From your account settings:</strong>
                <ul>
                  <li>Log in to your account</li>
                  <li>Go to Profile Settings</li>
                  <li>Click on &quot;Delete Account&quot;</li>
                  <li>Confirm your decision</li>
                </ul>
              </li>
              <li>
                <strong>Contact our support team:</strong>
                <p>
                  Send an email to privacy@stpeterspharmacy.com with the subject
                  &quot;Data Deletion Request&quot; and include:
                </p>
                <ul>
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>Reason for deletion (optional)</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mt-8">
            <h2>What Data Will Be Deleted</h2>
            <p>Upon your request, we will delete:</p>
            <ul>
              <li>Your account information</li>
              <li>Your profile data</li>
              <li>Your activity history</li>
              <li>Any stored preferences</li>
            </ul>
            <p>
              Note: Some information may be retained for legal, security, or
              business requirements as outlined in our Privacy Policy.
            </p>
          </section>

          <section className="mt-8">
            <h2>Timeline</h2>
            <p>
              We will process your deletion request within 30 days. You will
              receive a confirmation email once the deletion is complete.
            </p>
          </section>

          <section className="mt-8">
            <h2>Questions?</h2>
            <p>
              If you have any questions about data deletion, please contact us at:
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
