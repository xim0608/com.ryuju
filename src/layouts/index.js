import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to} style={{textDecoration: 'none', color:"#696969", backgroundImage: 'none',}}>
      {props.children}
    </Link>
  </li>

export default ({children}) => (
  <div style={{margin: `0 auto`, maxWidth: 550, padding: `8rem 1rem`}}>
    <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Blog</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
    <h1 style={{color:"#696969"}}>@rykwd</h1>
    {children()}
  </div>
)
