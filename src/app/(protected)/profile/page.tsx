import { ProfileForm } from '@/components/profile/ProfileForm'
import ProfileHeader from '@/components/profile/ProfileHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Profile - St Peter\'s Pharmacy',
  description: 'Manage your St Peter\'s Pharmacy account settings and preferences',
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader />
      <div className="mt-8">
        <ProfileForm />
      </div>
    </div>
  )
}
