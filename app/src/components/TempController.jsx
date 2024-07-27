import React, { useEffect, useState } from 'react'
import "./TempController.css"


const TempController = () => {

    const [tempval,setTempval] = useState(10)
    const [color,setColor]= useState("green")


    useEffect(()=>{
        if(tempval <=24){
            setColor("green")
        }
        else if(tempval >= 25 && tempval <=35){
            setColor("orange")
        }else if(tempval > 35 && tempval <= 50){
       setColor("red")
        }


        
    },[tempval])
    
  return (
    <>
     <div className='container' >
        <div className='temp-container' >
            <div className='temp-top' style={{backgroundColor : color}}>
            <p>{tempval}° C</p>
            </div>
            <div className='temp-bottom'>
                <button onClick={()=>setTempval(tempval+1)} disabled={tempval===50}>+</button>
                <button onClick={()=>setTempval(tempval-1)} disabled={tempval===5}>-</button>

            </div>
        </div>
     </div>
    </>
  )
}

export default TempController
