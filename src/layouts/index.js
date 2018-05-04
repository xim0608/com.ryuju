import React from "react"
import Link from "gatsby-link"
import nyan_back from "./nyan_mini.jpg"


const ListLink = props =>
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to} style={{textDecoration: 'none', color: "white", textShadow: `none`, backgroundImage: 'none'}}>
      {props.children}
    </Link>
  </li>

export default ({children, data}) => (
  <div>
    <div>
      <div style={{
        backgroundImage: `url(${nyan_back})`,
        backgroundPosition: 'center center',
        backgroundRepeat: `no-repeat`
      }}>
        <div style={{margin: `0 auto`, maxWidth: 550, padding: `8rem 1rem 1rem 1rem`}}>
          <header style={{marginBottom: `2rem`}}>
            <Link to="/about"
                  style={{textDecoration: 'none', color: "white", textShadow: `none`, backgroundImage: 'none'}}>
              <h1 style={{color: "white"}}>@rykwd</h1>
            </Link>
            <ul style={{listStyle: `none`, float: `right`}}>
              <ListLink to="/">Blog</ListLink>
              <ListLink to="/about/">About</ListLink>
            </ul>
          </header>
        </div>
      </div>
    </div>
    <div style={{margin: `0 auto`, maxWidth: 550, padding: `0rem`, padding: `3rem 0`}}>
      <div style={{margin: `0 1rem 2.5rem 1rem`}}>
        {children()}
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HeaderQuery {
    file(relativePath: { eq: "IMG_0372.JPG" }) {
      absolutePath
    }
  }
`;

