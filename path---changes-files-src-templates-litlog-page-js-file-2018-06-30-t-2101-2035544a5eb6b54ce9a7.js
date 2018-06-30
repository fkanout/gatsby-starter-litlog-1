webpackJsonp([40955883540694],{431:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"followed "},{type:"element",tagName:"a",properties:{href:"https://using-remark.gatsbyjs.org/custom-components/"},children:[{type:"text",value:"custom-components"}]},{type:"text",value:" to set up using custom components in markdown"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"diff"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"element",tagName:"span",properties:{className:["token","coord"]},children:[{type:"text",value:"@@ -1,11 +1,21 @@"}]},{type:"text",value:'\n import React from "react";\n'},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+import rehypeReact from "rehype-react";'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+import LitlogLink from "../components/litlog-link";'}]},{type:"text",value:"\n \n export default ({ data }) => {\n   const post = data.markdownRemark;\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+  const renderAst = new rehypeReact({"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+    createElement: React.createElement,"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+    components: { "}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+      "litlog-link": LitlogLink'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+    },"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+  }).Compiler;"}]},{type:"text",value:"\n   return (\n     <div>\n       <h1>{post.frontmatter.title}</h1>\n"},{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-      <div dangerouslySetInnerHTML={{ __html: post.html }} />"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+      {"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+        renderAst(post.htmlAst)"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+      }"}]},{type:"text",value:"\n     </div>\n   );\n };\n@@ -13,7 +23,7 @@ export default ({ data }) => {\n export const query = graphql`\n   query LitlogPageQuery($slug: String!) {\n     markdownRemark(fields: { slug: { eq: $slug } }) {\n"},{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-      html"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+      htmlAst"}]},{type:"text",value:"\n       frontmatter {\n         title\n       }"}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},frontmatter:{title:"Update"}}},pathContext:{slug:"/changes/files/src/templates/litlog-page.js.file/2018-06-30T2101/"}}}});
//# sourceMappingURL=path---changes-files-src-templates-litlog-page-js-file-2018-06-30-t-2101-2035544a5eb6b54ce9a7.js.map