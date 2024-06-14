import MeetingTypeList from "@/components/meeting-type"
import React from "react"

export default function Home() {
  const now = new Date()
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format()

  return (
    <section className="flex size-full flex-col gap-12 text-white">
      <div className="box-border h-[300px] w-full rounded-lg bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 md:p-11">
          <h2 className="glassmorphism max-w-[300px] text-center text-base font-normal backdrop-blur-sm">
            Upcoming Meeting at:12:30pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-[clamp(1.7rem,2.2vw,4rem)] font-extrabold">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}
