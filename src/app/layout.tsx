import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Meet",
  description: "Meet on Video",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#ffff",
            colorPrimary: "#F33A6A",
            colorNeutral: "white",
            fontSize: "1.1rem",
            colorBackground: "#09090b",
            colorDanger: "red",
            colorInputBackground: "#252a41",
            colorInputText: "#ffff",
          },
        }}
      >
        <body className={cn("bg-dark-2 antialiased", nunito.className)}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  )
}
