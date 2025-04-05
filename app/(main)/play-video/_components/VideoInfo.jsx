import { Button } from '@/components/ui/button'
import { ArrowLeft, DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function VideoInfo({videoData }) {
  return (
    <div className='p-5 border rounded-xl'>
        <Link href={'/dashboard'}>
        
      <h2 className='flex gap-2 items-center'>
        <ArrowLeft />
        Back to Dashboard
      </h2>
      </Link>
      <div className='mt-5 flex flex-col gap-3'>
            <h2>Project Name: {videoData?.title}</h2>
            <p className='text-gray-500'>Script: {videoData?.script}</p>
            <h2>Video Style:{videoData?.videoStyle}</h2>

            <Button><DownloadIcon /> Export & Download </Button>
      </div>
    </div>
  )
}

export default VideoInfo
