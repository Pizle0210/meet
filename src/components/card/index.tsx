import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

export default function HomeCard({
  img,
  title,
  description,
  handleClick,
  classname,
}: {
  classname: string
  handleClick: () => void
  description: string
  img: string
  title: string
}) {
  return (
    <>
      <div
        className={cn(
          `flex min-h-[260px] w-full cursor-pointer flex-col justify-between rounded-lg px-5 py-5 text-white xl:max-w-[380px]`,classname
        )}
        onClick={handleClick}
      >
        <div className="flex-center glassmorphism size-16 rounded-xl">
          <Image
            src={img}
            width={27}
            height={27}
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </>
  )
}
