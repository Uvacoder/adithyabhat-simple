(this.webpackJsonpadithyanr=this.webpackJsonpadithyanr||[]).push([[5],{350:function(t,e,r){t.exports=r(351)},351:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=s;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:f,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function y(){}function d(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==r&&n.call(E,a)&&(g=E);var b=d.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=b.constructor=d,d.constructor=y,d[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},352:function(t,e,r){t.exports=r.p+"static/media/specs.e2a4358e.svg"},363:function(t,e,r){"use strict";r.r(e);var n=r(350),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=r(0),u=r.n(c),l=r(11),s=r(352),f=r.n(s),h=r(8);e.default=function(){var t=i(Object(c.useState)(!0),2),e=t[0],r=t[1];Object(c.useEffect)((function(){window.scrollTo(0,0),document.title="Contact | Adithya NR"}));var n=function(){var t,e=(t=o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/),a=n.test(e),r(a);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement(l.a,null),u.a.createElement("div",{className:"container animated fadeIn"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6 col-sm-12"},u.a.createElement("br",null),u.a.createElement("h1",{className:"contact-h1"},"Get in touch"),u.a.createElement("form",{name:"form",onSubmit:function(t){return function(t){document.form.action="https://getsimpleform.com/messages?form_api_token=de3f3e206755bfc7b484633b6ab33cff",alert("Thanks for reaching out ".concat(t.target.name.value,"! I'll get back to you ASAP!"))}(t)},className:"form",method:"post",encType:"multipart/form-data"},u.a.createElement("input",{type:"hidden",name:"_spam",value:"message"}),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"name"},"Name"),u.a.createElement("input",{type:"text",name:"name",className:"form-control",required:!0})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"email"},"Email"),u.a.createElement("input",{onBlur:function(t){return n(t.target.value)},type:"email",name:"email",className:e?"form-control":"error-input form-control",required:!0}),!e&&u.a.createElement("small",{className:"error"},"Invalid email address")),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"message"},"Your Message"),u.a.createElement("textarea",{rows:"3",name:"message",className:"form-control",required:!0})),u.a.createElement("p",{className:"buttons left"},u.a.createElement("input",{type:"submit",value:"Send"}),u.a.createElement(h.a,{to:"/resume"},"View Resume"))),u.a.createElement("a",{className:"feedback",href:"https://5f1ed849.nolt.io/",target:"_blank",rel:"noopener noreferrer"},"Have time for some Feedback?")),u.a.createElement("div",{className:"col-lg-6 col-sm-12"},u.a.createElement("img",{src:f.a,alt:"contact",className:"contact-img"})))))}}}]);
//# sourceMappingURL=5.856a1438.chunk.js.map