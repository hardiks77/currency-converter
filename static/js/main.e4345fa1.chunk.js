(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(5),c=a.n(s),i=(a(11),a.p,a(12),a(4)),o=a.n(i),l=a(6),u=a(2),p=(a(14),a(0));function d(){var e=r.a.useState(null),t=Object(u.a)(e,2),a=t[0],n=t[1],s=r.a.useState(0),c=Object(u.a)(s,2),i=c[0],d=c[1],j=r.a.useState(0),v=Object(u.a)(j,2),f=v[0],g=v[1],h=r.a.useState("USD"),b=Object(u.a)(h,2),x=b[0],F=b[1],O=r.a.useState("INR"),N=Object(u.a)(O,2),m=N[0],y=N[1];function C(e){if("first-input"==e.target.id&&e.target.value>=0&&!isNaN(e.target.value))if(""==e.target.value)g(""),d("");else{d(e.target.value);var t=parseFloat(a[m])/parseFloat(a[x])*parseFloat(e.target.value);g(parseFloat(t).toFixed(2))}else if("second-input"==e.target.id&&e.target.value>=0&&!isNaN(e.target.value))if(""==e.target.value)d(""),g("");else{g(e.target.value);var n=parseFloat(a[m]),r=parseFloat(a[x])/n*parseFloat(e.target.value);d(parseFloat(r).toFixed(2))}}return r.a.useEffect((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.exchangeratesapi.io/v1/latest?access_key=c71066a02f3823951ca8c4cd596d3875&format=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a.rates);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"curr-div",children:[Object(p.jsx)("h1",{children:"Currency Converter"}),Object(p.jsxs)("div",{className:"first-div",children:[Object(p.jsx)("select",{id:"first-select",onChange:function(e){if(F(e.target.value),console.log(f),f>=0&&!isNaN(f)&&i>=0&&!isNaN(i)){var t=parseFloat(a[m])/parseFloat(a[x])*parseFloat(i);g(parseFloat(t).toFixed(2))}},value:x,children:a?Object.keys(a).map((function(e,t){return e==m?null:Object(p.jsx)("option",{rates:a.curr,value:e,id:[e,"1"].join(""),children:e},t)})):Object(p.jsx)("option",{children:"Loading"})}),Object(p.jsx)("input",{id:"first-input",onChange:C,value:i})]}),Object(p.jsxs)("div",{className:"second-div",children:[Object(p.jsx)("select",{id:"second-select",onChange:function(e){if(y(e.target.value),f>=0&&!isNaN(f)&&i>=0&&!isNaN(i)){var t=parseFloat(a[m])/parseFloat(a[x])*parseFloat(f);d(parseFloat(t).toFixed(2))}},value:m,children:a?Object.keys(a).map((function(e,t){return e==x?null:Object(p.jsx)("option",{rates:a.curr,id:[e,"2"].join(""),value:e,children:e},t)})):Object(p.jsx)("option",{children:"Loading"})}),Object(p.jsx)("input",{id:"second-input",onChange:C,value:f})]})]})}var j=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.e4345fa1.chunk.js.map