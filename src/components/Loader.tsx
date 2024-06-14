"use client"

export default function Loader() {
  return (
    <div className="flex items-center place-content-center h-screen">
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="progress"
          cx="400"
          cy="400"
          fill="none"
          r="39"
          strokeWidth="3"
          stroke="hsl(0, 0%, 100%)"
          strokeDasharray="230 1400"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
