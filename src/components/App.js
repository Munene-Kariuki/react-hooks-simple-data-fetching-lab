// create your App component here
import React, { useState, useEffect } from 'react'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message)
        console.log(data)
        setIsLoaded(true)
      })
  }, [])

  if (!isLoaded) return <p>Loading...</p>

  return <img src={dogImage} alt="A Random Dog" />
  
}

export default App