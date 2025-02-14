'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from '@nextui-org/react'
import type { BusinessProfile } from '@/types/business'

const businessSchema = z.object({
  business_name: z.string().min(2, 'Business name must be at least 2 characters'),
  business_address: z.string().min(5, 'Please enter a valid address'),
  license_number: z.string().optional(),
  contact_email: z.string().email('Please enter a valid email'),
  contact_phone: z.string().min(10, 'Please enter a valid phone number'),
  business_type: z.enum(['pharmacy', 'clinic', 'hospital', 'other']),
  description: z.string().optional(),
})

type FormData = z.infer<typeof businessSchema>

export function BusinessVerificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(businessSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Submit verification request
      const response = await fetch('/api/business/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit verification request')
      }

      reset()
      // Show success message or redirect
    } catch (error) {
      console.error('Verification submission error:', error)
      // Show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Business Verification</h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            {...register('business_name')}
            label="Business Name"
            placeholder="Enter your business name"
            isRequired
            errorMessage={errors.business_name?.message}
          />

          <Textarea
            {...register('business_address')}
            label="Business Address"
            placeholder="Enter your business address"
            isRequired
            errorMessage={errors.business_address?.message}
          />

          <Input
            {...register('license_number')}
            label="License Number"
            placeholder="Enter your business license number"
            errorMessage={errors.license_number?.message}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register('contact_email')}
              label="Contact Email"
              placeholder="Enter contact email"
              isRequired
              errorMessage={errors.contact_email?.message}
            />

            <Input
              {...register('contact_phone')}
              label="Contact Phone"
              placeholder="Enter contact phone"
              isRequired
              errorMessage={errors.contact_phone?.message}
            />
          </div>

          <Select
            {...register('business_type')}
            label="Business Type"
            placeholder="Select business type"
            isRequired
            errorMessage={errors.business_type?.message}
          >
            <SelectItem key="pharmacy" value="pharmacy">Pharmacy</SelectItem>
            <SelectItem key="clinic" value="clinic">Clinic</SelectItem>
            <SelectItem key="hospital" value="hospital">Hospital</SelectItem>
            <SelectItem key="other" value="other">Other</SelectItem>
          </Select>

          <Textarea
            {...register('description')}
            label="Business Description"
            placeholder="Tell us about your business"
            errorMessage={errors.description?.message}
          />

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="flat"
              onPress={() => reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              color="primary"
              isLoading={isSubmitting}
            >
              Submit Verification
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
