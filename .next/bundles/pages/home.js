module.exports=__NEXT_REGISTER_PAGE("/home",function(){return{page:webpackJsonp([5],{25:function(e,t,n){"use strict";var r=n(4),o=(n.n(r),r.allowedExts.images),a=r.allowedExts.other,i=Math.floor(r.maxFileSize/1e6)+"MB",c=function(e){return{error:e}};t.a=function(e){var t=e.file,n=e.customExtension,l=e.imageOnly,u=e.previewCb,s=t.name;if(t.size>r.maxFileSize)return c("File exceeds max file size of ".concat(i));if(s.indexOf(".")<0)return c("File name does not contain a file extension (e.g. .jpg, .png)");var p=s.split(".").pop().toLowerCase();if(n)return c(p===n?null:"File type is invalid. Expected .".concat(n));var f=o.indexOf(p)>-1;if(!f&&l||!f&&a.indexOf(p)<0)return function(e){var t=e?o:o.concat(a);return c("File type is invalid. Allowed types are ".concat(t.join(", "),"."))}(l);if(f&&"function"==typeof u){var d=new FileReader;d.onload=function(e){u(e.target.result)},d.readAsDataURL(t)}return{error:null}}},26:function(e,t,n){"use strict";var r=n(0),o=n.n(r);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children"]);return o.a.createElement("a",a({target:"_blank",rel:"noopener noreferrer"},n),t)}},27:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=["January","February","March","April","May","June","July","August","September","October","November","December"],o=function(e){return(e=e.split("-"))[1]=e[1].replace("0",""),e=e.join("-"),new Date(e)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=e instanceof Date?e:new Date(e);var n,o="".concat(r[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear());if(!t){var a="AM",i=e.getHours(),c=e.getMinutes();i>11?(i=i>12?i-12:i,a="PM"):0===i&&(i="12"),n=c,c=1===(n+="").length?"0"+n:n,o+=" ".concat(i,":").concat(c," ").concat(a)}return o}},33:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),i=n(6),c=n(1),l=n(13),u=n(4),s={top:0,left:0,zIndex:5,opacity:0,height:"0",width:"100%",color:"#ffffff",position:"fixed",overflow:"hidden",background:"rgba(0, 0, 0, 0.75)",transition:"opacity 175ms ease-in-out","&.active":{opacity:1,height:"100%"},"& .close":{top:15,right:25,fontSize:35,cursor:"pointer",position:"absolute"},"& img":{top:0,left:0,right:0,bottom:0,margin:"auto",maxWidth:"90%",maxHeight:"90%",position:"absolute"}},p=function(e){var t=e.posts;return o.a.createElement("div",{className:Object(a.css)(s)+(t.expanded?" active":"")},o.a.createElement("div",{id:"escape",className:"close",onClick:c._24,title:"Hide expanded view"},"X"),t.expanded?o.a.createElement("img",{src:u.uploadsUrl+t[t.expanded].file,alt:"expanded post image"}):null)},f=n(3),d=n(15),m=n(16),b=n.n(m),g=n(7),y=n(26);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={width:"100%",textAlign:"center",margin:"10px 0","& img":{width:"auto",height:"auto",maxHeight:400,maxWidth:"98%",cursor:"pointer"},"& a":function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}({fontSize:15},f.flexRowCenter,{display:"inline-flex",padding:"8px 10px",margin:"10px 5px 0",textDecoration:"none","& svg":{marginRight:5},"& span":{height:16}})},w={height:16,width:16},x=function(e){var t=e._id,n=e.file;return o.a.createElement("div",{className:Object(a.css)(O)},function(){var e="file",r=n.split(".").pop();if(u.allowedExts.images.indexOf(r)>-1)return o.a.createElement("img",{src:u.uploadsUrl+n,onClick:function(){return Object(c._42)(t)}});switch(r){case"pdf":e+="-pdf";break;case"xls":case"xlsx":e+="-excel";break;case"doc":case"docx":e+="-word";break;case"ppt":case"pptx":e+="-powerpoint"}return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(g.a,h({icon:e},{style:{height:72,width:72,color:"#555555"}}))),o.a.createElement(y.a,{href:u.uploadsUrl+n,download:!0},o.a.createElement(g.a,{icon:"download",style:w}),o.a.createElement("span",null,"Download")),o.a.createElement(y.a,{href:"https://docs.google.com/viewer?url="+u.uploadsUrl+n},o.a.createElement(g.a,{icon:"eye",style:w}),o.a.createElement("span",null,"View")))}())};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={width:"100%",textAlign:"center",padding:"5px 0 15px",wordBreak:"break-word","& textarea":{padding:5,width:"100%",border:"none",marginBottom:10,borderBottom:"1px solid ".concat(f.colors.grey)},"& .buttons":function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({width:"100%"},f.flexRowCenter,{justifyContent:"center","& button":{margin:"0 5px"}})},_=function(e){var t=e._id,n=e.commentId;return"edit"+(n?"Comment"+n:"Post"+t)},P=function(e){var t=e._id,n=e.commentId;if(n)return Object(c._27)({post:t,_id:n,editing:!1});Object(c._71)({_id:t,editing:!1})},k=function(e){var t=e._id,n=e.commentId,r=e.editing,i=e.text,l=_({_id:t,commentId:n});return o.a.createElement("div",{className:Object(a.css)(E)},r?o.a.createElement("div",null,o.a.createElement("textarea",{autoFocus:!0,id:l,defaultValue:i,maxLength:u.maxPostText}),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:function(){return function(e){var t,n,r,o=e._id,a=e.commentId;P({_id:o,commentId:a});var i=document.querySelector("#"+_({_id:o,commentId:a}));i&&(i=i.value.trim()).length&&(a?(t="comment",n=c._90,r={post:o,_id:a,text:i}):(t="post",n=c._94,r={_id:o,text:i}),n(r).catch(function(){Object(c._88)({title:"Error...",message:"An error occurred updating this ".concat(t,". Please try again later"),button1Txt:"OK",button2Txt:null})}))}({_id:t,commentId:n})}},"Submit"),o.a.createElement("button",{onClick:function(){return P({_id:t,commentId:n})},className:"btn-alt"},"Cancel"))):i)},S=n(22);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I={position:"relative","& svg":{cursor:"pointer"},"& .options":function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}({top:0,right:30,height:0,width:115,zIndex:3},f.shadows.box,{borderRadius:3,overflow:"hidden",position:"absolute",background:"#ffffff",transition:"height 150ms ease-in-out","&.active":{height:"auto",minHeight:25},"& .opt":{padding:"4px 0",cursor:"pointer",userSelect:"none",textAlign:"center",borderBottom:"1px solid ".concat(f.colors.grey),":hover":{background:f.colors.grey}}})},R=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return A(r,(n=r=A(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(T(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{show:!1}}),Object.defineProperty(T(r),"toggleShow",{configurable:!0,enumerable:!0,writable:!0,value:function(){return r.setState({show:!r.state.show})}}),Object.defineProperty(T(r),"askAndDo",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.message,n=e.errMessage,o=e.toDo;r.toggleShow(),Object(c._88)({message:t,button1Act:function(){o().catch(function(){Object(c._88)({title:"Error...",message:n,button1Txt:"OK",button2Txt:null})})}})}}),Object.defineProperty(T(r),"report",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props,t=e._id,n=e.commentId,o=n?"comment":"post";r.askAndDo({message:"Are you sure you want to report this ".concat(o,"?"),errMessage:"An error occurred reporting the ".concat(o),toDo:n?function(){return Object(c._90)({_id:n,reported:!0})}:function(){return Object(c._94)({_id:t,reported:!0})}})}}),Object.defineProperty(T(r),"unreport",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props,t=e._id,n=e.commentId;r.askAndDo({message:"Are you sure you want to dismiss this reporting?",errMessage:"An error occurred dismissing the reporting",toDo:n?function(){return Object(c._90)({_id:n,reported:!1})}:function(){return Object(c._94)({_id:t,reported:!1})}})}}),Object.defineProperty(T(r),"archive",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props,t=e._id,n=e.commentId,o=e.users,a=o[o.curUser].isAdmin?"archive":"delete",i=a.substr(0,a.length-1)+"ing",l=n?"comment":"post";r.askAndDo({message:"Are you sure you want to ".concat(a," this ").concat(l,"?"),errMessage:"An error occurred ".concat(i," this ").concat(l),toDo:n?function(){return Object(c._90)({_id:n,archived:!0})}:function(){return Object(c._94)({_id:t,archived:!0})}})}}),Object.defineProperty(T(r),"edit",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.toggleShow();var e=r.props,t=e._id,n=e.commentId;if(n)return Object(c._27)({post:t,_id:n,editing:!0});Object(c._71)({_id:t,editing:!0})}}),Object.defineProperty(T(r),"delete",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props,t=e._id,n=e.commentId,o=n?"comment":"post";r.askAndDo({message:"Are you sure you want to delete this ".concat(o,". This can not be undone."),errMessage:"An error occurred while deleting this ".concat(o),toDo:n?function(){return Object(c._75)(n)}:function(){return Object(c._82)(t)}})}}),Object.defineProperty(T(r),"shouldHide",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.mainEl&&!r.mainEl.contains(e.target)&&r.setState({show:!1})}}),n))}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){window.addEventListener("click",this.shouldHide)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.shouldHide)}},{key:"render",value:function(){var e=this,t=this.props,n=t.reported,r=t.archived,i=t.createdBy,c=t.users,l=this.state.show,u=c[c.curUser].isAdmin,s=Boolean(i===c.curUser),p="Report",f=this.report;return n&&(f=u?this.unreport:null,p=u?"Dismiss report":"Reported"),o.a.createElement("div",{className:Object(a.css)(I)+" PostOptions",ref:function(t){return e.mainEl=t}},o.a.createElement(g.a,{icon:"ellipsis-v",style:{height:20,width:15},onClick:this.toggleShow}),o.a.createElement("div",{className:"options"+(l?" active":"")},r&&n||!r&&o.a.createElement("div",{onClick:f,className:"opt"},p),r||!s&&!u?null:o.a.createElement("div",{onClick:this.edit,className:"opt",id:l?"edit":null},"Edit"),r||!s&&!u?null:o.a.createElement("div",{className:"opt",onClick:this.archive,id:!u&&l?"delete":null},u?"Archive":"Delete"),u?o.a.createElement("div",{className:"opt",onClick:this.delete,id:u&&l?"delete":null},"Delete"):null))}}])&&D(n.prototype,i),l&&D(n,l),t}(),B=n(27),F={width:"100%",display:"flex",paddingBottom:5,position:"relative","& .text":{fontSize:15,marginLeft:5,position:"relative",wordWrap:"break-word",width:"calc(100% - 55px)","& .name":{fontWeight:700,paddingBottom:1,width:"calc(100% - 30px)","& a":{textDecoration:"none"}},"& .PostOptions":{top:0,right:0,padding:"8px 2px",position:"absolute"}}},M=function(e){var t=e._id,n=e.commentId,r=e.users,i=e.createdBy,c=e.createdAt,l=e.reported,u=e.archived,s=r[i]||{},p=s.avatar,f=s.firstName,d=s.lastName,m=s.username;return o.a.createElement("div",{className:Object(a.css)(F)},o.a.createElement(S.a,{avatar:p,style:{height:50,width:50,borderRadius:50}}),o.a.createElement("div",{className:"text"},o.a.createElement("p",{className:"name"},o.a.createElement(b.a,{href:"/user?id="+i},o.a.createElement("a",null,f," ",d," - @",m))),o.a.createElement("p",null,Object(B.a)(c)),o.a.createElement(R,{_id:t,commentId:n,reported:l,archived:u,createdBy:i,users:r})))},L={paddingTop:5,width:"98%",margin:"0 0 0 2%",position:"relative",background:"#ffffff",borderTop:"1px solid ".concat(f.colors.blackFg)},W=function(e){var t=e._id,n=e.text,r=e.users,i=e.editing,c=e.archived,l=e.reported,u=e.commentId,s=e.createdAt,p=e.createdBy;return o.a.createElement("div",{className:Object(a.css)(L)},o.a.createElement(M,{_id:t,commentId:u,users:r,createdAt:s,createdBy:p,reported:l,archived:c}),o.a.createElement(k,{_id:t,commentId:u,editing:i,text:n}))};function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}({width:"100%"},f.shadows.box,{margin:"10px 0 0",borderRadius:3},f.flexRowCenter,{background:"#ffffff","& textarea":{height:24,outline:0,padding:"3px 8px",flexGrow:1,fontSize:16,lineHeight:1,border:"none",marginRight:2},"& button":{margin:3}}),H=function(e){var t=e._id;return o.a.createElement("div",{className:Object(a.css)(U)},o.a.createElement("textarea",{id:"reply"+t,maxLength:u.maxCmntText,placeholder:"Reply to the post..."}),o.a.createElement("button",{onClick:function(){return function(e){var t=document.querySelector("#reply"+e);if(t){var n=t.value.trim();n.length&&(t.value="",Object(c._32)({postId:e,text:n}).catch(function(){Object(c._88)({title:"Error...",message:"An error occurred while submitting your reply",button1Txt:"OK",button2Txt:null})}))}}(t)}},"Submit"))};function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?V(e):t}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Y(e,t,n[t])})}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={"& .loadOlders":X({marginBottom:5,padding:"2px 0",fontWeight:700},f.flexRowCenter,{cursor:"pointer",textAlign:"right",userSelect:"none"}),"& .error":{padding:"10px 0",textAlign:"center"}},Z=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return q(r,(n=r=q(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(V(r),"loadMoreComments",{configurable:!0,enumerable:!0,writable:!0,value:function(){return Object(c._47)({postId:r.props._id})}}),n))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(i=[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t._id,r=t.commentIds,o=t.commentsError,a=t.commentsPending,i=t.moreComments;e.commentIds.length&&(r.length||a||o||!i||Object(c._47)({initial:!0,postId:n}))}},{key:"render",value:function(){var e=this.props,t=e._id,n=e.users,r=e.canReply,i=e.comments,c=e.commentIds,u=e.moreComments,s=e.commentsError,p=e.commentsPending;return o.a.createElement("div",{className:Object(a.css)(Q),style:{marginTop:u?0:10}},u?o.a.createElement("div",{className:"loadOlders",onClick:p?null:this.loadMoreComments},o.a.createElement("p",{style:{marginLeft:"auto"}},"Load older comments"),p?o.a.createElement(l.a,{size:16,style:{margin:"0 5px"}}):o.a.createElement(g.a,{icon:"chevron-up",style:{height:16,margin:"0 0 -2px 5px"}})):null,c.map(function(e,r){return o.a.createElement(W,J({},X({_id:t,users:n,commentId:e},i[e],{style:0===r?{borderColor:"transparent"}:null}),{key:e}))}),s?o.a.createElement("p",{className:"error"},s):null,r&&o.a.createElement(H,{_id:t}))}}])&&K(n.prototype,i),u&&K(n,u),t}();function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee={opacity:0,width:"100%",textAlign:"left",transform:"scale(0)",margin:"0px auto 35px",maxWidth:f.sizes.maxBlockWidth,animation:"".concat(d.f," 225ms ease forwards"),":nth-child(1)":{marginTop:0},"& .page":{minHeight:16,fontWeight:700,padding:"5px 0","& a":{textDecoration:"underline"}},"& .box":{minHeight:75,borderRadius:4,background:"#ffffff",boxShadow:"3px 3px 6px rgba(0, 0, 0, 0.25)"},"& .totalComments":{width:"100%",padding:"0px 5px 5px","& span":{fontWeight:700,cursor:"pointer"}}},te=function(e){var t=e._id,n=e.text,r=e.file,a=e.page,i=e.users,l=e.pages,s=e.style,p=e.editing,f=e.reported,d=e.archived,m=e.createdAt,g=e.createdBy,y=e.className,h=e.commentIds,v=e.totalComments,O=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["_id","text","file","page","users","pages","style","editing","reported","archived","createdAt","createdBy","className","commentIds","totalComments"]);return o.a.createElement("div",{className:y,style:s},o.a.createElement("p",{className:"page"},l.curPage!==a?o.a.createElement(b.a,{href:a===u.newsPageId?"/news":"/page?id="+a},o.a.createElement("a",null,"Posted to ",l[a].name)):l.curPage===u.homePageId&&"Posted to Home"),o.a.createElement("div",{className:"box"},o.a.createElement(M,{users:i,_id:t,createdBy:g,createdAt:m,reported:f,archived:d}),r&&o.a.createElement(x,{file:r,_id:t}),o.a.createElement(k,{_id:t,editing:p,text:n}),o.a.createElement("div",{className:"totalComments"},o.a.createElement("p",null,v," comment",1!==v?"s":"",h&&h.length>c._59&&[" - ",o.a.createElement("span",{key:"collapse",onClick:function(){return Object(c._23)(t)}},"Collapse comments")]))),o.a.createElement(Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){$(e,t,n[t])})}return e}({_id:t,users:i,canReply:!d,totalComments:v,commentIds:h},O)))};function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ce={width:"100%",textAlign:"center",padding:10,paddingBottom:25,"& .moreBtn":{margin:"10px auto"}},le=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this))||"object"!==ne(r)&&"function"!=typeof r?ie(n):r,Object.defineProperty(ie(e),"loadMorePosts",{configurable:!0,enumerable:!0,writable:!0,value:function(){return Object(c._51)({})}}),e.state={numAdded:0,numPrev:0},e.className=Object(a.css)(ce),e.postClass=Object(a.css)(ee),e}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,u=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.numPrev,r=e.posts.ids.length;return r!==n?{numPrev:r,numAdded:r>n?r-n:0}:null}}],(i=[{key:"componentDidUpdate",value:function(e){var t=this.props.posts;e.posts.ids.length&&(t.ids.length||t.pending||t.error||!t.hasMore||this.loadMorePosts())}},{key:"render",value:function(){var e=this,t=this.props,n=t.page,r=t.pages,a=t.posts,i=t.users,c=this.state.numAdded,u=a.ids.length-c;return n!==r.curPage?null:o.a.createElement("div",{className:this.className},o.a.createElement(p,{posts:a}),a.ids.map(function(t,n){return c&&(n=n>u?n-u:0),o.a.createElement(te,re({},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){oe(e,t,n[t])})}return e}({},a[t],{_id:t,pages:r,users:i,className:e.postClass,style:{animationDelay:50*n+"ms"}}),{key:t}))}),!a.ids.length&&!a.pending&&!a.error&&o.a.createElement("p",null,"There are no posts here yet"),a.error&&o.a.createElement("p",{style:{marginTop:20}},a.error),a.pending&&o.a.createElement(l.a,{style:{marginTop:20},size:a.ids.length?24:36}),a.hasMore&&!a.pending&&o.a.createElement("button",{className:"moreBtn",onClick:this.loadMorePosts},"Load more"))}}])&&ae(n.prototype,i),u&&ae(n,u),t}();t.a=Object(i.b)(function(e){return{pages:e.pages,posts:e.posts,users:e.users}})(le)},499:function(e,t,n){e.exports=n(500)},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n.n(r),a=n(0),i=n.n(a),c=n(18),l=n(81),u=n(33),s=n(4),p=(n.n(s),n(1)),f=n(37);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,f,d,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return i.a.createElement(c.a,{restrict:!0},i.a.createElement(l.a,null),i.a.createElement(u.a,{page:s.homePageId}))}}],f=[{key:"getInitialProps",value:(d=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p._89)(s.homePageId);case 2:return e.next=4,Object(p._51)({initial:!0});case 4:case"end":return e.stop()}},e,this)}),g=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=d.apply(e,t);function a(e,t){try{var a=o[e](t),l=a.value}catch(e){return void r(e)}a.done?n(l):Promise.resolve(l).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(){return g.apply(this,arguments)})}],r&&m(n.prototype,r),f&&m(n,f),t}();t.default=Object(f.a)(g)},81:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(6),i=n(2),c=(n.n(i),n(3)),l=n(7),u=n(1),s=n(4),p=(n.n(s),n(25));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={width:"100%",textAlign:"center",padding:"30px 10px 10px","& .error":{padding:"0 0 15px"},"& .box":g({width:"100%"},c.shadows.box,{margin:"auto",borderRadius:3},c.flexRowCenter,{background:"#ffffff",maxWidth:c.sizes.maxBlockWidth}),"& .preview":{width:"100%",textAlign:"left",padding:"0 10px","& img":{maxHeight:125,maxWidth:"50%"}},"& textarea":{outline:0,height:36,flexGrow:1,border:"none",overflow:"hidden",background:"none",padding:"10px 8px",transition:"height 150ms ease-in-out","::placeholder":{opacity:1}},"& input":{display:"none"},"& .buttons":g({},c.flexRowCenter,{"& button":{margin:"5px 4px 5px auto",":nth-child(1)":{display:"none",marginLeft:4},"&:disabled":{"&:hover, &:active":g({},c.shadows.box)}}}),"& .box.expanded":{flexWrap:"wrap","& textarea":{height:72,width:"100%",overflow:"auto"},"& .buttons":{width:"100%","& p":{marginLeft:5,"& span":{fontWeight:700},"& svg":{marginLeft:5,cursor:"pointer"}},"& button":{":nth-child(1)":{display:"block"}}}}},v=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return m(r,(n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{text:"",file:null,hasImg:!1,preview:null,pending:!1,expanded:!1}}),Object.defineProperty(b(r),"handleText",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.setState({text:e.target.value})}}),Object.defineProperty(b(r),"handleFile",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.files,n=t.length?t[0]:null;r.doFileCheck(n)}}),Object.defineProperty(b(r),"doFileCheck",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(r.setState({file:null,preview:null}),e){var t=Object(p.a)({file:e,previewCb:r.previewCb});if(t.error)return r.fileEl.value=null,Object(u._88)({title:"Error...",button1Txt:"OK",button2Txt:null,message:t.error})}r.setState({file:e})}}),Object.defineProperty(b(r),"previewCb",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({preview:e})}}),Object.defineProperty(b(r),"expand",{configurable:!0,enumerable:!0,writable:!0,value:function(){clearTimeout(r.timeout),r.timeout=null,r.setState({expanded:!0})}}),Object.defineProperty(b(r),"stopShrink",{configurable:!0,enumerable:!0,writable:!0,value:function(e){"BUTTON"===e.target.tagName&&(r.timeout=setTimeout(function(){return r.timeout=null},50))}}),Object.defineProperty(b(r),"shrink",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.state,t=e.file,n=e.text;if(t||n||r.timeout)return clearTimeout(r.timeout),void(r.timeout=null);r.setState({expanded:!1})}}),Object.defineProperty(b(r),"addFile",{configurable:!0,enumerable:!0,writable:!0,value:function(){return r.fileEl.click()}}),Object.defineProperty(b(r),"removeFile",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.fileEl.value=null,r.setState({file:null,preview:null}),setTimeout(function(){return r.shrink()},1)}}),Object.defineProperty(b(r),"submit",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.state,t=e.text,n=e.file;Object(u._37)({text:t,file:n})}}),Object.defineProperty(b(r),"handleDragOver",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.expand(),e.preventDefault(),clearTimeout(r.timeout),r.timeout=null}}),Object.defineProperty(b(r),"handleDragLeave",{configurable:!0,enumerable:!0,writable:!0,value:function(){clearTimeout(r.timeout),r.timeout=setTimeout(function(){r.timeout=null,r.shrink()},100)}}),Object.defineProperty(b(r),"handleDrop",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.dataTransfer.files;t.length&&(r.doFileCheck(t[0]),e.preventDefault())}}),n))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,c=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.post,r=n.pending,o=n.error;return!t.pending||r||o?t.pending!==r?{pending:r}:null:{text:"",file:null,preview:null,expanded:!1,pending:r}}}],(a=[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.users,a=n.post,c=this.state,u=c.expanded,p=c.file,f=c.text,d=c.preview;return p&&(e=p.name).length>16&&(e=e.substr(0,13)+"..."),o.a.createElement("div",{className:Object(i.css)(h)},a.error&&o.a.createElement("p",{className:"error"},a.error),r[r.curUser].restricts.posting?o.a.createElement("p",null,"Posting is disabled for your account"):o.a.createElement("div",{onDrop:t.handleDrop,onMouseDown:t.stopShrink,onDragOver:t.handleDragOver,onDragLeave:t.handleDragLeave,className:"box"+(u?" expanded":"")},o.a.createElement("textarea",{value:f,id:"PostBox",maxLength:s.maxPostText,placeholder:"What would you like to post?",onBlur:t.shrink,onFocus:t.expand,onChange:t.handleText}),o.a.createElement("input",{type:"file",onChange:t.handleFile,ref:function(e){return t.fileEl=e}}),d&&o.a.createElement("div",{className:"preview"},o.a.createElement("img",{src:d,alt:"attachment preview"})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:t.addFile,title:"Drag and drop or click to attach file"},"Attach file"),e&&o.a.createElement("p",null,o.a.createElement("span",null,"File: "),e,o.a.createElement(l.a,{icon:"trash",style:{height:16},onClick:t.removeFile})),a.pending?o.a.createElement("button",{disabled:!0},a.progress+"%"):o.a.createElement("button",{onClick:t.submit},"Submit"))))}}])&&d(n.prototype,a),c&&d(n,c),t}();t.a=Object(a.b)(function(e){return{users:e.users,post:e.post}})(v)}},[499]).default}});