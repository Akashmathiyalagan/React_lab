import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <h3>Hi, click here to go to the pag: Post.jsx <Link to="/post">Go</Link></h3>
    </div>
  )
}

export default Home
