(this.webpackJsonpmodal_window=this.webpackJsonpmodal_window||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=(n(29),n(9)),s=function(e){var t=e.children,n=document.createElement("div");return Object(a.useEffect)((function(){return document.body.append(n),function(){document.body.removeChild(n)}}),[]),i.a.createPortal(t,n)},l=(n(30),n(2)),d=function(){var e=Object(a.useState)(16),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),s=i[0],d=i[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return d((function(e){return e-1}))}),1e3);return 0===s&&0===n&&clearInterval(e),0===s&&n>0&&(c((function(e){return e-1})),d(59)),function(){return clearInterval(e)}}),[s]),Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsx)("img",{src:"timer.svg",className:"timer__icon"}),Object(l.jsxs)("p",{className:"timer__content",children:["00:",n<10&&"0",n,":",s<10&&"0",s]})]})},u=n(11),j=n(23),b=function(e){var t=e.handleSelect,n=[{value:"1",label:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430"},{value:"2",label:"\u0411\u0438\u0442\u043a\u043e\u0438\u043d"},{value:"3",label:"\u0412\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0447\u0435\u0442"}],a={option:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:20,cursor:"pointer",color:"#fff",width:392,height:40,display:"flex",alignItems:"center",backgroundColor:"none",fontFamily:"Gilroy, sans-serif",fontWeight:500,fontSize:16,borderBottom:"1px solid #2e354b",":hover":{backgroundColor:"#fff",color:"#2e354b"}})},menu:function(e){return Object(u.a)(Object(u.a)({},e),{},{backgroundColor:"#3C4561",width:392,border:"none",marginBottom:0})},control:function(e){return Object(u.a)(Object(u.a)({},e),{},{width:392,backgroundColor:"#3C4561",border:"none",borderRadius:5,boxShadow:"none",height:40,cursor:"pointer"})},singleValue:function(){return{fontFamily:"Gilroy, sans-serif",fontWeight:700,color:"#fff",fontSize:16,textAlign:"center"}},valueContainer:function(e){return Object(u.a)(Object(u.a)({},e),{},{":before":{content:'" "',display:"flex",marginRight:19,marginLeft:11,height:15,width:20,marginBottom:2,backgroundImage:'url("card.svg")',backgroundPosition:"center"}})},indicatorsContainer:function(){return{display:"flex",marginRight:22}},indicatorSeparator:function(){return{backgroundColor:"#000"}}};return Object(l.jsx)(j.a,{defaultValue:n[0],options:n,styles:a,components:{DropdownIndicator:function(){return Object(l.jsx)("img",{src:"dd.svg"})}},isSearchable:!1,onChange:t})},f=n(68),m=(n(46),n(47),function(e){var t=e.getMoney,n=e.payMoney,a=e.id,c=e.selectedTarif,r=e.selectTarif;return Object(l.jsxs)("div",{className:c===a?"tarif-card tarif-card--active":"tarif-card",onClick:function(){return r(a,t)},children:[Object(l.jsx)("h2",{className:"tarif-card__pay",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430"}),Object(l.jsxs)("span",{className:"tarif-card__pay__value",children:["$ ",n]}),Object(l.jsx)("h2",{className:"tarif-card__get",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"}),Object(l.jsxs)("span",{className:c===a?"tarif-card__get__value tarif-card__get__value--active":"tarif-card__get__value",children:["$ ",t]})]})}),h=function(e){var t=e.tarifList,n=e.selectedTarif,a=e.selectTarif;return t.map((function(e){return Object(l.jsx)(m,{payMoney:e.pay,getMoney:e.get,id:e.id,selectTarif:a,selectedTarif:n},e.id)}))},O=(n(48),function(e){var t=e.handleClick,n=e.buttonName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return t(!0)},className:"modal-button",children:n}),Object(l.jsx)("div",{className:"modal-button__shadow"})]})}),_=function(e){var t=e.onChangeVisModalWindow,n=e.width,c=e.height,r=Object(a.useState)(2),i=Object(o.a)(r,2),s=i[0],u=i[1],j=Object(a.useState)(1e3),m=Object(o.a)(j,2),_=m[0],g=m[1],w=Object(a.useState)("\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430"),x=Object(o.a)(w,2),v=x[0],p=x[1],N=Object(a.useState)(!1),y=Object(o.a)(N,2),C=y[0],k=y[1];return Object(l.jsxs)("div",{className:"modal-window",style:{width:n,height:c},children:[C&&Object(l.jsx)("div",{className:"modal-window__alert",children:Object(l.jsxs)(f.a,{onClose:function(){k(!1)},children:["\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b: ",Object(l.jsx)("b",{children:v})," ",Object(l.jsx)("br",{})," \u041a \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044e: ",Object(l.jsx)("b",{children:_})]})}),Object(l.jsx)("img",{onClick:function(){return t(!1)},className:"modal-window__close",src:"./close.svg",alt:"close"}),Object(l.jsx)("div",{className:"modal-window__trigger",children:"+100%"}),Object(l.jsx)("div",{className:"modal-window__timer",children:Object(l.jsx)(d,{})}),Object(l.jsx)("h1",{className:"modal-window__title",children:"\u0423\u0432\u0435\u043b\u0438\u0447\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442!"}),Object(l.jsx)(b,{handleSelect:function(e){var t=e.label;p(t),k(!1)}}),Object(l.jsx)("div",{className:"modal-window__tarifs",children:Object(l.jsx)(h,{tarifList:[{id:1,pay:50,get:100},{id:2,pay:500,get:1e3},{id:3,pay:100,get:200}],selectTarif:function(e,t){e!==s&&(u(e),g(t),k(!1))},selectedTarif:s})}),Object(l.jsxs)("p",{className:"modal-window__amount-cradit",children:[Object(l.jsxs)("span",{className:"modal-window__amount-cradit__value",children:["$",_,","]}),Object(l.jsx)("span",{className:"modal-window__amount-cradit__after-point",children:"00"})," ","\u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043e \u0432\u0430\u043c \u043d\u0430 \u0441\u0447\u0435\u0442"]}),Object(l.jsx)("div",{className:"modal-window__button-wrap",children:Object(l.jsx)(O,{handleClick:function(){return k(!0)},buttonName:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"})}),Object(l.jsxs)("p",{className:"modal-window__info",children:["\u041f\u0440\u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0441\u0447\u0435\u0442\u0430 \u0441 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",Object(l.jsx)("br",{}),"\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e \u043a\u0443\u0440\u0441\u0443 \u0431\u0430\u043d\u043a\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"]}),Object(l.jsx)("a",{className:"modal-window__details",href:"https://www.google.com/",target:"_blank",rel:"noreferrer",children:"\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415"})]})};n(49);var g=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(e){return c(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"button-wrap",children:Object(l.jsx)(O,{handleClick:r,buttonName:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"})}),n&&Object(l.jsx)(s,{children:Object(l.jsx)(_,{onChangeVisModalWindow:r,width:695,height:727})})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0b76ee7d.chunk.js.map