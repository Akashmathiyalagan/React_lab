import React from 'react'
import { Link } from 'react-router-dom'

// export the posts array so Post component can reuse it
export const posts = [
  {
    id: 1,
    title: 'React Introduction',
    snippet: 'React is a JavaScript library used to build fast and interactive user interfaces…',
    content:
      'React is a JavaScript library developed by Facebook.\n\nIt helps build fast, responsive user interfaces by using components and a virtual DOM.\n\nReact allows developers to break large UIs into smaller reusable parts, making development efficient.',
  },
  {
    id: 2,
    title: 'Understanding Components',
    snippet: 'Components are the reusable building blocks of a React application…',
    content:
      'Components are independent building blocks in React.\n\nEach component manages its own structure and UI using JSX.\n\nThey improve reusability, readability, and organization in React applications.',
  },
]

function Home() {
  return (
    <div className="blog-container">
      <h1>Mini Blog - Home</h1>
      <p className="subtitle">Select a blog post to view the full article.</p>
      <div className="post-list">
        {posts.map((p) => (
          <div key={p.id} className="post-card">
            <h3>{p.title}</h3>
            <p className="snippet">{p.snippet}</p>
            <Link to={`/post/${p.id}`} className="read-more">
              Read Full Post →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
