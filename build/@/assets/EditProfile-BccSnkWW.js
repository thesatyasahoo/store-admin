import{a as te,g as V,l as I,P as h,j as p,f as re,r as ne,A as oe,d as ae}from"./index-BJRbsysg.js";import{u as ie}from"./useStaffSubmit-DQfGDIHH.js";import{o as se}from"./index-DXSX7I4O.js";import{L as R}from"./LabelArea-3zJgFG0m.js";import{U as ce}from"./Uploader-B4-MPFrp.js";import{I as F}from"./InputArea-CfxbsaSI.js";import{E as _}from"./index.esm-BFk4rQOr.js";import{S as le}from"./SelectRole-D4mLgYte.js";import{A as ue}from"./AnimatedContent-nRTg36fH.js";import"./Layout-BSBHbhJp.js";import"./iconBase-HNZc9kFU.js";import"./useDispatch-BNdujVA7.js";import"./httpService-DFqb7dq4.js";import"./AdminServices-C5eZ9Von.js";import"./toast-DYbhU_bb.js";import"./tslib.es6-BgFQhbLt.js";import"./useAsync-D4eYhAN1.js";import"./index-BTxcj5iU.js";function fe(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var W=te(),de=fe(W);function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var me=!!(typeof window<"u"&&window.document&&window.document.createElement);function Te(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var l=[],i;function s(){i=t(l.map(function(u){return u.props})),c.canUseDOM?e(i):n&&(i=n(i))}var c=function(u){pe(d,u);function d(){return u.apply(this,arguments)||this}d.peek=function(){return i},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var E=i;return i=void 0,l=[],E};var m=d.prototype;return m.UNSAFE_componentWillMount=function(){l.push(this),s()},m.componentDidUpdate=function(){s()},m.componentWillUnmount=function(){var E=l.indexOf(this);l.splice(E,1),s()},m.render=function(){return de.createElement(a,this.props)},d}(W.PureComponent);return $(c,"displayName","SideEffect("+r(a)+")"),$(c,"canUseDOM",me),c}}var he=Te;const ve=V(he);var ge=typeof Element<"u",Ee=typeof Map=="function",ye=typeof Set=="function",Ae=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function M(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!M(t[r],e[r]))return!1;return!0}var a;if(Ee&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!M(r.value[1],e.get(r.value[0])))return!1;return!0}if(ye&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ae&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(ge&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!M(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var be=function(e,n){try{return M(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Se=V(be);var P={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(t){return f[t]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Ce=Object.keys(H).reduce(function(t,e){return t[H[e]]=e,t},{}),Pe=[f.NOSCRIPT,f.SCRIPT,f.STYLE],y="data-react-helmet",Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},we=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Re=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},G=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},je=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},k=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ne=function(e){var n=x(e,f.TITLE),r=x(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=x(e,L.DEFAULT_TITLE);return n||o||void 0},Ie=function(e){return x(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},D=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return g({},r,o)},{})},Le=function(e,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),l=0;l<a.length;l++){var i=a[l],s=i.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},j=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Fe("Helmet: "+e+' should be of type "Array". Instead found type "'+Oe(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,l){var i={};l.filter(function(m){for(var T=void 0,E=Object.keys(m),A=0;A<E.length;A++){var b=E[A],S=b.toLowerCase();n.indexOf(S)!==-1&&!(T===v.REL&&m[T].toLowerCase()==="canonical")&&!(S===v.REL&&m[S].toLowerCase()==="stylesheet")&&(T=S),n.indexOf(b)!==-1&&(b===v.INNER_HTML||b===v.CSS_TEXT||b===v.ITEM_PROP)&&(T=b)}if(!T||!m[T])return!1;var w=m[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(m){return a.push(m)});for(var s=Object.keys(i),c=0;c<s.length;c++){var u=s[c],d=se({},o[u],i[u]);o[u]=d}return a},[]).reverse()},x=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},_e=function(e){return{baseTag:Le([v.HREF,v.TARGET],e),bodyAttributes:D(P.BODY,e),defer:x(e,L.DEFER),encode:x(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:D(P.HTML,e),linkTags:j(f.LINK,[v.REL,v.HREF],e),metaTags:j(f.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:j(f.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:Ie(e),scriptTags:j(f.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:j(f.STYLE,[v.CSS_TEXT],e),title:Ne(e),titleAttributes:D(P.TITLE,e)}},U=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){U(e)},0)}}(),z=function(e){return clearTimeout(e)},Me=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||U:global.requestAnimationFrame||U,He=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||z:global.cancelAnimationFrame||z,Fe=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,De=function(e){N&&He(N),e.defer?N=Me(function(){X(e,function(){N=null})}):(X(e),N=null)},X=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,m=e.title,T=e.titleAttributes;B(f.BODY,o),B(f.HTML,a),ke(m,T);var E={baseTag:O(f.BASE,r),linkTags:O(f.LINK,l),metaTags:O(f.META,i),noscriptTags:O(f.NOSCRIPT,s),scriptTags:O(f.SCRIPT,u),styleTags:O(f.STYLE,d)},A={},b={};Object.keys(E).forEach(function(S){var w=E[S],Y=w.newTags,ee=w.oldTags;Y.length&&(A[S]=Y),ee.length&&(b[S]=E[S].oldTags)}),n&&n(),c(e,A,b)},Q=function(e){return Array.isArray(e)?e.join(""):e},ke=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Q(e)),B(f.TITLE,n)},B=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(y),a=o?o.split(","):[],l=[].concat(a),i=Object.keys(n),s=0;s<i.length;s++){var c=i[s],u=n[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),a.indexOf(c)===-1&&a.push(c);var d=l.indexOf(c);d!==-1&&l.splice(d,1)}for(var m=l.length-1;m>=0;m--)r.removeAttribute(l[m]);a.length===l.length?r.removeAttribute(y):r.getAttribute(y)!==i.join(",")&&r.setAttribute(y,i.join(","))}},O=function(e,n){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+y+"]"),a=Array.prototype.slice.call(o),l=[],i=void 0;return n&&n.length&&n.forEach(function(s){var c=document.createElement(e);for(var u in s)if(s.hasOwnProperty(u))if(u===v.INNER_HTML)c.innerHTML=s.innerHTML;else if(u===v.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText));else{var d=typeof s[u]>"u"?"":s[u];c.setAttribute(u,d)}c.setAttribute(y,"true"),a.some(function(m,T){return i=T,c.isEqualNode(m)})?a.splice(i,1):l.push(c)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),l.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:l}},J=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},Ue=function(e,n,r,o){var a=J(r),l=Q(n);return a?"<"+e+" "+y+'="true" '+a+">"+k(l,o)+"</"+e+">":"<"+e+" "+y+'="true">'+k(l,o)+"</"+e+">"},Be=function(e,n,r){return n.reduce(function(o,a){var l=Object.keys(a).filter(function(c){return!(c===v.INNER_HTML||c===v.CSS_TEXT)}).reduce(function(c,u){var d=typeof a[u]>"u"?u:u+'="'+k(a[u],r)+'"';return c?c+" "+d:d},""),i=a.innerHTML||a.cssText||"",s=Pe.indexOf(e)===-1;return o+"<"+e+" "+y+'="true" '+l+(s?"/>":">"+i+"</"+e+">")},"")},Z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[H[o]||o]=e[o],r},n)},qe=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[Ce[o]||o]=e[o],r},n)},Ye=function(e,n,r){var o,a=(o={key:n},o[y]=!0,o),l=Z(r,a);return[I.createElement(f.TITLE,l,n)]},$e=function(e,n){return n.map(function(r,o){var a,l=(a={key:o},a[y]=!0,a);return Object.keys(r).forEach(function(i){var s=H[i]||i;if(s===v.INNER_HTML||s===v.CSS_TEXT){var c=r.innerHTML||r.cssText;l.dangerouslySetInnerHTML={__html:c}}else l[s]=r[i]}),I.createElement(e,l)})},C=function(e,n,r){switch(e){case f.TITLE:return{toComponent:function(){return Ye(e,n.title,n.titleAttributes)},toString:function(){return Ue(e,n.title,n.titleAttributes,r)}};case P.BODY:case P.HTML:return{toComponent:function(){return Z(n)},toString:function(){return J(n)}};default:return{toComponent:function(){return $e(e,n)},toString:function(){return Be(e,n,r)}}}},K=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,m=d===void 0?"":d,T=e.titleAttributes;return{base:C(f.BASE,n,o),bodyAttributes:C(P.BODY,r,o),htmlAttributes:C(P.HTML,a,o),link:C(f.LINK,l,o),meta:C(f.META,i,o),noscript:C(f.NOSCRIPT,s,o),script:C(f.SCRIPT,c,o),style:C(f.STYLE,u,o),title:C(f.TITLE,{title:m,titleAttributes:T},o)}},Ge=function(e){var n,r;return r=n=function(o){Re(a,o);function a(){return xe(this,a),je(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!Se(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,s){if(!s)return null;switch(i.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var s,c=i.child,u=i.arrayTypeChildren,d=i.newChildProps,m=i.nestedChildren;return g({},u,(s={},s[c.type]=[].concat(u[c.type]||[],[g({},d,this.mapNestedChildrenToProps(c,m))]),s))},a.prototype.mapObjectTypeChildren=function(i){var s,c,u=i.child,d=i.newProps,m=i.newChildProps,T=i.nestedChildren;switch(u.type){case f.TITLE:return g({},d,(s={},s[u.type]=T,s.titleAttributes=g({},m),s));case f.BODY:return g({},d,{bodyAttributes:g({},m)});case f.HTML:return g({},d,{htmlAttributes:g({},m)})}return g({},d,(c={},c[u.type]=g({},m),c))},a.prototype.mapArrayTypeChildrenToProps=function(i,s){var c=g({},s);return Object.keys(i).forEach(function(u){var d;c=g({},c,(d={},d[u]=i[u],d))}),c},a.prototype.warnOnInvalidChildren=function(i,s){return!0},a.prototype.mapChildrenToProps=function(i,s){var c=this,u={};return I.Children.forEach(i,function(d){if(!(!d||!d.props)){var m=d.props,T=m.children,E=G(m,["children"]),A=qe(E);switch(c.warnOnInvalidChildren(d,T),d.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:u=c.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:A,nestedChildren:T});break;default:s=c.mapObjectTypeChildren({child:d,newProps:s,newChildProps:A,nestedChildren:T});break}}}),s=this.mapArrayTypeChildrenToProps(u,s),s},a.prototype.render=function(){var i=this.props,s=i.children,c=G(i,["children"]),u=g({},c);return s&&(u=this.mapChildrenToProps(s,u)),I.createElement(e,u)},we(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(I.Component),n.propTypes={base:h.object,bodyAttributes:h.object,children:h.oneOfType([h.arrayOf(h.node),h.node]),defaultTitle:h.string,defer:h.bool,encodeSpecialCharacters:h.bool,htmlAttributes:h.object,link:h.arrayOf(h.object),meta:h.arrayOf(h.object),noscript:h.arrayOf(h.object),onChangeClientState:h.func,script:h.arrayOf(h.object),style:h.arrayOf(h.object),title:h.string,titleAttributes:h.object,titleTemplate:h.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},ze=function(){return null},Xe=ve(_e,De,K)(ze),q=Ge(Xe);q.renderStatic=q.rewind;const Ve=({title:t,description:e})=>p.jsxs(q,{children:[p.jsxs("title",{children:[" ",t?`${t} | React eCommerce Admin Dashboard`:"Kachabazar | React eCommerce Admin Dashboard"]}),p.jsx("meta",{name:"description",content:e?` ${e} `:"Kachabazar : React Grocery & Organic Food Store e-commerce Admin Dashboard"})]}),pt=()=>{const{t}=re(),{state:{adminInfo:e}}=ne.useContext(oe),{register:n,handleSubmit:r,onSubmit:o,errors:a,imageUrl:l,setImageUrl:i}=ie(e._id);return p.jsxs(p.Fragment,{children:[p.jsxs(Ve,{children:[" ",t("EditProfile")," "]}),p.jsx(ue,{children:p.jsx("div",{className:"container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:p.jsxs("form",{onSubmit:r(o),children:[p.jsxs("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:[p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(R,{label:t("ProfilePicture")}),p.jsx("div",{className:"col-span-8 sm:col-span-4",children:p.jsx(ce,{imageUrl:l,setImageUrl:i,folder:"customer"})})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(R,{label:t("ProfileName")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{required:!0,register:n,label:"Name",name:"name",type:"text",placeholder:"Your Name"}),p.jsx(_,{errorName:a.name})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(R,{label:t("ProfileEmail")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{required:!0,register:n,label:"Email",name:"email",type:"text",placeholder:"Email"}),p.jsx(_,{errorName:a.email})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(R,{label:t("ProfileContactNumber")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{required:!0,register:n,label:"Contact Number",name:"phone",type:"text",placeholder:"Contact Number"}),p.jsx(_,{errorName:a.phone})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(R,{label:t("ProfileYourRole")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(le,{register:n,label:"Role",name:"role"}),p.jsx(_,{errorName:a.role})]})]})]}),p.jsx("div",{className:"flex flex-row-reverse pr-6 pb-6",children:p.jsx(ae.Button,{type:"submit",className:"h-12 px-6",children:t("updateProfile")})})]})})})]})};export{pt as default};
