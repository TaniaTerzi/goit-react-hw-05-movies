"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[209],{209:function(e,t,r){r.r(t);var n=r(433),a=r(861),c=r(439),u=r(757),s=r.n(u),i=r(791),o=r(243),l=r(87),p=r(184);t.default=function(){var e,t=(0,i.useState)([]),r=(0,c.Z)(t,2),u=r[0],h=r[1],f=(0,i.useState)(""),m=(0,c.Z)(f,2),v=m[0],d=m[1],y=(0,l.lr)(),x=(0,c.Z)(y,2),b=x[0],g=x[1],k=null!==(e=b.get("query"))&&void 0!==e?e:"";function j(){return j=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t),{params:{api_key:"3e5c06f36af27128c6066a7b0679e96b"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),j.apply(this,arguments)}return(0,i.useEffect)((function(){k&&function(e){return j.apply(this,arguments)}(k).then((function(e){h((0,n.Z)(e.results))}))}),[k]),(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==v.trim()?(g(""!==v?{query:v}:{}),console.log("searchParams",b)):alert("Search query can not be empty.")},children:[(0,p.jsx)("input",{type:"text",value:v,onChange:function(e){var t=e.currentTarget.value;d(t),console.log("inputvalue",t)}}),(0,p.jsx)("button",{type:"submit",children:"search"})]}),(0,p.jsx)("div",{children:u.map((function(e){return(0,p.jsxs)("li",{style:{listStyle:"none",margin:"5px 0 0"},children:[(0,p.jsx)(l.rU,{to:"".concat(e.id),children:e.title}),"s"]},e.id)}))})]})}}}]);
//# sourceMappingURL=209.a45cedae.chunk.js.map