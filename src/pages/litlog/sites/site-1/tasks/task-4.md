---
title: "Create site-2 from gatsby-starter-hello-world"
date: "2018-07-01"
request: "request-4"
status: "in-progress"
---
## Plan

1. Initial setup.
```bash
export LITLOG_SITE=site-1
litlog creating requests/request-4
touch __blank
git apply << EOF
>--- a/__blank
>+++ b/./src/pages/litlog/sites/site-1/requests/request-4.md
>@@ -0,0 +1,8 @@
>+---
>+title: "Create site-2 from gatsby-starter-hello-world"
>+date: "2018-07-01"
>+status: "open"
>+---
>+## Specification
>+
>+Create site-2 from [gatsby-starter-hello-world]>(https://github.com/gatsbyjs/gatsby-starter-hello-world).
EOF
rm __blank
litlog created requests/request-4 "added spec"
litlog creating tasks/task-4
litlog created tasks/task-4 "added plan step-1"
git add .
git commit -m "added task-4 plan step-1"
```
1. Get the files from [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) and add into changes.
```bash
litlog updating tasks/task-4
# in a different terminal window outside the project root
export LITLOG_SITE=site-2
gatsby_new_timestamp=$(date +%Y-%m-%dT%H%M)
gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world
echo $gatsby_new_timestamp
# 2018-07-01T1521
cd $LITLOG_SITE
rm -r node_modules
rm .gitignore
cd ../gatsby-starter-litlog
mkdir sites/$LITLOG_SITE/
mkdir sites/$LITLOG_SITE/files
mkdir sites/$LITLOG_SITE/files/src
mkdir sites/$LITLOG_SITE/files/src/components
mkdir sites/$LITLOG_SITE/files/src/layouts
cp -R ../$LITLOG_SITE/* sites/$LITLOG_SITE/files
# temporarily stag sites/ files and run 'git status' to get a list of the files
litlog created files/LICENSE "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world'" $gatsby_new_timestamp
litlog created files/README.md "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world'" $gatsby_new_timestamp
litlog created files/package-lock.json "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world'" $gatsby_new_timestamp
litlog created files/package.json "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world'" $gatsby_new_timestamp
litlog created files/src/pages/index.js "Ran 'gatsby new $LITLOG_SITE https://github.com/gatsbyjs/gatsby-starter-hello-world'" $gatsby_new_timestamp
# back in original terminal window where LITLOG_SITE=site-1
litlog created tasks/task-4 "added plan step-2"
git add .
git commit -m "added task-4 plan step-2"
```
1. Update *package.json* with necessary changes.
```bash
export LITLOG_SITE=site-1
litlog updating tasks/task-4
# in a different terminal window
export LITLOG_SITE=site-2
litlog updating files/package.json
cp sites/$LITLOG_SITE/files/package.json .
litlog creating files/gatsby-config.js
cp sites/site-1/files/gatsby-config.js sites/$LITLOG_SITE/files
litlog created files/gatsby-config.js "copied from site-1"
litlog creating files/gatsby-node.js
cp sites/site-1/files/gatsby-node.js sites/$LITLOG_SITE/files
litlog created files/gatsby-node.js "copied from site-1"
rm -rf node_modules
npm install
npm run site-develop
# check that site runs as expected
git apply << EOF
>--- a/sites/site-2/files/package.json
>+++ b/sites/site-2/files/package.json
>@@ -1,14 +1,32 @@
> {
>   "name": "gatsby-starter-hello-world",
>   "description": "Gatsby hello world starter",
>+  "dependencies": {
>+    "gatsby": "^1.9.247",
>+    "gatsby-link": "^1.6.40",
>+    "gatsby-plugin-react-helmet": "^2.0.10",
>+    "gatsby-remark-prismjs": "^2.0.4",
>+    "gatsby-source-filesystem": "^1.5.39",
>+    "gatsby-transformer-remark": "^1.7.44",
>+    "prismjs": "^1.15.0",
>+    "react-helmet": "^5.2.0",
>+    "rehype-react": "^3.0.2"
>+  },
>   "license": "MIT",
>   "scripts": {
>+    "build": "npm run site && gatsby build",
>     "develop": "gatsby develop",
>-    "build": "gatsby build",
>-    "serve": "gatsby serve"
>+    "format": "prettier --write 'src/**/*.js'",
>+    "test": "echo \"Error: no test specified\" && exit 1",
>+    "deploy": "npm run site && gatsby build --prefix-paths && gh-pages -d public",
>+    "site": "cross-var babel sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,README.md",
>+    "site-develop": "npm-run-parallel site-watch develop",
>+    "site-watch": "cross-var babel -w sites/$LITLOG_SITE/files --out-dir ./ --presets=react --copy-files --ignore LICENSE,README.md"
>   },
>-  "dependencies": {
>-    "gatsby": "^1.9.250",
>-    "gatsby-link": "^1.6.40"
>+  "devDependencies": {
>+    "cross-var": "^1.1.0",
>+    "gh-pages": "^1.2.0",
>+    "npm-run-parallel": "^0.6.0",
>+    "prettier": "^1.12.0"
>   }
> }
EOF
litlog updated files/package.json "added litlog changes"
# back in original terminal window where LITLOG_SITE=site-1
litlog updated tasks/task-4 "added plan step-3"
git add .
git commit -m "added task-4 plan step-3"
```
