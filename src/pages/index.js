// import React from "react"

// export default function Home() {
//   return <div>Hello Anand!</div>
// }

import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link style={{marginRight: `30px` }} to="/">Home</Link>
      <Link style={{marginRight: `30px` }} to="/about/">About</Link> 
      <Link to="/contact/">Contact</Link>

      <Header headerText="Hello Gatsby!" />
      
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      
    </div>
  )
}