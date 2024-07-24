import React, { useState } from 'react'
import "./RandomColor.css"

const RandomColor = () => {
    //
    const [color,setColor] = useState("#000000")

const randomColorGenerator = () =>{
    const letters = '0123456789ABCDEF';
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(hexcolor)


}

const hexToRgb = (hexColor) => {
    // Remove # if present
    hexColor = hexColor.replace('#', '');

    // Convert to RGB
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}




    

  return (
    <>
     <div className="container" style={{backgroundColor : color}}>
         <h1>RANDOM COLOR GENERATOR</h1>

       <div className='btn-group'>

         <button onClick={randomColorGenerator}>Generate Color</button>

         </div>


<div className='show'>
    <p>hex : {color}</p>
    <p>rgb : {hexToRgb(color)}</p>
</div>
         



        </div> 
    </>
  )
}

export default RandomColor
