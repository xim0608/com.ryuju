import React from "react";
import Img from "gatsby-image";
import ghlogo from "./GitHub-Mark-32px.png"
import hatenalogo from "./hatenablog-logo.svg"

export default ({data}) => (
  <div>
    <h1>Ryuki Wada</h1>
    <a href="https://github.com/xim0608"><img src={ghlogo} style={{padding: '7px 5px'}}/></a>
    <a href="http://xim0608.hateblo.jp/"><img src={hatenalogo} width="48"/></a>
    <p>I'm Senior Student in Kanagawa, Japan</p>
  </div>
);

