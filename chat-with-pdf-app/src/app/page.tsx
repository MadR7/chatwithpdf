import { Button } from '@/components/ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='mr-3 text-5xl font-extrabold tracking-tight mb-5'>Chat With PDF</h1>
          <h2 className='mr-3 text-gray-500 text-3xl tracking-tight'>Your very own <span className='text-[#25c440] font-extrabold'>AI-Powered</span> chat bot to answer your questions about any PDF</h2>
          <UserButton />
        </div>
        <div className='flex mt-2 flex-col items-center text-center'>
          { isAuth ? (
            <div>
            <Button>Go to chats</Button>
            <p>fileupload</p>
            </div>
          ) : (
            <SignInButton><Button className='group'>Get Started <LogIn className='group-hover:translate-x-1 transition'/></Button></SignInButton>) 
          }
        </div>
      </div>
    </div>
  )
}
