import { Metadata } from "next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { createClient } from "@/lib/supabase/server"
import { RegisterForm } from "@/components/ui/auth/register-form"

export const metadata: Metadata = {
  title: "Register | St Peter's Pharmacy",
  description: "Create a new account",
}

export default async function RegisterPage() {
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
            Create an Account
          </h1>
          <p className="text-sm text-default-500 text-center">
            Choose your account type and enter your details below
          </p>
        </CardHeader>
        <CardBody>
          <RegisterForm />
          <p className="mt-4 text-center text-sm text-default-500">
            <Link 
              href="/login" 
              className="text-primary hover:underline"
            >
              Already have an account? Sign In
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
