import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hour, setHour] = useState(new Date().getHours())

  let greeting
  if (hour < 12) {
    greeting = "Good morning"
  } else if (hour < 18) {
    greeting = "Good afternoon"
  } else {
    greeting = "Good evening"
  }

  // update hour every minute in case user leaves app open
  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().getHours())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="greeting-container">
      <h1>{greeting}!</h1>
      <p>The current hour is {hour}:00</p>
    </div>
  )
}

export default App
