import React, { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

type MeetingModalProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  handleClick: () => void
  children?: ReactNode
  buttonText?: string
  image?: string
  className?: string
  buttonIcon?: string
}
export default function MeetingModal({
  title,
  isOpen,
  onClose,
  handleClick,
  children,
  buttonText,
  image,
  className,
  buttonIcon,
}: MeetingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[500px] flex-col gap-6 border-none bg-dark-2 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} width={72} height={72} alt="image" />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-9", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-orange-500 hover:bg-slate-400 p-3 text-lg font-semibold tracking-wide focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                width={13}
                height={13}
                alt="button icon"
                src={buttonIcon}
              />
            )} &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
