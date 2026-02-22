import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from './Home'

function Post() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="blog-container">
        <p>Post not found</p>
        <Link to="/" className="back">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <Link to="/" className="back">
        ← Back to Home
      </Link>
      <div className="post-card full">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default Post
