"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input, Button, Select, SelectItem } from "@nextui-org/react"
import { createClient } from "@/lib/supabase/client"

const individualSchema = z.object({
  userType: z.literal("individual"),
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  email: z.string().email("Invalid email address"),
})

const businessSchema = z.object({
  userType: z.literal("business"),
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name is required"),
  businessAddress: z.string().min(5, "Business address is required"),
  licenseNumber: z.string().min(5, "License number is required"),
})

const formSchema = z.discriminatedUnion("userType", [
  individualSchema,
  businessSchema,
])

type FormData = z.infer<typeof formSchema>

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const supabase = createClient()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "individual",
      fullName: "",
      phone: "",
      email: "",
    },
  })

  const userType = form.watch("userType")

  async function onSubmit(values: FormData) {
    setIsLoading(true)

    try {
      // First, send OTP to phone
      const { error: otpError } = await supabase.auth.signInWithOtp({
        phone: values.phone,
      })

      if (otpError) throw otpError

      // Store registration data for after verification
      localStorage.setItem("registrationData", JSON.stringify(values))
      localStorage.setItem("verifyPhone", values.phone)

      router.push("/verify")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Select
        label="Account Type"
        placeholder="Select account type"
        defaultSelectedKeys={["individual"]}
        {...form.register("userType")}
      >
        <SelectItem key="individual" value="individual">
          Individual Account
        </SelectItem>
        <SelectItem key="business" value="business">
          Business Account
        </SelectItem>
      </Select>

      <Input
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
        isDisabled={isLoading}
        errorMessage={form.formState.errors.fullName?.message}
        {...form.register("fullName")}
      />

      <Input
        type="tel"
        label="Phone Number"
        placeholder="Enter your phone number"
        isDisabled={isLoading}
        errorMessage={form.formState.errors.phone?.message}
        {...form.register("phone")}
      />

      <Input
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        isDisabled={isLoading}
        errorMessage={form.formState.errors.email?.message}
        {...form.register("email")}
      />

      {userType === "business" && (
        <>
          <Input
            type="text"
            label="Business Name"
            placeholder="Enter business name"
            isDisabled={isLoading}
            errorMessage={form.formState.errors.businessName?.message}
            {...form.register("businessName")}
          />

          <Input
            type="text"
            label="Business Address"
            placeholder="Enter business address"
            isDisabled={isLoading}
            errorMessage={form.formState.errors.businessAddress?.message}
            {...form.register("businessAddress")}
          />

          <Input
            type="text"
            label="License Number"
            placeholder="Enter license number"
            isDisabled={isLoading}
            errorMessage={form.formState.errors.licenseNumber?.message}
            {...form.register("licenseNumber")}
          />
        </>
      )}

      <Button
        type="submit"
        isLoading={isLoading}
        color="primary"
        className="w-full"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  )
}
