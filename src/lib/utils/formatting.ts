export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, "")
  
  // Format as Nigerian phone number
  if (cleaned.length === 11) {
    return `+234${cleaned.slice(1)}`
  }
  
  return cleaned
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount)
}
