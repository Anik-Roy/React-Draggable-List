(this["webpackJsonpdynamic-draggable-list"]=this["webpackJsonpdynamic-draggable-list"]||[]).push([[0],{21:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(12),c=n.n(i),o=(n(21),n(7)),s=n(11),u=n.n(s),d=n(13),l=n(6),b=n(15),j=n(30),f=n(16);var g=function(e){return e},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(e){case"dragging":return t+3;case"animating":return t+2;default:return t+1}};function p(e){var t=e.items,n=e.swapDistance,a=e.onPositionUpdate,i=e.onPositionChange,c=Object(r.useRef)(new Array(t.length).fill(0)).current,o=Object(r.useState)(-1),s=Object(l.a)(o,2),u=s[0],d=s[1],b=Object(r.useCallback)((function(e,t){var r=function(e,t,n,r){var a=e;if(t>0){var i=n[e+1];if(void 0===i)return e;t>r(i)&&(a=e+1)}else if(t<0){var c=n[e-1];if(void 0===c)return e;t<-r(c)&&(a=e-1)}return Math.min(Math.max(a,0),n.length)}(e,t,c,n);if(r!==e){var i=c[r];c[r]=c[e],c[e]=i,a(e,r)}}),[c,n,a]),j=Object(r.useCallback)((function(e){i&&u!==e&&i(u,e),d(-1)}),[u,i]),f=Object(r.useCallback)((function(e,t){c[e]=t}),[c]);return{handleChange:b,handleDragStart:d,handleDragEnd:j,handleMeasure:f}}var x=n(3);function O(e){var t=e.index,n=e.item,a=function(e,t,n){var a=n.handleChange,i=n.handleDragStart,c=n.handleDragEnd,o=n.handleMeasure,s=Object(r.useState)("idle"),u=Object(l.a)(s,2),d=u[0],b=u[1],j=Object(r.useRef)(null);return Object(r.useEffect)((function(){j&&j.current&&o(e,"y"===t?j.current.offsetHeight:j.current.offsetWidth)}),[j,o,e,t]),[d,j,{onDragStart:function(){b("dragging"),i(e)},onDragEnd:function(){b("animating"),c(e)},onAnimationComplete:function(){"animating"===d&&b("idle")},onViewportBoxUpdate:function(t,n){"dragging"===d&&a(e,n.y.translate)}}]}(t,"y",e.itemProps),i=Object(l.a)(a,3),c=i[0],s=i[1],u=i[2];return Object(x.jsx)("div",{style:{padding:0,margin:10,width:"90%",backgroundColor:"white",zIndex:h(c)},children:Object(x.jsx)(j.a.div,Object(o.a)(Object(o.a)({layout:!0,initial:!1,drag:"y",ref:s,style:{border:"1px solid #ddd",borderRadius:5},whileHover:{scale:1.03,boxShadow:"0px 3px 3px rgba(0,0,0,0.15)"},whileTap:{scale:1.12,boxShadow:"0px 5px 5px rgba(0,0,0,0.1)"}},u),{},{children:Object(x.jsxs)("div",{style:{padding:"20px"},children:[Object(x.jsx)("img",{src:n.preview,alt:"image",style:{objectFit:"contain",width:"50px",height:"50px"}}),Object(x.jsx)("p",{children:"Click and hold me to drag"})]})}))})}function m(){var e=C(),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useCallback)((function(e,t){a(function(e,t,n){var r=Object(f.a)(e);return r[n]=e[t],r[t]=e[n],r}(n,e,t))}),[n,a]),c=p({items:n,swapDistance:g,onPositionUpdate:i});return Object(x.jsx)("div",{children:Object(x.jsx)("div",{style:{width:"100%"},children:n.map((function(e,t){return Object(x.jsx)(O,{item:e,index:t,itemProps:c},e.id)}))})})}n(26);var v=n.p+"static/media/upload.c6f29fc7.png",w=Object(r.createContext)([[],function(e){return null}]);function y(){var e=Object(r.useState)((function(){return[]})),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(b.a)({accept:"image/*",multiple:!0,onDrop:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.length&&a(t.map((function(e,t){return Object.assign(e,{preview:URL.createObjectURL(e),id:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),c=i.getRootProps,s=i.getInputProps;return Object(x.jsxs)(w.Provider,{value:[n,a],children:[Object(x.jsxs)("div",Object(o.a)(Object(o.a)({},c({className:"border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"})),{},{children:[Object(x.jsx)("input",Object(o.a)({},s())),Object(x.jsxs)("div",{className:"flex flex-col justify-items-center items-center",children:[Object(x.jsx)("img",{width:"50",height:"50",src:v,alt:"icon"}),Object(x.jsx)("p",{className:"text-body text-sm mt-4 text-center",children:"upload images"})]})]})),Object(x.jsx)(m,{})]})}var C=function(){return Object(r.useContext)(w)},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),D()}},[[27,1,2]]]);
//# sourceMappingURL=main.dc80bfb0.chunk.js.map