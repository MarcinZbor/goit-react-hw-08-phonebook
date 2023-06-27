"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{6157:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(9434),a="NOT_FOUND";var i=function(e,n){return e===n};function o(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?i:r,c=t.maxSize,s=void 0===c?1:c,u=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(o),f=1===s?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:a},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return a}return{get:r,put:function(n,i){r(n)===a&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,l);function d(){var n=f.get(arguments);if(n===a){if(n=e.apply(null,arguments),u){var t=f.getEntries().find((function(e){return u(e.value,n)}));t&&(n=t.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function c(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i,o=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var u=c.memoizeOptions,l=void 0===u?t:u,f=Array.isArray(l)?l:[l],d=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}(r),v=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:v,dependencies:d,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h}}var s=c(o),u=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},f=s([u,function(e){return e.filter}],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),d=t(2791),v=t(6151),h=t(168),p=t(3366),m=t(7462),x=t(8182),y=t(4419),g=t(2554),k=t(4036),Z=t(1402),b=t(6934),j=t(5878),w=t(1217);function C(e){return(0,w.Z)("MuiCircularProgress",e)}(0,j.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var S,_,P,z,N,M,R,D,E=t(3329),F=["className","color","disableShrink","size","style","thickness","value","variant"],A=44,I=(0,g.F4)(N||(N=S||(S=(0,h.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),O=(0,g.F4)(M||(M=_||(_=(0,h.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),H=(0,b.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["color".concat((0,k.Z)(t.color))]]}})((function(e){var n=e.ownerState,t=e.theme;return(0,m.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,g.iv)(R||(R=P||(P=(0,h.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),I)})),L=(0,b.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),V=(0,b.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var t=e.ownerState;return[n.circle,n["circle".concat((0,k.Z)(t.variant))],t.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,t=e.theme;return(0,m.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,g.iv)(D||(D=z||(z=(0,h.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),O)})),q=d.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiCircularProgress"}),r=t.className,a=t.color,i=void 0===a?"primary":a,o=t.disableShrink,c=void 0!==o&&o,s=t.size,u=void 0===s?40:s,l=t.style,f=t.thickness,d=void 0===f?3.6:f,v=t.value,h=void 0===v?0:v,g=t.variant,b=void 0===g?"indeterminate":g,j=(0,p.Z)(t,F),w=(0,m.Z)({},t,{color:i,disableShrink:c,size:u,thickness:d,value:h,variant:b}),S=function(e){var n=e.classes,t=e.variant,r=e.color,a=e.disableShrink,i={root:["root",t,"color".concat((0,k.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,k.Z)(t)),a&&"circleDisableShrink"]};return(0,y.Z)(i,C,n)}(w),_={},P={},z={};if("determinate"===b){var N=2*Math.PI*((A-d)/2);_.strokeDasharray=N.toFixed(3),z["aria-valuenow"]=Math.round(h),_.strokeDashoffset="".concat(((100-h)/100*N).toFixed(3),"px"),P.transform="rotate(-90deg)"}return(0,E.jsx)(H,(0,m.Z)({className:(0,x.Z)(S.root,r),style:(0,m.Z)({width:u,height:u},P,l),ownerState:w,ref:n,role:"progressbar"},z,j,{children:(0,E.jsx)(L,{className:S.svg,ownerState:w,viewBox:"".concat(22," ").concat(22," ").concat(A," ").concat(A),children:(0,E.jsx)(V,{className:S.circle,style:_,ownerState:w,cx:A,cy:A,r:(A-d)/2,fill:"none",strokeWidth:d})})}))})),W=t(7247),T="ContactList_list__csErn",B="ContactList_p__fTrdB",Y="ContactList_item__EZYHO",U=t(7734),G=function(){var e=(0,r.v9)(l),n=(0,r.v9)(f),t=(0,r.I0)();return(0,d.useEffect)((function(){t((0,U.g6)())}),[t]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("ul",{className:T,children:0!==n.length&&n.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,E.jsxs)("li",{className:Y,children:[(0,E.jsxs)("p",{className:B,children:[r,": ",a]}),(0,E.jsx)(v.Z,{size:"small",variant:"outlined",startIcon:(0,E.jsx)(W.Z,{}),type:"button",onClick:function(){return t((0,U.e4)(n))},children:"Delete"})]},n)}))}),e&&(0,E.jsx)(q,{})]})},J=t(5527),K=t(4554),Q=t(1582),X=t(4676),$=function(){var e=(0,r.v9)(u),n=(0,r.I0)(),t=(0,d.useRef)(null),a=(0,d.useRef)(null);return(0,E.jsx)(J.Z,{elevation:3,sx:{p:2,mt:5},children:(0,E.jsx)(K.Z,{onSubmit:function(r){r.preventDefault();var i=t.current.value,o=a.current.value,c={name:i,number:o};e.some((function(e){return i===e.name}))?alert("".concat(i," is already in contacts.")):n((0,U.Vn)(c)),t.current.value="",a.current.value=""},component:"form",autoComplete:"off",children:(0,E.jsxs)(Q.Z,{direction:"column",spacing:3,children:[(0,E.jsx)(X.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Name",variant:"standard",type:"text",name:"name",inputRef:t}),(0,E.jsx)(X.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Number",variant:"standard",type:"tel",name:"number",inputRef:a}),(0,E.jsx)(v.Z,{variant:"contained",type:"submit",sx:{m:1,width:150},children:"Add contact"})]})})})},ee=t(6126),ne=t(8),te=t(4808),re=function(){var e=(0,r.I0)();return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(X.Z,{InputProps:{startAdornment:(0,E.jsx)(ee.Z,{position:"start",children:(0,E.jsx)(ne.Z,{})})},onChange:function(n){return e((0,te.T)(n))},fullWidth:!0,id:"input-with-icon-textfield",placeholder:"Search by name",type:"text",variant:"standard",name:"filter"})})},ae="ContactsPage_wrapper__HYOyv",ie="ContactsPage_title__P3MkR",oe=function(){return(0,E.jsxs)("div",{className:ae,children:[(0,E.jsx)($,{}),(0,E.jsx)("h2",{className:ie,children:"Contacts"}),(0,E.jsx)(re,{}),(0,E.jsx)(G,{})]})}},8:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),i=t(3329),o=(0,a.default)([(0,i.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},"0"),(0,i.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"},"1")],"ContentPasteSearchOutlined");n.Z=o},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),i=t(3329),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o}}]);
//# sourceMappingURL=157.ddbaeca6.chunk.js.map