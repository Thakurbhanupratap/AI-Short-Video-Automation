import React, { useState } from 'react'

const options = [
    {   
      name: 'Youtuber',
      style: 'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
    },
    {   
      name: 'Supreme',
      style: 'text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg'
    },
    {   
      name: 'Neon Glow',
      style: 'text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-[0_0_10px_rgba(255,0,150,0.8)] px-4 py-1 rounded-lg'
    },
    {   
      name: 'Bold Shadow',
      style: 'text-white text-4xl font-extrabold uppercase tracking-wide drop-shadow-2xl px-3 py-1 rounded-lg'
    },
    {   
      name: 'Retro Pop',
      style: 'text-orange-500 text-3xl font-bold uppercase tracking-wider px-4 py-2 rounded-lg'
    },
    {   
      name: 'Comic Vibes',
      style: 'text-blue-400 text-3xl font-extrabold italic drop-shadow-lg px-4 py-1 rounded-lg'
    },
    {   
      name: 'Sleek Minimal',
      style: 'text-gray-300 text-2xl font-semibold tracking-tight px-4 py-1 rounded-lg'
    },
    {   
      name: 'Electric',
      style: 'text-cyan-400 text-3xl font-bold uppercase tracking-wider drop-shadow-xl px-4 py-1 rounded-lg'
    },
    {   
      name: 'Graffiti',
      style: 'text-lime-400 text-4xl font-extrabold uppercase tracking-wide drop-shadow-xl px-4 py-1 rounded-lg'
    },
    {   
      name: 'Elegant',
      style: 'text-purple-300 text-3xl font-semibold italic tracking-wide px-4 py-1 rounded-lg'
    }
  ];
   

  
function Captions({onHandleInputChange}) {
    const [selectedCaptionStyle, setSelectedCaptionStyle] = useState();
  return (
    <div className='mt-5'>
         <h2>Caption Style</h2>
         <p className="text-sm text-gray-400">Select Caption Style</p>

         <div className='flex flex-wrap gap-4 mt-2'>
            {options.map((option, index) => (
                <div key={index}
                onClick={() => {
                    setSelectedCaptionStyle(option.name)
                    onHandleInputChange('caption',option)
                }}
                className={`p-2 hover:border bg-slate-900 rounded-lg
                     border-gray-300 cursor-pointer
                     ${selectedCaptionStyle == option.name && 'border'}
                     `}>
                    <h2 className={option.style}>{option.name}</h2>
                </div>
            ))}
         </div>
      
    </div>
  )
}

export default Captions
