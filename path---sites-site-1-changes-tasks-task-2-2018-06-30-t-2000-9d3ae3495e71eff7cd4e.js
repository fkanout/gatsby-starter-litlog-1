webpackJsonp([34111263888148],{520:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"added plan step-1"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"diff"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"element",tagName:"span",properties:{className:["token","coord"]},children:[{type:"text",value:"@@ -0,0 +1,56 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+---"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+title: "Create litlog-link component to link to items in the litlog system"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+date: "2018-06-30"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+request: "request-2"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+status: "in-progress"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+---"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+## Plan"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+1. Initialize and create a dummy React component."}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+```bash"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+npm run site-develop "}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+# in a different terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+export LITLOG_SITE=site-1"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+litlog creating requests/request-2"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+# update request-2 with specification"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+touch __blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+git apply << EOF"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>--- a/__blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+++ b/./src/pages/litlog/sites/site-1/requests/request-2.md"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>@@ -0,0 +1,8 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+---"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+>+title: "Create litlog-link component to link to items in the litlog system"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+>+date: "2018-06-30"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+>+status: "open"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+---"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+## Specification"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+>+Create a <litlog-link to="/files/components/litlog-code.js">litlog-code</litlog-link> React component that link to items in the <litlog-link to="/">litlog</litlog-link> system.'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+EOF"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+rm __blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+litlog created requests/request-2 "added spec"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+litlog creating tasks/task-2"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+litlog creating files/src/components/litlog-link.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+# add dummy code and check <LitlogLink>foo</LitlogLink> on a .js page"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+touch __blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+git apply << EOF"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>--- a/__blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+++ b/./src/components/litlog-link.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>@@ -0,0 +1,10 @@"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+import React from 'react'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+import Link from 'gatsby-link'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+const LitlogLink = () => ("}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+  <span>"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+    Hello, World!"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+  </span>"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+)"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+>+export default LitlogLink"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+EOF"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+rm __blank"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+litlog created files/src/components/litlog-link.js "added dummy"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+litlog created tasks/task-2 "added plan step-1"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+git add ."}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:'+git commit -m "added task-2 plan step-1"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+```"}]}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},frontmatter:{title:"Create"}}},pathContext:{slug:"/sites/site-1/changes/tasks/task-2/2018-06-30T2000/"}}}});
//# sourceMappingURL=path---sites-site-1-changes-tasks-task-2-2018-06-30-t-2000-9d3ae3495e71eff7cd4e.js.map