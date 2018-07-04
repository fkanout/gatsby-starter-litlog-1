---
title: "Setup site with content management using [Netlify CMS](https://github.com/netlify/netlify-cms)"
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
git commit -m "added task-5 plan step-1"
```
