"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input, Button } from "@nextui-org/react"
import { createClient } from "../../lib/supabase/client"

const formSchema = z.object({
  phone: z.string().min(11, {
    message: "Phone number must be at least 11 digits.",
  }),
})

export function UserAuthForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const supabase = createClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: values.phone,
      })

      if (error) {
        throw error
      }

      // Store phone number for verification
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
      <Input
        type="tel"
        label="Phone Number"
        placeholder="Enter your phone number"
        isDisabled={isLoading}
        errorMessage={form.formState.errors.phone?.message}
        {...form.register("phone")}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        color="primary"
        className="w-full"
      >
        {isLoading ? "Signing in..." : "Sign in with phone"}
      </Button>
    </form>
  )
}
