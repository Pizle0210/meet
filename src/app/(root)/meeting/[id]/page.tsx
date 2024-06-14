"use client";
import MeetingRoom from "@/components/meeting-room";
import MeetingSetup from "@/components/meeting-setup";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { useGetCallById } from "../../../../../hooks/useGetCallById";
import Loader from "@/components/Loader";

export default function Meeting({
  params: { id },
}: {
  params: { id: string };
}) {
  const [isSetupComplete, setIsSetuoComplete] = useState(false);
  const { user, isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
