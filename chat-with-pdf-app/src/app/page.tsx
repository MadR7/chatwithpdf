import { Button } from '@/components/ui/button'
import FileUpload from '@/components/ui/fileupload'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LogIn, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaBook } from 'react-icons/fa'

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-gray-100 to-gray-300'>
      <nav className='flex justify-between items-center bg-gray-300 py-3 w-full'>
        <div>
          <Link href="/" className='px-4 flex items-center gap-x-3'>
            <span className='font-semibold '>DocSage</span>
            <FaBook className="text-lg" />
          </Link>
        </div>
        {isAuth && 
        <div className="pr-4 flex items-center justify-center gap-x-5">
          <Button>Go to Chats</Button>
          <UserButton />
        </div>
        }
        
      </nav>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='mr-3 text-5xl font-extrabold tracking-tight mb-5'>DocSage</h1>
          <h2 className='mr-3 text-gray-500 text-3xl tracking-tight'>Your very own <span className='text-[#25c440] font-extrabold'>AI-Powered</span> chat bot to answer your questions about any PDF</h2>
          
        </div>
        <div className='flex mt-2 flex-col items-center text-center'>
          { isAuth ? (
            <div>
            <div className='mt-4'><FileUpload/></div>
            </div>
          ) : (
            <SignInButton><Button className='group'>Get Started <LogIn className='group-hover:translate-x-1 transition'/></Button></SignInButton>) 
          }
        </div>
      </div>
    </div>
  )
}
