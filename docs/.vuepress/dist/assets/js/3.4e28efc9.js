(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,,,,,,,,,function(t,e,n){var i=n(114)("wks"),r=n(115),o=n(22).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));const i=/#.*$/,r=/\.(md|html)$/,o=/\/$/,s=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",r=a(t);return o.test(r)?t:r+".html"+n}function h(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:o}=n,s=i&&o.locales&&o.locales[i]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=s.sidebar||o.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,a);return n?n.map(e=>(function t(e,n,i,r=1){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},,,,,,,,,function(t,e){t.exports={}},,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(11),r=n(40)(3);i(i.P+i.F*!n(41)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},,,,,,function(t,e,n){var i=n(10)("unscopables"),r=Array.prototype;null==r[i]&&n(18)(r,i,{}),t.exports=function(t){r[i][t]=!0}},,,,function(t,e){t.exports={}},,function(t,e,n){var i=n(100),r=n(54);t.exports=Object.keys||function(t){return i(t,r)}},,,,function(t,e,n){},,,,,,,function(t,e,n){},function(t,e,n){},,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,function(t,e,n){for(var i=n(124),r=n(51),o=n(27),s=n(12),a=n(18),u=n(49),c=n(10),l=c("iterator"),f=c("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(p),g=0;g<d.length;g++){var v,m=d[g],b=p[m],y=s[m],_=y&&y.prototype;if(_&&(_[l]||a(_,l,h),_[f]||a(_,f,m),u[m]=h,b))for(v in i)_[v]||o(_,v,i[v],!0)}},,,,,,,,function(t,e,n){var i=n(26).f,r=n(28),o=n(10)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(38),r=n(51);n(134)("keys",(function(){return function(t){return r(i(t))}}))},,,,,,,function(t,e,n){"use strict";var i=n(167)(!0);n(110)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var i=n(111),r=n(30),o=n(168),s=n(31),a=n(25),u=n(169),c=n(117),l=n(177),f=n(15)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,g,v,m){u(n,e,d);var b,y,_,x=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",L="values"==g,C=!1,S=t.prototype,$=S[f]||S["@@iterator"]||g&&S[g],O=$||x(g),w=g?L?x("entries"):O:void 0,A="Array"==e&&S.entries||$;if(A&&(_=l(A.call(new t)))!==Object.prototype&&_.next&&(c(_,k,!0),i||"function"==typeof _[f]||s(_,f,p)),L&&$&&"values"!==$.name&&(C=!0,O=function(){return $.call(this)}),i&&!m||!h&&!C&&S[f]||s(S,f,O),a[e]=O,a[k]=p,g)if(b={values:L?O:x("values"),keys:v?O:x("keys"),entries:w},m)for(y in b)y in S||o(S,y,b[y]);else r(r.P+r.F*(h||C),e,b);return b}},,,,,,,function(t,e,n){var i=n(42).f,r=n(33),o=n(15)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(69);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(67),r=n(15)("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e){t.exports=function(t){return null==t}},function(t,e,n){var i=n(199).Symbol;t.exports=i},function(t,e,n){"use strict";n.r(e);n(39);var i=n(16),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(123).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(122).default},methods:{isActive:i.e}},o=(n(207),n(0)),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(72),n(208);function a(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function u(t,e,n,r,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,r,o,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,o=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(i.e)(o,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.e)(o,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):a(t,f.path,f.title||f.path,d),v=[r.frontmatter.sidebarDepth,h,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,o,v)]:(d||m)&&f.headers&&!i.d.test(f.path)?[g,u(t,Object(i.c)(f.headers),f.path,o,v)]:g}};n(209);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(l(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(191),n(0)),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=n(45),r=n(125),o=n(49),s=n(35);t.exports=n(126)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var i=n(94),r=n(11),o=n(27),s=n(18),a=n(49),u=n(128),c=n(101),l=n(133),f=n(10)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,g,v,m){u(n,e,d);var b,y,_,x=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",L="values"==g,C=!1,S=t.prototype,$=S[f]||S["@@iterator"]||g&&S[g],O=$||x(g),w=g?L?x("entries"):O:void 0,A="Array"==e&&S.entries||$;if(A&&(_=l(A.call(new t)))!==Object.prototype&&_.next&&(c(_,k,!0),i||"function"==typeof _[f]||s(_,f,p)),L&&$&&"values"!==$.name&&(C=!0,O=function(){return $.call(this)}),i&&!m||!h&&!C&&S[f]||s(S,f,O),a[e]=O,a[k]=p,g)if(b={values:L?O:x("values"),keys:v?O:x("keys"),entries:w},m)for(y in b)y in S||o(S,y,b[y]);else r(r.P+r.F*(h||C),e,b);return b}},,function(t,e,n){"use strict";var i=n(129),r=n(48),o=n(101),s={};n(18)(s,n(10)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var i=n(13),r=n(130),o=n(54),s=n(53)("IE_PROTO"),a=function(){},u=function(){var t,e=n(96)("iframe"),i=o.length;for(e.style.display="none",n(132).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;i--;)delete u.prototype[o[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=i(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(26),r=n(13),o=n(51);t.exports=n(20)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),a=s.length,u=0;a>u;)i.f(t,n=s[u++],e[n]);return t}},,function(t,e,n){var i=n(12).document;t.exports=i&&i.documentElement},function(t,e,n){var i=n(28),r=n(38),o=n(53)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var i=n(11),r=n(34),o=n(14);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",s)}},,,function(t,e,n){"use strict";n(138)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){var i=n(11),r=n(14),o=n(21),s=/"/g,a=function(t,e,n,i){var r=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(s,"&quot;")+'"'),a+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),i(i.P+i.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){"use strict";var i=n(55);n.n(i).a},function(t,e,n){"use strict";var i=n(11),r=n(52)(!0);i(i.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(45)("includes")},function(t,e,n){"use strict";var i=n(11),r=n(142);i(i.P+i.F*n(143)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var i=n(56),r=n(21);t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},function(t,e,n){var i=n(10)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}},,,,function(t,e,n){"use strict";var i=n(11),r=n(40)(2);i(i.P+i.F*!n(41)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var i=n(11);i(i.S,"Array",{isArray:n(103)})},function(t,e,n){"use strict";var i=n(11),r=n(52)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(41)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";n(151)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){var i=n(11),r=n(21),o=n(14),s=n(152),a="["+s+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var r={},a=o((function(){return!!s[t]()||"​"!="​"[t]()})),u=r[t]=a?e(f):s[t];n&&(r[n]=u),i(i.P+i.F*a,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var i=n(62);n.n(i).a},function(t,e,n){"use strict";var i=n(63);n.n(i).a},,,,,,,function(t,e,n){t.exports=n(162)},function(t,e,n){n(163),t.exports=n(17).Array.isArray},function(t,e,n){var i=n(30);i(i.S,"Array",{isArray:n(164)})},function(t,e,n){var i=n(67);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){t.exports=n(166)},function(t,e,n){n(109),n(178),t.exports=n(17).Array.from},function(t,e,n){var i=n(68),r=n(69);t.exports=function(t){return function(e,n){var o,s,a=String(r(e)),u=i(n),c=a.length;return u<0||u>=c?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):o:t?a.slice(u,u+2):s-56320+(o-55296<<10)+65536}}},function(t,e,n){t.exports=n(31)},function(t,e,n){"use strict";var i=n(112),r=n(43),o=n(117),s={};n(31)(s,n(15)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},,,,,,,,function(t,e,n){var i=n(33),r=n(118),o=n(70)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var i=n(64),r=n(30),o=n(118),s=n(179),a=n(180),u=n(113),c=n(181),l=n(182);r(r.S+r.F*!n(183)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,v=void 0!==g,m=0,b=l(h);if(v&&(g=i(g,d>2?arguments[2]:void 0,2)),null==b||p==Array&&a(b))for(n=new p(e=u(h.length));e>m;m++)c(n,m,v?g(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(r=f.next()).done;m++)c(n,m,v?s(f,g,[r.value,m],!0):r.value);return n.length=m,n}})},function(t,e,n){var i=n(23);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){var i=n(25),r=n(15)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){"use strict";var i=n(42),r=n(43);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var i=n(119),r=n(15)("iterator"),o=n(25);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){var i=n(15)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){t.exports=n(185)},function(t,e,n){n(186),n(109),t.exports=n(190)},function(t,e,n){n(187);for(var i=n(22),r=n(31),o=n(25),s=n(15)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],l=i[c],f=l&&l.prototype;f&&!f[s]&&r(f,s,c),o[c]=o.Array}},function(t,e,n){"use strict";var i=n(188),r=n(189),o=n(25),s=n(44);t.exports=n(110)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(119),r=n(15)("iterator"),o=n(25);t.exports=n(17).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||o.hasOwnProperty(i(e))}},function(t,e,n){"use strict";var i=n(73);n.n(i).a},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},function(t,e,n){"use strict";var i=n(74);n.n(i).a},function(t,e,n){"use strict";var i=n(75);n.n(i).a},function(t,e,n){"use strict";var i=n(76);n.n(i).a},function(t,e,n){"use strict";var i=n(77);n.n(i).a},function(t,e,n){var i=n(198),r=n(203),o=n(204),s="[object String]";t.exports=function(t){return"string"==typeof t||!r(t)&&o(t)&&i(t)==s}},function(t,e,n){var i=n(121),r=n(201),o=n(202),s="[object Null]",a="[object Undefined]",u=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:u&&u in Object(t)?r(t):o(t)}},function(t,e,n){var i=n(200),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e,n){var i=n(121),r=Object.prototype,o=r.hasOwnProperty,s=r.toString,a=i?i.toStringTag:void 0;t.exports=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var i=!0}catch(t){}var r=s.call(t);return i&&(e?t[a]=n:delete t[a]),r}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";var i=n(78);n.n(i).a},function(t,e,n){"use strict";var i=n(79);n.n(i).a},function(t,e,n){"use strict";var i=n(80);n.n(i).a},function(t,e,n){"use strict";var i=n(11),r=n(40)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(45)("find")},function(t,e,n){"use strict";var i=n(81);n.n(i).a},function(t,e,n){"use strict";var i=n(82);n.n(i).a},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(93),n(102),n(39),n(137);var i=n(16),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h,focusoutAction:function(){this.$emit("focusout")}}},o=n(0),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,a={components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(139),Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(140),n(141),n(57),n(147),n(148),n(149),n(150),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},o=[],s=0;s<e.length&&!(o.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(r(a))o.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(o.length>=n);u++){var c=a.headers[u];r(c)&&o.push(Object.assign({},a,{path:a.path+"#"+c.slug,header:c}))}}return o}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(153),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(154),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(105),n(161)),p=n.n(h);var d=n(165),g=n.n(d),v=n(184),m=n.n(v);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return g()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(71),n(72);var y=n(123),_=n(192),x=n.n(_),k={components:{NavLink:s,DropdownTransition:y.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return x()(e)===t}},watch:{$route:function(){this.open=!1}}},L=(n(193),{components:{NavLink:s,DropdownLink:Object(o.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(o){var s,a=e[o],u=r[o]&&r[o].label||a.lang;return a.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,o),i.some((function(t){return t.path===s}))||(s=o)),{text:u,link:s}}))};return[].concat(b(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(194),Object(o.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function S(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={components:{SidebarButton:f,NavLinks:C,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(S(this.$el,"paddingLeft"))+parseInt(S(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},O=(n(195),Object(o.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),w=n(120),A=n.n(w),j={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=A()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,o=e.docsBranch,s=void 0===o?"master":o,a=e.docsRepo,u=void 0===a?n:a;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,r,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,o){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+o}}},T=(n(196),Object(o.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),P=n(197),I=n.n(P),E={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return D(N.PREV,this)},next:function(){return D(N.NEXT,this)}}};var N={NEXT:{resolveLink:function(t,e){return M(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return M(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function D(t,e){var n=e.$themeConfig,r=e.$page,o=e.$route,s=e.$site,a=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,f=c(n),h=l(r),p=A()(h)?f:h;return!1===p?void 0:I()(p)?Object(i.k)(s.pages,p,o.path):u(r,a)}function M(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var o=i[r];if("page"===o.type&&o.path===decodeURIComponent(t.path))return i[r+n]}}var H=E,G=(n(205),{components:{PageEdit:T,PageNav:Object(o.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),R=(n(206),Object(o.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:n(122).default,NavLinks:C},props:["items"]},V=(n(210),{components:{Home:u,Page:R,Sidebar:Object(o.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:O},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),F=Object(o.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null);e.default=F.exports}]]);