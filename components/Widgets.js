import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed, 
  TwitterShareButton, 
  TwitterFollowButton, 
  TwitterHashtagButton, 
  TwitterMentionButton, 
  TwitterTweetEmbed, 
  TwitterMomentShare, 
  TwitterDMButton, 
  TwitterVideoEmbed, 
  TwitterOnAirButton 
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className=' col-span-2 hidden lg:inline px-2 mt-2 h-screen'>
        <div className=' flex items-center space-x-2 p-3
         bg-gray-100 rounded-full'>
            <SearchIcon className=' h-5 w-5 text-gray-400'/>
            <input 
                type="text" 
                placeholder='Search Twitter'
                className=' flex-1 bg-transparent outline-none'
             />
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ahmedsaid"
        options={{height: 1000}}
        
      />
    </div>
  )
}

export default Widgets