---
title: "Create litlog-content-list component to list litlog content by type"
date: "2018-06-30"
request: "request-3"
status: "in-progress"
---
## Plan

1. Initialize and create a dummy React component.
```bash
export LITLOG_SITE=site-1
litlog creating requests/request-3
# create request-3 with specification
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/sites/site-1/requests/request-3.md
>@@ -0,0 +1,8 @@
>+---
>+title: "Create litlog-content-list component to list litlog content by type"
>+date: "2018-06-30"
>+status: "open"
>+---
>+## Specification
>+
>+Create an <litlog-link to="/files/litlog/src/components/litlog-content-list.js">litlog-content-list</litlog-link> React component that lists content by type in the <litlog-link to="/">litlog</litlog-link> system. *props* should be: *type*.
EOF
rm __blank
litlog created requests/request-3 "added spec"
litlog creating tasks/task-3
litlog creating files/src/components/litlog-content-list.js
# add dummy code and check <LitlogContentList></LitlogContentList> on a .js page
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/components/litlog-content-list.js
>@@ -0,0 +1,10 @@
>+import React from 'react'
>+
>+const LwdContentList = ({ type }) => {
>+  return (
>+    <span>
>+      Hello, World!
>+    </span>
>+)}
>+
>+export default LwdContentList
EOF
rm __blank
litlog created files/src/components/litlog-content-list.js "added dummy"
litlog created tasks/task-3 "added plan step-1"
git add .
git commit -m "added task-3 plan step-1"
```
1. Extract the table on <litlog-link to="/files/src/pages/litlog/index.js">the litlog index page</litlog-link> into <litlog-link to="/files/src/components/litlog-content-list.js">litlog-content-list.js</litlog-link>.
```bash
litlog updating tasks/task-3
```
   1. Follow [querying-with-graphql](https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments) to come up with the following graphql query by splitting the original DocsIndexQuery (test it out on [GraphiQL](http://localhost:8000/___graphql)):
```graphql
fragment AllMarkdownFragment on MarkdownRemarkConnection {
  totalCount
  edges {
    node {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
}
query DocsIndexQuery {
  allMarkdownRemark(sort: {fields: [fileAbsolutePath]}) {
    ...AllMarkdownFragment
  }
}
```
   1. Update <litlog-link to="/files/src/pages/litlog/index.js">the litlog index page</litlog-link> and <litlog-link to="/files/src/components/litlog-content-list.js">litlog-content-list.js</litlog-link> using the fragment and verify the data passes to the component.
```javascript
//  query IndexQuery {
//    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {
//      totalCount
//      edges {
//        node {
//          id
//          fileAbsolutePath
//          frontmatter {
//            title
//          }
//          fields {
//            slug
//          }          
//        }
//      }
  query LitlogIndexQuery {
    allMarkdownRemark(sort: {fields: [fileAbsolutePath]}) {
      ...AllMarkdownFragment
    }
  }
```
```javascript
// const LwdContentList = ({ type }) => {
const LwdContentList = ({ type, data }) => {
// ... 
export default LwdContentList
export const allMarkdownFragment = graphql`
fragment AllMarkdownFragment on MarkdownRemarkConnection {
	totalCount
  edges {
    node {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
}`;
```
```bash
litlog updating files/src/pages/litlog/index.js
litlog updating files/src/components/litlog-content-list.js
git apply << EOF
>--- a/src/pages/litlog/index.js
>+++ b/src/pages/litlog/index.js
>@@ -29,21 +29,9 @@ export default ({ data }) => {
> };
> 
> export const query = graphql`
>-  query IndexQuery {
>-    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {
>-      totalCount
>-      edges {
>-        node {
>-          id
>-          fileAbsolutePath
>-          frontmatter {
>-            title
>-          }
>-          fields {
>-            slug
>-          }
>-        }
>-      }
>-    }
>+query LitlogIndexQuery {
>+  allMarkdownRemark(sort: {fields: [fileAbsolutePath]}) {
>+    ...AllMarkdownFragment
>   }
>+}
> `;
EOF
litlog updated files/src/pages/litlog/index.js "task-3 step-2-2"
git apply << EOF
>--- a/src/components/litlog-content-list.js
>+++ b/src/components/litlog-content-list.js
>@@ -1,6 +1,6 @@
> import React from 'react'
> 
>-const LwdContentList = ({ type }) => {
>+const LwdContentList = ({ type, data }) => {
>   return (
>     <span>
>       Hello, World!
>@@ -8,3 +8,17 @@ const LwdContentList = ({ type }) => {
> )}
> 
> export default LwdContentList
>+export const allMarkdownFragment = graphql`
>+fragment AllMarkdownFragment on MarkdownRemarkConnection {
>+	totalCount
>+  edges {
>+    node {
>+      frontmatter {
>+        title
>+      }
>+      fields {
>+        slug
>+      }
>+    }
>+  }
>+}`;
EOF
litlog updated files/src/components/litlog-content-list.js "task-3 step-2-2"
git add src/pages/litlog/index.js
git add src/components/litlog-content-list.js
git commit -m "task-3 step-2-2"
```
   1. Finish moving the table from <litlog-link to="/files/src/pages/litlog/index.js">the litlog index page</litlog-link> to <litlog-link to="/files/src/components/litlog-content-list.js">litlog-content-list.js</litlog-link>.
```bash
litlog updating files/src/pages/litlog/index.js
litlog updating files/src/components/litlog-content-list.js
git apply << EOF
>--- a/src/pages/litlog/index.js
>+++ b/src/pages/litlog/index.js
>@@ -1,29 +1,10 @@
>-import React from "react";
>-import Link from "gatsby-link";
>+import React from "react"
>+import LitlogContentList from "../../components/litlog-content-list"
> 
> export default ({ data }) => {
>   return (
>     <div>
>-      <table>
>-        <thead>
>-          <tr>
>-            <th>link</th>
>-            <th>title</th>
>-          </tr>
>-        </thead>
>-        <tbody>
>-          {data.allMarkdownRemark.edges.map(({ node }, index) =>
>-            <tr key={index}>
>-              <td>
>-                <Link to={node.fields.slug}>{node.fields.slug}</Link>
>-              </td>
>-              <td>
>-                {node.frontmatter.title}
>-              </td>
>-            </tr>
>-          )}
>-        </tbody>
>-      </table>
>+      <LitlogContentList data={data}></LitlogContentList>
>     </div>
>   );
> };
EOF
litlog updated files/src/pages/litlog/index.js "extracted the table on <litlog-link to=\"/files/src/pages/litlog/index.js\">the litlog index page</litlog-link> into <litlog-link to=\"/files/src/components/litlog-content-list.js\">litlog-content-list.js</litlog-link>"
git apply << EOF
>--- a/src/components/litlog-content-list.js
>+++ b/src/components/litlog-content-list.js
>@@ -1,13 +1,31 @@
> import React from 'react'
>+import Link from "gatsby-link"
> 
>-const LwdContentList = ({ type, data }) => {
>+const LitlogContentList = ({ type, data }) => {
>   return (
>-    <span>
>-      Hello, World!
>-    </span>
>+    <table>
>+      <thead>
>+        <tr>
>+          <th>link</th>
>+          <th>title</th>
>+        </tr>
>+      </thead>
>+      <tbody>
>+        {data.allMarkdownRemark.edges.map(({ node }, index) =>
>+          <tr key={index}>
>+            <td>
>+            <Link to={node.fields.slug}>{node.fields.slug}</Link>
>+            </td>
>+            <td>
>+              {node.frontmatter.title}
>+            </td>
>+          </tr>
>+        )}
>+      </tbody>
>+    </table>
> )}
> 
>-export default LwdContentList
>+export default LitlogContentList
> export const allMarkdownFragment = graphql`
> fragment AllMarkdownFragment on MarkdownRemarkConnection {
> 	totalCount
EOF
litlog updated files/src/components/litlog-content-list.js "extracted the table on <litlog-link to=\"/files/src/pages/litlog/index.js\">the litlog index page</litlog-link> into <litlog-link to=\"/files/src/components/litlog-content-list.js\">litlog-content-list.js</litlog-link>"
litlog updated tasks/task-3 "plan step-2"
git add .
git commit -m "added task-3 plan step-2"
```
