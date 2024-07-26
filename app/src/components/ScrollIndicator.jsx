import React, { useEffect, useState } from 'react'
import "./style.css"

const ScrollIndicator = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [scrollPercentage,setScrollPercentage] = useState(0)

    useEffect(()=>{
        setLoading(true)
        const fetchData = async() =>{
            const response = await fetch("https://dummyjson.com/products?limit=190")
            const result = await response.json()
            console.log(result)
            setData(result.products)
            setLoading(false)
        }
        fetchData()

    },[])

    const handelScrollPecentage =()=>{
        const howMuchScrool = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScrool/height)*100)
    }

    useEffect(()=>{
      window.addEventListener("scroll",handelScrollPecentage)

      return ()=>{window.removeEventListener("scroll",()=>{})}
    },[])



  return (
    <>
     <div className='main-container'>
     <h1>Scroll Indicator</h1>
        <div className='scroll'>
            <div className='current-progress' style={{width : `${scrollPercentage}%`}}></div>
        </div>
     </div>

      <div className="scroll-indicator" >
        
        {
            data.map((item,index)=>{
               return <p key={index}>{item.title}</p>
            })
        }

      </div>
    </>
  )
}

export default ScrollIndicator
