import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return
    setTasks((prev) => [...prev, { id: Date.now(), text: input, done: false }])
    setInput("")
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask()
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.done ? "done" : "pending"}>
            <span onClick={() => toggleDone(task.id)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
