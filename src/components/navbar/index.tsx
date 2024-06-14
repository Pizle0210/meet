import Image from "next/image"
import Link from "next/link"
import React from "react"
import MobileNav from "./MobileNav"
import { SignedIn, SignIn, UserButton } from "@clerk/nextjs"

export default function Navbar() {
  return (
    <nav className="fixed flex-between z-50 flex w-full items-center bg-dark-1 px-6 py-4 lg:px-10">
      {/* logo */}
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="meet-logo"
          width={38}
          height={38}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-bold text-white max-sm:hidden">Meet</p>
      </Link>

      <div className="flex-between gap-5 text-white">
        {/* clerk  */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}
