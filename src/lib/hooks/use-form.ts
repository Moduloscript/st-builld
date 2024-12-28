"use client"

import { useState } from "react"
import { useForm as useHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { ZodSchema } from "zod"

export function useForm<T extends Record<string, any>>(schema: ZodSchema) {
  const [isLoading, setIsLoading] = useState(false)
  
  const form = useHookForm<T>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (callback: (data: T) => Promise<any>) => {
    return form.handleSubmit(async (data) => {
      try {
        setIsLoading(true)
        await callback(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    })
  }

  return {
    form,
    isLoading,
    onSubmit,
  }
}
