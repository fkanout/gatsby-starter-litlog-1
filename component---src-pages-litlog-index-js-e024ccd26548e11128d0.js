webpackJsonp([72108002173884],{75:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.allMarkdownFragment=void 0;var n=l(3),u=a(n),r=l(24),d=a(r),f=function(e){var t=e.type,l=e.data;return l?u.default.createElement("table",null,u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"link"),u.default.createElement("th",null,"title"))),u.default.createElement("tbody",null,l.allMarkdownRemark.edges.map(function(e,l){var a=e.node,n=a.fields.slug.toString(),r=n.split("/");if(r.length>3&&r[3]==t)return u.default.createElement("tr",{key:l},u.default.createElement("td",null,u.default.createElement(d.default,{to:a.fields.slug},a.fields.slug)),u.default.createElement("td",null,a.frontmatter.title))}))):u.default.createElement("span",null,"no data")};t.default=f;t.allMarkdownFragment="** extracted graphql fragment **"},208:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=l(3),u=a(n),r=l(75),d=a(r);t.default=function(e){var t=e.data,l=["requests","tasks","changes"];return u.default.createElement("div",null,l.map(function(e,l){return u.default.createElement(d.default,{data:t,type:e,key:l})}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-litlog-index-js-e024ccd26548e11128d0.js.map