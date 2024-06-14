import React, { ReactNode } from "react"
import StreamVideoProvider from "../../../provider/StreamClientProvider"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}
