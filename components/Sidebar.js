import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebareRow from './SidebareRow'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center
     md:items-start '>
        <img className='m-3 h-10 w-10 rounded-full' src="twit.jpg" alt="twitterimg" />
        <SidebareRow Icon={HomeIcon} title="Home" />
        <SidebareRow Icon={HashtagIcon} title="Explore" />
        <SidebareRow Icon={BellIcon} title="Notification" />
        <SidebareRow Icon={MailIcon} title="Message" />
        <SidebareRow Icon={BookmarkIcon} title="Bokmarks" />
        <SidebareRow Icon={CollectionIcon} title="Lists" />
        <SidebareRow Icon={UserIcon} title="Log in" />
        <SidebareRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar