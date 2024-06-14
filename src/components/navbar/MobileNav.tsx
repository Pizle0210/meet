"use client"
import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from "@/lib/constants/intex"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function MobileNav() {
  const pathname = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="" asChild>
          <Image
            src={"/icons/hamburger.svg"}
            alt="hamburger menu"
            width={40}
            height={40}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="meet-logo"
              width={38}
              height={38}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-bold text-white">Meet</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col items-center gap-8 pt-14 text-white">
                {sidebarLinks.map((sidelink) => {
                  const isActive =
                    pathname === sidelink.route || pathname.startsWith(`${sidelink}/`)
                  return (
                    <SheetClose asChild key={sidelink.route}>
                      <Link
                        href={sidelink.route}
                        key={sidelink.name}
                        className={cn(
                          "flex w-full max-w-60 items-center gap-4 rounded-lg p-4",
                          { "bg-rose-1": isActive }
                        )}
                      >
                        <Image
                          src={sidelink.imgUrl}
                          alt="icon"
                          loading="lazy"
                          quality={60}
                          width={24}
                          height={24}
                        />
                        <p className="font-semibold">{sidelink.name}</p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
