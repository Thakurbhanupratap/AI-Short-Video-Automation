import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48'>
      <h2 className='font-bold text-6xl text-center'>AI Short Video Generator</h2>
      <p className='mt-4 text-2xl text-center text-gray-500'>AI Video Generator 🎬⚡ Instantly creates short videos with script, voice, and visuals in seconds! 🚀🤖</p>
      <div className='mt-7 gap-8 flex'>
        <Button size='lg' variant='secondary'>Explore</Button>
        <Authentication>
          <Button Button size="lg">Get Started</Button>
        </Authentication>
      </div>
    </div>
  )
}

export default Hero
