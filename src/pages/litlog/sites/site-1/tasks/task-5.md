---
title: "Add Netlify CMS"
date: "2018-07-04"
request: "request-5"
status: "in-progress"
---
## Plan

1. Initial setup.
```bash
export LITLOG_SITE=site-1
litlog creating requests/request-5
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/sites/site-1/requests/request-5.md
>@@ -0,0 +1,8 @@
>+---
>+title: "Add Netlify CMS"
>+date: "2018-07-04"
>+status: "open"
>+---
>+## Specification
>+
>+Copy site-2 (gatsby-starter-hello-world) to site-3 and follow [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/) to setup a site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms). Then apply those changes back to site-1.
EOF
rm __blank
litlog created requests/request-5 "added spec"
litlog creating tasks/task-5
litlog created tasks/task-5 "added plan step-1"
git add .
git commit -m "added task-5 plan step-1"
```
1. Copy site-2 to site-3.
```bash
litlog updating tasks/task-5
cp -R sites/site-2 sites/site-3
cp -R src/pages/litlog/sites/site-2 src/pages/litlog/sites/site-3
litlog created tasks/task-5 "added plan step-2"
git add .
git commit -m "added task-5 plan step-2"
```
1. Setup site-3 with content management using Netlify CMS (see site-3 task-1).
1. Follow [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/) to setup site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms).
```bash
export LITLOG_SITE=site-1
litlog updating tasks/task-5
npm install --save netlify-cms gatsby-plugin-netlify-cms
git apply << EOF
>--- a/sites/site-1/files/package.json
>+++ b/sites/site-1/files/package.json
>@@ -6,10 +6,12 @@
>   "dependencies": {
>     "gatsby": "^1.9.247",
>     "gatsby-link": "^1.6.40",
>+    "gatsby-plugin-netlify-cms": "^2.0.1",
>     "gatsby-plugin-react-helmet": "^2.0.10",
>     "gatsby-remark-prismjs": "^2.0.4",
>     "gatsby-source-filesystem": "^1.5.39",
>     "gatsby-transformer-remark": "^1.7.44",
>+    "netlify-cms": "^1.9.3",
>     "prismjs": "^1.15.0",
>     "react-helmet": "^5.2.0",
>     "rehype-react": "^3.0.2"
EOF
litlog updated files/package.json "ran 'npm install --save netlify-cms gatsby-plugin-netlify-cms' following [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/)"
litlog updating files/gatsby-config.js
git apply << EOF
>--- a/sites/site-1/files/gatsby-config.js
>+++ b/sites/site-1/files/gatsby-config.js
>@@ -3,6 +3,7 @@ module.exports = {
>     title: 'Gatsby Litlog Starter',
>   },
>   plugins: [
>+    'gatsby-plugin-netlify-cms',
>     'gatsby-plugin-react-helmet',
>     {
>       resolve: `gatsby-source-filesystem`,
EOF
litlog updated files/gatsby-config.js "following [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/)"
litlog creating files/static/admin/config.yml
git apply << EOF
>--- a/__blank
>+++ b/./sites/site-1/files/static/admin/config.yml
>@@ -0,0 +1,17 @@
>+backend:
>+  name: github
>+  repo: litlog/gatsby-starter-litlog
>+
>+media_folder: static/assets
>+public_folder: assets
>+
>+collections:
>+  - name: posts
>+    label: Posts
>+    folder: posts
>+    create: true
>+    fields:
>+      - { name: path, label: Path }
>+      - { name: date, label: Date, widget: date }
>+      - { name: title, label: Title }
>+      - { name: body, label: Body, widget: markdown }
EOF
rm __blank
litlog created files/static/admin/config.yml "following [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/)"
litlog updated tasks/task-5 "added plan step-4"
git add .
git commit -m "added task-5 plan step-4"
```
1. Add more content types using [gatsby-starter-hero-blog](https://github.com/greglobinski/gatsby-starter-hero-blog) as a model.
   1. Modify *gatsby-node.js* to only show the current site's litlog pages, refactor litlogPages as a content-type and add pages and posts content types.
```bash
export LITLOG_SITE=site-1
litlog updating tasks/task-5
git apply << EOF
>--- a/sites/site-1/files/static/admin/config.yml
>+++ b/sites/site-1/files/static/admin/config.yml
>@@ -6,9 +6,18 @@ media_folder: static/assets
> public_folder: assets
>
> collections:
>+  - name: pages
>+    label: Pages
>+    folder: content/pages
>+    create: true
>+    fields:
>+      - { name: path, label: Path }
>+      - { name: date, label: Date, widget: date }
>+      - { name: title, label: Title }
>+      - { name: body, label: Body, widget: markdown }
>   - name: posts
>     label: Posts
>-    folder: posts
>+    folder: content/posts
>     create: true
>     fields:
>       - { name: path, label: Path }
EOF
litlog updated files/static/admin/config.yml
git apply << EOF
>--- a/sites/site-1/files/gatsby-config.js
>+++ b/sites/site-1/files/gatsby-config.js
>@@ -12,6 +12,20 @@ module.exports = {
>         path: `${__dirname}/src/pages/litlog`,
>       },
>     },
>+    {
>+      resolve: `gatsby-source-filesystem`,
>+      options: {
>+        name: `pages`,
>+        path: `${__dirname}/content/pages`,
>+      },
>+    },
>+    {
>+      resolve: `gatsby-source-filesystem`,
>+      options: {
>+        name: `posts`,
>+        path: `${__dirname}/content/posts`,
>+      },
>+    },
>     {
>       resolve: `gatsby-transformer-remark`,
>       options: {
EOF
litlog updated files/gatsby-config.js
git apply << EOF
>--- a/sites/site-1/files/gatsby-node.js
>+++ b/sites/site-1/files/gatsby-node.js
>@@ -6,6 +6,7 @@
>
> const path = require(`path`);
> const { createFilePath } = require(`gatsby-source-filesystem`);
>+const site = process.env.LITLOG_SITE;
>
> exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
>   const { createNodeField } = boundActionCreators
>@@ -19,33 +20,84 @@ exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
>   }
> };
>
>+exports.onCreatePage = ({ page, boundActionCreators }) => {
>+  const { createPage, deletePage } = boundActionCreators;
>+  return new Promise(resolve => {
>+    page.context = {
>+      "siteRe": `/src\/pages\/litlog\/sites\/${site}/`
>+    };
>+    resolve();
>+  });
>+};
>+
> exports.createPages = ({ graphql, boundActionCreators }) => {
>   const { createPage } = boundActionCreators
>   return new Promise((resolve, reject) => {
>-    graphql(`
>-      {
>-        allMarkdownRemark {
>-          edges {
>-            node {
>-              fields {
>-                slug
>+    const litlogPageTemplate = path.resolve(`./src/templates/litlog-page.js`);
>+    const contentPostTemplate = path.resolve(`./src/templates/litlog-content-post.js`);
>+    const contentPageTemplate = path.resolve(`./src/templates/litlog-content-page.js`);
>+    resolve(
>+      graphql(
>+        `
>+          {
>+            allMarkdownRemark(
>+              filter: { id: { regex: "/content\/pages/|content\/posts/|src\/pages\/litlog/" } }
>+            ) {
>+              edges {
>+                node {
>+                  id
>+                  fields {
>+                    slug
>+                  }
>+                }
>               }
>             }
>           }
>-        }
>-      }
>-    `).then(result => {
>-      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
>-        createPage({
>-          path: node.fields.slug,
>-          component: path.resolve(`./src/templates/litlog-page.js`),
>-          context: {
>-            // Data passed to context is available in page queries as GraphQL variables.
>-            slug: node.fields.slug,
>-          },
>-        })
>+        `
>+      ).then(result => {
>+        const items = result.data.allMarkdownRemark.edges;
>+        // Create litlog pages
>+        const siteRe = new RegExp(`/src\/pages\/litlog\/sites\/${site}/`);
>+        const litlogPages = items.filter(item => siteRe.test(item.node.id));
>+        litlogPages.forEach(({ node }) => {
>+          const slug = node.fields.slug;
>+
>+          createPage({
>+            path: slug,
>+            component: litlogPageTemplate,
>+            context: {
>+              slug
>+            }
>+          });
>+        });
>+        // Create posts
>+        const posts = items.filter(item => /content\/posts/.test(item.node.id));
>+        posts.forEach(({ node }) => {
>+          const slug = node.fields.slug;
>+
>+          createPage({
>+            path: slug,
>+            component: contentPostTemplate,
>+            context: {
>+              slug
>+            }
>+          });
>+        });
>+        // Create posts
>+        const pages = items.filter(item => /content\/pages/.test(item.node.id));
>+        pages.forEach(({ node }) => {
>+          const slug = node.fields.slug;
>+
>+          createPage({
>+            path: slug,
>+            component: contentPageTemplate,
>+            context: {
>+              slug
>+            }
>+          });
>+        });
>+
>       })
>-      resolve()
>-    })
>-  })
>+    );
>+  });
> };
EOF
litlog updated files/gatsby-node.js
git apply << EOF
>--- a/src/pages/litlog/index.js
>+++ b/src/pages/litlog/index.js
>@@ -11,8 +11,11 @@ export default ({ data }) => {
> };
>
> export const query = graphql`
>-  query LitlogIndexQuery {
>-    allMarkdownRemark(sort: {fields: [fileAbsolutePath]}) {
>+  query LitlogIndexQuery($siteRe: String!) {
>+    allMarkdownRemark(
>+      filter: { id: { regex: $siteRe } }
>+      sort: {fields: [fileAbsolutePath]}
>+    ) {
>       ...AllMarkdownFragment
>     }
>   }
EOF
litlog updated files/src/pages/litlog/index.js
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/templates/litlog-content-page.js
>@@ -0,0 +1,33 @@
>+import React from "react";
>+import rehypeReact from "rehype-react";
>+import LitlogLink from "../components/litlog-link";
>+
>+export default ({ data }) => {
>+  const page = data.markdownRemark;
>+  const renderAst = new rehypeReact({
>+    createElement: React.createElement,
>+    components: {
>+      "litlog-link": LitlogLink
>+    },
>+  }).Compiler;
>+  return (
>+    <div>
>+      <h1>{page.frontmatter.title}</h1>
>+      <h2>Page</h2>
>+      {
>+        renderAst(page.htmlAst)
>+      }
>+    </div>
>+  );
>+};
>+
>+export const query = graphql`
>+  query ContentPageQuery($slug: String!) {
>+    markdownRemark(fields: { slug: { eq: $slug } }) {
>+      htmlAst
>+      frontmatter {
>+        title
>+      }
>+    }
>+  }
>+`;
EOF
rm __blank
litlog created files/src/templates/litlog-content-page.js
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/templates/litlog-content-post.js
>@@ -0,0 +1,33 @@
>+import React from "react";
>+import rehypeReact from "rehype-react";
>+import LitlogLink from "../components/litlog-link";
>+
>+export default ({ data }) => {
>+  const post = data.markdownRemark;
>+  const renderAst = new rehypeReact({
>+    createElement: React.createElement,
>+    components: {
>+      "litlog-link": LitlogLink
>+    },
>+  }).Compiler;
>+  return (
>+    <div>
>+      <h1>{post.frontmatter.title}</h1>
>+      <h2>Post</h2>
>+      {
>+        renderAst(post.htmlAst)
>+      }
>+    </div>
>+  );
>+};
>+
>+export const query = graphql`
>+  query ContentPostQuery($slug: String!) {
>+    markdownRemark(fields: { slug: { eq: $slug } }) {
>+      htmlAst
>+      frontmatter {
>+        title
>+      }
>+    }
>+  }
>+`;
EOF
rm __blank
litlog created files/src/templates/litlog-content-post.js
litlog updated tasks/task-5 "added plan step-5-1"
git add .
git commit -m "added task-5 plan step-5-1"
```
