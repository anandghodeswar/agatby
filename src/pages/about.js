import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Link style={{marginRight: `30px` }} to="/">Home</Link>
        <Link style={{marginRight: `30px` }} to="/about/">About</Link> 
        <Link to="/contact/">Contact</Link>

      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}