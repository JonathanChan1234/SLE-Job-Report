(this["webpackJsonpjob-report-react"]=this["webpackJsonpjob-report-react"]||[]).push([[0],{52:function(e,t,n){e.exports=n(63)},57:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=(n(57),n(29)),i=n(109),u=n(112),s=n(111),m=(n(61),n(36)),f=n(108),d=n(105),p=n(107),E=n(102),g=n(104),h=n(106),v=n(100),b=n(110),y=n(103),S=n(98),w=Object(S.a)((function(e){return{table:{minWidth:300,maxWidth:700},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),k=function(e){var t=e.record,n=e.staff_list,l=w(),o=Object(a.useState)(function(){var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDay()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(a)}()),c=Object(m.a)(o,2),i=c[0],u=c[1];return r.a.createElement("div",null,r.a.createElement(s.a,{display:"flex",justifyContent:"center"},r.a.createElement("form",{className:l.container,noValidate:!0},r.a.createElement(b.a,{id:"date",label:"ORDER DATE",type:"date",value:i,className:l.textField,onChange:function(e){return function(e){u(e.target.value)}(e)},InputLabelProps:{shrink:!0}})),r.a.createElement("h4",null)),r.a.createElement(g.a,{component:y.a},r.a.createElement(s.a,{display:"flex",justifyContent:"center"},r.a.createElement(d.a,{className:l.table,size:"small"},r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,null,"Staff Name"),r.a.createElement(E.a,null,"No of Response"))),r.a.createElement(p.a,null,function(){var e=t.slice(1,t.length).filter((function(e){return function(e,t){try{var n=new Date(e);n.setHours(0,0,0,0);var a=new Date(t);return a.setHours(0,0,0,0),n.getTime()===a.getTime()}catch(r){throw r}}(e[1],i)})),a=n.map((function(e){return{name:e,response:0}}));e.forEach((function(e){a.forEach((function(t){t.name===e[2]&&t.response++}))})),a.sort((function(e,t){return t.response-e.response}));var l=(100*a.filter((function(e){return e.response>0})).length/a.length).toFixed(2);return a.unshift({name:"Response Rate",response:"".concat(l,"%")}),a.map((function(e){return r.a.createElement(v.a,{key:e.name},r.a.createElement(E.a,null,e.name),r.a.createElement(E.a,null,e.response))}))}())))))},x=function(e){var t=e.id,n=e.report_range,l=e.staff_list_range,o=Object(a.useState)(!1),i=Object(m.a)(o,2),s=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement(u.a,{onClick:function(){return d(!s)}},"Reload Data"),r.a.createElement(c.a,{range:l,id:t},(function(e){var a=e.loading,l=e.error,o=e.data;return a?r.a.createElement("div",null,r.a.createElement(f.a,null),r.a.createElement("h5",null,"Getting Staff List from Google Sheet")):l?JSON.stringify(l,null,2):o?r.a.createElement(c.a,{id:t,range:n},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("div",null,r.a.createElement(f.a,null),r.a.createElement("h5",null,"Getting Job Report from Google Sheet")):n?JSON.stringify(n,null,2):a?r.a.createElement(k,{record:a,staff_list:o.map((function(e){return e[0]}))}):null})):null})))},N=function(e){var t=e.clientId,n=e.apiKey;return r.a.createElement(c.b,{clientId:t,apiKey:n},(function(e){var t=e.authorize,n=e.loading,a=e.signout,l=e.signedIn,o=e.error;return r.a.createElement("div",null,n?r.a.createElement(i.a,null):o?r.a.createElement("div",null,o):l?r.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:a},"Sign Out"):r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:t},"Authorize"),l&&r.a.createElement(x,{staff_list_range:"Staff_List!A1:A",report_range:"\u8868\u55ae\u56de\u61c9 1!A1:AN",id:"1R9ti3zfqMCA9Cq3JjZAlfkIGMh6iC3atIlXN6aNKq8E"}))}))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{display:"flex",flexDirection:"column",p:1,m:1,bgcolor:"background.paper"},r.a.createElement("h2",null,"SLE Job Report"),r.a.createElement(N,{clientId:"27475518606-8bkoo1kd27attnr63le9mqur08314b0r.apps.googleusercontent.com",apiKey:""})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.bda83766.chunk.js.map