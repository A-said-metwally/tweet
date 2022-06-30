import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from '@heroicons/react/outline'

function TweetBox() {
  const [input, setInput] = useState('')

  return (
    <div className='flex space-x-2 p-5 '>
        <img 
          src="twit.jpg" 
          alt="image" 
          className=' h-14 w-14 object-cover 
          rounded-full mt-4' />
        
        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input 
              type="text" 
              placeholder="What's happening ?" 
              className='h-24 w-full text-lg outline-none
               placeholder:text-xl '
              onChange={(e)=>setInput(e.target.value)}
            />

            <div className=' flex items-center justify-between'>
              <div className='flex flex-1 space-x-2 text-twitter'>
                <PhotographIcon className="h-5 w-5 cursor-pointer
                 transition-transform duration-150 ease-out hover:scale-150"/>
                <SearchCircleIcon className="h-5 w-5"/>
                <EmojiHappyIcon className="h-5 w-5"/>
                <CalendarIcon className="h-5 w-5"/>
                <LocationMarkerIcon className="h-5 w-5"/>
              </div>
              <button
              disabled={!input}
              className=' bg-twitter px-5 py-2
               text-white rounded-full disabled:opacity-40'
               >
                 Tweet
                </button>
            </div>

          </form>
        </div>
    </div>
  )
}

export default TweetBox