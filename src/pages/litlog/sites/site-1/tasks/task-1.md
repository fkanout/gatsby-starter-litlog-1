---
title: "Create a documentation site to record changes to the site"
date: "2018-06-25"
request: "request-1"
status: "in-progress"
---
## Plan

1. create @litlogo/litlog-cli to automate the documentation of changes.
1. create new [Gatsby](https://www.gatsbyjs.org/) site from [the default starter](https://github.com/gatsbyjs/gatsby-starter-default)
```bash
# already have npm and git installed
# run in a bash terminal
npm install --global gatsby-cli
gatsby_new_timestamp=$(date +%Y-%m-%dT%H%M)
gatsby new gatsby-starter-temp https://github.com/gatsbyjs/gatsby-starter-default
echo $gatsby_new_timestamp
# 2018-06-24T0823
cd gatsby-starter-litlog
rm -r ../gatsby-starter-temp/node_modules
rm -r node_modules
# node_modules/
# packages/*/lib
cp -R ../gatsby-starter-temp/* .
cp ../gatsby-starter-temp/.gitignore .
cp ../gatsby-starter-temp/.prettierrc .
npm install
npm install --save @litlog/litlog-cli
# move everything except .gitignore to site folder
npm install -g @litlog/litlog-cli@0.0.4
gatsby develop
# now move all the files except .gitignore
# .gitignore
# .prettierrc
# LICENSE
# README.md
# gatsby-browser.js
# gatsby-config.js
# gatsby-node.js
# gatsby-ssr.js
# package-lock.json
# package.json
# src/components/header.js
# src/layouts/index.css
# src/layouts/index.js
# src/pages/404.js
# src/pages/index.js
# src/pages/page-2.js
export LITLOG_SITE=site-1
# incorporate into 'litlog init' command
mkdir sites/
mkdir sites/$LITLOG_SITE/
mkdir sites/$LITLOG_SITE/files
mkdir sites/$LITLOG_SITE/files/src
mkdir sites/$LITLOG_SITE/files/src/components
mkdir sites/$LITLOG_SITE/files/src/layouts
mkdir sites/$LITLOG_SITE/pages
#
mv .prettierrc sites/$LITLOG_SITE/files
mv LICENSE sites/$LITLOG_SITE/files
mv README.md sites/$LITLOG_SITE/files
mv gatsby-browser.js sites/$LITLOG_SITE/files
mv gatsby-config.js sites/$LITLOG_SITE/files
mv gatsby-node.js sites/$LITLOG_SITE/files
mv gatsby-ssr.js sites/$LITLOG_SITE/files
mv package-lock.json sites/$LITLOG_SITE/files
mv package.json sites/$LITLOG_SITE/files
mv src/components/header.js sites/$LITLOG_SITE/files/src/components/
mv src/layouts/index.css sites/$LITLOG_SITE/files/src/layouts/
mv src/layouts/index.js sites/$LITLOG_SITE/files/src/layouts/
mv src/pages/404.js sites/$LITLOG_SITE/files/src/pages
mv src/pages/index.js sites/$LITLOG_SITE/files/src/pages
mv src/pages/page-2.js sites/$LITLOG_SITE/files/src/pages
# put into changes
export gatsby_new_timestamp=2018-06-24T0823
litlog created files/.prettierrc "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/LICENSE "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/README.md "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
# I'm leaving out package-lock.json because it's automatically generated.
litlog created files/gatsby-browser.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/gatsby-config.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/gatsby-node.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/gatsby-ssr.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/package.json "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/components/header.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/layouts/index.css "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/layouts/index.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/pages/404.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/pages/index.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
litlog created files/src/pages/page-2.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-default'" $gatsby_new_timestamp
# commit changes
git add .
git commit -m "initial setup from gatsby-starter-default"
#
# alter .gitignore and package.json
cp sites/$LITLOG_SITE/files/package.json .
# modify .gitignore as below
# modify scripts section of packages.json as below
npm install --save-dev cross-var
npm install --save-dev npm-run-parallel
npm install --save-dev gh-pages
#
# make sure development site runs
npm run site-develop
# make sure site builds
npm run build
git add .gitignore
git add package*
git commit -m "set up for site files"
# deploy site
npm run deploy
```
*.gitignore* additions:
```
# Built source for packages
packages/*/lib
#
# Site files
/*
!LICENSE
!package.json
!package-lock.json
!README.md
!sites
!src
/src/*
!src/pages
/src/pages/*
!src/pages/litlog
```
*package.json* modifications:
```json
  "scripts": {
    "build": "npm run site && gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write 'src/**/*.js'",
    "test": "echo \"Error: no test specified\" && exit 1",
    "deploy": "npm run site && gatsby build --prefix-paths && gh-pages -d public",
    "site": "cross-var babel sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,package.json,package-lock.json,README.md",
    "site-develop": "npm-run-parallel site-watch develop",
    "site-watch": "cross-var babel -w sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,package.json,package-lock.json,README.md"
  },
``` 
1. update *pathPrefix* in *gatsby-config.js*.
```bash
npm run site-develop #in a different terminal
litlog updating files/gatsby-config.js
# edit file
git apply << EOF
>--- a/sites/site-1/files/gatsby-config.js
>+++ b/sites/site-1/files/gatsby-config.js
>@@ -3,4 +3,5 @@ module.exports = {
>     title: 'Gatsby Default Starter',
>   },
>   plugins: ['gatsby-plugin-react-helmet'],
>+  pathPrefix: '/gatsby-starter-litlog'
> }
EOF
# note the > above which is not part of the actual command but included
# because there's an issue rendering diff syntax
litlog updated files/gatsby-config.js "added pathPrefix"
npm run build
npm run deploy
```
1. create <litlog-link to="/requests/request-1">request-1</litlog-link>, <litlog-link to="/tasks/task-1">task-1</litlog-link>, and commit changes.
```bash
export LITLOG_SITE=site-1
litlog creating requests/request-1
# update request-1 with specification
litlog created requests/request-1 "added specification"
litlog creating tasks/task-1
# update task-1 with plan including setting title, request, and status
litlog created tasks/task-1 "added plan step-1 to step-4"
git add src/pages
git commit -m "set up litlog-cli, added request-1 spec, and task-1 plan step-1 to step-4"
```
1. Follow [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial] so <litlog-link to="/">litlog</litlog-link> pages can be listed.
```bash
litlog updating tasks/task1
npm install --save gatsby-transformer-remark
git apply << EOF
>--- a/sites/site-1/files/package.json
>+++ b/sites/site-1/files/package.json
>@@ -7,6 +7,7 @@
>     "gatsby": "^1.9.247",
>     "gatsby-link": "^1.6.40",
>     "gatsby-plugin-react-helmet": "^2.0.10",
>+    "gatsby-transformer-remark": "^1.7.44",
>     "react-helmet": "^5.2.0"
>   },
>   "keywords": [
EOF
litlog updated files/package.json "ran 'npm install --save gatsby-transformer-remark' (following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial])"
# commit these files because I'm going to run another npm install
git add package* sites
git commit -m "ran 'npm install --save gatsby-transformer-remark'"
npm install --save gatsby-source-filesystem
git apply << EOF
>--- a/sites/site-1/files/package.json
>+++ b/sites/site-1/files/package.json
>@@ -7,6 +7,7 @@
>     "gatsby": "^1.9.247",
>     "gatsby-link": "^1.6.40",
>     "gatsby-plugin-react-helmet": "^2.0.10",
>+    "gatsby-source-filesystem": "^1.5.39",
>     "gatsby-transformer-remark": "^1.7.44",
>     "react-helmet": "^5.2.0"
>   },
EOF
litlog updated files/package.json "ran 'npm install --save gatsby-source-filesystem' (following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial])"
litlog updating files/gatsby-config.js
# update file
git apply << EOF
>--- a/sites/site-1/files/gatsby-config.js
>+++ b/sites/site-1/files/gatsby-config.js
>@@ -2,6 +2,16 @@ module.exports = {
>   siteMetadata: {
>     title: 'Gatsby Default Starter',
>   },
>-  plugins: ['gatsby-plugin-react-helmet'],
>+  plugins: [
>+    'gatsby-plugin-react-helmet',
>+    {
>+      resolve: `gatsby-source-filesystem`,
>+      options: {
>+        name: `litlog`,
>+        path: `${__dirname}/src/pages/litlog`,
>+      },
>+    },
>+    `gatsby-transformer-remark`,
>+  ],
>   pathPrefix: '/gatsby-starter-litlog'
> }
EOF
litlog updated files/gatsby-config.js "following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial]"
# restart dev server
npm run site-develop
```
Check out this query in [GraphiQL](http://localhost:8000/___graphql):
```graphql
query IndexQuery {
  allMarkdownRemark(sort: {fields: [fileAbsolutePath] }) {
    totalCount
    edges {
      node {
        id
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
  }
}
```
Create the index page for the <litlog-link to="/">litlog</litlog-link> folder folder. Right now it will just list the *fileAbsolutePath* of the markdown files and the *title* from the frontmatter.
```bash
litlog creating files/src/pages/litlog/index.js
# edit file and check out http://localhost:8000/litlog/
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/index.js
>@@ -0,0 +1,46 @@
>+import React from "react";
>+import Link from "gatsby-link";
>+
>+export default ({ data }) => {
>+  return (
>+    <div>
>+      <table>
>+        <thead>
>+          <tr>
>+            <th>fileAbsolutePath</th>
>+            <th>title</th>
>+          </tr>
>+        </thead>
>+        <tbody>
>+          {data.allMarkdownRemark.edges.map(({ node }, index) =>
>+            <tr key={index}>
>+              <td>
>+                {node.fileAbsolutePath}
>+              </td>
>+              <td>
>+                {node.frontmatter.title}
>+              </td>
>+            </tr>
>+          )}
>+        </tbody>
>+      </table>
>+    </div>
>+  );
>+};
>+
>+export const query = graphql`
>+  query IndexQuery {
>+    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {
>+      totalCount
>+      edges {
>+        node {
>+          id
>+          fileAbsolutePath
>+          frontmatter {
>+            title
>+          }
>+        }
>+      }
>+    }
>+  }
>+`;
EOF
rm __blank
litlog created files/src/pages/litlog/index.js "following [part-six](https://www.gatsbyjs.org/tutorial/part-six/) of the [Gatsby.js Tutorial], simplified to return fewer/different fields and use a table"
litlog updated tasks/task-1 "added task-1 plan step-5"
git add .
git commit -m "added task-1 plan step-5"
```
1. Follow [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial] so <litlog-link to="/">litlog</litlog-link> pages can be viewed. First create <litlog-link to="/files/gatsby-node.js.file">gatsby-node.js</litlog-link> *gatsby-node.js* except use */litlog${slug}* for the *value* of *createNodeField* and *litlog-page.js* instead of *blog-post.js*. Then create <litlog-link to="/files/src/templates/litlog-page.js.file">litlog-page.js</litlog-link> and use *LitlogPageQuery* instead of *BlogPostQuery*. Modify <litlog-link to="/files/src/pages/litlog/index.js.file">the litlog index page</litlog-link> to add *import Link from "gatsby-link";*, replace *fileAbsolutePath* with *link*, *{node.fileAbsolutePath}* with *<Link to={node.fields.slug}>{node.fields.slug}</Link>*, and change the graphql to add the slug.
```bash
litlog updating tasks/task-1
litlog updating files/gatsby-node.js
# update file
git apply << EOF
>--- a/sites/site-1/files/gatsby-node.js
>+++ b/sites/site-1/files/gatsby-node.js
>@@ -4,4 +4,48 @@
>  * See: https://www.gatsbyjs.org/docs/node-apis/
>  */
>
>- // You can delete this file if you're not using it
>\ No newline at end of file
>+const path = require(`path`);
>+const { createFilePath } = require(`gatsby-source-filesystem`);
>+
>+exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
>+  const { createNodeField } = boundActionCreators
>+  if (node.internal.type === `MarkdownRemark`) {
>+    const slug = createFilePath({ node, getNode, basePath: `pages` })
>+    createNodeField({
>+      node,
>+      name: `slug`,
>+      value: `${slug}`,
>+    })
>+  }
>+};
>+
>+exports.createPages = ({ graphql, boundActionCreators }) => {
>+  const { createPage } = boundActionCreators
>+  return new Promise((resolve, reject) => {
>+    graphql(`
>+      {
>+        allMarkdownRemark {
>+          edges {
>+            node {
>+              fields {
>+                slug
>+              }
>+            }
>+          }
>+        }
>+      }
>+    `).then(result => {
>+      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
>+        createPage({
>+          path: node.fields.slug,
>+          component: path.resolve(`./src/templates/litlog-page.js`),
>+          context: {
>+            // Data passed to context is available in page queries as GraphQL variables.
>+            slug: node.fields.slug,
>+          },
>+        })
>+      })
>+      resolve()
>+    })
>+  })
>+};
EOF
litlog updated files/gatsby-node.js "following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial, except using *litlog-page.js* instead of *blog-post.js*"
litlog creating files/src/templates/litlog-page.js
# create file
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/templates/litlog-page.js
>@@ -0,0 +1,22 @@
>+import React from "react";
>+
>+export default ({ data }) => {
>+  const post = data.markdownRemark;
>+  return (
>+    <div>
>+      <h1>{post.frontmatter.title}</h1>
>+      <div dangerouslySetInnerHTML={{ __html: post.html }} />
>+    </div>
>+  );
>+};
>+
>+export const query = graphql`
>+  query LitlogPageQuery($slug: String!) {
>+    markdownRemark(fields: { slug: { eq: $slug } }) {
>+      html
>+      frontmatter {
>+        title
>+      }
>+    }
>+  }
>+`;
EOF
rm __blank
litlog created files/src/templates/litlog-page.js "following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial, except use *LitlogPageQuery* instead of *BlogPostQuery"
# restart dev server
litlog updating files/src/pages/litlog/index.js
# edit file
git apply << EOF
>--- a/src/pages/litlog/index.js
>+++ b/src/pages/litlog/index.js
>@@ -7,7 +7,7 @@ export default ({ data }) => {
>       <table>
>         <thead>
>           <tr>
>-            <th>fileAbsolutePath</th>
>+            <th>link</th>
>             <th>title</th>
>           </tr>
>         </thead>
>@@ -15,7 +15,7 @@ export default ({ data }) => {
>           {data.allMarkdownRemark.edges.map(({ node }, index) =>
>             <tr key={index}>
>               <td>
>-                {node.fileAbsolutePath}
>+                <Link to={node.fields.slug}>{node.fields.slug}</Link>
>               </td>
>               <td>
>                 {node.frontmatter.title}
>@@ -39,6 +39,9 @@ export const query = graphql`
>           frontmatter {
>             title
>           }
>+          fields {
>+            slug
>+          }
>         }
>       }
>     }
EOF
litlog updated files/src/pages/litlog/index.js "following [part-seven](https://www.gatsbyjs.org/tutorial/part-seven/) of the [Gatsby.js Tutorial], modify to get the slug in the graphql query and use in a Link"
litlog updated tasks/task-1 "added plan step-6" 
git add .
git commit -m "added task-1 plan step-6"
```
1. Configure code and syntax highlighting with PrismJS by following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
    1. Install prismjs
```bash
litlog updating tasks/task-1
npm install --save gatsby-remark-prismjs prismjs
git apply << EOF
>--- a/sites/site-1/files/package.json
>+++ b/sites/site-1/files/package.json
>@@ -7,8 +7,10 @@
>     "gatsby": "^1.9.247",
>     "gatsby-link": "^1.6.40",
>     "gatsby-plugin-react-helmet": "^2.0.10",
>+    "gatsby-remark-prismjs": "^2.0.4",
>     "gatsby-source-filesystem": "^1.5.39",
>     "gatsby-transformer-remark": "^1.7.44",
>+    "prismjs": "^1.15.0",
>     "react-helmet": "^5.2.0"
>   },
>   "keywords": [
EOF
litlog updated files/package.json "ran 'npm install --save gatsby-remark-prismjs prismjs' following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"
```
   1. Update <litlog-link to="/files/gatsby-config.js.file">gatsby-config.js</litlog-link>
```bash
litlog updating files/gatsby-config.js
# update file
git apply << EOF
>--- a/sites/site-1/files/gatsby-config.js
>+++ b/sites/site-1/files/gatsby-config.js
>@@ -11,7 +11,14 @@ module.exports = {
>         path: `${__dirname}/src/pages/litlog`,
>       },
>     },
>-    `gatsby-transformer-remark`,
>+    {
>+      resolve: `gatsby-transformer-remark`,
>+      options: {
>+        plugins: [
>+          `gatsby-remark-prismjs`,
>+        ]
>+      }
>+    }
>   ],
>   pathPrefix: '/gatsby-starter-litlog'
> }
EOF
litlog updated files/gatsby-config.js "following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"
# restart dev server
```
   1. Update <litlog-link to="/files/src/layouts/index.js.file">layouts/index.js</litlog-link>
```bash
litlog updating files/src/layouts/index.js
# update file
git apply << EOF
>--- a/sites/site-1/files/src/layouts/index.js
>+++ b/sites/site-1/files/src/layouts/index.js
>@@ -3,6 +3,7 @@ import PropTypes from 'prop-types'
> import Helmet from 'react-helmet'
> 
> import Header from '../components/header'
>+import "prismjs/themes/prism-okaidia.css";
> import './index.css'
> 
> const Layout = ({ children, data }) => (
EOF
litlog updated files/src/layouts/index.js "following [these instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)"
```
   1. Check out this page. Does it look OK?
```bash
litlog updated tasks/task-1 "added plan step-7" 
git add .
git commit -m "added task-1 plan step-7"
```
