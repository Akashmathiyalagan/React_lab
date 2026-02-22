import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="picker-container">
      <h1>Color Picker</h1>
      <div className="buttons">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>
      <div className="color-box" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  )
}

export default App
