(this["webpackJsonpcard-name-template"]=this["webpackJsonpcard-name-template"]||[]).push([[0],{27:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),l=a(8),i=a(3),d=a(10),o=a(19),j=a.n(o),m=a.p+"static/media/card-template-1.bb915500.png",b=a.p+"static/media/card-template-2.09d04c23.png",h=(a(27),a(0));function p(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("dataUrl");e&&n(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"mb-4",children:[Object(h.jsx)("h2",{className:"h2",children:"Your Card Design"}),""===a?Object(h.jsx)("p",{children:"You don't have any card design. Create one from below template"}):Object(h.jsxs)("div",{className:"card-result position-relative",children:[Object(h.jsx)("img",{src:a,width:300,alt:"your-design"}),Object(h.jsx)("div",{className:"overlay d-flex justify-content-center align-items-center",children:Object(h.jsx)("button",{className:"btn btn-secondary",onClick:function(){j()(localStorage.getItem("dataUrl"),"card.png")},children:"Download"})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"h2",children:"Available Template"}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"50%"},children:[Object(h.jsx)(l.b,{to:{pathname:"/form",state:{templateId:"card1"}},className:"template-card",children:Object(h.jsx)("img",{src:m,width:300,className:"mr-3",alt:"template-1"})}),Object(h.jsx)(l.b,{to:{pathname:"/form",state:{templateId:"card2"}},className:"template-card",children:Object(h.jsx)("img",{src:b,width:300,alt:"template-2"})})]})]})]})}var u=a(12),x=a(17);function O(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(i.f)(),r=Object(i.g)().state,l=(void 0===r?{}:r).templateId,o=void 0===l?null:l;o||s.push("/");var j=function(e){var t=e.target,a=t.name,c=t.value;n((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(u.a)({},a,c))}))};return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-8 offset-2",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group my-3",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{onChange:j,type:"text",className:"form-control",id:"name",name:"name"})]}),Object(h.jsxs)("div",{className:"form-group my-3",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(h.jsx)("input",{onChange:j,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(h.jsxs)("div",{className:"form-group my-3",children:[Object(h.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(h.jsx)("input",{onChange:j,type:"text",className:"form-control",id:"phone",name:"phone"})]}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){s.push({pathname:"/card-name",state:{templateId:o,payload:a}})},children:"Submit"})]})})})}var v=a(2),f=a.n(v),N=a(21),g=a(22);a(38);function y(e){var t=e.payload,a=void 0===t?{}:t,c=a.name,n=void 0===c?"name":c,s=a.email,r=void 0===s?"email":s,l=a.phone,i=void 0===l?"phone":l;return Object(h.jsxs)("div",{className:"card-1-container",children:[Object(h.jsx)("h2",{className:"h1 mb-2",children:n}),Object(h.jsx)("hr",{className:"divider"}),Object(h.jsx)("p",{children:r}),Object(h.jsx)("p",{children:i})]})}a(39);function w(e){var t=e.payload,a=void 0===t?{}:t,c=a.name,n=void 0===c?"name":c,s=a.email,r=void 0===s?"email":s,l=a.phone,i=void 0===l?"phone":l;return Object(h.jsx)("div",{className:"card-2-container container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("h2",{className:"h1 mb-2",style:{textAlign:"right"},children:n})}),Object(h.jsx)("div",{className:"col-1 d-flex justify-content-center",children:Object(h.jsx)("div",{className:"divider"})}),Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("p",{children:r}),Object(h.jsx)("p",{children:i})]})]})})}a(40);var I={card1:function(e){return Object(h.jsx)(y,{payload:e})},card2:function(e){return Object(h.jsx)(w,{payload:e})}};function k(){var e=Object(c.useRef)(null),t=Object(i.f)(),a=Object(i.g)().state,n=void 0===a?{}:a,s=n.templateId,r=void 0===s?null:s,l=n.payload,d=void 0===l?{}:l;r||t.push("/");var o=function(){var a=Object(N.a)(f.a.mark((function a(){var c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(g.a)(e.current);case 3:c=a.sent,localStorage.setItem("dataUrl",c),t.replace("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(h.jsx)("div",{className:"card card-name max-auto",ref:e,children:I[r](d)}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary my-4",onClick:o,children:"Save"})]})}var C=[{name:"Home",path:"/"}];function S(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("ul",{className:"navbar-nav mr-auto",children:C.map((function(e,t){var a=e.name,c=e.path;return Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsx)(l.b,{className:"nav-link",to:c,children:a})},"nav-".concat(t))}))})})})}a(41);var F=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(S,{}),Object(h.jsx)("div",{className:"container py-3",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/card-name",component:k}),Object(h.jsx)(i.a,{exact:!0,path:"/form",component:O}),Object(h.jsx)(i.a,{exact:!0,path:"/",component:p})]})})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bb45557a.chunk.js.map