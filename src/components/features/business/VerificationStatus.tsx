'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  Progress,
  Button,
} from '@nextui-org/react'
import type { BusinessProfile, VerificationStep } from '@/types/business'

interface VerificationStatusProps {
  businessId: string
}

export function VerificationStatus({ businessId }: VerificationStatusProps) {
  const [profile, setProfile] = useState<BusinessProfile | null>(null)
  const [steps, setSteps] = useState<VerificationStep[]>([
    {
      id: 'profile',
      title: 'Business Profile',
      description: 'Complete your business profile information',
      status: 'pending',
      required: true,
    },
    {
      id: 'license',
      title: 'License Verification',
      description: 'Upload your business license for verification',
      status: 'pending',
      required: true,
    },
    {
      id: 'documents',
      title: 'Additional Documents',
      description: 'Upload registration and insurance documents',
      status: 'pending',
      required: false,
    },
    {
      id: 'review',
      title: 'Admin Review',
      description: 'Your application is being reviewed',
      status: 'pending',
      required: true,
    },
  ])

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/business/status/${businessId}`)
        if (!response.ok) throw new Error('Failed to fetch status')
        
        const data = await response.json()
        setProfile(data)
        updateSteps(data)
      } catch (error) {
        console.error('Error fetching verification status:', error)
      }
    }

    fetchStatus()
  }, [businessId])

  const updateSteps = (profile: BusinessProfile) => {
    setSteps(prev => prev.map(step => {
      switch (step.id) {
        case 'profile':
          return {
            ...step,
            status: profile.business_name ? 'completed' : 'pending',
          }
        case 'license':
          return {
            ...step,
            status: profile.documents?.license?.verified ? 'completed' : 'pending',
          }
        case 'documents':
          return {
            ...step,
            status: profile.documents?.registration?.verified ? 'completed' : 'pending',
          }
        case 'review':
          return {
            ...step,
            status: profile.verification_status === 'approved' ? 'completed' : 
                   profile.verification_status === 'in_review' ? 'in_progress' : 'pending',
          }
        default:
          return step
      }
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'success'
      case 'rejected':
        return 'danger'
      case 'in_review':
        return 'warning'
      case 'expired':
        return 'default'
      default:
        return 'primary'
    }
  }

  const completedSteps = steps.filter(step => step.status === 'completed').length
  const progress = (completedSteps / steps.length) * 100

  if (!profile) {
    return <div>Loading verification status...</div>
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Verification Status</h2>
        <Chip
          color={getStatusColor(profile.verification_status)}
          variant="flat"
        >
          {profile.verification_status.replace('_', ' ').toUpperCase()}
        </Chip>
      </CardHeader>

      <CardBody className="space-y-6">
        <div>
          <p className="text-sm text-default-500 mb-2">Verification Progress</p>
          <Progress
            value={progress}
            color="primary"
            className="max-w-md"
            showValueLabel={true}
          />
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start space-x-4 p-4 rounded-lg border border-default-200"
            >
              <div className="flex-1">
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-default-500">{step.description}</p>
              </div>
              <Chip
                color={
                  step.status === 'completed' ? 'success' :
                  step.status === 'in_progress' ? 'warning' :
                  'default'
                }
                variant="flat"
                size="sm"
              >
                {step.status.replace('_', ' ').toUpperCase()}
              </Chip>
            </div>
          ))}
        </div>

        {profile.verification_status === 'rejected' && (
          <Button
            color="primary"
            variant="solid"
            className="mt-4"
          >
            Resubmit Application
          </Button>
        )}
      </CardBody>
    </Card>
  )
}
