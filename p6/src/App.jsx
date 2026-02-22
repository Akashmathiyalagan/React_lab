import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const parse = (val) => parseFloat(val) || 0
  const sum = parse(a) + parse(b)
  const diff = parse(a) - parse(b)
  const prod = parse(a) * parse(b)
  const quot = parse(b) !== 0 ? parse(a) / parse(b) : "∞"

  return (
    <div className="calc-container">
      <h1>Simple Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <div className="results">
        <p>Addition: {sum}</p>
        <p>Subtraction: {diff}</p>
        <p>Multiplication: {prod}</p>
        <p>Division: {quot}</p>
      </div>
    </div>
  )
}

export default App
