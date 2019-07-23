(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(a,s,e){"use strict";e.r(s);var n=e(0),t=Object(n.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本配置")]),a._v(" "),e("h2",{attrs:{id:"项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目结构")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),e("h2",{attrs:{id:"初始化依赖配置表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化依赖配置表","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化依赖配置表")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("yarn init -y")])]),a._v(" "),e("li",[a._v("初始化一个package.json")])]),a._v(" "),e("img",{attrs:{src:"/yarninit.png"}}),a._v("\n## 安装vuepress\n* `yarn add -D vuepress@next`\n"),e("img",{attrs:{src:"/vuepress.png"}}),a._v(" "),e("ul",[e("li",[a._v("package.json里面添加如下键值对")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n')])])]),e("img",{attrs:{src:"/all.png"}}),a._v(" "),e("ul",[e("li",[a._v("这个键值对告诉我们：运行yarn run docs:dev，项目就可以跑起来了")])]),a._v(" "),e("h2",{attrs:{id:"docs根目录下添加md文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docs根目录下添加md文件","aria-hidden":"true"}},[a._v("#")]),a._v(" docs根目录下添加md文件")]),a._v(" "),e("ul",[e("li",[a._v("这是进入项目在没有手动选择任何路径时，也就是处于/根路径时的默认入口展示页面。")]),a._v(" "),e("li",[a._v("在docs的根目录再建模块文件夹，模块文件夹里面为具体的md文件，想取什么名字都行。")])]),a._v(" "),e("h2",{attrs:{id:"配置config-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置config-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置config.js")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports = {\n    title: 'Vuepress', //网站标题\n    base: '/', //打包后的base路径\n    themeConfig: { //主题配置\n        head: [\n            ['link', { rel: 'icon', href: '/favicon.ico' }] //引入favicon\n        ],\n        search: false, //不要搜索框\n        sidebarDepth: 0,\n        sidebar: [ //侧边栏\n            {\n              title: '介绍',\n              collapsable: false,\n              children: [\n                '/'\n              ]\n            },\n            {\n                title: '基本配置以及安装',\n                collapsable: false,\n                children: [\n                  '/install/start.md'\n                ]\n              },\n            {\n              title: '前端',\n              collapsable: false,\n              children: [ \n                '/myproject/html.md',\n                '/myproject/css.md',\n                '/myproject/javascript.md'\n              ]\n            }\n          ]\n    }\n}\n")])])])])},[],!1,null,null,null);s.default=t.exports}}]);