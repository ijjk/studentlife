module.exports=__NEXT_REGISTER_PAGE("/admin/contact",function(){return{page:webpackJsonp([11],{27:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=["January","February","March","April","May","June","July","August","September","October","November","December"],o=function(e){return(e=e.split("-"))[1]=e[1].replace("0",""),e=e.join("-"),new Date(e)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=e instanceof Date?e:new Date(e);var n,o="".concat(r[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear());if(!t){var a="AM",c=e.getHours(),i=e.getMinutes();c>11?(c=c>12?c-12:c,a="PM"):0===c&&(c="12"),n=i,i=1===(n+="").length?"0"+n:n,o+=" ".concat(c,":").concat(i," ").concat(a)}return o}},41:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(6);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.users,n=e.children;return(t[t.curUser]||{}).isAdmin?n:o.a.createElement("p",{className:"errMsg"},"You do not have valid permission to access this page")}}])&&i(n.prototype,a),c&&i(n,c),t}();t.a=Object(a.b)(function(e){return{users:e.users}})(l)},493:function(e,t,n){e.exports=n(494)},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n.n(r),a=n(0),c=n.n(a),i=n(2),u=(n.n(i),n(6)),l=n(15),s=n(3),p=n(1),m=n(18),f=n(27),b=n(7),d=n(41),y=n(37),g=n(11),h=n(13);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={padding:10,width:"100%",maxWidth:s.sizes.maxBlockWidth,margin:"auto","& .delByRange":j({margin:"10px 0 40px"},s.flexRowCenter,{flexWrap:"wrap","& h6":{width:"100%",marginBottom:8},"& div:nth-child(2)":{width:"100%"},"& label":{fontWeight:700,margin:"10px 5px 0 0"},"& input":{border:"none",padding:"0 4px",background:"none",borderBottom:"1px solid ".concat(s.colors.blackFg)},"& button":{margin:"10px 0 0 auto"}}),"& .msg":j({opacity:0,width:"100%",borderRadius:4},s.shadows.box,{margin:"15px 0",position:"relative",background:"#ffffff",padding:"2px 8px 4px",animation:"".concat(l.f," 225ms ease-in-out forwards"),"& svg":{position:"absolute",top:5,right:5,cursor:"pointer"},"& p":{margin:"2px 0",wordWrap:"break-word",":nth-child(1)":{width:"calc(100% - 25px)"}},"& span":{marginRight:5,fontWeight:700}}),"& .error":{padding:"5px 0",textAlign:"center"},"& button":{display:"block",margin:"10px auto"}},P=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return w(r,(n=r=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(E(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{numPrev:0,numAdded:0,dateDelNotSupprted:!1}}),Object.defineProperty(E(r),"loadMore",{configurable:!0,enumerable:!0,writable:!0,value:function(){return Object(p._48)({})}}),Object.defineProperty(E(r),"removeMsg",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.currentTarget.id;Object(p._88)({message:"Are you sure you want to permanently delete this message?",button1Act:function(){Object(p._76)(t).catch(function(e){Object(p._88)({title:"Error...",message:Object(g.a)(e,"An error occurred deleting message"),button1Txt:"OK",button2Txt:null})})}})}}),Object.defineProperty(E(r),"removeByRange",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=document.getElementById("from").value,t=document.getElementById("to").value;e&&t&&(e=Object(f.b)(e).getTime(),t=Object(f.b)(t).getTime(),Object(p._88)({message:"Are you sure you want to permanently delete messages received between \n      ".concat(Object(f.a)(e)," ").concat(Object(f.a)(t),"?"),button1Act:function(){Object(p._77)(e,t).catch(function(e){Object(p._88)({title:"Error...",message:Object(g.a)(e,"An error occurred removing messages"),button1Txt:"OK",button2Txt:null})})}}))}}),n))}var n,r,u,l,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,r=[{key:"componentDidMount",value:function(){var e=document.createElement("input");e.setAttribute("type","date"),"date"!==e.type&&this.setState({dateDelNotSupprted:!0})}},{key:"render",value:function(){var e=this,t=this.props.contact,n=this.state,r=n.numAdded,o=n.dateDelNotSupprted,a=t.error,u=t.hasMore,l=t.ids,s=t.pending,p=l.length-r,y=!l.length&&!s&&!u;return c.a.createElement(m.a,{restrict:!0},c.a.createElement(d.a,null,c.a.createElement("h5",{style:{padding:"10px 0 0 10px"}},"Contact messages"),c.a.createElement("div",{className:Object(i.css)(_)},!y&&!o&&c.a.createElement("div",{className:"delByRange"},c.a.createElement("h6",null,"Delete messages"),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"from"},"From:"),c.a.createElement("input",{type:"date",id:"from"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"to"},"To:"),c.a.createElement("input",{type:"date",id:"to"})),c.a.createElement("button",{onClick:this.removeByRange},"Delete")),l.map(function(n,o){var a=t[n],i=a.email,u=a.msg,l=a.name,s=a.createdAt;return r&&(o=o>p?o-p:0),c.a.createElement("div",{key:n,className:"msg",style:{animationDelay:50*o+"ms"}},c.a.createElement(b.a,{icon:"trash",id:n,onClick:e.removeMsg}),c.a.createElement("p",null,c.a.createElement("span",null,"Name:"),l),c.a.createElement("p",null,c.a.createElement("span",null,"Email:"),i),c.a.createElement("p",null,c.a.createElement("span",null,"Sent:"),Object(f.a)(s)),c.a.createElement("p",null,c.a.createElement("span",null,"Message:"),u))}),y&&c.a.createElement("p",{className:"errMsg"},"There are no messages yet"),a&&!s&&c.a.createElement("p",{className:"error"},a),s&&c.a.createElement(h.a,{size:36}),u&&!s&&c.a.createElement("button",{onClick:s?null:this.loadMore},"Load more"))))}}],u=[{key:"getInitialProps",value:(l=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p._48)({initial:!0});case 2:case"end":return e.stop()}},e,this)}),s=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=l.apply(e,t);function a(e,t){try{var a=o[e](t),u=a.value}catch(e){return void r(e)}a.done?n(u):Promise.resolve(u).then(c,i)}function c(e){a("next",e)}function i(e){a("throw",e)}c()})},function(){return s.apply(this,arguments)})},{key:"getDerivedStateFromProps",value:function(e,t){var n=e.contact,r=t.numPrev,o=n.ids.length;return o!==r?(0===o&&!n.pending&&n.hasMore&&Object(p._48)({}),{numPrev:o,numAdded:o>r?o-r:0}):null}}],r&&O(n.prototype,r),u&&O(n,u),t}();t.default=Object(y.a)(Object(u.b)(function(e){return{contact:e.contact}})(P))}},[493]).default}});