(this["webpackJsonpdad-joke-generator"]=this["webpackJsonpdad-joke-generator"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),o=n(14),i=n.n(o),s=(n(22),n(4)),d=n.n(s),u=n(15),j=n(5),h=n(16),l=n.n(h),b="https://icanhazdadjoke.com/slack",p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),i=Object(j.a)(o,2),s=i[0],h=i[1],p=Object(c.useRef)();function f(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,l.a.get(b).then((function(e){a(e.data.attachments[0].fallback)}));case 3:h(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){f()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"DadJoke Generator"}),Object(r.jsx)("a",{href:"https://github.com/dev-caspertheghost/react-dadjoke-generator",target:"_blank",rel:"noopener noreferrer",children:"View Source Code"}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header",children:Object(r.jsx)("span",{ref:p,children:s?"Loading...":n})}),Object(r.jsxs)("div",{className:"card-footer",children:[Object(r.jsx)("button",{onClick:f,children:"New Joke"}),Object(r.jsx)("button",{id:"copy",onClick:function(){var e,t=null===(e=p.current)||void 0===e?void 0:e.textContent,n=document.getElementById("copy");if(!navigator.clipboard)return alert("navigator is not supported in this browser");try{navigator.clipboard.writeText(t).then(n.innerText="Copied!").then(setTimeout((function(){n.innerText="Copy"}),3e3))}catch(r){console.error(r)}},children:"Copy Joke"})]})]})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.23e687d5.chunk.js.map