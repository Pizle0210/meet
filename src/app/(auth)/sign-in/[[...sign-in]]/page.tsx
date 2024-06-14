import React from "react"
import { SignIn } from "@clerk/nextjs"
export default function SignInPage() {
  return (
    <main className="flex h-screen place-content-center items-center">
      <SignIn />
    </main>
  )
}
