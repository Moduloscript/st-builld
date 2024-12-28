export type UserRole = 'individual' | 'business'

export interface UserProfile {
  id: string
  user_id: string
  full_name: string
  phone_number: string
  email: string
  role: UserRole
  created_at: string
}

export interface BusinessProfile extends UserProfile {
  business_name: string
  license_number: string
  license_document_url: string
  verification_status: 'pending' | 'verified' | 'rejected'
  business_address: string
}
