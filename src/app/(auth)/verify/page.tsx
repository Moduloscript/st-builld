import { Metadata } from "next"
import { redirect } from "next/navigation"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { createClient } from "@/lib/supabase/server"
import { VerifyForm } from "@/components/ui/auth/verify-form"

export const metadata: Metadata = {
  title: "Verify | St Peter's Pharmacy",
  description: "Verify your phone number",
}

export default async function VerifyPage() {
  const supabase = createClient()
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-semibold">
            Verify your phone
          </h1>
          <p className="text-sm text-default-500 text-center">
            We&apos;ve sent a verification code to your phone number. 
            Enter the code below to verify your account.
          </p>
        </CardHeader>
        <CardBody>
          <VerifyForm />
        </CardBody>
      </Card>
    </div>
  )
}
