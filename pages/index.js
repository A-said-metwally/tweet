import Head from 'next/head'
import { useEffect,useState } from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'



export default function Home() {
  
  
  return (
      <div className=' lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
        <Head>
          <title>Twitter App Next-Js</title>
        </Head>
       
        <main className=' grid grid-cols-9'>
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </main>
      </div>
  )
}

export async function getServerSideProps(){

  return{
    props:{

    }
  }
}