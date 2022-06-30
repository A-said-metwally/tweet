import React from 'react'
import { RefreshIcon} from '@heroicons/react/outline'
import TweetBox from './TweetBox'
import TweetComponent from './Tweet'

function Feed() {
  const myPosts = [1,2,3,4,5,6,7,8]

  return (
    <div className=' col-span-7 lg:col-span-5 h-screen overflow-scroll'>
        <div className=' flex items-center justify-between'>
            <h1 className=' p-5 pb-0 text-xl font-bold'>Home</h1>
            <RefreshIcon className=' mr-5 mt-5 h-8 w-8 cursor-pointer
             text-twitter transition-all duration-500 ease-out
               hover:rotate-180 active:scale-125'/>
        </div>

        <div>
            <TweetBox/>
        </div>
       
        <div className=''>
          {myPosts.map((post, id)=>{
            return (
              <TweetComponent pic={post} key={id} />
            )
          })}
        </div>
    </div>
  )
}

export default Feed