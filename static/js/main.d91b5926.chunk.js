(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(4),a=c(5),l=c(7),r=c(6),d=c(1),i=c.n(d),u=(c(12),c(13),c(0)),b=function(e){var t=e.classNameGood,c=e.good,n=e.onClick,s=e.classNameButton,o=e.buttonInfo;return Object(u.jsxs)("tr",{className:t,"data-cy":"Good",children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return n(c)},"data-cy":"RemoveButton",type:"button",className:s,children:"false"===o?"+":o})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.handler=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{className:"section container",children:[0===this.state.selectedGood.length?Object(u.jsx)("h1",{className:"title",children:"No goods selected"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[this.state.selectedGood," is selected",Object(u.jsx)("button",{id:"button","data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.handler()}})]})}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:j.map((function(t){return Object(u.jsx)(b,{good:t,onClick:function(t){return e.handler(t)},classNameGood:"".concat(t===e.state.selectedGood&&"has-background-success-light"),classNameButton:"".concat(t===e.state.selectedGood&&"button is-info"),buttonInfo:"".concat(t===e.state.selectedGood&&"-")})}))})})]})}}]),c}(i.a.Component);s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d91b5926.chunk.js.map