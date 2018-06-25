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

# alter .gitignore and package.json
cp sites/$LITLOG_SITE/files/package.json .
# modify .gitignore as below
# modify scripts section of packages.json as below
npm install --save-dev cross-var
npm install --save-dev npm-run-parallel
npm install --save-dev gh-pages

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
`.gitignore` additions:
```
# Built source for packages
packages/*/lib

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
`package.json` modifications:
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
--- a/sites/site-1/files/gatsby-config.js
+++ b/sites/site-1/files/gatsby-config.js
@@ -3,4 +3,5 @@ module.exports = {
     title: 'Gatsby Default Starter',
   },
   plugins: ['gatsby-plugin-react-helmet'],
+  pathPrefix: '/gatsby-starter-litlog'
 }
EOF
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
