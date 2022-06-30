import React from 'react'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

function TweetComponent({pic}) {
  return (
    <div className='flex flex-col space-x-3 border-y border-gray-100 p-5'>
        <div className='flex  space-x-3'>
            <img src="/twit.jpg" alt="userimag" className='h-12 w-12 object-cover rounded-full' />
            
            <div className='  w-full'>
                <div className='flex items-center space-x-1'>
                    <p className='mr-1 font-bold'>Ahmed Said</p>
                    <p className='hidden text-sm text-gray-500 lg:inline '>@ ahmed said</p>
                    <p className='text-sm text-gray-500'>01-jan-2022 10:05 am</p>
                </div>
                <p className='pt-1'>This demo tweet</p>
                
                <div className=' w-full  '>
                    <Image
                        layout="responsive"
                        height={400}
                        width={600} 
                        src={`/${pic}.jpg`} 
                        alt="tweetimg" 
                        className='m-5 ml-0 mb-0  
                        rounded-lg  shadow-sm '/>
                </div>
            </div>

        </div>

        <div className=' flex justify-between mt-5'>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><ChatAlt2Icon className='h-5 w-5'/> <p>5</p></div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><SwitchHorizontalIcon className='h-5 w-5'/></div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><HeartIcon className='h-5 w-5'/></div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><UploadIcon className='h-5 w-5'/></div>
        </div>
    </div>
  )
}

export default TweetComponent