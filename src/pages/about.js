import React from "react";
import Img from "gatsby-image";
import ghlogo from "./GitHub-Mark-32px.png"
import hatenalogo from "./hatenablog-logo.svg"

export default ({data}) => {
  return (
    <div>
      <div style={{display: `flex`, alignItems: `center`, margin: `0 auto 12px auto`}}>
        <Img resolutions={data.file.childImageSharp.resolutions} style={{flex: `0 0 96px`, margin: 0}}></Img>
        <div style={{flex: `1`, marginLeft: `18px`, padding: `12px`}}>
          <h1 style={{margin: `0 0 12px 0`, padding: `0`}}>Ryuki Wada</h1>
          <a href="https://github.com/xim0608" style={{backgroundImage: 'none', margin: 0}}><img src={ghlogo} style={{padding: '7px 5px', verticalAlign: `bottom`, marginBottom: 0}}/></a>
          <a href="http://xim0608.hateblo.jp/" style={{backgroundImage: 'none', margin: 0}}><img src={hatenalogo} width="48" style={{verticalAlign: `bottom`, marginBottom: 0}}/></a>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {category: {eq: "profile"}}) {
      html
    }
    file(relativePath: { eq: "nyan_s.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 96) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
