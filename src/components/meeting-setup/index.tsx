"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value:boolean) => void;
}) {
  const [isMicCamOn, setIsMicCamOn] = useState(false);

  const call = useCall();

  useEffect(() => {
    if (!isMicCamOn) {
      call?.camera.enable();
      call?.microphone.enable();
    } else {
      call?.microphone.disable();
      call?.camera.disable();
    }
  }, [isMicCamOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col place-content-center items-center gap-5 rounded-lg text-white">
      <h1 className="text-[clamp(1.3rem,3vw,4rem)] font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-20 items-center justify-center gap-4">
        <label className="flex items-center gap-2 font-medium">
          <input
            type="checkbox"
            className="size-5 rounded-md checked:text-orange-500"
            checked={isMicCamOn}
            onChange={(e) => setIsMicCamOn(e.target.checked)}
          />
          {isMicCamOn ? (
            <p className="text-xl font-semibold">Join with mic and camera on</p>
          ) : (
            <p className="text-xl font-semibold">
              Join with mic and camera off
            </p>
          )}
        </label>

        <DeviceSettings />
      </div>
      <Button
        className="rounded-lg bg-orange-500 px-5 py-3 text-lg hover:bg-orange-400"
        onClick={() => {
          call?.join();
          setIsSetupComplete(true)
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
}
