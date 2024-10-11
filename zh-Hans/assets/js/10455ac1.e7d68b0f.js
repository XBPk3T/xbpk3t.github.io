"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4963],{5452:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=l(4848),t=l(8453);const s={title:"flomo\u6279\u91cf\u5220\u9664\u811a\u672c",slug:"/2024/flomo-bulk-delete",keywords:["flomo","\u6279\u91cf\u5220\u9664","js"],description:"\u7528\u6765\u5b9e\u73b0flomo\u6279\u91cf\u5220\u9664\u7684js\u811a\u672c",last_update:{date:new Date("2024-09-24T00:00:00.000Z")}},i=void 0,r={id:"2024/flomo-bulk-detele",title:"flomo\u6279\u91cf\u5220\u9664\u811a\u672c",description:"\u7528\u6765\u5b9e\u73b0flomo\u6279\u91cf\u5220\u9664\u7684js\u811a\u672c",source:"@site/docs/2024/flomo-bulk-detele.md",sourceDirName:"2024",slug:"/2024/flomo-bulk-delete",permalink:"/zh-Hans/2024/flomo-bulk-delete",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:1727136e6,frontMatter:{title:"flomo\u6279\u91cf\u5220\u9664\u811a\u672c",slug:"/2024/flomo-bulk-delete",keywords:["flomo","\u6279\u91cf\u5220\u9664","js"],description:"\u7528\u6765\u5b9e\u73b0flomo\u6279\u91cf\u5220\u9664\u7684js\u811a\u672c",last_update:{date:"2024-09-24T00:00:00.000Z"}},sidebar:"zzz",previous:{title:"\u300a\u6280\u672f\u7ba1\u7406\u5b9e\u6218 36 \u8bb2\u300b\u8bfb\u4e66\u7b14\u8bb0",permalink:"/zh-Hans/2024/tech-team-managing"},next:{title:"\u5907\u4efdgh.yml\u4e2d\u5e9f\u5f03\u7684repo\u547d\u4ee4",permalink:"/zh-Hans/2024/deprecated-commands"}},c={},d=[{value:"tldr",id:"tldr",level:2},{value:"why this?",id:"why-this",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"tldr",children:"tldr"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const scrollToBottom = (c) => {\n  const element = document.querySelector(c);\n  console.log(element);\n  element.scrollTop = element.scrollHeight;\n}\n\nconst isScrolledToBottom = () => {\n  const element = document.querySelector('.end');\n  return element ? element.getBoundingClientRect().bottom <= window.innerHeight : false;\n};\n\nfunction scrollAndCheck() {\n  scrollToBottom('.memos');\n\n  if (!isScrolledToBottom()) {\n    console.log('No element with class \"end\" was found, continue scrolling...');\n    setTimeout(scrollAndCheck, 1000); // \u6bcf\u79d2\u68c0\u67e5\u4e00\u6b21\n  } else {\n    console.log('\u9875\u9762\u5df2\u4e0b\u6ed1\u5230\u6700\u5e95\u90e8\uff01');\n    var elements = document.querySelectorAll('.item.danger');\n\n    for (var i = 0; i < elements.length; i++) {\n      if (elements[i].textContent.includes('\u5220\u9664')) {\n        elements[i].click();\n      }\n    }\n  }\n}\n\nscrollAndCheck();\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u76f4\u63a5\u5728 chrome console \u4e2d\u4f7f\u7528\u5373\u53ef"}),"\n",(0,o.jsxs)(n.p,{children:["\u641c\u4e86\u4e00\u4e0b\u76ee\u524d\u7f51\u4e0a\u8fd8\u6ca1\u4eba\u5199\uff0c\u6240\u4ee5\u968f\u624b\u5199\u4e2a\u5206\u4eab\u51fa\u6765\u3002",(0,o.jsx)(n.del,{children:"\u672c\u6765\u60f3\u987a\u624b\u5199\u4e2a\u6cb9\u7334\u811a\u672c\uff0c\u4f46\u662f\u61d2\u5f97\u641e\u4e86\u3002\u76f4\u63a5\u5b58\u5728 alfred snippet \u91cc\u4e86\uff0c\u7528\u8d77\u6765\u8fd8\u7b97\u65b9\u4fbf\u3002"})]}),"\n",(0,o.jsx)(n.h2,{id:"why-this",children:"why this?"}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"\u4e3a\u5565\u6211\u9700\u8981\u8fd9\u4e2a\u811a\u672c\uff0c\u9700\u8981\u4ece"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"flomo\u5728\u6211\u7684\u5de5\u5177\u94fe\u4e2d\u8d77\u5230\u4ec0\u4e48\u4f5c\u7528\uff1f"}),"\n",(0,o.jsx)(n.li,{children:"\u65e5\u5e38\u4f7f\u7528 flomo \u7684 workflow?"}),"\n"]}),(0,o.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u95ee\u9898\u8bf4\u8d77"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"\u5f53\u4fbf\u7b7e\u5de5\u5177/\u7f51\u7edc\u526a\u8d34\u677f\u4f7f\u7528\uff0c\u6240\u4ee5\u6709\u5b9a\u671f\u5168\u90e8\u6e05\u7a7a\u7684\u9700\u6c42\u3002\u4e4b\u524d\u4e00\u76f4\u7528\u5fae\u4fe1\u7684\u201c\u6587\u4ef6\u4f20\u8f93\u52a9\u624b\u201d\u4f5c\u4e3a\u8be5\u5b9a\u4f4d\u7684\u5de5\u5177\uff0c\u4f46\u662f\u7ec8\u7a76\u662f\u4e0d\u65b9\u4fbf\uff0c\u5c31\u60f3\u8d77\u6765\u51e0\u5e74\u524d\u7528\u8fc7\u7684flomo\u3002"})})}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u540e\u5c31\u53d1\u73b0flomo\u4e0d\u652f\u6301\u6279\u91cf\u5220\u9664\uff0c\u7136\u540e\u5c31\u627e\u4e86\u627e\u5176\u4ed6\u7684\u7c7b\u4f3c\u5b9a\u4f4d\u7684\u5de5\u5177\uff0c"}),"\n",(0,o.jsxs)(n.p,{children:["\u9996\u5148\u60f3\u5230\u7684\u5c31\u662f memos\uff0c\u4f46\u662f\u5176 maintainer \u660e\u786e\u8bf4\u4e86 ",(0,o.jsx)(n.a,{href:"https://github.com/usememos/memos/issues/1489",children:"\u4e0d\u4f1a\u652f\u6301\u6279\u5220\u529f\u80fd"}),"\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u627e\u4e86\u4e00\u5708\u6700\u540e\u8fd8\u662f\u51b3\u5b9a\u81ea\u5df1\u5199\u4e2ajs\u811a\u672c\u5b9e\u73b0\u8fd9\u4e2afeat"}),"\n",(0,o.jsx)(n.p,{children:"\u5bf9\u6211\u6765\u8bf4\uff0cflomo\u7684\u4f18\u52bf\u5927\u6982\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"UI\u6f02\u4eae\uff1a\u8fd9\u79cd\u201c\u5361\u7247\u5f0f\u201dUI\u8ddf\u6211\u5bf9\u8be5\u5de5\u5177\u7684\u5b9a\u4f4d\u5b8c\u5168\u5951\u5408\u3002\u6211\u7528flomo\u6765\u8bb0\u5f55\u4e00\u4e9b\u96f6\u788e\u7684\u60f3\u6cd5\u548c\u4e8b\u60c5\uff0c\u901a\u5e38\u4e5f\u5c3110\u6765\u4e2a\u5b57\uff0c\u4e0d\u9700\u8981\u9002\u5408\u957f\u6587\u7684\u7b14\u8bb0\u578b\u8f6f\u4ef6\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u4e0d\u4f1a\u8dd1\u8def"}),"\n",(0,o.jsx)(n.li,{children:"\u652f\u6301\u591a\u7aef\u540c\u6b65\uff1a\u5728\u5916\u7528APP\u8bb0\u5f55\uff0c\u5230\u5bb6\u4e4b\u540e\u5728web\u7aef\u628a\u8fd9\u4e9brecord\u96c6\u4e2d\u5904\u7406\u6389\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u7efc\u4e0a\u6765\u8bf4\uff0c\u5176\u4ed6\u7c7b\u4f3c\u5b9a\u4f4d\u7684\u5de5\u5177\u5c31\u4e0d\u7b26\u5408\u6211\u7684\u9700\u6c42\u4e86"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Memos\u540c\u6837\u4e0d\u652f\u6301\u6279\u91cf\u5220\u9664\uff0c\u8fd8\u9700\u8981 self-hosted"}),"\n",(0,o.jsx)(n.li,{children:"Monolog\u5999\u60f3 \u548c Migi \u53ea\u6709APP\uff0c\u4e0d\u652f\u6301\u591a\u7aef\u540c\u6b65"}),"\n",(0,o.jsx)(n.li,{children:"Thino \u662f Obsidian\u7684\u63d2\u4ef6"}),"\n",(0,o.jsx)(n.li,{children:"\u5370\u8c61\u7b14\u8bb0\u7b49\u7b14\u8bb0\u7c7bAPP\uff0c\u4e0a\u9762\u8bf4\u4e86\uff0c\u592a\u91cd\u4e86\uff0c\u6211\u4e0d\u9700\u8981\u8fd9\u79cd\u5199\u957f\u6587\u7684\u8f6f\u4ef6\uff0c\u5e76\u4e14\u8fd9\u4e9b\u7b14\u8bb0\u7c7bAPP\u666e\u904dUI\u5f88\u7c97\u7cd9\uff0c\u4e0d\u597d\u7528\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"\u81f3\u4e8e\u65e5\u5e38\u4f7f\u7528 flomo \u7684 workflow"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5916\u51fa\u968f\u624b\u8bb0\u5f55\u60f3\u6cd5"}),"\n",(0,o.jsx)(n.li,{children:"\u5230\u5bb6\u4e4b\u540e\u628a\u6240\u6709\u7684record\u590d\u5236\u5230scratch\uff08\u9ed8\u8ba4\u201c\u4ece\u65e7\u5230\u65b0\u201d\u5c55\u793a\uff09"}),"\n",(0,o.jsx)(n.li,{children:"\u6279\u91cf\u5220\u9664\u6240\u6709record"}),"\n",(0,o.jsx)(n.li,{children:"\u628a\u5f04\u5230scratch\u7684\u4e1c\u897f\u9010\u9879\u5904\u7406\u6389"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>r});var o=l(6540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);