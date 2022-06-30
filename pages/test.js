import React, { useState } from 'react'
import { useEffect } from 'react'

function Test() {
    const myDivs = ["a","b","c","m","d","f",]
    
    let i = 0
    const elm = 
        <div className=' bg-red-500 h-50'>
            <h1>advertise</h1>
        </div>
    
    const [CurrentElemIn, setCurrentElemIn] = useState() ;


    useEffect(()=>{
        let myArr = document.querySelectorAll(".custom")
    
        window.onscroll = function(){
                const winHeight = window.scrollY
            for(let i = 0; i< myArr.length ; i++){
                const h1 = myArr[i].getBoundingClientRect()
                
                if(winHeight   >= h1.top  && winHeight <= h1.bottom ){
                    setCurrentElemIn(i)
                }
            }
        }


    })

  return (
    <div>
        {myDivs.map((div , id)=>{
            return (
                
                <div  key={id} className=' custom text-xl text-center bg-green-200 p-5 h-96 border-b-2 border-blue-400'>
                    <h1>{div}</h1>
                    {id === CurrentElemIn && elm}
                </div>
                
            )
        })}


    </div>
  )
}

export default Test