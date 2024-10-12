"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5995],{6685:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(4848),s=a(8453);const i={title:"\u8bbe\u8ba1\u6a21\u5f0f",date:new Date("2024-09-14T00:00:00.000Z")},t=void 0,l={id:"2024/Design-Pattern",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"Design Pattern",source:"@site/docs/2024/Design-Pattern.md",sourceDirName:"2024",slug:"/2024/Design-Pattern",permalink:"/zh-Hans/2024/Design-Pattern",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:1728693899e3,frontMatter:{title:"\u8bbe\u8ba1\u6a21\u5f0f",date:"2024-09-14T00:00:00.000Z"},sidebar:"zzz",previous:{title:"running",permalink:"/zh-Hans/2024/running"},next:{title:"\u4ee3\u7801\u89c4\u8303",permalink:"/zh-Hans/2024/code-spec"}},c={},o=[{value:"Design Pattern",id:"design-pattern",level:2},{value:"\u521b\u5efa\u578b\u6a21\u5f0f",id:"\u521b\u5efa\u578b\u6a21\u5f0f",level:3},{value:"\u7ed3\u6784\u578b\u6a21\u5f0f",id:"\u7ed3\u6784\u578b\u6a21\u5f0f",level:3},{value:"\u884c\u4e3a\u578b\u6a21\u5f0f",id:"\u884c\u4e3a\u578b\u6a21\u5f0f",level:3},{value:"[2024/9/1] \u300a\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f\u300b\u8bfb\u4e66\u7b14\u8bb0",id:"202491-\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f\u8bfb\u4e66\u7b14\u8bb0",level:2},{value:"\u603b\u8bc4",id:"\u603b\u8bc4",level:3}];function d(n){const e={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"design-pattern",children:"Design Pattern"}),"\n",(0,r.jsxs)(e.admonition,{type:"tip",children:[(0,r.jsx)(e.p,{children:"\u57fa\u672c\u8ba4\u77e5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8bbe\u8ba1\u6a21\u5f0f\u4e0d\u662f\u786c\u77e5\u8bc6\uff0c\u662f\u7ecf\u9a8c\u3002\u9700\u8981\u6162\u6162\u54c1\uff0c\u65e0\u6cd5\u4e00\u8e74\u800c\u5c31\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u901a\u8fc7\u6700\u4f73\u4f7f\u7528\u573a\u666f (\u4f8b\u5b50) \u6765\u5b66\u4e60\u8bbe\u8ba1\u6a21\u5f0f\u662f\u6700\u5feb\u7684"}),"\n",(0,r.jsx)(e.li,{children:"\u60f3\u60f3\u4e0d\u7528\u8bbe\u8ba1\u6a21\u5f0f\u600e\u4e48\u5b9e\u73b0\uff1f\u8be5\u573a\u666f\u4e0b\u4f7f\u7528\u5404\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u5b9e\u73b0\uff0c\u5206\u522b\u6709\u4ec0\u4e48\u4f18\u52a3\uff1f\u5bf9\u6bd4\u4e00\u4e0b \u54ea\u79cd\u66f4\u597d\uff1f (\u5982\u679c\u4e0d\u80fd\u5408\u7406\u8bbe\u8ba1\uff0c\u6216\u8005\u7528\u9519\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f1a\u5bfc\u81f4\u7ef4\u62a4\u66f4\u56f0\u96be\uff0c\u8fd9\u5c31\u662f\u6240\u8c13\u7684\u201c\u53cd\u8bbe\u8ba1/\u8fc7\u5ea6\u8bbe\u8ba1\u201d)"}),"\n"]})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u521b\u5efa\u578b\u6a21\u5f0f\uff1a\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u540c\u65f6\uff0c\u9690\u85cf\u521b\u5efa\u903b\u8f91\u7684\u65b9\u5f0f\uff0c\u800c\u4e0d\u662f\u7528 new \u76f4\u63a5\u5b9e\u4f8b\u5316\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u7ed3\u6784\u578b\u6a21\u5f0f\uff1a\u7ec4\u5408\u7c7b\u548c\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u884c\u4e3a\u578b\u6a21\u5f0f\uff1a\u5173\u6ce8\u5bf9\u8c61\u95f4\u7684\u901a\u4fe1"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'\n- type: Design-Pattern\n  repo:\n    - url: https://github.com/aierui/design-pattern-in-go\n      qs:\n        - q: "**What\'s Design Pattern? What are some common DP?**"\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u521b\u5efa\u578b\u6a21\u5f0f",children:"\u521b\u5efa\u578b\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"- name: \u5de5\u5382\u6a21\u5f0f\n  code: |\n    1. \u628a\u67d0\u4e2a\u5bf9\u8c61\u7684\u4e0d\u540c\u79cd\u7c7b\u5b9a\u4e49\u6210 struct\n    2. \u628a\u8be5\u5bf9\u8c61\u7684\u4e0d\u540c\u5c5e\u6027\u5b9a\u4e49\u6210 interface\n    3. \u628a struct \u6574\u5408\u5230NewInterface()\n\n\n\n- name: builder \u6a21\u5f0f\n  scenario: \u5c06\u591a\u4e2a\u7b80\u5355\u5bf9\u8c61\u7ec4\u88c5\u6210\u590d\u6742\u5bf9\u8c61\n  examples: |\n    1. \u57fa\u672c\u7269\u6599\u4e0d\u53d8\uff0c\u4f46\u662f\u5176\u7ec4\u5408\u65b9\u5f0f\u7ecf\u5e38\u53d8\u5316\uff0c\u6bd4\u5982\u88c5\u4fee\n    2. \u5efa\u9020\u8005\u6a21\u5f0f\u6240\u521b\u5efa\u7684\u4ea7\u54c1\uff0c\u4e00\u822c\u5177\u6709\u8f83\u591a\u7684\u5171\u540c\u70b9\uff0c\u5176\u7ec4\u6210\u90e8\u5206\u76f8\u4f3c\uff0c*\u5982\u679c\u4ea7\u54c1\u4e4b\u95f4\u7684\u5dee\u5f02\u6027\u5f88\u5927\uff0c\u5219\u4e0d\u9002\u5408\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f*\uff0c\u56e0\u6b64\u5176\u4f7f\u7528\u573a\u666f\u6709\u4e00\u5b9a\u7684\u5c40\u9650\u6027\n\n- name: \u539f\u578b\u6a21\u5f0f prototype\n  scenario: \u5176\u5b9e\u5c31\u662fDI\u4f9d\u8d56\u6ce8\u5165\uff0c\u5728interface\u91cc\u52a0\u4e00\u4e2aClone()\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u7ed3\u6784\u578b\u6a21\u5f0f",children:"\u7ed3\u6784\u578b\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"\n- name: \u9002\u914d\u5668\u6a21\u5f0f adapter\n  scenario: \u628a\u539f\u672c\u4e0d\u517c\u5bb9\u7684\u63a5\u53e3\uff0c\u901a\u8fc7\u9002\u914d\u5668\u8fdb\u884c\u7edf\u4e00\n  examples: \u8f6c\u6362\u5668\n  usage: ''\n\n\n- name: \u88c5\u9970\u5668\u6a21\u5f0f decorator\n  scenario: \u4e0d\u80fd\u6216\u8005\u4e0d\u60f3\u901a\u8fc7\u7ee7\u627f\u7c7b\u7684\u65b9\u5f0f\u62d3\u5c55\u529f\u80fd\uff1b\u5728\u4e0d\u4fee\u6539\u539f\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\u589e\u52a0\u65b0\u529f\u80fd (\u907f\u514d\u76f4\u63a5\u7ee7\u627f\u5bfc\u81f4\u5b50\u7c7b\u81a8\u80c0\u95ee\u9898)\n  examples: \u4fc4\u7f57\u65af\u5957\u5a03/\u5927\u4f17\u6c7d\u8f66/nokia \u624b\u673a \u79d1\u6280\u4ee5\u6362\u58f3\u4e3a\u672c\u561b\n  usage: ''\n\n\n- name: \u5916\u89c2\u6a21\u5f0f facade\n  scenario: \u5c4f\u853d\u5185\u90e8\u590d\u6742\u5ea6\uff0c\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3\uff0c\u9690\u853d\u5185\u90e8\u7684\u590d\u6742\u5b50\u7cfb\u7edf\n  examples: \u7528\u6237\u6ce8\u518c\u53ea\u9700\u8981\u624b\u673a\u53f7\uff0c\u670d\u52a1\u7aef\u4f1a\u4ece\u5404\u79cd\u6e20\u9053\u83b7\u53d6\u5176\u4ed6\u6570\u636e\n  usage: ''\n\n\n- name: \u4ee3\u7406\u6a21\u5f0f proxy\n  scenario: \u7ed9\u67d0\u4e2a\u5bf9\u8c61\u63d0\u4f9b\u4e00\u4e2a\u4ee3\u7406\uff0c\u5e76\u7531\u4ee3\u7406\u5bf9\u8c61\u63a7\u5236\u539f\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u4e3a\u67d0\u4e9b\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u5bf9\u8c61\u7684\u7c7b\u7684\u6613\u7528\u64cd\u4f5c\u4e0a\u63d0\u4f9b\u65b9\u4fbf\u4f7f\u7528\u7684\u4ee3\u7406\u670d\u52a1\uff1b\n  examples: \u5206\u9500\u5546/\u8001\u5927\u548c\u5c0f\u5f1f\n  usage: |\n    - \u548cadapter\u7684\u533a\u522b\uff1a\u9002\u914d\u5668\u662f\u8fde\u63a5\u4e86\u4e24\u4e2a\u63a5\u53e3\n    - \u548cdecorator\u7684\u533a\u522b\uff1a\u88c5\u9970\u5668\u662f\u5bf9\u73b0\u6709\u7684\u5bf9\u8c61\u8fdb\u884c\u5305\u88c5\n\n\n\n- name: \u7ec4\u5408\u6a21\u5f0f composite\n  scenario: \u8ba9\u6211\u4eec\u7684\u670d\u52a1\u8282\u70b9\u8fdb\u884c\u81ea\u7531\u7ec4\u5408\uff0c\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u5bf9 ABC \u4e09\u4e2a\u670d\u52a1\u968f\u610f\u8fdb\u884c\u7ec4\u5408\uff0c\n  examples: \u8425\u9500\u89c4\u5219\u51b3\u7b56\u6811\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6027\u522b/\u5e74\u9f84\u53d1\u653e\u4e0d\u540c\u7684\u4f18\u60e0\u5238\n  usage: ''\n\n\n- name: \u6865\u63a5\u6a21\u5f0f bridge\n  scenario: \u628a\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206\u5206\u79bb\uff0c\u4e0d\u5e0c\u671b\u4f7f\u7528\u7ee7\u627f\u6216\u8005\u56e0\u4e3a\u591a\u5c42\u6b21\u7ee7\u627f\u5bfc\u81f4\u7cfb\u7edf\u7c7b\u7684\u4e2a\u6570\u6025\u5267\u589e\u52a0\u7684\u7cfb\u7edf\n  examples: \u805a\u5408\u652f\u4ed8\uff0c\u805a\u5408\u4e86\u652f\u4ed8\u6e20\u9053 (\u5fae\u4fe1/\u652f\u4ed8\u5b9d) \u548c\u652f\u4ed8\u65b9\u5f0f (\u6307\u7eb9/\u4eba\u8138)\n  usage: ''\n\n\n- name: \u4eab\u5143\u6a21\u5f0f flyweight\n  scenario: \u901a\u8fc7\u5171\u4eab\u901a\u7528\u5bf9\u8c61\uff0c\u51cf\u5c11\u5185\u5b58\u4f7f\u7528 || \u4eab\u5143\u5de5\u5382\u628a\u53d8\u5316\u7684\u5bf9\u8c61\u548c\u4e0d\u53d8\u5bf9\u8c61\u7ec4\u88c5\n  examples: \u79d2\u6740\u573a\u666f\u7684\u5546\u54c1\u5e93\u5b58\u548c\u8be6\u60c5\n  usage: ''\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u884c\u4e3a\u578b\u6a21\u5f0f",children:"\u884c\u4e3a\u578b\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"\n- name: \u8d23\u4efb\u94fe\u6a21\u5f0f cor\n  scenario: \u89e3\u51b3\u4e00\u7ec4\u670d\u52a1\u4e2d\u7684\u5148\u540e\u5173\u7cfb\n  examples: \u51fb\u9f13\u4f20\u82b1/\u79bb\u804c\u65f6\u9700\u8981\u5404\u5c42\u9886\u5bfc\u7b7e\u5b57/\u5e73\u65f6\n\n- name: \u547d\u4ee4\u6a21\u5f0f command\n  scenario: \u628a\u7c7b\u4f3c\u573a\u666f\u62c6\u5206\u6210\u4e09\u4e2a\u90e8\u5206\uff1a\u547d\u4ee4/\u547d\u4ee4\u5b9e\u73b0\u8005/\u547d\u4ee4\u8c03\u7528\u8005\uff0c\u6709\u65b0\u83dc\u54c1\u65f6\u53ef\u4ee5\u76f4\u63a5\u65b0\u589e\uff0c\u5f88\u5bb9\u6613\u62d3\u5c55\u5916\u90e8\u8c03\u7528\n  examples: \u9500\u552e\u4e0d\u9700\u8981\u5173\u5fc3\u751f\u4ea7\u8f66\u95f4\u91cc\u7684\u5177\u4f53\u6d41\u7a0b/\u9910\u5385\u670d\u52a1\u5458\u4e0d\u9700\u8981\u5173\u5fc3\u53a8\u5e08\u600e\u4e48\u505a\u83dc\n  usage: \u600e\u4e48\u7ec4\u5408\u4f7f\u7528\u547d\u4ee4\u6a21\u5f0f\u548c\u7ec4\u5408\u6a21\u5f0f\uff1f\n\n- name: \u4e2d\u4ecb\u8005\u6a21\u5f0f mediator\n  scenario: >-\n    \u7cfb\u7edf\u4e2d\u7684\u5bf9\u8c61\u4e4b\u95f4\u5b58\u5728\u590d\u6742\u7684\u5f15\u7528\u5173\u7cfb\uff0c\u5bfc\u81f4\u96be\u4ee5\u590d\u7528\uff0c\u901a\u8fc7\u5f15\u5165\u4e2d\u4ecb\u8005\u7c7b\uff0c\u5c01\u88c5\u8fd9\u4e9b\u5bf9\u8c61\u4e4b\u95f4\u7684\u5f15\u7528\u5173\u7cfb\uff0c\u5982\u679c\u9700\u8981\u6539\u53d8\u884c\u4e3a\uff0c\u5219\u5f15\u5165\u65b0\u7684\u4e2d\u4ecb\u8005\u7c7b\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5220\u9664\u539f\u4e2d\u4ecb\u8005\uff0c\n  examples: \u4ea4\u8b66\u7ef4\u6301\u4ea4\u901a\u79e9\u5e8f\n\n- name: \u5907\u5fd8\u5f55\u6a21\u5f0f memento\n  scenario: \u5c5e\u4e8e\u9644\u52a0\u529f\u80fd\uff0c\u901a\u8fc7\u8bb0\u5f55\u539f\u5bf9\u8c61\u7684\u884c\u4e3a\u4ece\u800c\u5b9e\u73b0\u5907\u5fd8\u5f55\u6a21\u5f0f\uff0c\n  examples: \u56de\u6eda\u7cfb\u7edf\n\n- name: \u89c2\u5bdf\u8005\u6a21\u5f0f\n  scenario: \u5bf9\u8c61\u7684\u4e00\u79cd\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u5f53\u4f9d\u8d56\u7684\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u6240\u6709\u4f9d\u8d56\u5b83\u7684\u5bf9\u8c61\u90fd\u5f97\u5230\u901a\u77e5\u5e76\u88ab\u81ea\u52a8\u66f4\u65b0\uff0c\u53ef\u4ee5\u7528\u89c2\u5bdf\u8005\u6a21\u5f0f\u6784\u5efa\u94fe\u5f0f\u89e6\u53d1\u673a\u5236\n  examples: MQ \u670d\u52a1\u7684\u901a\u77e5\u4e2d\u5fc3\n\n- name: \u72b6\u6001\u6a21\u5f0f\n  scenario: >-\n    \u5bf9\u8c61\u7684\u884c\u4e3a\u4f9d\u8d56\u4e8e\u4ed6\u7684\u72b6\u6001 (\u5c5e\u6027)\uff0c\u5e76\u4e14\u53ef\u4ee5\u6839\u636e\u5176\u72b6\u6001\u6539\u53d8\u800c\u6539\u53d8\u76f8\u5173\u884c\u4e3a || \u72b6\u6001\u6a21\u5f0f\u7684\u6838\u5fc3\u5728\u4e8e\u73af\u5883\u7c7b\uff0c\u73af\u5883\u7c7b\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u573a\u666f\u8c03\u7528\u4e0d\u540c\u5b9e\u73b0\u7c7b ||\n    \u8fd9\u6837\u7684\u8bdd\uff0c\u5ba2\u6237\u7aef\u4e0d\u9700\u8981\u50cf\u7b56\u7565\u6a21\u5f0f\u4e00\u6837\uff0c\u77e5\u9053\u6240\u6709\u5b9e\u73b0\u7c7b\u7684\u7c7b\u540d\uff0c\u53ea\u9700\u8981\u5b9e\u4f8b\u5316\u73af\u5883\u7c7b\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u9700\u8981\u7684\u529f\u80fd\n  examples: >-\n    \u4ee3\u7801\u4e2d\u5305\u542b\u5927\u91cf\u4e0e\u5bf9\u8c61\u72b6\u6001\u6709\u5173\u7684\u6761\u4ef6\u8bed\u53e5\uff0c\u4f1a\u5bfc\u81f4\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u53d8\u5dee\uff0c\u4e0d\u80fd\u65b9\u4fbf\u5730\u589e\u52a0\u548c\u5220\u9664\u72b6\u6001\uff0c\u4f7f\u5ba2\u6237\u7c7b\u4e0e\u7c7b\u5e93\u4e4b\u95f4\u7684\u8026\u5408\u589e\u5f3a\uff0c\u5728\u8fd9\u4e9b\u6761\u4ef6\u8bed\u53e5\u4e2d\u5305\u542b\u4e86\u5bf9\u8c61\u7684\u884c\u4e3a\uff0c\u800c\u4e14\u8fd9\u4e9b\u6761\u4ef6\u5bf9\u5e94\u5bf9\u8c61\u7684\u5404\u79cd\u72b6\u6001\n\n\n- name: \u7b56\u7565\u6a21\u5f0f strategy\n  scenario: \u5c06\u4e0d\u540c\u7684\u5904\u7406\u8fc7\u7a0b\u8fdb\u884c\u72ec\u7acb\u5c01\u88c5\uff0c\u901a\u8fc7\u63a5\u53e3\u66b4\u9732\u51fa\u53bb\uff0c\u8c03\u7528\u8005\u6839\u636e\u4e0d\u540c\u573a\u666f\u548c\u6761\u4ef6\uff0c\u4f7f\u7528\u4e0d\u540c\u7b56\u7565\u4e0d\u9700\u8981\u4e86\u89e3\u5176\u4e2d\u7ec6\u8282\n\n- name: \u6a21\u7248\u6a21\u5f0f template\n\n- name: \u8bbf\u95ee\u8005\u6a21\u5f0f visitor\n\n\n- name: \u89e3\u91ca\u5668\u6a21\u5f0f\n\n- name: \u7a7a\u5bf9\u8c61\u6a21\u5f0f\n\n- name: \u8fed\u4ee3\u5668\u6a21\u5f0f iterator\n  scenario: \u5b9e\u73b0 Iterator \u63a5\u53e3\uff0c\u901a\u8fc7 next \u7684\u65b9\u5f0f\u83b7\u53d6\u96c6\u5408\u5143\u7d20\n  examples: \u516c\u53f8\u7ec4\u7ec7\u67b6\u6784\n\n"})}),"\n",(0,r.jsx)(e.h2,{id:"202491-\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f\u8bfb\u4e66\u7b14\u8bb0",children:"[2024/9/1] \u300a\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f\u300b\u8bfb\u4e66\u7b14\u8bb0"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-markdown",children:"\u672c\u4e66\u901a\u7bc7\u90fd\u662f\u4ee5\u60c5\u666f\u5bf9\u8bdd\u7684\u5f62\u5f0f\uff0c\u7528\u591a\u4e2a\u5c0f\u6545\u4e8b\u6216\u7f16\u7a0b\u793a\u4f8b\u6765\u7ec4\u7ec7\u8bb2\u89e3GoF\u603b\u7ed3\u768423\u4e2a\u8bbe\u8ba1\u6a21\u5f0f\u3002\u672c\u4e66\u5171\u5206\u4e3a29\u7ae0\u3002\u5176\u4e2d\uff0c\u7b2c1\u30013\u30014\u30015\u7ae0\u7740\u91cd\u8bb2\u89e3\u4e86\u9762\u5411\u5bf9\u8c61\u7684\u610f\u4e49\u3001\u597d\u5904\u4ee5\u53ca\u51e0\u4e2a\u91cd\u8981\u7684\u8bbe\u8ba1\u539f\u5219\uff1b\u7b2c2\u7ae0\uff0c\u4ee5\u53ca\u7b2c6\u5230\u7b2c28\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e8623\u4e2a\u8bbe\u8ba1\u6a21\u5f0f\uff1b\u7b2c29\u7ae0\u662f\u5bf9\u8bbe\u8ba1\u6a21\u5f0f\u7684\u5168\u9762\u603b\u7ed3\u3002\u9644\u5f55\u90e8\u5206\u662f\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u7684\u6f14\u53d8\u4e3a\u521d\u5b66\u8005\u4ecb\u7ecd\u4e86\u9762\u5411\u5bf9\u8c61\u7684\u57fa\u672c\u6982\u5ff5\u3002\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-markdown",children:"\u8bbe\u8ba1\u6a21\u5f0f\u662f\u5426\u6709\u5fc5\u8981\u5168\u90e8\u5b66\u4e00\u904d\uff1f\n\n\u7b54\u6848\u662f\uff0cYes\uff01\u522b\u88ab\u90a3\u4e9b\u8bf4\u4ec0\u4e48\u8bbe\u8ba1\u6a21\u5f0f\u5927\u591a\u7528\u4e0d\u4e0a\uff0c\u6839\u672c\u4e0d\u7528\u5168\u5b66\u7684\u8206\u8bba\u6240\u5de6\u53f3\u3002\u5c3d\u7ba1\u73b0\u5728\u8bbe\u8ba1\u6a21\u5f0f\u8fdc\u8fdc\u4e0d\u6b6223\u79cd\uff0c\u5bf9\u6240\u6709\u90fd\u6709\u7814\u7a76\u662f\u4e0d\u592a\u5bb9\u6613\u7684\uff0c\u4f46\u5c31\u50cf\u4f5c\u8005\u672c\u4eba\u4e00\u6837\uff0c\u5728\u5b66\u4e60GoF\u603b\u7ed3\u768423\u4e2a\u8bbe\u8ba1\u6a21\u5f0f\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u4f1a\u88ab\u90a3\u4e9b\u7f16\u7a0b\u5927\u5e08\u4eec\u8fdb\u884c\u4f1f\u5927\u7684\u6280\u672f\u601d\u60f3\u6d17\u793c\uff0c\u4e0d\u65ad\u589e\u52a0\u81ea\u5df1\u5bf9\u9762\u5411\u5bf9\u8c61\u7684\u6df1\u5165\u7406\u89e3\uff0c\u4ece\u800c\u66f4\u597d\u7684\u628a\u8fd9\u79cd\u601d\u60f3\u53d1\u626c\u5149\u5927\u3002\u8fd9\u5c31\u5982\u540c\u9ad8\u4e2d\u65f6\u5b66\u7acb\u4f53\u51e0\u4f55\u611f\u89c9\u6ca1\u7528\uff0c\u4f46\u5f53\u4f60\u88c5\u4fee\u597d\u623f\u5b50\u8d2d\u4e70\u5bb6\u4ff1\u65f6\u624d\u77e5\u9053\uff0c\u6709\u7a7a\u95f4\u611f\uff0c\u61c2\u5f97\u7a7a\u95f4\u8ba1\u7b97\u662f\u5982\u4f55\u7684\u91cd\u8981\uff0c\u4f60\u5b8c\u5168\u53ef\u80fd\u9047\u5230\u4e70\u4e86\u4e00\u4e2a\u5927\u53f7\u7684\u51b0\u7bb1\u5374\u653e\u4e0d\u8fdb\u53a8\u623f\uff0c\u6216\u4e70\u4e86\u5f00\u5173\u95e8\u7684\u8863\u6a71\uff08\u79fb\u95e8\u4e0d\u5360\u7a7a\u95f4\uff09\u5374\u56e0\u5e8a\u5728\u65c1\u8fb9\u5835\u4f4f\u4e86\u95e8\u800c\u6253\u4e0d\u5f00\u7684\u5c34\u5c2c\u3002\n\n\u91cd\u8981\u7684\u4e0d\u662f\u4f60\u5c06\u6765\u4f1a\u4e0d\u4f1a\u7528\u5230\u8fd9\u4e9b\u6a21\u5f0f\uff0c\u800c\u662f\u901a\u8fc7\u8fd9\u4e9b\u6a21\u5f0f\u8ba9\u4f60\u627e\u5230\u201c\u5c01\u88c5\u53d8\u5316\u201d\u200b\u3001\u200b\u201c\u5bf9\u8c61\u95f4\u677e\u6563\u8026\u5408\u201d\u200b\u3001\u200b\u201c\u9488\u5bf9\u63a5\u53e3\u7f16\u7a0b\u201d\u7684\u611f\u89c9\uff0c\u4ece\u800c\u8bbe\u8ba1\u51fa\u6613\u7ef4\u62a4\u3001\u6613\u6269\u5c55\u3001\u6613\u590d\u7528\u3001\u7075\u6d3b\u6027\u597d\u7684\u7a0b\u5e8f\u3002\u6210\u4e3a\u8bd7\u4eba\u540e\u53ef\u80fd\u4e0d\u9700\u8981\u523b\u610f\u5730\u6309\u7167\u67d0\u79cd\u6a21\u5f0f\u53bb\u521b\u4f5c\uff0c\u4f46\u6210\u4e3a\u8bd7\u4eba\u524d\u4ed6\u4eec\u4e00\u5b9a\u662f\u8ba4\u771f\u5730\u7814\u7a76\u8fc7\u6210\u767e\u4e0a\u5343\u7684\u5510\u8bd7\u5b8b\u8bcd\u3001\u53e4\u4eca\u540d\u53e5\u3002\u5982\u679c\u8bf4\uff0c\u6570\u5b66\u662f\u601d\u7ef4\u7684\u4f53\u64cd\uff0c\u90a3\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5c31\u662f\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u601d\u7ef4\u7684\u4f53\u64cd\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6309\u7167\u4e66\u4e2d\u6240\u8bf4\uff0c\u6211\u5e94\u8be5\u662f\u957f\u671f\u5904\u4e8e\u7b2c\u4e09\u4e2a\u9636\u6bb5\u4e86\uff0c\u6bcf\u79cdDP\u90fd\u81ea\u5df1\u5b9e\u73b0\u8fc7\u4e0d\u6b62\u4e00\u6b21\u4e86\uff0c\u4f46\u662f\u8fd8\u662f\u8ff7\u7cca\uff0c\u9664\u4e86\u51e0\u79cd\u5e38\u7528\u7684\uff0c\u5206\u4e0d\u6e05\u5404\u81ea\u7684\u5177\u4f53\u4f7f\u7528\u573a\u666f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-markdown",children:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u867d\u7136\u4e5f\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u8fd9\u4e2a\u6a21\u5f0f\u53ea\u662f\u89e3\u51b3\u5bf9\u8c61\u7684\u521b\u5efa\u95ee\u9898\uff0c\u800c\u4e14\u7531\u4e8e\u5de5\u5382\u672c\u8eab\u5305\u62ec\u4e86\u6240\u6709\u7684\u6536\u8d39\u65b9\u5f0f\uff0c\u5546\u573a\u662f\u53ef\u80fd\u7ecf\u5e38\u6027\u5730\u66f4\u6539\u6253\u6298\u989d\u5ea6\u548c\u8fd4\u5229\u989d\u5ea6\uff0c\u6bcf\u6b21\u7ef4\u62a4\u6216\u6269\u5c55\u6536\u8d39\u65b9\u5f0f\u90fd\u8981\u6539\u52a8\u8fd9\u4e2a\u5de5\u5382\uff0c\u4ee5\u81f4\u4ee3\u7801\u9700\u91cd\u65b0\u7f16\u8bd1\u90e8\u7f72\uff0c\u8fd9\u771f\u7684\u662f\u5f88\u7cdf\u7cd5\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u6240\u4ee5\u7528\u5b83\u4e0d\u662f\u6700\u597d\u7684\u529e\u6cd5\u3002\u9762\u5bf9\u7b97\u6cd5\u7684\u65f6\u5e38\u53d8\u52a8\uff0c\u5e94\u8be5\u6709\u66f4\u597d\u7684\u529e\u6cd5\u3002\u597d\u597d\u53bb\u7814\u7a76\u4e00\u4e0b\u5176\u4ed6\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f60\u4f1a\u627e\u5230\u7b54\u6848\u7684\n"})}),"\n",(0,r.jsx)(e.p,{children:"factory\u548cbuilder\u90fd\u662f\u901a\u8fc7\u7b80\u5355\u5bf9\u8c61\u642d\u5efa\u590d\u6742\u5bf9\u8c61\uff0c\u4f46\u662f\u5982\u679c\u9700\u8981\u7ecf\u5e38\u66f4\u6539\u7b56\u7565\u5185\u5bb9\uff0c\u6bd4\u5982\u6253\u6298\u989d\u5ea6\u548c\u8fd4\u73b0\u989d\u5ea6\uff0c\u9700\u8981\u7ecf\u5e38\u4fee\u6539factory\u6a21\u5f0f\u7684\u4ee3\u7801\uff0c\u5c31\u5e94\u8be5\u6539\u6210builder\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-markdown",children:"\u7b56\u7565\u6a21\u5f0f\u5b9a\u4e49\u4e86\u7b97\u6cd5\u5bb6\u65cf\uff0c\u5206\u522b\u5c01\u88c5\u8d77\u6765\uff0c\u8ba9\u5b83\u4eec\u4e4b\u95f4\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362\uff0c\u6b64\u6a21\u5f0f\u8ba9\u7b97\u6cd5\u7684\u53d8\u5316\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u4f7f\u7528\u7b97\u6cd5\u7684\u5ba2\u6237\u3002\u770b\u6765\u5546\u573a\u6536\u94f6\u7cfb\u7edf\u5e94\u8be5\u8003\u8651\u7528\u7b56\u7565\u6a21\u5f0f\uff1f\n\n\u201d\u7b56\u7565\u6a21\u5f0f\uff08Strategy\uff09\u200b\uff1a\u5b83\u5b9a\u4e49\u4e86\u7b97\u6cd5\u5bb6\u65cf\uff0c\u5206\u522b\u5c01\u88c5\u8d77\u6765\uff0c\u8ba9\u5b83\u4eec\u4e4b\u95f4\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362\uff0c\u6b64\u6a21\u5f0f\u8ba9\u7b97\u6cd5\u7684\u53d8\u5316\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u4f7f\u7528\u7b97\u6cd5\u7684\u5ba2\u6237\u3002\u200b[DP]\n\n\u201c\u4f60\u95ee\u6211\uff1f\u4f60\u8bf4\u5462\uff1f\u200b\u201d\u5927\u9e1f\u7b11\u9053\uff0c\u200b\u201c\u5546\u573a\u6536\u94f6\u65f6\u5982\u4f55\u4fc3\u9500\uff0c\u7528\u6253\u6298\u8fd8\u662f\u8fd4\u5229\uff0c\u5176\u5b9e\u90fd\u662f\u4e00\u4e9b\u7b97\u6cd5\uff0c\u7528\u5de5\u5382\u6765\u751f\u6210\u7b97\u6cd5\u5bf9\u8c61\uff0c\u8fd9\u6ca1\u6709\u9519\uff0c\u4f46\u7b97\u6cd5\u672c\u8eab\u53ea\u662f\u4e00\u79cd\u7b56\u7565\uff0c\u6700\u91cd\u8981\u7684\u662f\u8fd9\u4e9b\u7b97\u6cd5\u662f\u968f\u65f6\u90fd\u53ef\u80fd\u4e92\u76f8\u66ff\u6362\u7684\uff0c\u8fd9\u5c31\u662f\u53d8\u5316\u70b9\uff0c\u800c\u5c01\u88c5\u53d8\u5316\u70b9\u662f\u6211\u4eec\u9762\u5411\u5bf9\u8c61\u7684\u4e00\u79cd\u5f88\u91cd\u8981\u7684\u601d\u7ef4\u65b9\u5f0f\u3002\u6211\u4eec\u6765\u770b\u770b\u7b56\u7565\u6a21\u5f0f\u7684\u7ed3\u6784\u56fe\u548c\u57fa\u672c\u4ee3\u7801\u3002\u200b\u201d\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-markdown",children:"\u201c\u4f60\u7684\u610f\u601d\u662f\uff0c\u5e94\u8be5\u5728\u5185\u90e8\u7ec4\u88c5\u5b8c\u6bd5\uff0c\u7136\u540e\u518d\u663e\u793a\u51fa\u6765\uff1f\u8fd9\u597d\u50cf\u662f\u5efa\u9020\u8005\u6a21\u5f0f\u5440\u3002\u201d\n\n\u201c\u4e0d\u662f\u7684\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u8981\u6c42\u5efa\u9020\u7684\u8fc7\u7a0b\u5fc5\u987b\u662f\u7a33\u5b9a\u7684\uff0c\u800c\u73b0\u5728\u6211\u4eec\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5efa\u9020\u8fc7\u7a0b\u662f\u4e0d\u7a33\u5b9a\u7684\uff0c\u6bd4\u5982\u5b8c\u5168\u53ef\u4ee5\u5185\u7a7f\u897f\u88c5\uff0c\u5916\u5957T\u6064\uff0c\u518d\u52a0\u62ab\u98ce\uff0c\u6253\u4e0a\u9886\u5e26\uff0c\u76ae\u978b\u5916\u518d\u7a7f\u4e0a\u7834\u7403\u978b\uff1b\u5f53\u7136\u4e5f\u5b8c\u5168\u53ef\u4ee5\u53ea\u7a7f\u6761\u88e4\u8869\u5c31\u7b97\u5b8c\u6210\u3002\u6362\u53e5\u8bdd\u5c31\u662f\u8bf4\uff0c\u901a\u8fc7\u670d\u9970\u7ec4\u5408\u51fa\u4e00\u4e2a\u6709\u4e2a\u6027\u7684\u4eba\u5b8c\u5168\u53ef\u4ee5\u6709\u65e0\u6570\u79cd\u65b9\u6848\uff0c\u5e76\u975e\u662f\u56fa\u5b9a\u7684\u3002\u200b\u201d\n\n\u201c\u554a\uff0c\u4f60\u8bf4\u5f97\u5bf9\uff0c\u5176\u5b9e\u5148\u540e\u987a\u5e8f\u4e5f\u662f\u6709\u8bb2\u7a76\u7684\uff0c\u5982\u4f60\u6240\u8bf4\uff0c\u5148\u7a7f\u5185\u88e4\u540e\u7a7f\u5916\u88e4\uff0c\u8fd9\u53eb\u51e1\u4eba\uff0c\u5185\u88e4\u7a7f\u5230\u5916\u88e4\u5916\u9762\uff0c\u90a3\u5c31\u662f\u8d85\u4eba\u4e86\u3002\u200b\u201d\n\n\u201c\u54c8\uff0c\u5f88\u4f1a\u4e3e\u4e00\u53cd\u4e09\u561b\uff0c\u90a3\u4f60\u8bf4\u8be5\u5982\u4f55\u529e\u5462\uff1f\u200b\u201d\n\n\u201c\u6211\u4eec\u9700\u8981\u628a\u6240\u9700\u7684\u529f\u80fd\u6309\u6b63\u786e\u7684\u987a\u5e8f\u4e32\u8054\u8d77\u6765\u8fdb\u884c\u63a7\u5236\uff0c\u8fd9\u597d\u50cf\u5f88\u96be\u529e\u54e6\u3002\u200b\u201d\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\u5c31\u5f15\u51fa\u4e86builder\u548cdecorator\u7684\u533a\u522b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"builder\u662f\u6309\u7167\u56fa\u5b9a\u987a\u5e8f\u6267\u884c\u7684\uff0c\u4f46\u662fdecorator\u5219\u4e0d\u9700\u8981"})})}),"\n",(0,r.jsx)(e.h3,{id:"\u603b\u8bc4",children:"\u603b\u8bc4"}),"\n",(0,r.jsxs)(e.p,{children:["\u626b\u4e86\u4e00\u4e0b\uff0c\u8fd9\u672c\u4e66\u5bf9\u6211\u6765\u8bf4\u6ca1\u5565\u7528\u3002",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"\u5e76\u4e14\u7528\u6765\u4e3e\u4f8b\u7684\u5c0f\u6545\u4e8b\u5176\u5b9e\u6709\u70b9\u5c2c\uff0c\u5e76\u4e14\u4e0d\u50cf\u300a\u8da3\u8c08 Linux \u64cd\u4f5c\u7cfb\u7edf\u300b\u4e00\u6837\uff0c\u80fd\u7528\u4e00\u4e2a\u6545\u4e8b\u4e32\u8d77\u6765\u3002"})})]}),"\n",(0,r.jsx)(e.p,{children:"\u4e4b\u540e\u6211\u4f1a\u81ea\u5df1\u5199\u4e00\u4e2a\u7c7b\u4f3c\u7684\u4e1c\u897f\uff0c\u7528\u4e00\u4e2a\u6545\u4e8b\u6765\u8bf4\u660e\u6240\u6709\u7684DP"})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>t,x:()=>l});var r=a(6540);const s={},i=r.createContext(s);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);