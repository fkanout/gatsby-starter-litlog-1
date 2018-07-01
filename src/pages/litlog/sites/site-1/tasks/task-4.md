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
