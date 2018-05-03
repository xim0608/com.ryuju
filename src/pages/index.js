/**
 * Created by ryuki on 2018/05/03.
 */
import React from "react";
import Link from "gatsby-link"

export default ({data}) => {

  // const datas = data.allMarkdownRemark.edges.filter(function(el, index, array){return (!el.id.match(/profile/))});

  return (
    <div style={{marginTop: `3rem`}}>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id} style={{marginBottom: `4rem`}}>
          <Link to={node.fields.slug}>
            <h2 style={{marginBottom: '2px', color: '#0099FF'}}>{node.frontmatter.title}</h2>
          </Link>
          <p style={{marginTop: `1px`, float: `right`}}>{node.frontmatter.date}</p>
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