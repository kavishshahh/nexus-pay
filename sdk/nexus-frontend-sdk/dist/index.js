"use strict";var e=require("react");function t(e,t,r,n){return new(r||(r=Promise))((function(o,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function i(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}l((n=n.apply(e,t||[])).next())}))}function r(e,t){var r,n,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}"function"==typeof SuppressedError&&SuppressedError;var n,o={exports:{}},a={};var s,i,l={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function c(){return s||(s=1,"production"!==process.env.NODE_ENV&&function(){var t=e,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),b=Symbol.iterator;var h=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];!function(e,t,r){var n=h.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(t+="%s",r=r.concat([o]));var a=r.map((function(e){return String(e)}));a.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,a)}("error",e,r)}var g;function x(e){return e.displayName||"Context"}function w(e){if(null==e)return null;if("number"==typeof e.tag&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case s:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return x(e)+".Consumer";case i:return x(e._context)+".Provider";case u:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case y:var t=e.displayName||null;return null!==t?t:w(e.type)||"Memo";case d:var r=e,l=r._payload,m=r._init;try{return w(m(l))}catch(e){return null}}return null}g=Symbol.for("react.module.reference");var k,j,_,S,O,N,R,E=Object.assign,P=0;function T(){}T.__reactDisabledLog=!0;var C,$=h.ReactCurrentDispatcher;function F(e,t,r){if(void 0===C)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return"\n"+C+e}var D,L=!1,I="function"==typeof WeakMap?WeakMap:Map;function W(e,t){if(!e||L)return"";var r,n=D.get(e);if(void 0!==n)return n;L=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=$.current,$.current=null,function(){if(0===P){k=console.log,j=console.info,_=console.warn,S=console.error,O=console.group,N=console.groupCollapsed,R=console.groupEnd;var e={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}P++}();try{if(t){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(s,[])}catch(e){r=e}Reflect.construct(e,[],s)}else{try{s.call()}catch(e){r=e}e.call(s.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),l=r.stack.split("\n"),c=i.length-1,u=l.length-1;c>=1&&u>=0&&i[c]!==l[u];)u--;for(;c>=1&&u>=0;c--,u--)if(i[c]!==l[u]){if(1!==c||1!==u)do{if(c--,--u<0||i[c]!==l[u]){var f="\n"+i[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&D.set(e,f),f}}while(c>=1&&u>=0);break}}}finally{L=!1,$.current=o,function(){if(0==--P){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:E({},e,{value:k}),info:E({},e,{value:j}),warn:E({},e,{value:_}),error:E({},e,{value:S}),group:E({},e,{value:O}),groupCollapsed:E({},e,{value:N}),groupEnd:E({},e,{value:R})})}P<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?F(p):"";return"function"==typeof e&&D.set(e,y),y}function q(e,t,r){if(null==e)return"";if("function"==typeof e)return W(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return F(e);switch(e){case f:return F("Suspense");case p:return F("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return W(e.render,!1);case y:return q(e.type,t,r);case d:var o=e,a=o._payload,s=o._init;try{return q(s(a),t,r)}catch(e){}}return""}D=new I;var U=Object.prototype.hasOwnProperty,A={},z=h.ReactDebugCurrentFrame;function M(e){if(e){var t=e._owner,r=q(e.type,e._source,t?t.type:null);z.setExtraStackFrame(r)}else z.setExtraStackFrame(null)}var B=Array.isArray;function Y(e){return B(e)}function J(e){return""+e}function V(e){if(function(e){try{return J(e),!1}catch(e){return!0}}(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),J(e)}var K,X,G,H=h.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};G={};function Z(e,t,n,o,a){var s,i={},l=null,c=null;for(s in void 0!==n&&(V(n),l=""+n),function(e){if(U.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(V(t.key),l=""+t.key),function(e){if(U.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(c=t.ref,function(e,t){if("string"==typeof e.ref&&H.current&&t&&H.current.stateNode!==t){var r=w(H.current.type);G[r]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(H.current.type),e.ref),G[r]=!0)}}(t,a)),t)U.call(t,s)&&!Q.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)void 0===i[s]&&(i[s]=u[s])}if(l||c){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;l&&function(e,t){var r=function(){K||(K=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(i,f),c&&function(e,t){var r=function(){X||(X=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(i,f)}return function(e,t,n,o,a,s,i){var l={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:s,_store:{}};return Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l}(e,l,c,a,o,H.current,i)}var ee,te=h.ReactCurrentOwner,re=h.ReactDebugCurrentFrame;function ne(e){if(e){var t=e._owner,r=q(e.type,e._source,t?t.type:null);re.setExtraStackFrame(r)}else re.setExtraStackFrame(null)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function ae(){if(te.current){var e=w(te.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ee=!1;var se={};function ie(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=ae();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!se[r]){se[r]=!0;var n="";e&&e._owner&&e._owner!==te.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),ne(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),ne(null)}}}function le(e,t){if("object"==typeof e)if(Y(e))for(var r=0;r<e.length;r++){var n=e[r];oe(n)&&ie(n,t)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=b&&e[b]||e["@@iterator"];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,s=o.call(e);!(a=s.next()).done;)oe(a.value)&&ie(a.value,t)}}function ce(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==y)return;t=r.propTypes}if(t){var n=w(r);!function(e,t,r,n,o){var a=Function.call.bind(U);for(var s in e)if(a(e,s)){var i=void 0;try{if("function"!=typeof e[s]){var l=Error((n||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}i=e[s](t,s,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(M(o),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,s,typeof i),M(null)),i instanceof Error&&!(i.message in A)&&(A[i.message]=!0,M(o),v("Failed %s type: %s",r,i.message),M(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!ee){ee=!0,v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ue={};function fe(e,t,n,l,b,h){var x=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===u||e.$$typeof===g||void 0!==e.getModuleId)}(e);if(!x){var k="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j;k+=ae(),null===e?j="null":Y(e)?j="array":void 0!==e&&e.$$typeof===r?(j="<"+(w(e.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):j=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,k)}var _=Z(e,t,n,b,h);if(null==_)return _;if(x){var S=t.children;if(void 0!==S)if(l)if(Y(S)){for(var O=0;O<S.length;O++)le(S[O],e);Object.freeze&&Object.freeze(S)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else le(S,e)}if(U.call(t,"key")){var N=w(e),R=Object.keys(t).filter((function(e){return"key"!==e})),E=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!ue[N+E])v('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',E,N,R.length>0?"{"+R.join(": ..., ")+": ...}":"{}",N),ue[N+E]=!0}return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){ne(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ne(null);break}}null!==e.ref&&(ne(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),ne(null))}(_):ce(_),_}var pe=function(e,t,r){return fe(e,t,r,!1)},ye=function(e,t,r){return fe(e,t,r,!0)};l.Fragment=o,l.jsx=pe,l.jsxs=ye}()),l}var u=(i||(i=1,"production"===process.env.NODE_ENV?o.exports=function(){if(n)return a;n=1;var t=e,r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,a={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:u,props:a,_owner:i.current}}return a.Fragment=o,a.jsx=c,a.jsxs=c,a}():o.exports=c()),o.exports);module.exports=function(n){var o=n.name,a=n.onClick,s=n.details,i=n.amount,l=n.onClose,c=n.open,f=n.token,p=n.recipient_wallet,y=e.useState(""),d=y[0],m=y[1],b=e.useState(!1),h=b[0],v=b[1],g=e.useState(!1),x=g[0],w=g[1],k=e.useState(null),j=k[0],_=k[1];return u.jsxs(u.Fragment,{children:[!c&&u.jsx("button",{onClick:a,className:"px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Pay with NexusPay"}),c&&u.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 p-4",children:u.jsxs("div",{className:"rounded-lg shadow-xl w-full max-w-sm sm:max-w-md relative",style:{backgroundColor:"#141a1f"},children:[u.jsx("button",{className:"absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-200",onClick:l,children:u.jsx("svg",{className:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsxs("div",{className:"p-4 sm:p-6 md:p-8",children:[u.jsxs("div",{className:"text-center mb-4 sm:mb-6",children:[u.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-2",children:"NexusPay Payment Request"}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("svg",{className:"w-4 h-4 text-gray-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),u.jsx("p",{className:"text-sm sm:text-base text-gray-300",children:s})]})]}),u.jsx("label",{htmlFor:"email",className:"block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2",children:"Amount to Process:"}),u.jsx("div",{className:"bg-gray-700 rounded-lg p-3 mb-4 flex items-center justify-between cursor-not-allowed",children:u.jsxs("div",{className:"flex w-full justify-between",children:[u.jsx("p",{className:"text-base sm:text-lg font-bold text-white",children:"USD"===f?"$".concat(i):"".concat(i)}),u.jsx("span",{className:"text-md sm:text-sm text-gray-400",children:"USD"===f?"USD":"APT"})]})}),x?u.jsxs("div",{className:"text-center",children:[u.jsx("svg",{className:"w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),u.jsx("p",{className:"text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Request Sent Successfully!"}),u.jsx("p",{className:"text-sm sm:text-base text-gray-600 dark:text-gray-300",children:"Please open your NexusPay app and approve the request."})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"mb-4 sm:mb-6",children:[u.jsx("label",{htmlFor:"email",className:"block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2",children:"Email to request payment:"}),u.jsx("input",{type:"email",id:"email",value:d,onChange:function(e){m(e.target.value)},placeholder:"Enter your email",className:"w-full px-3 py-2 text-sm sm:text-base border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"})]}),u.jsx("button",{onClick:function(){return t(void 0,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:if(!d)return _("Please enter a valid email."),[2];v(!0),_(null),t.label=1;case 1:return t.trys.push([1,4,5,6]),[4,fetch("https://nexus-send-request-876401151866.us-central1.run.app",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 12345890"},body:JSON.stringify({name:o,details:s,amount:i,token:f,email_to_request:d,callback_url:"https://nexus-test-txfill-callback-876401151866.us-central1.run.app",recipient_wallet:p})})];case 2:return[4,t.sent().json()];case 3:return t.sent(),w(!0),_("Request sent successfully!"),[3,6];case 4:return e=t.sent(),console.error("Error sending request:",e),_("Failed to send request."),[3,6];case 5:return v(!1),[7];case 6:return[2]}}))}))},disabled:h,className:"w-full px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",children:h?"Processing...":"Send Payment Request"})]}),j&&u.jsx("p",{className:"mt-4 text-sm ".concat(j.includes("successfully")?"text-green-600":"text-red-600"),children:j})]})]})})]})};
//# sourceMappingURL=index.js.map
