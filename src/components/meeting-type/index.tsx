"use client"
import Image from "next/image"
import React, { useState } from "react"
import HomeCard from "../card"
import { useRouter } from "next/navigation"
import MeetingModal from "../MeetingModal"
import { useUser } from "@clerk/nextjs"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useToast } from "../ui/use-toast"
 
export default function MeetingTypeList() {
  const router = useRouter()

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >()
  // call values
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  })
  // call details
  const [callDetails, setCallDetails] = useState<Call>()
  const { toast } = useToast()

  const { user } = useUser()
  const client = useStreamVideoClient()

  const createMeeting = async () => {
    if (!client || !user) return

    try {
      if (!values.dateTime) {
        toast({
          title: "select time and date",
        })
        return
      }

      const id = crypto.randomUUID()
      const call = client.call("default", id)
      if (!call) throw new Error("failed to create call")

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString()
      const description = values.description || "Instant Meeting"

      // call
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: { description },
        },
      })

      setCallDetails(call)

      if (!values?.description) {
        router.push(`/meeting/${call.id}`)
      }

      toast({
        title: "CALL CREATED SUCCESSFULLY",
      })
      
    } catch (error) {
      toast({
        title: "FAILED TO CREATE MEETING",
      })
      const errMsg =
        error instanceof Error ? error.message : "Error encountered"
      throw new Error(errMsg)
    }
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img={"/icons/add-meeting.svg"}
        title={"New Meeting"}
        classname={"bg-orange-1"}
        description={"Start an instant meeting"}
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        img={"icons/schedule.svg"}
        title={"Schedule Meeting"}
        classname={"bg-indigo-400"}
        description={"Plan a new meeting"}
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        img={"/icons/recordings.svg"}
        title={"View Recordings"}
        classname={"bg-blue-700"}
        description={"Checkout your recordings"}
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        img={"/icons/join-meeting.svg"}
        classname={"bg-teal-700"}
        title={"Join Meeting"}
        description={"Via invitation link"}
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start a Meeting"
        className="buttonIcon text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  )
}
