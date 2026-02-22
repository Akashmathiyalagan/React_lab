import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts] = useState([
    { id: 1, title: 'React Introduction', snippet: 'React is a JavaScript library used to build fast and interactive user interfaces…', content: 'React is a JavaScript library developed by Facebook.\n\nIt helps build fast, responsive user interfaces by using components and a virtual DOM.\n\nReact allows developers to break large UIs into smaller reusable parts, making development efficient.' },
    { id: 2, title: 'Understanding Components', snippet: 'Components are the reusable building blocks of a React application…', content: 'Components are independent building blocks in React.\n\nEach component manages its own structure and UI using JSX.\n\nThey improve reusability, readability, and organization in React applications.' },
  ])
  const [current, setCurrent] = useState(null)

  const goHome = () => setCurrent(null)

  if (current) {
    const post = posts.find((p) => p.id === current)
    return (
      <div className="blog-container">
        <button className="back" onClick={goHome}>← Back to Home</button>
        <div className="post-card full">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <h1>Mini Blog - Home</h1>
      <p className="subtitle">Select a blog post to view the full article.</p>
      <div className="post-list">
        {posts.map((p) => (
          <div key={p.id} className="post-card" onClick={() => setCurrent(p.id)}>
            <h3>{p.title}</h3>
            <p className="snippet">{p.snippet}</p>
            <button className="read-more" onClick={() => setCurrent(p.id)}>
              Read Full Post →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
