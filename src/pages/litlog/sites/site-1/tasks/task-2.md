---
title: "Create litlog-link component to link to items in the litlog system"
date: "2018-06-30"
request: "request-2"
status: "in-progress"
---
## Plan

1. Initialize and create a dummy React component.
```bash
npm run site-develop 
# in a different terminal
export LITLOG_SITE=site-1
litlog creating requests/request-2
# update request-2 with specification
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/sites/site-1/requests/request-2.md
>@@ -0,0 +1,8 @@
>+---
>+title: "Create litlog-link component to link to items in the litlog system"
>+date: "2018-06-30"
>+status: "open"
>+---
>+## Specification
>+
>+Create a <litlog-link to="/files/components/litlog-code.js">litlog-code</litlog-link> React component that link to items in the <litlog-link to="/">litlog</litlog-link> system.
EOF
rm __blank
litlog created requests/request-2 "added spec"
litlog creating tasks/task-2
litlog creating files/src/components/litlog-link.js
# add dummy code and check <LitlogLink>foo</LitlogLink> on a .js page
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/components/litlog-link.js
>@@ -0,0 +1,10 @@
>+import React from 'react'
>+import Link from 'gatsby-link'
>+
>+const LitlogLink = () => (
>+  <span>
>+    Hello, World!
>+  </span>
>+)
>+
>+export default LitlogLink
EOF
rm __blank
litlog created files/src/components/litlog-link.js "added dummy"
litlog created tasks/task-2 "added plan step-1"
git add .
git commit -m "added task-2 plan step-1"
```
1. Follow [custom-components](https://using-remark.gatsbyjs.org/custom-components/) to set up using custom components in markdown and check out <litlog-link>this link</litlog-link> when done.
```bash
export LITLOG_SITE=site-1
litlog updating tasks/task-2
```
   1. Install *rehype-react* as a dependency
```bash
npm install --save rehype-react
git apply << EOF
>--- a/sites/site-1/files/package.json
>+++ b/sites/site-1/files/package.json
>@@ -11,7 +11,8 @@
>     "gatsby-source-filesystem": "^1.5.39",
>     "gatsby-transformer-remark": "^1.7.44",
>     "prismjs": "^1.15.0",
>-    "react-helmet": "^5.2.0"
>+    "react-helmet": "^5.2.0",
>+    "rehype-react": "^3.0.2"
>   },
>   "keywords": [
>     "gatsby"
EOF
litlog updated files/package.json "ran 'npm install --save rehype-react' following [custom-components](https://using-remark.gatsbyjs.org/custom-components/)"
litlog updating files/src/templates/litlog-page.js
```   
   1. Import *rehype-react* and <litlog-link to="/files/src/components/litlog-link.js">litlog-link.js</litlog-link> to <litlog-link to="/files/src/templates/litlog-page.js">litlog-page.js</litlog-link>
```javascript
import rehypeReact from "rehype-react";
import LitlogLink from "../components/litlog-link";
```
   1. Create a render function with references to <litlog-link to="/files/src/components/litlog-link.js">litlog-link.js</litlog-link>
```javascript
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
      "litlog-link": LitlogLink
    },
  }).Compiler;
```
   1. Render the content using htmlAst instead of html by changing
```javascript
<div dangerouslySetInnerHTML={{ __html: post.html }} />
```
to
```javascript
{
  renderAst(post.htmlAst)
}
```
   1. Change html to htmlAst in *LitlogPageQuery*
```javascript
  query LitlogPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
```
Don't forget to document
```bash
git apply << EOF
>--- a/src/templates/litlog-page.js
>+++ b/src/templates/litlog-page.js
>@@ -1,11 +1,21 @@
> import React from "react";
>+import rehypeReact from "rehype-react";
>+import LitlogLink from "../components/litlog-link";
> 
> export default ({ data }) => {
>   const post = data.markdownRemark;
>+  const renderAst = new rehypeReact({
>+    createElement: React.createElement,
>+    components: { 
>+      "litlog-link": LitlogLink
>+    },
>+  }).Compiler;
>   return (
>     <div>
>       <h1>{post.frontmatter.title}</h1>
>-      <div dangerouslySetInnerHTML={{ __html: post.html }} />
>+      {
>+        renderAst(post.htmlAst)
>+      }
>     </div>
>   );
> };
>@@ -13,7 +23,7 @@ export default ({ data }) => {
> export const query = graphql`
>   query LitlogPageQuery($slug: String!) {
>     markdownRemark(fields: { slug: { eq: $slug } }) {
>-      html
>+      htmlAst
>       frontmatter {
>         title
>       }
EOF
litlog updated files/src/templates/litlog-page.js "followed [custom-components](https://using-remark.gatsbyjs.org/custom-components/) to set up using custom components in markdown"
litlog updated tasks/task-2 "added plan step-2"
git add .
git commit -m "added task-2 plan step-2"
```
1. Complete <litlog-link to="/files/src/components/litlog-link.js">litlog-link.js</litlog-link> React component.
```bash
litlog updating tasks/task-2
litlog updating files/src/components/litlog-link.js
```
   1. Add *to* prop.
```javascript
const LitlogLink = ({ to }) => {
  return (
    <span>
      {to}
    </span>
)}
```
```bash
git apply << EOF
>--- a/src/components/litlog-link.js
>+++ b/src/components/litlog-link.js
>@@ -1,10 +1,11 @@
> import React from 'react'
> import Link from 'gatsby-link'
> 
>-const LitlogLink = () => (
>-  <span>
>-    Hello, World!
>-  </span>
>-)
>+const LitlogLink = ({ to }) => {
>+  return (
>+    <span>
>+      {to}
>+    </span>
>+)}
> 
> export default LitlogLink
EOF
litlog updated files/src/components/litlog-link.js "added *to* prop"
git add src/components/litlog-link.js
git commit -m "added *to* prop"
litlog updating files/src/components/litlog-link.js
```
   1. Make it a Link
```javascript
const LitlogLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
)}
```
```bash
git apply << EOF
>--- a/src/components/litlog-link.js
>+++ b/src/components/litlog-link.js
>@@ -1,11 +1,11 @@
> import React from 'react'
> import Link from 'gatsby-link'
> 
>-const LitlogLink = ({ to }) => {
>+const LitlogLink = ({ to, children }) => {
>   return (
>-    <span>
>-      {to}
>-    </span>
>+    <Link to={to}>
>+      {children}
>+    </Link>
> )}
> 
> export default LitlogLink
EOF
litlog updated files/src/components/litlog-link.js "completed component"
litlog updated tasks/task-2 "added step-3"
git add .
git commit -m "added task-2 plan step-3"
```
1. Make <litlog-link to="/files/src/components/litlog/litlog-link.js">litlog-link.js</litlog-link> slightly smarter by adding a prefix.
```javascript
  const goto = `/litlog${to}`;
  return (
    <Link to={goto}>
      {children}
    </Link>
```
```bash
litlog updating tasks/task-2
litlog updating files/src/components/litlog-link.js
# update as above
git apply << EOF
>--- a/src/components/litlog-link.js
>+++ b/src/components/litlog-link.js
>@@ -2,8 +2,9 @@ import React from 'react'
> import Link from 'gatsby-link'
> 
> const LitlogLink = ({ to, children }) => {
>+  const goto = `/litlog${to}`;
>   return (
>-    <Link to={to}>
>+    <Link to={goto}>
>       {children}
>     </Link>
> )}
EOF
litlog updated files/src/components/litlog-link.js "made slightly smarter by adding a prefix"
litlog updated tasks/task-2 "plan step-4"
git add .
git commit -m "added task-2 plan step-4"
```
