module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([15],{501:function(e,t,r){e.exports=r(502)},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n),a=r(2),i=r(6),l=r(3),c=r(18),s=r(7),u=r(15);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=350,v=3250,w=Object(a.css)(h({},l.flexRowCenter,{margin:"auto",maxWidth:500,userSelect:"none",position:"relative","& .wrapSlide":h({},l.flexRowCenter,{width:"100%","& .adv, & .prev":{width:35,textAlign:"center","& svg":h({},l.noTapHighlight,{cursor:"pointer",padding:3,":hover":{opacity:.8},":active":{opacity:.6}})},"& .slide":{width:"100%"},"& .slide .wrap":{width:"100%",textAlign:"center",position:"relative",animation:"".concat(u.d," ").concat(g,"ms ease-in-out forwards"),"&.doFade":{animation:"".concat(u.e," ").concat(g,"ms ease-in-out forwards")},"& img":{maxWidth:"95%",boxShadow:"3px 3px 9px rgba(0, 0, 0, 0.35)"},"& div":{position:"absolute",bottom:0,width:"100%",minHeight:20,padding:6,color:"#ffffff",textAlign:"left",borderRadius:2,background:"rgba(0, 0, 0, 0.7)",boxShadow:"1px 3px 9px rgba(0, 0, 0, 0.35)"}}}),"& .wrapProg":{position:"absolute",bottom:0,width:"100%",display:"flex",flexDirection:"row",margin:"4px 0 0","& .dots":{display:"inline-flex",margin:"6px auto","& div":{width:36,height:6,margin:"0 3px",borderRadius:3,background:"#ffffff",opacity:.65,cursor:"pointer",transition:"opacity ".concat(g,"ms ease-in-out"),boxShadow:"2px 3px 6px rgba(0, 0, 0, 0.25)",":hover":{opacity:.8},"&.active":{opacity:1}}},"& .progress":{position:"absolute",top:2,right:40,height:12,width:12,borderRadius:"50%",opacity:1,"& .clip":{width:"50%",height:"100%",position:"absolute",right:0,overflow:"hidden",transformOrigin:"left center"},"& .half":{height:"100%",position:"absolute",right:0,border:"solid 2px transparent",borderTopColor:"#ffffff",borderLeftColor:"#ffffff",borderRadius:"50%"},"& .right":{width:"200%",transform:"rotate(-45deg)"},"& .left":{width:"100%",transform:"rotate(135deg)",opacity:0},"&.active":{"& .clip":{transform:"rotate(180deg)",animation:"".concat(u.g," ").concat(v,"ms 1")},"& .right":{transform:"rotate(135deg)",animation:"".concat(u.h," ").concat(v/2,"ms linear 2")},"& .left":{opacity:1,animation:"".concat(u.i," ").concat(v,"ms 1")}}}}})),O=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return m(n,(r=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{active:0,doFade:!1,progClass:null}}),Object.defineProperty(b(n),"swapSlide",{configurable:!0,enumerable:!0,writable:!0,value:function(e){clearTimeout(n.slideTime),n.setState({doFade:!0,progClass:""}),n.slideTime=setTimeout(function(){n.setState({active:e}),n.slideTime=setTimeout(function(){n.setState({doFade:!1,progClass:"active"}),n.startNextTime()},50)},g)}}),Object.defineProperty(b(n),"toggle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e;"boolean"!=typeof e&&(t=e.currentTarget.parentElement.classList.contains("adv"));var r,o=n.state.active,a=n.props.slides;r=t?o<a.length-1?o+1:0:o>0?o-1:a.length-1,n.swapSlide(r)}}),Object.defineProperty(b(n),"dotClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target,r=n.state.active,o=parseInt(t.getAttribute("id"),10);r!==o&&n.swapSlide(o)}}),Object.defineProperty(b(n),"startNextTime",{configurable:!0,enumerable:!0,writable:!0,value:function(){clearTimeout(n.nextSlideTime),n.nextSlideTime=setTimeout(function(){n.toggle(!0)},v)}}),r))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){this.setState({progClass:"active"}),this.startNextTime()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.slideTime),clearTimeout(this.nextSlideTime)}},{key:"render",value:function(){var e=this,t=this.state,r=t.active,n=t.doFade,a=t.progClass,i=this.props,l=i.slides,c=i.maxWidth,u=i.height,f={preserveAspectRatio:"none",onClick:this.toggle,style:{width:25,height:90}};return o.a.createElement("div",{className:w,style:{maxWidth:c,height:u}},o.a.createElement("div",{className:"wrapSlide"},o.a.createElement("div",{className:"prev"},o.a.createElement(s.a,p({icon:"chevron-left"},f))),o.a.createElement("div",{className:"slide"},o.a.createElement("div",{className:"wrap"+(n?" doFade":"")},o.a.createElement("img",{src:l[r].src,alt:l[r].alt,style:{maxHeight:u-50}}),l[r].alt&&l[r].alt.length>0?o.a.createElement("div",null,l[r].alt):null)),o.a.createElement("div",{className:"adv"},o.a.createElement(s.a,p({icon:"chevron-right"},f)))),o.a.createElement("div",{className:"wrapProg"},o.a.createElement("div",{className:"dots"},l.map(function(t,a){return o.a.createElement("div",{key:a,id:a,onClick:e.dotClick,className:r!==a||n?null:"active"})})),o.a.createElement("div",{className:"progress "+a},o.a.createElement("div",{className:"clip"},o.a.createElement("div",{className:"half right"})),o.a.createElement("div",{className:"half left"}))))}}])&&d(r.prototype,a),i&&d(r,i),t}();function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){j(e,t,r[t])})}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=Object(a.css)(S({height:40,width:"90%",maxWidth:250,margin:"auto",borderRadius:25},l.shadows.insetBox,{position:"relative",background:l.colors.blueMix,"& .slider":S({position:"absolute",top:5,zIndex:0,height:30,width:"50%"},l.shadows.box,{borderRadius:15,background:l.colors.dullWhite,transition:"left 275ms ease-in-out","&.left":{left:5},"&.right":{left:"calc(50% - 5px)"}}),"& div":S({},l.flexRowCenter,{position:"relative",display:"inline-flex",justifyContent:"center"},l.shadows.text,l.noTapHighlight,{color:"#ffffff",width:"50%",height:"100%",zIndex:1,fontSize:18,"& span":{cursor:"pointer",userSelect:"none",transition:"padding 225ms ease, color 125ms 100ms ease-out"},":nth-child(2).active span":{paddingLeft:5},":nth-child(3).active span":{paddingRight:5},"&.active span":{color:l.colors.blackFg}})})),P=function(e){var t=e.activeOption,r=e.maxWidth,n=e.options,a=e.onToggle;return o.a.createElement("div",{className:x,style:{maxWidth:r}},o.a.createElement("div",{className:"slider "+(t?"right":"left")}),n.map(function(e,r){return o.a.createElement("div",{key:e,onClick:a,className:r===t?"active":null},o.a.createElement("span",null,e))}))},E=r(24),k=r.n(E),_=r(1),C=r(145),T=r(146),N=r(11);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L={firstName:{label:"First name",icon:"user",required:!0},lastName:{label:"Last name",icon:"user",required:!0},username:{label:"Username",icon:"id-card"},email:{label:"Email",icon:"envelope",required:!0},password:{label:"Password",required:!0,type:"password"},confPassword:{label:"Confirm password",required:!0,type:"password"}},A=["firstName","lastName","username","email","password","confPassword"],H=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this),e=!n||"object"!==W(n)&&"function"!=typeof n?q(r):n,Object.defineProperty(q(e),"toggleShowPass",{configurable:!0,enumerable:!0,writable:!0,value:function(){e.setState({showPass:!e.state.showPass})}}),Object.defineProperty(q(e),"handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(t){e.setState(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t.target.id,t.target.value))}}),Object.defineProperty(q(e),"submit",{configurable:!0,enumerable:!0,writable:!0,value:function(t){t.preventDefault();var r,n={role:"admin"},o=function(t){return e.setState({createError:t,createPending:!1})};return A.some(function(t){var o=L[t],a=e.state[t].trim();if(!a.length&&o.required)return r=o.label,!0;n[t]=a})?o("".concat(r," is required")):n.password!==n.confPassword?o("Passwords don't match"):(delete n.confPassword,e.setState({createPending:!0,createError:null}),void Object(_._40)(n).then(function(){return Object(_._55)({email:n.email,password:n.password})}).then(function(){return k.a.push("/home")}).catch(function(e){return o(Object(N.a)(e))}))}});var o={pending:!1,showPass:!1,createError:null,createPending:!1};return A.forEach(function(e){return o[e]=""}),e.state=o,e}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.props,r=t.maxWidth,n=t.className,a=t.users,i=this.state,l=i.showPass,c=i.createError,s=i.createPending;return o.a.createElement(C.a,R({submit:this.submit,head:o.a.createElement("h4",null,"Setup account")},{maxWidth:r,className:n,error:c||a.error,pending:s||a.pending}),A.map(function(t){var r=L[t],n=r.label,a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["label"]);return"password"===a.type&&(a.icon="lock",a.type=l?"text":"password",a.extraIcon=l?"eye-slash":"eye",a.extraIconProps={onClick:e.toggleShowPass}),o.a.createElement(T.a,R({},a,{key:t,name:t,placeholder:n,value:e.state[t],type:a.type||"text",onChange:e.handleChange}))}))}}])&&F(r.prototype,a),i&&F(r,i),t}(),D=Object(i.b)(function(e){return{users:e.users}})(H),I=r(230),M=r(4);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var B={name:{icon:"user",required:!0,maxLength:128,label:"Your name"},email:{type:"email",required:!0,icon:"envelope",label:"Your email"},confEmail:{type:"email",required:!0,icon:"envelope",label:"Confirm email"},msg:{required:!0,type:"textarea",label:"Your message",maxLength:M.maxContactMsg}},J=["name","email","confEmail","msg"],K=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this),e=!n||"object"!==z(n)&&"function"!=typeof n?Y(r):n,Object.defineProperty(Y(e),"handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(t){e.setState(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t.target.id,t.target.value))}}),Object.defineProperty(Y(e),"submit",{configurable:!0,enumerable:!0,writable:!0,value:function(t){if(t.preventDefault(),!e.state.pending){var r,n=function(t){return e.setState({error:t,pending:!1})},o={};if(J.some(function(t){var n=B[t],a=e.state[t].trim();if(!a.length&&n.required)return r=n.label,!0;o[t]=a}))return n("".concat(r," is required"));if(o.email.toLowerCase()!==o.confEmail.toLowerCase())return n("Emails don't match");delete o.confEmail,e.setState({pending:!0,error:null}),Object(_._33)(o).then(function(){var t={pending:!1,error:"Message sent successfully"};J.forEach(function(e){return t[e]=""}),e.setState(t)}).catch(function(e){return n(Object(N.a)(e))})}}});var o={error:null,pending:!1};return J.forEach(function(e){return o[e]=""}),e.state=o,e}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.state,r=t.pending,n=t.error,a=this.props,i=a.maxWidth,l=a.className;return o.a.createElement(C.a,G({submit:this.submit},{error:n,pending:r,maxWidth:i,className:l}),J.map(function(t){var r=B[t],n=r.label,a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["label"]);return o.a.createElement(T.a,G({},a,{key:t,name:t,placeholder:n,value:e.state[t],type:a.type||"text",onChange:e.handleChange}))}))}}])&&U(r.prototype,a),i&&U(r,i),t}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=[{src:"0.jpg",alt:"KC Chalk Walk"},{src:"1.jpg",alt:"Nerman Museum of Art Field Trip"},{src:"2.jpg",alt:"Senior Graduation 2017"},{src:"3.jpg",alt:"LVS Staff 2016-17"}].map(function(e){return{alt:e.alt,src:"/slideshow/"+e.src}}),re=Object(a.css)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){ee(e,t,r[t])})}return e}({},l.flexRowCenter,ee({"& .wrapSlideshow, & .wrapForm":{width:"50%",padding:"20px 0"}},l.media.lessThan(850),{"& .wrapSlideshow":{display:"none"},"& .wrapForm":{width:"100%"}}))),ne=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return Z(n,(r=n=Z(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty($(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{curForm:0,curOption:0,initial:!0,showSlideshow:!0,formShouldHide:!1}}),Object.defineProperty($(n),"checkSlideshow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.state.showSlideshow;window.innerWidth<=850&&e?n.setState({showSlideshow:!1}):window.innerWidth>850&&!e&&n.setState({showSlideshow:!0})}}),Object.defineProperty($(n),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.state.curOption?0:1;n.setState({formShouldHide:!0,curOption:e,initial:!1}),n.timeout=setTimeout(function(){n.setState({formShouldHide:!1,curForm:e})},325)}}),r))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){this.checkSlideshow(),window.addEventListener("resize",this.checkSlideshow)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),window.removeEventListener("resize",this.checkSlideshow)}},{key:"render",value:function(){var e=this.props.users.doSetup,t=this.state,r=t.curForm,n=t.curOption,a=t.formShouldHide,i=t.initial,l=t.showSlideshow,s="";i||(s=a?"hide":"show");return o.a.createElement(c.a,{className:re,gradient:!0,basicHeader:!0,noNav:!0},l?o.a.createElement("div",{className:"wrapSlideshow"},o.a.createElement(O,X({slides:te},{height:300}))):null,o.a.createElement("div",{className:"wrapForm"},e?o.a.createElement(D,{maxWidth:350}):[o.a.createElement(P,{options:["Sign in","Contact"],activeOption:n,onToggle:this.handleToggle,maxWidth:350,key:"1"}),0===r?o.a.createElement(I.a,{key:"2",maxWidth:350,className:s+"Left",redirect:!0}):o.a.createElement(K,{key:"3",maxWidth:350,className:s+"Right"})]))}}])&&Q(r.prototype,a),i&&Q(r,i),t}();t.default=Object(i.b)(function(e){return{users:e.users}})(ne)}},[501]).default}});