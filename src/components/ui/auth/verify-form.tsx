"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input, Button } from "@nextui-org/react"
import { createClient } from "@/lib/supabase/client"

const formSchema = z.object({
  token: z.string().min(6, {
    message: "Verification code must be 6 digits.",
  }),
})

export function VerifyForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const supabase = createClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const phone = localStorage.getItem("verifyPhone")
      if (!phone) throw new Error("Phone number not found")

      const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token: values.token,
        type: "sms",
      })

      if (error) throw error

      // Check if this was a registration
      const registrationData = localStorage.getItem("registrationData")
      if (registrationData) {
        const userData = JSON.parse(registrationData)
        
        // Create profile in database
        const { error: profileError } = await supabase
          .from(userData.userType === "business" ? "business_profiles" : "profiles")
          .insert({
            user_id: data.user?.id,
            full_name: userData.fullName,
            phone: userData.phone,
            email: userData.email,
            ...(userData.userType === "business" ? {
              business_name: userData.businessName,
              business_address: userData.businessAddress,
              license_number: userData.licenseNumber,
              verification_status: "pending"
            } : {})
          })

        if (profileError) throw profileError

        // Clear registration data
        localStorage.removeItem("registrationData")
      }

      // Clear the stored phone number
      localStorage.removeItem("verifyPhone")
      
      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input
        type="text"
        label="Verification Code"
        placeholder="Enter 6-digit code"
        isDisabled={isLoading}
        errorMessage={form.formState.errors.token?.message}
        {...form.register("token")}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        color="primary"
        className="w-full"
      >
        {isLoading ? "Verifying..." : "Verify Code"}
      </Button>
    </form>
  )
}
