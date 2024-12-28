import { Metadata } from "next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { createClient } from "@/lib/supabase/server"
import { UserAuthForm } from "@/components/ui/auth/user-auth-form"

export const metadata: Metadata = {
  title: "Login | St Peter's Pharmacy",
  description: "Login to your account",
}

export default async function LoginPage() {
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
            Welcome back
          </h1>
          <p className="text-sm text-default-500">
            Enter your phone number to sign in to your account
          </p>
        </CardHeader>
        <CardBody>
          <UserAuthForm />
          <p className="mt-4 text-center text-sm text-default-500">
            <Link 
              href="/register" 
              className="text-primary hover:underline"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
