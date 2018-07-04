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
--- a/__blank
+++ b/./src/pages/litlog/sites/site-1/requests/request-5.md
@@ -0,0 +1,8 @@
+---
+title: "Add Netlify CMS"
+date: "2018-07-04"
+status: "open"
+---
+## Specification
+
+Copy site-2 (gatsby-starter-hello-world) to site-3 and follow [Managing Content with Netlify CMS](https://www.gatsbyjs.org/docs/netlify-cms/) to setup a site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms). Then apply those changes back to site-1.
EOF
rm __blank
litlog created requests/request-5 "added spec"
litlog creating tasks/task-5
litlog created tasks/task-5 "added plan step-1"
git add .
git commit -m "added task-5 plan step-1"
```
