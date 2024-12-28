import * as z from "zod"

export const phoneSchema = z.string().min(11, {
  message: "Phone number must be at least 11 digits.",
})

export const otpSchema = z.string().length(6, {
  message: "OTP must be exactly 6 digits.",
})

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  category: z.string(),
  details: z.object({
    usage: z.string(),
    warnings: z.string().optional(),
    storage: z.string().optional(),
  }).optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  subject: z.string().optional()
})

export const newsletterSchema = z.object({
  email: z.string().email(),
  preferences: z.array(z.string()).optional()
})
