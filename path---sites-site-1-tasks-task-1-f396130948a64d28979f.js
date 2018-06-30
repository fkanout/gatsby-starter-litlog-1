webpackJsonp([29239442616916],{441:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>Plan</h2>\n<ol>\n<li>create @litlogo/litlog-cli to automate the documentation of changes.</li>\n<li>\n<p>create new <a href="https://www.gatsbyjs.org/">Gatsby</a> site from <a href="https://github.com/gatsbyjs/gatsby-starter-default">the default starter</a></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># already have npm and git installed</span>\n<span class="token comment"># run in a bash terminal</span>\n<span class="token function">npm</span> <span class="token function">install</span> --global gatsby-cli\ngatsby_new_timestamp<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%dT%H%M<span class="token variable">)</span></span>\ngatsby new gatsby-starter-temp https://github.com/gatsbyjs/gatsby-starter-default\n<span class="token keyword">echo</span> <span class="token variable">$gatsby_new_timestamp</span>\n<span class="token comment"># 2018-06-24T0823</span>\n<span class="token function">cd</span> gatsby-starter-litlog\n<span class="token function">rm</span> -r <span class="token punctuation">..</span>/gatsby-starter-temp/node_modules\n<span class="token function">rm</span> -r node_modules\n<span class="token comment"># node_modules/</span>\n<span class="token comment"># packages/*/lib</span>\n<span class="token function">cp</span> -R <span class="token punctuation">..</span>/gatsby-starter-temp/* <span class="token keyword">.</span>\n<span class="token function">cp</span> <span class="token punctuation">..</span>/gatsby-starter-temp/.gitignore <span class="token keyword">.</span>\n<span class="token function">cp</span> <span class="token punctuation">..</span>/gatsby-starter-temp/.prettierrc <span class="token keyword">.</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save @litlog/litlog-cli\n<span class="token comment"># move everything except .gitignore to site folder</span>\n<span class="token function">npm</span> <span class="token function">install</span> -g @litlog/litlog-cli@0.0.4\ngatsby develop\n<span class="token comment"># now move all the files except .gitignore</span>\n<span class="token comment"># .gitignore</span>\n<span class="token comment"># .prettierrc</span>\n<span class="token comment"># LICENSE</span>\n<span class="token comment"># README.md</span>\n<span class="token comment"># gatsby-browser.js</span>\n<span class="token comment"># gatsby-config.js</span>\n<span class="token comment"># gatsby-node.js</span>\n<span class="token comment"># gatsby-ssr.js</span>\n<span class="token comment"># package-lock.json</span>\n<span class="token comment"># package.json</span>\n<span class="token comment"># src/components/header.js</span>\n<span class="token comment"># src/layouts/index.css</span>\n<span class="token comment"># src/layouts/index.js</span>\n<span class="token comment"># src/pages/404.js</span>\n<span class="token comment"># src/pages/index.js</span>\n<span class="token comment"># src/pages/page-2.js</span>\n<span class="token function">export</span> LITLOG_SITE<span class="token operator">=</span>site-1\n<span class="token comment"># incorporate into \'litlog init\' command</span>\n<span class="token function">mkdir</span> sites/\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/files/src\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/files/src/components\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/files/src/layouts\n<span class="token function">mkdir</span> sites/<span class="token variable">$LITLOG_SITE</span>/pages\n<span class="token comment">#</span>\n<span class="token function">mv</span> .prettierrc sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> LICENSE sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> README.md sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> gatsby-browser.js sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> gatsby-config.js sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> gatsby-node.js sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> gatsby-ssr.js sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> package-lock.json sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> package.json sites/<span class="token variable">$LITLOG_SITE</span>/files\n<span class="token function">mv</span> src/components/header.js sites/<span class="token variable">$LITLOG_SITE</span>/files/src/components/\n<span class="token function">mv</span> src/layouts/index.css sites/<span class="token variable">$LITLOG_SITE</span>/files/src/layouts/\n<span class="token function">mv</span> src/layouts/index.js sites/<span class="token variable">$LITLOG_SITE</span>/files/src/layouts/\n<span class="token function">mv</span> src/pages/404.js sites/<span class="token variable">$LITLOG_SITE</span>/files/src/pages\n<span class="token function">mv</span> src/pages/index.js sites/<span class="token variable">$LITLOG_SITE</span>/files/src/pages\n<span class="token function">mv</span> src/pages/page-2.js sites/<span class="token variable">$LITLOG_SITE</span>/files/src/pages\n<span class="token comment"># put into changes</span>\n<span class="token function">export</span> gatsby_new_timestamp<span class="token operator">=</span>2018-06-24T0823\nlitlog created files/.prettierrc <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/LICENSE <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/README.md <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\n<span class="token comment"># I\'m leaving out package-lock.json because it\'s automatically generated.</span>\nlitlog created files/gatsby-browser.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/gatsby-config.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/gatsby-node.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/gatsby-ssr.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/package.json <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/components/header.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/layouts/index.css <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/layouts/index.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/pages/404.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/pages/index.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\nlitlog created files/src/pages/page-2.js <span class="token string">"Ran \'gatsby new <span class="token variable">$LITLOG_SITE</span> https://github.com/gatsbyjs/gatsby-starter-default\'"</span> <span class="token variable">$gatsby_new_timestamp</span>\n<span class="token comment"># commit changes</span>\n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">"initial setup from gatsby-starter-default"</span>\n<span class="token comment">#</span>\n<span class="token comment"># alter .gitignore and package.json</span>\n<span class="token function">cp</span> sites/<span class="token variable">$LITLOG_SITE</span>/files/package.json <span class="token keyword">.</span>\n<span class="token comment"># modify .gitignore as below</span>\n<span class="token comment"># modify scripts section of packages.json as below</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev cross-var\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev npm-run-parallel\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev gh-pages\n<span class="token comment">#</span>\n<span class="token comment"># make sure development site runs</span>\n<span class="token function">npm</span> run site-develop\n<span class="token comment"># make sure site builds</span>\n<span class="token function">npm</span> run build\n<span class="token function">git</span> add .gitignore\n<span class="token function">git</span> add package*\n<span class="token function">git</span> commit -m <span class="token string">"set up for site files"</span>\n<span class="token comment"># deploy site</span>\n<span class="token function">npm</span> run deploy</code></pre>\n      </div>\n<p><em>.gitignore</em> additions:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"># Built source for packages\npackages/*/lib\n#\n# Site files\n/*\n!LICENSE\n!package.json\n!package-lock.json\n!README.md\n!sites\n!src\n/src/*\n!src/pages\n/src/pages/*\n!src/pages/litlog</code></pre>\n      </div>\n<p><em>package.json</em> modifications:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n<span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"npm run site &amp;&amp; gatsby build"</span><span class="token punctuation">,</span>\n<span class="token property">"develop"</span><span class="token operator">:</span> <span class="token string">"gatsby develop"</span><span class="token punctuation">,</span>\n<span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write \'src/**/*.js\'"</span><span class="token punctuation">,</span>\n<span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>\n<span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"npm run site &amp;&amp; gatsby build --prefix-paths &amp;&amp; gh-pages -d public"</span><span class="token punctuation">,</span>\n<span class="token property">"site"</span><span class="token operator">:</span> <span class="token string">"cross-var babel sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,package.json,package-lock.json,README.md"</span><span class="token punctuation">,</span>\n<span class="token property">"site-develop"</span><span class="token operator">:</span> <span class="token string">"npm-run-parallel site-watch develop"</span><span class="token punctuation">,</span>\n<span class="token property">"site-watch"</span><span class="token operator">:</span> <span class="token string">"cross-var babel -w sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,package.json,package-lock.json,README.md"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n</li>\n<li>\n<p>update <em>pathPrefix</em> in <em>gatsby-config.js</em>.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run site-develop <span class="token comment">#in a different terminal</span>\nlitlog updating files/gatsby-config.js\n<span class="token comment"># edit file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/gatsby-config.js\n>+++ b/sites/site-1/files/gatsby-config.js\n>@@ -3,4 +3,5 @@ module.exports = {\n>     title: \'Gatsby Default Starter\',\n>   },\n>   plugins: [\'gatsby-plugin-react-helmet\'],\n>+  pathPrefix: \'/gatsby-starter-litlog\'\n> }\nEOF</span>\n<span class="token comment"># note the > above which is not part of the actual command but included</span>\n<span class="token comment"># because there\'s an issue rendering diff syntax</span>\nlitlog updated files/gatsby-config.js <span class="token string">"added pathPrefix"</span>\n<span class="token function">npm</span> run build\n<span class="token function">npm</span> run deploy</code></pre>\n      </div>\n</li>\n<li>\n<p>create <litlog-link to="/requests/request-1">request-1</litlog-link>, <litlog-link to="/tasks/task-1">task-1</litlog-link>, and commit changes.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">export</span> LITLOG_SITE<span class="token operator">=</span>site-1\nlitlog creating requests/request-1\n<span class="token comment"># update request-1 with specification</span>\nlitlog created requests/request-1 <span class="token string">"added specification"</span>\nlitlog creating tasks/task-1\n<span class="token comment"># update task-1 with plan including setting title, request, and status</span>\nlitlog created tasks/task-1 <span class="token string">"added plan step-1 to step-4"</span>\n<span class="token function">git</span> add src/pages\n<span class="token function">git</span> commit -m <span class="token string">"set up litlog-cli, added request-1 spec, and task-1 plan step-1 to step-4"</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Follow <a href="https://www.gatsbyjs.org/tutorial/part-six/">part-six</a> of the [Gatsby.js Tutorial] so <litlog-link to="/">litlog</litlog-link> pages can be listed.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updating tasks/task1\n<span class="token function">npm</span> <span class="token function">install</span> --save gatsby-transformer-remark\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/package.json\n>+++ b/sites/site-1/files/package.json\n>@@ -7,6 +7,7 @@\n>     "gatsby": "^1.9.247",\n>     "gatsby-link": "^1.6.40",\n>     "gatsby-plugin-react-helmet": "^2.0.10",\n>+    "gatsby-transformer-remark": "^1.7.44",\n>     "react-helmet": "^5.2.0"\n>   },\n>   "keywords": [\nEOF</span>\nlitlog updated files/package.json <span class="token string">"ran \'npm install --save gatsby-transformer-remark\' (following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial])"</span>\n<span class="token comment"># commit these files because I\'m going to run another npm install</span>\n<span class="token function">git</span> add package* sites\n<span class="token function">git</span> commit -m <span class="token string">"ran \'npm install --save gatsby-transformer-remark\'"</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save gatsby-source-filesystem\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/package.json\n>+++ b/sites/site-1/files/package.json\n>@@ -7,6 +7,7 @@\n>     "gatsby": "^1.9.247",\n>     "gatsby-link": "^1.6.40",\n>     "gatsby-plugin-react-helmet": "^2.0.10",\n>+    "gatsby-source-filesystem": "^1.5.39",\n>     "gatsby-transformer-remark": "^1.7.44",\n>     "react-helmet": "^5.2.0"\n>   },\nEOF</span>\nlitlog updated files/package.json <span class="token string">"ran \'npm install --save gatsby-source-filesystem\' (following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial])"</span>\nlitlog updating files/gatsby-config.js\n<span class="token comment"># update file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/gatsby-config.js\n>+++ b/sites/site-1/files/gatsby-config.js\n>@@ -2,6 +2,16 @@ module.exports = {\n>   siteMetadata: {\n>     title: \'Gatsby Default Starter\',\n>   },\n>-  plugins: [\'gatsby-plugin-react-helmet\'],\n>+  plugins: [\n>+    \'gatsby-plugin-react-helmet\',\n>+    {\n>+      resolve: <span class="token variable"><span class="token variable">`</span>gatsby-source-filesystem<span class="token variable">`</span></span>,\n>+      options: {\n>+        name: <span class="token variable"><span class="token variable">`</span>litlog<span class="token variable">`</span></span>,\n>+        path: <span class="token variable"><span class="token variable">`</span>$<span class="token punctuation">{</span>__dirname<span class="token punctuation">}</span>/src/pages/litlog<span class="token variable">`</span></span>,\n>+      },\n>+    },\n>+    <span class="token variable"><span class="token variable">`</span>gatsby-transformer-remark<span class="token variable">`</span></span>,\n>+  ],\n>   pathPrefix: \'/gatsby-starter-litlog\'\n> }\nEOF</span>\nlitlog updated files/gatsby-config.js <span class="token string">"following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial]"</span>\n<span class="token comment"># restart dev server</span>\n<span class="token function">npm</span> run site-develop</code></pre>\n      </div>\n<p>Check out this query in <a href="http://localhost:8000/___graphql">GraphiQL</a>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> IndexQuery <span class="token punctuation">{</span>\nallMarkdownRemark<span class="token punctuation">(</span><span class="token attr-name">sort</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token attr-name">fields</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>fileAbsolutePath<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\ntotalCount\nedges <span class="token punctuation">{</span>\n  node <span class="token punctuation">{</span>\n    id\n    fileAbsolutePath\n    frontmatter <span class="token punctuation">{</span>\n      title\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Create the index page for the <litlog-link to="/">litlog</litlog-link> folder folder. Right now it will just list the <em>fileAbsolutePath</em> of the markdown files and the <em>title</em> from the frontmatter.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog creating files/src/pages/litlog/index.js\n<span class="token comment"># edit file and check out http://localhost:8000/litlog/</span>\n<span class="token function">touch</span> __blank\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/__blank\n>+++ b/./src/pages/litlog/index.js\n>@@ -0,0 +1,46 @@\n>+import React from "react";\n>+import Link from "gatsby-link";\n>+\n>+export default ({ data }) => {\n>+  return (\n>+    &lt;div>\n>+      &lt;table>\n>+        &lt;thead>\n>+          &lt;tr>\n>+            &lt;th>fileAbsolutePath&lt;/th>\n>+            &lt;th>title&lt;/th>\n>+          &lt;/tr>\n>+        &lt;/thead>\n>+        &lt;tbody>\n>+          {data.allMarkdownRemark.edges.map(({ node }, index) =>\n>+            &lt;tr key={index}>\n>+              &lt;td>\n>+                {node.fileAbsolutePath}\n>+              &lt;/td>\n>+              &lt;td>\n>+                {node.frontmatter.title}\n>+              &lt;/td>\n>+            &lt;/tr>\n>+          )}\n>+        &lt;/tbody>\n>+      &lt;/table>\n>+    &lt;/div>\n>+  );\n>+};\n>+\n>+export const query = graphql<span class="token variable"><span class="token variable">`</span>\n<span class="token operator">></span>+  query IndexQuery <span class="token punctuation">{</span>\n<span class="token operator">></span>+    allMarkdownRemark<span class="token punctuation">(</span>sort: <span class="token punctuation">{</span> fields: <span class="token punctuation">[</span>fileAbsolutePath<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">></span>+      totalCount\n<span class="token operator">></span>+      edges <span class="token punctuation">{</span>\n<span class="token operator">></span>+        node <span class="token punctuation">{</span>\n<span class="token operator">></span>+          <span class="token function">id</span>\n<span class="token operator">></span>+          fileAbsolutePath\n<span class="token operator">></span>+          frontmatter <span class="token punctuation">{</span>\n<span class="token operator">></span>+            title\n<span class="token operator">></span>+          <span class="token punctuation">}</span>\n<span class="token operator">></span>+        <span class="token punctuation">}</span>\n<span class="token operator">></span>+      <span class="token punctuation">}</span>\n<span class="token operator">></span>+    <span class="token punctuation">}</span>\n<span class="token operator">></span>+  <span class="token punctuation">}</span>\n<span class="token operator">></span>+<span class="token variable">`</span></span>;\nEOF</span>\n<span class="token function">rm</span> __blank\nlitlog created files/src/pages/litlog/index.js <span class="token string">"following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial], simplified to return fewer/different fields and use a table"</span>\nlitlog updated tasks/task-1 <span class="token string">"added task-1 plan step-5"</span>\n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">"added task-1 plan step-5"</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Follow <a href="https://www.gatsbyjs.org/tutorial/part-seven/">part-seven</a> of the [Gatsby.js Tutorial] so <litlog-link to="/">litlog</litlog-link> pages can be viewed. First create <litlog-link to="/files/gatsby-node.js.file">gatsby-node.js</litlog-link> <em>gatsby-node.js</em> except use <em>/litlog${slug}</em> for the <em>value</em> of <em>createNodeField</em> and <em>litlog-page.js</em> instead of <em>blog-post.js</em>. Then create <litlog-link to="/files/src/templates/litlog-page.js.file">litlog-page.js</litlog-link> and use <em>LitlogPageQuery</em> instead of <em>BlogPostQuery</em>. Modify <litlog-link to="/files/src/pages/litlog/index.js.file">the litlog index page</litlog-link> to add <em>import Link from "gatsby-link";</em>, replace <em>fileAbsolutePath</em> with <em>link</em>, <em>{node.fileAbsolutePath}</em> with <em><Link to={node.fields.slug}>{node.fields.slug}</Link></em>, and change the graphql to add the slug.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updating tasks/task-1\nlitlog updating files/gatsby-node.js\n<span class="token comment"># update file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/gatsby-node.js\n>+++ b/sites/site-1/files/gatsby-node.js\n>@@ -4,4 +4,48 @@\n>  * See: https://www.gatsbyjs.org/docs/node-apis/\n>  */\n>\n>- // You can delete this file if you\'re not using it\n>\\ No newline at end of file\n>+const path = require(<span class="token variable"><span class="token variable">`</span>path<span class="token variable">`</span></span>);\n>+const { createFilePath } = require(<span class="token variable"><span class="token variable">`</span>gatsby-source-filesystem<span class="token variable">`</span></span>);\n>+\n>+exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {\n>+  const { createNodeField } = boundActionCreators\n>+  if (node.internal.type === <span class="token variable"><span class="token variable">`</span>MarkdownRemark<span class="token variable">`</span></span>) {\n>+    const slug = createFilePath({ node, getNode, basePath: <span class="token variable"><span class="token variable">`</span>pages<span class="token variable">`</span></span> })\n>+    createNodeField({\n>+      node,\n>+      name: <span class="token variable"><span class="token variable">`</span>slug<span class="token variable">`</span></span>,\n>+      value: <span class="token variable"><span class="token variable">`</span>$<span class="token punctuation">{</span>slug<span class="token punctuation">}</span><span class="token variable">`</span></span>,\n>+    })\n>+  }\n>+};\n>+\n>+exports.createPages = ({ graphql, boundActionCreators }) => {\n>+  const { createPage } = boundActionCreators\n>+  return new Promise((resolve, reject) => {\n>+    graphql(<span class="token variable"><span class="token variable">`</span>\n<span class="token operator">></span>+      <span class="token punctuation">{</span>\n<span class="token operator">></span>+        allMarkdownRemark <span class="token punctuation">{</span>\n<span class="token operator">></span>+          edges <span class="token punctuation">{</span>\n<span class="token operator">></span>+            node <span class="token punctuation">{</span>\n<span class="token operator">></span>+              fields <span class="token punctuation">{</span>\n<span class="token operator">></span>+                slug\n<span class="token operator">></span>+              <span class="token punctuation">}</span>\n<span class="token operator">></span>+            <span class="token punctuation">}</span>\n<span class="token operator">></span>+          <span class="token punctuation">}</span>\n<span class="token operator">></span>+        <span class="token punctuation">}</span>\n<span class="token operator">></span>+      <span class="token punctuation">}</span>\n<span class="token operator">></span>+    <span class="token variable">`</span></span>).then(result => {\n>+      result.data.allMarkdownRemark.edges.forEach(({ node }) => {\n>+        createPage({\n>+          path: node.fields.slug,\n>+          component: path.resolve(<span class="token variable"><span class="token variable">`</span>./src/templates/litlog-page.js<span class="token variable">`</span></span>),\n>+          context: {\n>+            // Data passed to context is available in page queries as GraphQL variables.\n>+            slug: node.fields.slug,\n>+          },\n>+        })\n>+      })\n>+      resolve()\n>+    })\n>+  })\n>+};\nEOF</span>\nlitlog updated files/gatsby-node.js <span class="token string">"following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial, except using *litlog-page.js* instead of *blog-post.js*"</span>\nlitlog creating files/src/templates/litlog-page.js\n<span class="token comment"># create file</span>\n<span class="token function">touch</span> __blank\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/__blank\n>+++ b/./src/templates/litlog-page.js\n>@@ -0,0 +1,22 @@\n>+import React from "react";\n>+\n>+export default ({ data }) => {\n>+  const post = data.markdownRemark;\n>+  return (\n>+    &lt;div>\n>+      &lt;h1>{post.frontmatter.title}&lt;/h1>\n>+      &lt;div dangerouslySetInnerHTML={{ __html: post.html }} />\n>+    &lt;/div>\n>+  );\n>+};\n>+\n>+export const query = graphql<span class="token variable"><span class="token variable">`</span>\n<span class="token operator">></span>+  query LitlogPageQuery<span class="token punctuation">(</span>$slug: String<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">></span>+    markdownRemark<span class="token punctuation">(</span>fields: <span class="token punctuation">{</span> slug: <span class="token punctuation">{</span> eq: $slug <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">></span>+      html\n<span class="token operator">></span>+      frontmatter <span class="token punctuation">{</span>\n<span class="token operator">></span>+        title\n<span class="token operator">></span>+      <span class="token punctuation">}</span>\n<span class="token operator">></span>+    <span class="token punctuation">}</span>\n<span class="token operator">></span>+  <span class="token punctuation">}</span>\n<span class="token operator">></span>+<span class="token variable">`</span></span>;\nEOF</span>\n<span class="token function">rm</span> __blank\nlitlog created files/src/templates/litlog-page.js <span class="token string">"following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial, except use *LitlogPageQuery* instead of *BlogPostQuery"</span>\n<span class="token comment"># restart dev server</span>\nlitlog updating files/src/pages/litlog/index.js\n<span class="token comment"># edit file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/src/pages/litlog/index.js\n>+++ b/src/pages/litlog/index.js\n>@@ -7,7 +7,7 @@ export default ({ data }) => {\n>       &lt;table>\n>         &lt;thead>\n>           &lt;tr>\n>-            &lt;th>fileAbsolutePath&lt;/th>\n>+            &lt;th>link&lt;/th>\n>             &lt;th>title&lt;/th>\n>           &lt;/tr>\n>         &lt;/thead>\n>@@ -15,7 +15,7 @@ export default ({ data }) => {\n>           {data.allMarkdownRemark.edges.map(({ node }, index) =>\n>             &lt;tr key={index}>\n>               &lt;td>\n>-                {node.fileAbsolutePath}\n>+                &lt;Link to={node.fields.slug}>{node.fields.slug}&lt;/Link>\n>               &lt;/td>\n>               &lt;td>\n>                 {node.frontmatter.title}\n>@@ -39,6 +39,9 @@ export const query = graphql`\n>           frontmatter {\n>             title\n>           }\n>+          fields {\n>+            slug\n>+          }\n>         }\n>       }\n>     }\nEOF</span>\nlitlog updated files/src/pages/litlog/index.js <span class="token string">"following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial], modify to get the slug in the graphql query and use in a Link"</span>\nlitlog updated tasks/task-1 <span class="token string">"added plan step-6"</span> \n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">"added task-1 plan step-6"</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Configure code and syntax highlighting with PrismJS by following <a href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">these instructions</a></p>\n<ol>\n<li>\n<p>Install prismjs</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updating tasks/task-1\n<span class="token function">npm</span> <span class="token function">install</span> --save gatsby-remark-prismjs prismjs\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/package.json\n>+++ b/sites/site-1/files/package.json\n>@@ -7,8 +7,10 @@\n>     "gatsby": "^1.9.247",\n>     "gatsby-link": "^1.6.40",\n>     "gatsby-plugin-react-helmet": "^2.0.10",\n>+    "gatsby-remark-prismjs": "^2.0.4",\n>     "gatsby-source-filesystem": "^1.5.39",\n>     "gatsby-transformer-remark": "^1.7.44",\n>+    "prismjs": "^1.15.0",\n>     "react-helmet": "^5.2.0"\n>   },\n>   "keywords": [\nEOF</span>\nlitlog updated files/package.json <span class="token string">"ran \'npm install --save gatsby-remark-prismjs prismjs\' following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Update <litlog-link to="/files/gatsby-config.js.file">gatsby-config.js</litlog-link></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updating files/gatsby-config.js\n<span class="token comment"># update file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/gatsby-config.js\n>+++ b/sites/site-1/files/gatsby-config.js\n>@@ -11,7 +11,14 @@ module.exports = {\n>         path: <span class="token variable"><span class="token variable">`</span>$<span class="token punctuation">{</span>__dirname<span class="token punctuation">}</span>/src/pages/litlog<span class="token variable">`</span></span>,\n>       },\n>     },\n>-    <span class="token variable"><span class="token variable">`</span>gatsby-transformer-remark<span class="token variable">`</span></span>,\n>+    {\n>+      resolve: <span class="token variable"><span class="token variable">`</span>gatsby-transformer-remark<span class="token variable">`</span></span>,\n>+      options: {\n>+        plugins: [\n>+          <span class="token variable"><span class="token variable">`</span>gatsby-remark-prismjs<span class="token variable">`</span></span>,\n>+        ]\n>+      }\n>+    }\n>   ],\n>   pathPrefix: \'/gatsby-starter-litlog\'\n> }\nEOF</span>\nlitlog updated files/gatsby-config.js <span class="token string">"following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"</span>\n<span class="token comment"># restart dev server</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Update <litlog-link to="/files/src/layouts/index.js.file">layouts/index.js</litlog-link></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updating files/src/layouts/index.js\n<span class="token comment"># update file</span>\n<span class="token function">git</span> apply <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n>--- a/sites/site-1/files/src/layouts/index.js\n>+++ b/sites/site-1/files/src/layouts/index.js\n>@@ -3,6 +3,7 @@ import PropTypes from \'prop-types\'\n> import Helmet from \'react-helmet\'\n> \n> import Header from \'../components/header\'\n>+import "prismjs/themes/prism-okaidia.css";\n> import \'./index.css\'\n> \n> const Layout = ({ children, data }) => (\nEOF</span>\nlitlog updated files/src/layouts/index.js <span class="token string">"following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Check out this page. Does it look OK?</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">litlog updated tasks/task-1 <span class="token string">"added plan step-7"</span> \n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">"added task-1 plan step-7"</span></code></pre>\n      </div>\n</li>\n</ol>\n</li>\n</ol>',
frontmatter:{title:"Create a documentation site to record changes to the site"}}},pathContext:{slug:"/sites/site-1/tasks/task-1/"}}}});
//# sourceMappingURL=path---sites-site-1-tasks-task-1-f396130948a64d28979f.js.map