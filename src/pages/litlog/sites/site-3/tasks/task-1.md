---
title: "Setup site with content management using Netlify CMS"
date: "2018-07-04"
request: "request-1"
status: "in-progress"
---
## Plan

1. Initial setup.
```bash
export LITLOG_SITE=site-3
litlog creating requests/request-1
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/sites/site-3/requests/request-1.md
>@@ -0,0 +1,8 @@
>+---
>+title: "Setup site with content management using [Netlify CMS]>(https://github.com/netlify/netlify-cms)"
>+date: "2018-07-04"
>+status: "open"
>+---
>+## Specification
>+
>+Follow [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/) to setup site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms).
EOF
rm __blank
litlog created requests/request-1 "added spec"
litlog creating tasks/task-1
litlog created tasks/task-1 "added plan step-1"
git add .
git commit -m "added task-1 plan step-1"
```
1. Follow [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/) to setup site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms).
```bash
export LITLOG_SITE=site-3
litlog updating tasks/task-1
npm install --save netlify-cms gatsby-plugin-netlify-cms
git apply << EOF
>--- a/sites/site-3/files/package.json
>+++ b/sites/site-3/files/package.json
>@@ -4,10 +4,12 @@
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
>--- a/sites/site-3/files/gatsby-config.js
>+++ b/sites/site-3/files/gatsby-config.js
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
>+++ b/./sites/site-3/files/static/admin/config.yml
>@@ -0,0 +1,16 @@
>+backend:
>+  name: test-repo
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
litlog updated tasks/task-1 "added plan step-2"
git add .
git commit -m "added site-3 task-1 plan step-2"
```
