module.exports=__NEXT_REGISTER_PAGE("/opportunities",function(){return{page:webpackJsonp([12],{26:function(e,t,n){"use strict";var r=n(0),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children"]);return a.a.createElement("a",i({target:"_blank",rel:"noopener noreferrer"},n),t)}},507:function(e,t,n){e.exports=n(508)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),a=n.n(r),i=n(0),c=n.n(i),o=n(2),l=n(6),u=n(3),p=n(1),d=n(18),s=n(13),m=n(11),b=n(26),f=n(7),g=function(e){var t=e.desc,n=e.link,r=e.catId,a=e.oppId,i=e.editOpp,o=e.isAdmin,l=e.removeOpp,u=e.editingOpp,p=e.cancelEditOpp,d=e.submitEditOpp;return u?c.a.createElement("li",null,c.a.createElement("div",{id:a,"data-cat":r},c.a.createElement("label",{className:"offscreen",htmlFor:"editDesc".concat(r)},"Opportunity description"),c.a.createElement("input",{type:"text",defaultValue:t,id:"editDesc".concat(a)}),c.a.createElement("label",{htmlFor:"editLink".concat(r),className:"offscreen"},"Opportunity link"),c.a.createElement("input",{type:"url",defaultValue:n,id:"editLink".concat(a)}),c.a.createElement("button",{onClick:d},"Update"),c.a.createElement("button",{onClick:p,className:"btn-alt"},"Cancel"))):c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement(b.a,{href:n},t)),o&&[c.a.createElement(f.a,{key:"e",id:a,icon:"pencil-alt",onClick:i}),c.a.createElement(f.a,{key:"d",id:a,icon:"trash",onClick:l})])};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y,h=function(e){var t=e.ids,n=e.name,r=e.catId,a=e.addOpp,i=e.isAdmin,o=e.editCat,l=e.editOpp,u=e.removeCat,p=e.removeOpp,d=e.editingCat,s=e.editingOpps,m=e.cancelEditCat,b=e.cancelEditOpp,y=e.submitEditCat,h=e.submitEditOpp,v=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["ids","name","catId","addOpp","isAdmin","editCat","editOpp","removeCat","removeOpp","editingCat","editingOpps","cancelEditCat","cancelEditOpp","submitEditCat","submitEditOpp"]);return c.a.createElement("div",{className:"cat"},c.a.createElement("div",null,d?c.a.createElement("div",{className:"editCat",id:r},c.a.createElement("input",{type:"text",defaultValue:n,id:"cat".concat(r)}),c.a.createElement("button",{onClick:y},"Update"),c.a.createElement("button",{onClick:m,className:"btn-alt"},"Cancel")):c.a.createElement("div",{className:"title",id:r},c.a.createElement("h5",null,n),i&&[c.a.createElement(f.a,{key:"e",onClick:o,icon:"pencil-alt"}),c.a.createElement(f.a,{icon:"trash",onClick:u,key:"d"})])),c.a.createElement("ul",null,t.map(function(e){var t=v[e],n=t.desc,a=t.link,o=s[e];return c.a.createElement(g,O({key:e},{desc:n,link:a,catId:r,oppId:e,isAdmin:i,editOpp:l,removeOpp:p,editingOpp:o,submitEditOpp:h,cancelEditOpp:b}))})),i&&c.a.createElement("div",{className:"addOpp"},c.a.createElement("label",{htmlFor:"desc".concat(r),className:"offscreen"},"Opportunity description"),c.a.createElement("input",{type:"text",id:"desc".concat(r),placeholder:"Opportunity desc"}),c.a.createElement("label",{htmlFor:"link".concat(r),className:"offscreen"},"Opportunity link"),c.a.createElement("input",{type:"url",id:"link".concat(r),placeholder:"Opportunity link"}),c.a.createElement("button",{id:r,onClick:a},"Add")))},v=n(37);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_(e,t,n[t])})}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={padding:"25px 10px",textAlign:"center","& .loading":{margin:"10px auto"},"& input":{border:"none",padding:"3px 6px",background:"none",borderBottom:"1px solid ".concat(u.colors.blackFg)},"& .cats":{width:"100%",margin:"auto",textAlign:"center",maxWidth:2.25*u.sizes.maxBlockWidth},"& .cat":(y={margin:25,textAlign:"left",verticalAlign:"top",display:"inline-block",width:"calc(50% - 50px)",maxWidth:u.sizes.maxBlockWidth},_(y,u.media.lessThan(1100),{width:"calc(100% - 50px)"}),_(y,"& .title",k({padding:"0 0 5px"},u.flexRowCenter,{"& h5":{flexShrink:1,flexGrow:1},"& svg":{width:18,height:18,margin:"0 5px",cursor:"pointer"}})),_(y,"& .editCat",k({},u.flexRowCenter,_({flexWrap:"wrap","& button":{marginTop:5,":nth-child(2)":{margin:"5px 10px 0 auto"}}},u.media.lessThan(415),{"& input":{width:"100%"}}))),_(y,"& ul",{marginLeft:25,"& li":{padding:"8px 0 0","& p, & svg":{verticalAlign:"top"},"& p":{display:"inline-block",width:"calc(100% - 42px)"},"& svg":{marginRight:5,cursor:"pointer"},"& div":{display:"flex",flexWrap:"wrap"},"& input":{width:"calc(50% - 2.5px)",":nth-child(2)":{marginRight:5}},"& button":{margin:"5px 0",":nth-child(5)":{margin:"5px 5px 5px auto"}}}}),_(y,"& .addOpp",k({marginTop:15,flexWrap:"wrap"},u.flexRowCenter,{"& input":{width:"calc(50% - 2.5px)",":nth-child(2)":{marginRight:5}},"& button":{marginLeft:"auto",marginTop:10}})),y),"& .newCat":k({},u.flexRowCenter,{flexWrap:"wrap",display:"inline-flex",padding:"10px 0 0 0",verticalAlign:"bottom","& label, & input, & button":{marginTop:5},"& label":{marginRight:5},"& input":{flexGrow:1,flexShrink:1,marginRight:10},"& button":{marginLeft:"auto"}})},A=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return w(r,(n=r=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(C(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{editingCats:{},editingOpps:{}}}),Object.defineProperty(C(r),"addCat",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=document.getElementById("addCat"),t=e.value.trim();t.length&&(e.value="",Object(p._36)({name:t}).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred adding the category"),button1Txt:"OK",button2Txt:null})}))}}),Object.defineProperty(C(r),"getId",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return"string"==typeof e?e:e.currentTarget.closest("div").id}}),Object.defineProperty(C(r),"editCat",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e);r.setState({editingCats:k({},r.state.editingCats,_({},t,!0))}),setTimeout(function(){var e=document.getElementById("cat"+t);e&&e.focus()},25)}}),Object.defineProperty(C(r),"cancelEditCat",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e);r.setState({editingCats:k({},r.state.editingCats,_({},t,!1))})}}),Object.defineProperty(C(r),"submitEditCat",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e),n=document.getElementById("cat"+t).value.trim(),a=r.props.opps[t].name,i=function(){return r.cancelEditCat(t)};if(n===a)return i();Object(p._88)({message:"Are you sure you want to rename ".concat(a," to ").concat(n,"?"),button1Act:function(){Object(p._92)({_id:t,name:n}).then(function(){return i()}).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred renaming this category"),button1Txt:"OK",button2Txt:null})})}})}}),Object.defineProperty(C(r),"removeCat",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e);Object(p._88)({message:"Are you sure you want to delete the ".concat(r.props.opps[t].name," category and all it's opportunities?"),button1Act:function(){Object(p._80)(t).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred removing the category")})})}})}}),Object.defineProperty(C(r),"addOpp",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.currentTarget.id,n=document.getElementById("desc"+t),r=document.getElementById("link"+t),a=n.value.trim(),i=r.value.trim();a.length&&i.length&&(n.value="",r.value="",Object(p._35)({cat:t,desc:a,link:i}).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred adding the opportunity"),button1Txt:"OK",button2Txt:null})}))}}),Object.defineProperty(C(r),"editOpp",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.currentTarget.id;r.setState({editingOpps:k({},r.state.editingOpps,_({},t,!0))})}}),Object.defineProperty(C(r),"cancelEditOpp",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e);r.setState({editingOpps:k({},r.state.editingOpps,_({},t,!1))})}}),Object.defineProperty(C(r),"submitEditOpp",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=r.getId(e),n=e.currentTarget.closest("div").getAttribute("data-cat"),a=function(){return r.cancelEditOpp(t)},i=document.getElementById("editDesc"+t),c=document.getElementById("editLink"+t),o=i.value.trim(),l=c.value.trim();if(o.length&&l.length){var u=r.props.opps[n][t];if(o===u.desc&&l===u.link)return a();Object(p._88)({message:"Are you sure you want to update this opportunity?",button1Act:function(){Object(p._91)({_id:t,desc:o,link:l}).then(function(){return a()}).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred updating the opportunity"),button1Txt:"OK",button2Txt:null})})}})}}}),Object.defineProperty(C(r),"removeOpp",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.currentTarget.id;Object(p._88)({message:"Are you sure you want to delete this opportunity?",button1Act:function(){Object(p._79)(t).catch(function(e){Object(p._88)({title:"Error...",message:Object(m.a)(e,"An error occurred removing the opportunity"),button1Txt:"OK",button2Txt:null})})}})}}),n))}var n,r,l,u,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),n=t,r=[{key:"render",value:function(){var e=this,t=this.state,n=t.editingCats,r=t.editingOpps,a=this.props,i=a.opps,l=a.users,u=i.error,p=i.ids,m=i.pending,b=(l[l.curUser]||{}).isAdmin;return c.a.createElement(d.a,{className:Object(o.css)(P),restrict:!0},m&&c.a.createElement(s.a,{size:36,className:"loading"}),u&&!m&&c.a.createElement("p",{className:"error"},u),!p.length&&!u&&!m&&c.a.createElement("p",{className:"error"},"There are no opportunities yet"),c.a.createElement("div",{className:"cats"},p.map(function(t){var a=i[t];return c.a.createElement(h,x({key:t},k({},a,{catId:t,isAdmin:b,editingOpps:r,addOpp:e.addOpp,editCat:e.editCat,editOpp:e.editOpp,removeCat:e.removeCat,removeOpp:e.removeOpp,editingCat:n[t],cancelEditCat:e.cancelEditCat,cancelEditOpp:e.cancelEditOpp,submitEditCat:e.submitEditCat,submitEditOpp:e.submitEditOpp})))}),c.a.createElement("div",{className:"cat newCat"},b&&[c.a.createElement("label",{htmlFor:"addCat",key:"l"},"Add category:"),c.a.createElement("input",{type:"text",id:"addCat",placeholder:"New category name",key:"i"}),c.a.createElement("button",{onClick:this.addCat,key:"b"},"Submit")])))}}],l=[{key:"getInitialProps",value:(u=a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p._49)();case 2:case"end":return e.stop()}},e,this)}),b=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=u.apply(e,t);function i(e,t){try{var i=a[e](t),l=i.value}catch(e){return void r(e)}i.done?n(l):Promise.resolve(l).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})},function(){return b.apply(this,arguments)})}],r&&j(n.prototype,r),l&&j(n,l),t}();t.default=Object(v.a)(Object(l.b)(function(e){return{opps:e.opps,users:e.users}})(A))}},[507]).default}});