webpackJsonp([0x6319d7006a1a],{512:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"added task-1 plan step-5"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"diff"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"text",value:'@@ -172,3 +172,144 @@ litlog created tasks/task-1 "added plan step-1 to step-4"\n git add src/pages\n git commit -m "set up litlog-cli, added request-1 spec, and task-1 plan step-1 to step-4"'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"+1. Follow "},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-six/"},children:[{type:"text",value:"part-six"}]},{type:"text",value:" of the [Gatsby.js Tutorial] so "},{type:"element",tagName:"litlog-link",properties:{to:"/"},children:[{type:"text",value:"litlog"}]},{type:"text",value:" pages can be listed.\n+`"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]},{type:"text",value:"bash\n+litlog updating tasks/task1\n+npm install --save gatsby-transformer-remark\n+git apply << EOF\n+--- a/sites/site-1/files/package.json\n++++ b/sites/site-1/files/package.json\n+@@ -7,6 +7,7 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby": "^1.9.247",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby-link": "^1.6.40",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby-plugin-react-helmet": "^2.0.10",\n++    "gatsby-transformer-remark": "^1.7.44",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"react-helmet": "^5.2.0"'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"},"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"keywords": [\n+EOF\n+litlog updated files/package.json "ran \'npm install --save gatsby-transformer-remark\' (following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-six/"},children:[{type:"text",value:"part-six"}]},{type:"text",value:" of the [Gatsby.js Tutorial])\"\n+# commit these files because I'm going to run another npm install\n+git add package* sites\n+git commit -m \"ran 'npm install --save gatsby-transformer-remark'\"\n+npm install --save gatsby-source-filesystem\n+git apply << EOF\n+--- a/sites/site-1/files/package.json\n++++ b/sites/site-1/files/package.json\n+@@ -7,6 +7,7 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby": "^1.9.247",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby-link": "^1.6.40",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby-plugin-react-helmet": "^2.0.10",\n++    "gatsby-source-filesystem": "^1.5.39",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"gatsby-transformer-remark": "^1.7.44",'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'"react-helmet": "^5.2.0"'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"},\n+EOF\n+litlog updated files/package.json \"ran 'npm install --save gatsby-source-filesystem' (following "},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-six/"},children:[{type:"text",value:"part-six"}]},{type:"text",value:' of the [Gatsby.js Tutorial])"\n+litlog updating files/gatsby-config.js\n+# update file\n+git apply << EOF\n+--- a/sites/site-1/files/gatsby-config.js\n++++ b/sites/site-1/files/gatsby-config.js\n+@@ -2,6 +2,16 @@ module.exports = {'}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"siteMetadata: {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"title: 'Gatsby Default Starter',"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"},\n+-  plugins: ['gatsby-plugin-react-helmet'],\n++  plugins: [\n++    'gatsby-plugin-react-helmet',\n++    {\n++      resolve: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gatsby-source-filesystem"}]},{type:"text",value:",\n++      options: {\n++        name: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"litlog"}]},{type:"text",value:",\n++        path: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"${__dirname}/src/pages/litlog"}]},{type:"text",value:",\n++      },\n++    },\n++    "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gatsby-transformer-remark"}]},{type:"text",value:",\n++  ],"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"pathPrefix: '/gatsby-starter-litlog'"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:'}\n+EOF\n+litlog updated files/gatsby-config.js "following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-six/"},children:[{type:"text",value:"part-six"}]},{type:"text",value:' of the [Gatsby.js Tutorial]"\n+# restart dev server\n+npm run site-develop\n+'},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"+Check out this query in [GraphiQL](http://localhost:8000/___graphql):\n+"}]},{type:"text",value:"graphql\n+query IndexQuery {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"allMarkdownRemark(sort: {fields: [fileAbsolutePath] }) {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"totalCount"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"edges {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"node {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"id"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"fileAbsolutePath"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"frontmatter {"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"title"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"}\n+}\n+"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'+Create the index page for the <litlog-link to="/">litlog</litlog-link> folder folder. Right now it will just list the `fileAbsolutePath` of the markdown files and the `title` from the frontmatter.\n+'}]},{type:"text",value:"bash\n+litlog creating files/src/pages/litlog/index.js\n+# edit file and check out "},{type:"element",tagName:"a",properties:{href:"http://localhost:8000/litlog/"},children:[{type:"text",value:"http://localhost:8000/litlog/"}]},{type:"text",value:"\n+touch "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"blank\n+git apply << EOF\n+--- a/"}]},{type:"text",value:'blank\n++++ b/./src/pages/litlog/index.js\n+@@ -0,0 +1,46 @@\n++import React from "react";\n++import Link from "gatsby-link";\n++\n++export default ({ data }) => {\n++  return (\n++    '}]},{type:"element",tagName:"div",properties:{},children:[{type:"text",value:"\n++      \n++        \n++          \n++            \n++            \n++          \n++        \n++        \n++          {data.allMarkdownRemark.edges.map(({ node }, index) =>\n++            \n++              \n++              \n++            \n++          )}\n++        \n++      "},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"fileAbsolutePath"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"title"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{key:"{index}"},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"\n++                {node.fileAbsolutePath}\n++              "}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"\n++                {node.frontmatter.title}\n++              "}]}]}]}]},{type:"text",value:"\n++    "}]},{type:"text",value:"\n++  );\n++};\n++\n++export const query = graphql"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"++  query IndexQuery {\n++    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {\n++      totalCount\n++      edges {\n++        node {\n++          id\n++          fileAbsolutePath\n++          frontmatter {\n++            title\n++          }\n++        }\n++      }\n++    }\n++  }\n++"}]},{type:"text",value:';\n+EOF\n+rm __blank\n+litlog created files/src/pages/litlog/index.js "following '},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/part-six/"},children:[{type:"text",value:"part-six"}]},{type:"text",value:' of the [Gatsby.js Tutorial], simplified to return fewer/different fields and use a table"\n+litlog updated tasks/task-1 "added task-1 plan step-5"\n+git add .\n+git commit -m "added task-1 plan step-5"\n+`'},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]},{type:"element",tagName:"p",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Update"}}},pathContext:{slug:"/sites/site-1/changes/tasks/task-1/2018-06-26T1111/"}}}});
//# sourceMappingURL=path---sites-site-1-changes-tasks-task-1-2018-06-26-t-1111-eef1dbeaba436dbc664b.js.map