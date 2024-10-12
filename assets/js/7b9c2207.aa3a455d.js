"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3087],{861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(4848),a=t(8453);const s={title:"\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177",date:"2023-8-17",slug:"/2023/renamer-tool"},i=void 0,o={id:"2023/\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177",title:"\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177",description:"\u524d\u8a00",source:"@site/docs/2023/\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177.md",sourceDirName:"2023",slug:"/2023/renamer-tool",permalink:"/2023/renamer-tool",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:1728693899e3,frontMatter:{title:"\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177",date:"2023-8-17",slug:"/2023/renamer-tool"},sidebar:"zzz",previous:{title:"\u300a\u5b7a\u5b50\u5e1d\u300b\u8bfb\u540e\u611f",permalink:"/2023/ru-zi-di"},next:{title:"\u590d\u76d8\u5949\u5316\u9a6c\u62c9\u677e",permalink:"/2023/feng-hua-marathon"}},m={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u7b2c\u4e09\u65b9\u5de5\u5177",id:"\u7b2c\u4e09\u65b9\u5de5\u5177",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(n.p,{children:"\u5927\u90e8\u5206\u4eba\u8fd8\u662f\u4f7f\u7528GUI\u5e94\u7528\u6765\u64cd\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u5982mac\u4e0a\u7684 ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=aOmCf3vCsLk",children:"A Better Finder Rename"}),"  \u6216\u8005 Renamer\uff0cwin\u4e0a\u4e5f\u6709\u7c7b\u4f3c\u5de5\u5177"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u4f46\u662f\u771f\u7684\u6709\u5fc5\u8981\u7528GUI\u6765\u8fdb\u884c\u8be5\u64cd\u4f5c\u5417\uff1f"})}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u65e0\u8bba\u662fmac\u8fd8\u662fwin\u672c\u8eab\u90fd\u652f\u6301\u7b80\u5355\u7684 batch rename\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"mac\u4e0a\u652f\u6301 Replace (\u4ee5\u53caAdd Text), Format \u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u5df2\u7ecf\u5f88\u591f\u7528\u4e86\uff0c\u4f46\u662f\u5982\u679c\u60f3\u8fdb\u884c\u4e00\u4e9b\u590d\u6742\u64cd\u4f5c\u5c31\u9700\u8981\u7b2c\u4e09\u65b9\u5de5\u5177\u4e86"})})}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c\u4e09\u65b9\u5de5\u5177",children:"\u7b2c\u4e09\u65b9\u5de5\u5177"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'#- name: rename\n#  url: http://plasmasturm.org/code/rename/\n#  des: "use rename-command rather than for-do-(mv)-done, install using \'brew install rename\'"\n#  commands:\n#    - ["rename \'s/old/new/\' *.files"]\n#    - ["rename \'y/ /_/\' *", "\u7528\u4e0b\u5212\u7ebf\u66ff\u6362\u6587\u4ef6\u540d\u4e2d\u7684\u7a7a\u683c"]\n#    - ["rename \'y/A-Z/a-z/\' *", "\u5c06\u6587\u4ef6\u540d\u8f6c\u6362\u4e3a\u5c0f\u5199"]\n#    - ["rename \'y/a-z/A-Z/\' *", "\u5c06\u6587\u4ef6\u540d\u8f6c\u6362\u4e3a\u5927\u5199"]\n#    - ["rename \'s/$//.html/\' *", "\u6279\u91cf\u589e\u52a0\u6587\u4ef6\u540e\u7f00"]\n#    - ["rename \'s//.txt//\' *", "\u6279\u91cf\u5220\u9664\u6587\u4ef6\u540d"]\n#    - ["rename _dbg.txt .txt *dbg*", \'a_dbg.txt, b_dbg.txt ...\u8fd9\u6837\u7684\u6587\u4ef6\uff0c\u628a\u8fd9\u4e9b\u6587\u4ef6\u4e2d\u7684"_dbg "\u53bb\u6389\uff0c\u91cd\u65b0\u547d\u540d\']\n#    - ["find -iname \\*.* | rename -v \'s/ /-/g\'", "rename\u547d\u4ee4\u4e0d\u652f\u6301\u9012\u5f52\uff0c\u6240\u4ee5\u9700\u8981find\u547d\u4ee4\u6765\u5148\u67e5\u627e\u6240\u6709\u6587\u4ef6"]\n\n\n- name: pipe-rename\n  url: https://github.com/marcusbuffett/pipe-rename\n  des: \u901a\u8fc7\u5728editor\u91cc\u7f16\u8f91\u8fdb\u884c\u6279\u91cf\u91cd\u547d\u540d\uff0c\u652f\u6301brew\u548ccargo\u5b89\u88c5\n\n\n---\n\n- name: rename\n  url: https://github.com/JasonGrass/rename\n  des: "\u5728\u7ebf\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d"\n  # [Rename - \u6279\u91cf\u6587\u4ef6\u91cd\u547d\u540d\u5de5\u5177](https://rename.jgrass.xyz/)\n  # [WebRename - \u5728\u7ebf\u6587\u4ef6\u6279\u91cf\u91cd\u547d\u540d\u5de5\u5177](https://webrename.cn/)\n\n\n- name: rnr\n  url: https://github.com/ismaelgv/rnr\n  des: brew install rnr\n  commands:\n    - ["rnr -r -f \'.md\' \'.mdx\' .", ""]\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u63d0\u4f9b\u4e86\u4e00\u4e2aweb\u5de5\u5177\uff0c\u4e00\u4e2acli\u5de5\u5177\uff0c\u4e8c\u8005\u5206\u5de5\u4e0d\u540c"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\u5982\u679c\u65e5\u5e38\u4f7f\u7528\uff0c\u90a3\u80af\u5b9aweb\u5de5\u5177\u5bf9\u7528\u6237\u66f4\u53cb\u597d"})})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\u5982\u679c\u662f\u9ad8\u9891\u64cd\u4f5c\u6216\u8005\u4e0d\u65b9\u4fbf\u4f7f\u7528web\u7684\u573a\u666f\uff08\u6bd4\u5982vps\u4e0a\u6ca1\u6709browser\u7684\u8bdd\uff09\uff0c\u90a3\u5c31\u7528cli\u5de5\u5177"})})})]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);