(this["webpackJsonpreact-three"]=this["webpackJsonpreact-three"]||[]).push([[0],{37:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),c=a.n(r),i=(a(41),a(9)),l=a(6),s=a(24),m=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"logo"},o.a.createElement("span",null,"REACT THREE FIBER")),o.a.createElement("div",{className:"episode"},o.a.createElement("span",null,"EP. 1")))},h=(a(42),a(27));Object(s.c)();var u=function(e){var t=e.position,a=e.color,r=e.speed,c=e.args,m=Object(n.useRef)();Object(l.f)((function(){return m.current.rotation.x=m.current.rotation.y+=.01}));var u=Object(n.useState)(!1),p=Object(i.a)(u,2),d=p[0],E=p[1],f=Object(h.b)({scale:d?[1.4,1.4,1.4]:[1,1,1]});return o.a.createElement(h.a.mesh,{position:t,ref:m,onClick:function(){return E(!d)},scale:f.scale,castShadow:!0},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:c}),o.a.createElement(s.a,{color:a,speed:r,attach:"material",factor:.6}))},p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(l.a,{colorManagement:!0,shadowMap:!0,camera:{position:[-5,2,10],fov:60}},o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("pointLight",{position:[-10,0,-20],intensity:.5}),o.a.createElement("pointLight",{position:[0,-10,0],intensity:1.5}),o.a.createElement("group",null,o.a.createElement("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),o.a.createElement("shadowMaterial",{attach:"material",opacity:.3})),o.a.createElement(u,{position:[0,1,0],color:"lightblue",args:[3,2,1],speed:2}),o.a.createElement(u,{position:[-2,1,-5],color:"pink",speed:6}),o.a.createElement(u,{position:[5,1,-2],color:"pink",speed:6})),o.a.createElement(s.b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.196b43a3.chunk.js.map