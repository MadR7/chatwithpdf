import { SignUp } from "@clerk/nextjs";

import React from 'react'

export default function Page() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignUp />
    </div>
    </div>
  )
}
