'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Switch,
  Divider,
} from '@nextui-org/react'
import { useState } from 'react'
import { User, Phone, Bell, Mail } from 'lucide-react'

export function ProfileForm() {
  const { user, updateProfile } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const [formData, setFormData] = useState({
    full_name: user?.full_name || '',
    phone_number: user?.phone_number || '',
    preferences: {
      newsletter: user?.preferences?.newsletter ?? true,
      notifications: user?.preferences?.notifications ?? true,
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    try {
      await updateProfile(formData)
      setSuccess('Profile updated successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Personal Information</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            {error && (
              <div className="p-4 text-sm text-red-500 bg-red-50 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="p-4 text-sm text-green-500 bg-green-50 rounded-lg">
                {success}
              </div>
            )}

            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
              startContent={<User className="text-default-400" size={20} />}
            />

            <Input
              label="Email"
              value={user?.email}
              isReadOnly
              startContent={<Mail className="text-default-400" size={20} />}
            />

            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
              startContent={<Phone className="text-default-400" size={20} />}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Preferences</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Newsletter Subscription</h3>
                <p className="text-sm text-default-500">
                  Receive updates about new products and health tips
                </p>
              </div>
              <Switch
                isSelected={formData.preferences.newsletter}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, newsletter: value },
                  })
                }
              />
            </div>

            <Divider />

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Push Notifications</h3>
                <p className="text-sm text-default-500">
                  Get notified about order updates and promotions
                </p>
              </div>
              <Switch
                isSelected={formData.preferences.notifications}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, notifications: value },
                  })
                }
                startContent={<Bell className="text-default-400" size={20} />}
              />
            </div>
          </CardBody>
        </Card>

        <div className="flex justify-end">
          <Button
            type="submit"
            color="primary"
            isLoading={isLoading}
            className="px-8"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  )
}
