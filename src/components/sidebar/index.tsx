"use client"
import { sidebarLinks } from "@/lib/constants/intex"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((sidelink) => {
          const isActive =
            pathname === sidelink.route ||pathname.startsWith(`${sidelink.route}/`)
          return (
            <Link
              href={sidelink.route}
              key={sidelink.name}
              className={cn(
                "flex items-center justify-start gap-4 rounded-lg p-4",
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
              <p className="text-lg font-semibold max-lg:hidden">
                {sidelink.name}
              </p>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
