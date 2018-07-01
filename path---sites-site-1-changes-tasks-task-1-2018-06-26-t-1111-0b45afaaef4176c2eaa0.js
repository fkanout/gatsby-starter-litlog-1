webpackJsonp([0x6319d7006a1a],{432:function(t,e){t.exports={data:{markdownRemark:{html:'<p>added task-1 plan step-5</p>\n<div class="gatsby-highlight" data-language="diff">\n      <pre class="language-diff"><code class="language-diff">@@ -172,3 +172,144 @@ litlog created tasks/task-1 "added plan step-1 to step-4"\n git add src/pages\n git commit -m "set up litlog-cli, added request-1 spec, and task-1 plan step-1 to step-4"</code></pre>\n      </div>\n<p>+1. Follow <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial] so <litlog-link to="/">litlog</litlog-link> pages can be listed.\n+`<code class="language-text"></code>bash\n+litlog updating tasks/task1\n+npm install --save gatsby-transformer-remark\n+git apply &#x3C;&#x3C; EOF\n+--- a/sites/site-1/files/package.json\n++++ b/sites/site-1/files/package.json\n+@@ -7,6 +7,7 @@</p>\n<ul>\n<li>"gatsby": "^1.9.247",</li>\n<li>"gatsby-link": "^1.6.40",</li>\n<li>"gatsby-plugin-react-helmet": "^2.0.10",\n++    "gatsby-transformer-remark": "^1.7.44",</li>\n<li>"react-helmet": "^5.2.0"</li>\n<li>},</li>\n<li>"keywords": [\n+EOF\n+litlog updated files/package.json "ran \'npm install --save gatsby-transformer-remark\' (following <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial])"\n+# commit these files because I\'m going to run another npm install\n+git add package* sites\n+git commit -m "ran \'npm install --save gatsby-transformer-remark\'"\n+npm install --save gatsby-source-filesystem\n+git apply &#x3C;&#x3C; EOF\n+--- a/sites/site-1/files/package.json\n++++ b/sites/site-1/files/package.json\n+@@ -7,6 +7,7 @@</li>\n<li>"gatsby": "^1.9.247",</li>\n<li>"gatsby-link": "^1.6.40",</li>\n<li>"gatsby-plugin-react-helmet": "^2.0.10",\n++    "gatsby-source-filesystem": "^1.5.39",</li>\n<li>"gatsby-transformer-remark": "^1.7.44",</li>\n<li>"react-helmet": "^5.2.0"</li>\n<li>},\n+EOF\n+litlog updated files/package.json "ran \'npm install --save gatsby-source-filesystem\' (following <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial])"\n+litlog updating files/gatsby-config.js\n+# update file\n+git apply &#x3C;&#x3C; EOF\n+--- a/sites/site-1/files/gatsby-config.js\n++++ b/sites/site-1/files/gatsby-config.js\n+@@ -2,6 +2,16 @@ module.exports = {</li>\n<li>siteMetadata: {</li>\n<li>title: \'Gatsby Default Starter\',</li>\n<li>},\n+-  plugins: [\'gatsby-plugin-react-helmet\'],\n++  plugins: [\n++    \'gatsby-plugin-react-helmet\',\n++    {\n++      resolve: <code class="language-text">gatsby-source-filesystem</code>,\n++      options: {\n++        name: <code class="language-text">litlog</code>,\n++        path: <code class="language-text">${__dirname}/src/pages/litlog</code>,\n++      },\n++    },\n++    <code class="language-text">gatsby-transformer-remark</code>,\n++  ],</li>\n<li>pathPrefix: \'/gatsby-starter-litlog\'</li>\n<li>}\n+EOF\n+litlog updated files/gatsby-config.js "following <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial]"\n+# restart dev server\n+npm run site-develop\n+<code class="language-text">+Check out this query in [GraphiQL](http://localhost:8000/___graphql):\n+</code>graphql\n+query IndexQuery {</li>\n<li>allMarkdownRemark(sort: {fields: [fileAbsolutePath] }) {</li>\n<li>totalCount</li>\n<li>edges {</li>\n<li>node {</li>\n<li>id</li>\n<li>fileAbsolutePath</li>\n<li>frontmatter {</li>\n<li>title</li>\n<li>}</li>\n<li>}</li>\n<li>}</li>\n<li>\n<p>}\n+}\n+<code class="language-text">+Create the index page for the &lt;litlog-link to=&quot;/&quot;&gt;litlog&lt;/litlog-link&gt; folder folder. Right now it will just list the `fileAbsolutePath` of the markdown files and the `title` from the frontmatter.\n+</code>bash\n+litlog creating files/src/pages/litlog/index.js\n+# edit file and check out <a href="http://localhost:8000/litlog/">http://localhost:8000/litlog/</a>\n+touch <strong>blank\n+git apply &#x3C;&#x3C; EOF\n+--- a/</strong>blank\n++++ b/./src/pages/litlog/index.js\n+@@ -0,0 +1,46 @@\n++import React from "react";\n++import Link from "gatsby-link";\n++\n++export default ({ data }) => {\n++  return (\n++    <div>\n++      <table>\n++        <thead>\n++          <tr>\n++            <th>fileAbsolutePath</th>\n++            <th>title</th>\n++          </tr>\n++        </thead>\n++        <tbody>\n++          {data.allMarkdownRemark.edges.map(({ node }, index) =>\n++            <tr key={index}>\n++              <td>\n++                {node.fileAbsolutePath}\n++              </td>\n++              <td>\n++                {node.frontmatter.title}\n++              </td>\n++            </tr>\n++          )}\n++        </tbody>\n++      </table>\n++    </div>\n++  );\n++};\n++\n++export const query = graphql<code class="language-text">++  query IndexQuery {\n++    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {\n++      totalCount\n++      edges {\n++        node {\n++          id\n++          fileAbsolutePath\n++          frontmatter {\n++            title\n++          }\n++        }\n++      }\n++    }\n++  }\n++</code>;\n+EOF\n+rm __blank\n+litlog created files/src/pages/litlog/index.js "following <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial], simplified to return fewer/different fields and use a table"\n+litlog updated tasks/task-1 "added task-1 plan step-5"\n+git add .\n+git commit -m "added task-1 plan step-5"\n+`<code class="language-text"></code></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"></code></pre>\n      </div>\n</li>\n</ul>',frontmatter:{title:"Update"}}},pathContext:{slug:"/sites/site-1/changes/tasks/task-1/2018-06-26T1111/"}}}});
//# sourceMappingURL=path---sites-site-1-changes-tasks-task-1-2018-06-26-t-1111-0b45afaaef4176c2eaa0.js.map