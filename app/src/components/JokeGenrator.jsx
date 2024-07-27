import React, { useState } from 'react'
import "./JokeGenerator.css"

const JokeGenrator = () => {

    const [joke,setJoke] = useState("")

    const generateJoke  = async() =>{
        const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        const data = await response.json()
        console.log(data)
        setJoke(data.joke)

    }
    
    const  generate = () =>{
        generateJoke()
    }

  return (
    <>
      <div className='container'>
        <div className='joke-container'>
            <h1>Joke Generator</h1>
            <p>{joke}</p>
            <button onClick={generate}>Generate</button>
        </div>
      </div>
    </>
  )
}

export default JokeGenrator
