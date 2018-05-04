/**
 * Created by ryuki on 2018/05/03.
 */
import React from "react";
import Link from "gatsby-link"

export default ({data}) => {


  return (
    <div style={{marginTop: `0rem`}}>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2 style={{marginBottom: '2px', color: '#0099FF', fontSize: '1rem'}}>{node.frontmatter.title}</h2>
          </Link>
          <p style={{marginTop: `1px`, fontSize: '0.8rem'}}>{node.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: "blog"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD", locale: "ja")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`