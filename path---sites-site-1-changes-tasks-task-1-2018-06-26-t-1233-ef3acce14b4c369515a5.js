webpackJsonp([9121814038292],{473:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"added plan step-6"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"diff"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"text",value:'@@ -313,3 +313,136 @@ litlog updated tasks/task-1 "added task-1 plan step-5"\n git add .\n git commit -m "added task-1 plan step-5"'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"+1. Follow "},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-seven/"},children:[{type:"text",value:"part-seven"}]},{type:"text",value:" of the [Gatsby.js Tutorial] so "},{type:"element",tagName:"litlog-link",properties:{to:"/"},children:[{type:"text",value:"litlog"}]},{type:"text",value:" pages can be viewed. First create "},{type:"element",tagName:"litlog-link",properties:{to:"/files/gatsby-node.js.file"},children:[{type:"text",value:"gatsby-node.js"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gatsby-node.js"}]},{type:"text",value:" except use "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/litlog${slug}"}]},{type:"text",value:" for the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"value"}]},{type:"text",value:" of "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"createNodeField"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"litlog-page.js"}]},{type:"text",value:" instead of "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"blog-post.js"}]},{type:"text",value:". Then create "},{type:"element",tagName:"litlog-link",properties:{to:"/files/src/templates/litlog-page.js.file"},children:[{type:"text",value:"litlog-page.js"}]},{type:"text",value:" and use "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"LitlogPageQuery"}]},{type:"text",value:" instead of "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"BlogPostQuery"}]},{type:"text",value:". Modify "},{type:"element",tagName:"litlog-link",properties:{to:"/files/src/pages/litlog/index.js.file"},children:[{type:"text",value:"the litlog index page"}]},{type:"text",value:" to add "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'import Link from "gatsby-link";'}]},{type:"text",value:", replace "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fileAbsolutePath"}]},{type:"text",value:" with "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"link"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"{node.fileAbsolutePath}"}]},{type:"text",value:" with "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<Link to={node.fields.slug}>{node.fields.slug}</Link>"}]},{type:"text",value:", and change the graphql to add the slug.\n+`"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]},{type:"text",value:"bash\n+litlog updating tasks/task-1\n+litlog updating files/gatsby-node.js\n+# update file\n+git apply << EOF\n+--- a/sites/site-1/files/gatsby-node.js\n++++ b/sites/site-1/files/gatsby-node.js\n+@@ -4,4 +4,48 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/docs/node-apis/"},children:[{type:"text",value:"https://www.gatsbyjs.org/docs/node-apis/"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"*/"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"+\n+- // You can delete this file if you're not using it\n+\\ No newline at end of file\n++const path = require("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"path"}]},{type:"text",value:");\n++const { createFilePath } = require("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gatsby-source-filesystem"}]},{type:"text",value:");\n++\n++exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {\n++  const { createNodeField } = boundActionCreators\n++  if (node.internal.type === "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"MarkdownRemark"}]},{type:"text",value:") {\n++    const slug = createFilePath({ node, getNode, basePath: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"pages"}]},{type:"text",value:" })\n++    createNodeField({\n++      node,\n++      name: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"slug"}]},{type:"text",value:",\n++      value: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"${slug}"}]},{type:"text",value:",\n++    })\n++  }\n++};\n++\n++exports.createPages = ({ graphql, boundActionCreators }) => {\n++  const { createPage } = boundActionCreators\n++  return new Promise((resolve, reject) => {\n++    graphql("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"++      {\n++        allMarkdownRemark {\n++          edges {\n++            node {\n++              fields {\n++                slug\n++              }\n++            }\n++          }\n++        }\n++      }\n++"}]},{type:"text",value:").then(result => {\n++      result.data.allMarkdownRemark.edges.forEach(({ node }) => {\n++        createPage({\n++          path: node.fields.slug,\n++          component: path.resolve("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"./src/templates/litlog-page.js"}]},{type:"text",value:'),\n++          context: {\n++            // Data passed to context is available in page queries as GraphQL variables.\n++            slug: node.fields.slug,\n++          },\n++        })\n++      })\n++      resolve()\n++    })\n++  })\n++};\n+EOF\n+litlog updated files/gatsby-node.js "following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-seven/"},children:[{type:"text",value:"part-seven"}]},{type:"text",value:" of the [Gatsby.js Tutorial, except using "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"litlog-page.js"}]},{type:"text",value:" instead of "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"blog-post.js"}]},{type:"text",value:'"\n+litlog creating files/src/templates/litlog-page.js\n+# create file\n+touch '},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"blank\n+git apply << EOF\n+--- a/"}]},{type:"text",value:'blank\n++++ b/./src/templates/litlog-page.js\n+@@ -0,0 +1,22 @@\n++import React from "react";\n++\n++export default ({ data }) => {\n++  const post = data.markdownRemark;\n++  return (\n++    '},{type:"element",tagName:"div",properties:{},children:[{type:"text",value:"\n++      "},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"{post.frontmatter.title}"}]},{type:"text",value:"\n++      <div dangerouslySetInnerHTML={{ __html: post.html }} />\n++    "}]},{type:"text",value:"\n++  );\n++};\n++\n++export const query = graphql"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"++  query LitlogPageQuery($slug: String!) {\n++    markdownRemark(fields: { slug: { eq: $slug } }) {\n++      html\n++      frontmatter {\n++        title\n++      }\n++    }\n++  }\n++"}]},{type:"text",value:';\n+EOF\n+rm __blank\n+litlog created files/src/templates/litlog-page.js "following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-seven/"},children:[{type:"text",value:"part-seven"}]},{type:"text",value:" of the [Gatsby.js Tutorial, except use "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"LitlogPageQuery"}]},{type:"text",value:' instead of *BlogPostQuery"\n+# restart dev server\n+litlog updating files/src/pages/litlog/index.js\n+# edit file\n+git apply << EOF\n+--- a/src/pages/litlog/index.js\n++++ b/src/pages/litlog/index.js\n+@@ -7,7 +7,7 @@ export default ({ data }) => {'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n+-            \n++            \n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n+@@ -15,7 +15,7 @@ export default ({ data }) => {\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"{data.allMarkdownRemark.edges.map(({ node }, index) =>"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"fileAbsolutePath"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"link"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"title"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{key:"{index}"},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"\n+-                {node.fileAbsolutePath}\n++                "},{type:"element",tagName:"link",properties:{to:"{node.fields.slug}"},children:[]},{type:"text",value:"{node.fields.slug}\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"\n\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"{node.frontmatter.title}\n+@@ -39,6 +39,9 @@ export const query = graphql`"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"frontmatter {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"title"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}\n++          fields {\n++            slug\n++          }"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'}\n+EOF\n+litlog updated files/src/pages/litlog/index.js "following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-seven/"},children:[{type:"text",value:"part-seven"}]},{type:"text",value:' of the [Gatsby.js Tutorial], modify to get the slug in the graphql query and use in a Link"\n+litlog updated tasks/task-1 "added plan step-6"\n+git add .\n+git commit -m "added task-1 plan step-6"\n+`'},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}]}]}]}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Update"}}},pathContext:{slug:"/sites/site-1/changes/tasks/task-1/2018-06-26T1233/"}}}});
//# sourceMappingURL=path---sites-site-1-changes-tasks-task-1-2018-06-26-t-1233-ef3acce14b4c369515a5.js.map