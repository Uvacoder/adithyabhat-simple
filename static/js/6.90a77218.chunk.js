(this.webpackJsonpadithyanr=this.webpackJsonpadithyanr||[]).push([[6],{353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=d,t.HashLink=y,t.NavHashLink=b;var a=s(n(0)),i=s(n(1)),c=n(9);function s(e){return e&&e.__esModule?e:{default:e}}var l="",u=null,p=null,f=null;function h(){l="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function m(){var e=document.getElementById(l);return null!==e&&(f(e),h(),!0)}function d(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["scroll","smooth"]);return a.default.createElement(t,r({},n,{onClick:function(t){h(),e.onClick&&e.onClick(t),"string"===typeof e.to?l=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"===typeof e.to.hash&&(l=e.to.hash.replace("#","")),""!==l&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout((function(){!1===m()&&(null===u&&(u=new MutationObserver(m)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout((function(){h()}),1e4))}),0))}}),e.children)}function y(e){return d(e,c.Link)}function b(e){return d(e,c.NavLink)}var g={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};y.propTypes=g,b.propTypes=g},359:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(0),o=n.n(r),a=n(353),i=n(8),c=[{year:"2019",course:"Human-Computer Interaction",institution:"Interaction Design Foundation",score:""},{year:"2018",course:"React Nanodegree",institution:"Udacity",score:""},{year:"2015-2019",course:"B.Tech - Computer Science & Engineering",institution:"RNS Institute of Technology",score:"8 CGPA"},{year:"2013-2015",course:"Pre-University Education",institution:"Vijaya Junior College",score:"93%"}],s=[{title:"Trayah Pottery",date:"Oct 2019 - Jan 2020",url:"https://trayahpottery.com",desc:"A Landing page + dashboard for a Pottery studio built using React, TypeScript, Express.js and Firestore"},{title:"RNS Chronicles",date:"Oct 2018 - Nov 2018",url:"https://rnsit.now.sh",desc:"A student blog built using ReactJS & Firestore."},{title:"Would You Rather",date:"Nov 2018",url:"https://wyr.now.sh",desc:"A Gen-Y game built using React-Redux."},{title:"My Reads",date:"July 2018",url:"https://adithyabhat.com/React-MyReads",desc:"A book tracking app which lets users select books they would want to read and keep track of their progress by marking them as `read`, `want to read`, or `currently reading`."},{title:"RNSIT",date:"May 2018 - present",url:"https://rnsit.ac.in",desc:"Currently working on optimizing the performance and making the website a PWA."},{title:"AIKYA",date:"April 2018 - May 2018",url:"https://rnsaikya.herokuapp.com",desc:"A web app for the departmental fest of CSE, RNSIT."}],l=[{role:"Associate Software Engineer",company:"Betsol",date:"July 2019 - Present",url:"https://betsol.com",workdone:"Working on LeTo, a DevOps automation tool as a Full-Stack Engineer using React-Redux, Express.js and PostgreSQL."},{role:"Intern",company:"Betsol",date:"January 2019 - Present",url:"https://betsol.com",workdone:"Worked on redesigning the admin dashboard for the sales team of Zmanda, Betsol, using Figma, React-Redux and Material Design."},{role:"Freelance Web Developer",company:"GrandMentor LLC",date:"June 2018 - August 2018",url:"https://grand-mentor.com",workdone:"Worked on designing and developing a company portfolio using ReactJS."},{role:"Summer Intern",company:"The Valley Bootcamp",date:"July 2018 - August 2018",url:"https://www.thevalleybootcamp.com/",workdone:"Worked on developing a Telegram chatbot to track user expenses using IBM Watson and Python."}],u=[{field:"Design",skills:"UI / UX / Wireframing / Web Design"},{field:"Development",skills:"Javascript / ReactJS / Redux / React-Native / Java / NodeJS / GraphQL / Gatsby / Next.js / Python / HTML5 / CSS3"}];function p(){return Object(r.useEffect)((function(){window.scrollTo(0,0),document.title="Resume | Adithya NR"})),o.a.createElement("div",{className:"container resume"},o.a.createElement("header",{className:"resume-header"},o.a.createElement(i.a,{to:"/",title:"Home"},o.a.createElement("small",null,"Home")),o.a.createElement(a.HashLink,{to:"#Bio",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},title:"About"},o.a.createElement("small",null,"About")),o.a.createElement(a.HashLink,{to:"#Education",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},title:"Education"},o.a.createElement("small",null,"Education")),o.a.createElement(a.HashLink,{to:"#Projects",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},title:"Projects"},o.a.createElement("small",null,"Projects")),o.a.createElement(a.HashLink,{to:"#Experience",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},title:"Experience"},o.a.createElement("small",null,"Experience")),o.a.createElement(a.HashLink,{to:"#Skills",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},title:"Skills"},o.a.createElement("small",null,"Skills"))),o.a.createElement("br",null),o.a.createElement("div",{id:"Bio",className:"resume-div"},o.a.createElement("h1",null,"Hi, I'm Adithya NR"),o.a.createElement("p",{className:"resume-p"},"A Computer Science Engineer from Bengaluru, India. ",o.a.createElement("br",null),"I'm a React Nanodegree Graduate and I love design-oriented development. ",o.a.createElement("br",null),"I have an obsession for detail and perfectly executed designs, I have a strong interest in usability, and am constantly looking to create intriguing and concept enhancing interactions that remain intuitive for the user.")),o.a.createElement("div",{id:"Education",className:"resume-div"},o.a.createElement("h1",null,"Education"),c.map((function(e){return o.a.createElement("div",{key:e.score,className:"resume-edu"},o.a.createElement("p",null,e.course," / ",e.institution," / ",o.a.createElement("small",null,e.score," ",o.a.createElement("br",null)," ",o.a.createElement("small",null,e.year))))}))),o.a.createElement("div",{id:"Projects",className:"resume-div"},o.a.createElement("h1",null,"Projects"),s.map((function(e){return o.a.createElement("div",{key:e.title,className:"resume-edu"},o.a.createElement("p",{style:{fontWeight:"bold",fontSize:"1.2em"}},o.a.createElement("a",{title:e.title,target:"_blank",rel:"noopener noreferrer",href:e.url},e.title),o.a.createElement("br",null)," ",o.a.createElement("small",null,e.date)),o.a.createElement("p",null,e.desc))})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/AdithyaBhat17"},"See more on my GitHub"))),o.a.createElement("div",{id:"Experience",className:"resume-div"},o.a.createElement("h1",null,"Experience"),l.map((function(e){return o.a.createElement("div",{key:e.company,className:"resume-edu"},o.a.createElement("p",{style:{fontWeight:"normal",fontSize:"1.3em"}},e.role," -\xa0",o.a.createElement("a",{title:e.title,target:"_blank",rel:"noopener noreferrer",href:e.url},e.company)," ",o.a.createElement("br",null),o.a.createElement("small",null,o.a.createElement("small",null,e.date))," ",o.a.createElement("br",null),o.a.createElement("span",{style:{fontSize:"0.8em"}},e.workdone)))}))),o.a.createElement("div",{id:"Skills",className:"resume-div"},o.a.createElement("h1",null,"Skills"),u.map((function(e){return o.a.createElement("div",{key:e.field,className:"resume-edu"},o.a.createElement("h3",null,e.field),o.a.createElement("p",null,e.skills))}))),o.a.createElement("p",{className:"socials resume-socials"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"behance",href:"https://behance.net/adithyabhat"},o.a.createElement("i",{className:"fab fa-behance"})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"dribbble",href:"https://www.dribbble.com/adithyanr"},o.a.createElement("i",{className:"fab fa-dribbble"})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"Github",href:"https://www.github.com/AdithyaBhat17"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"medium",href:"https://www.medium.com/adithya-nr"},o.a.createElement("i",{className:"fab fa-medium-m"})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"linkedin",href:"https://www.linkedin.com/in/adithya-nr"},o.a.createElement("i",{className:"fab fa-linkedin-in"}))))}},74:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(u){var f=l(n);f&&f!==u&&e(t,f,p)}var h=i(n);c&&(h=h.concat(c(n)));for(var m=0;m<h.length;++m){var d=h[m];if(!r[d]&&!o[d]&&(!p||!p[d])){var y=s(n,d);try{a(t,d,y)}catch(b){}}}return t}return t}},9:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(1),s=n.n(c),l=n(5),u=n(12);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=p(this,e.call.apply(e,[this].concat(a))),r.history=Object(l.a)(r.props),p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},t}(i.a.Component);f.propTypes={basename:s.a.string,forceRefresh:s.a.bool,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node};var h=f,m=n(39),d=n(8),y=n(15);function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=b(this,e.call.apply(e,[this].concat(a))),r.history=Object(l.d)(r.props),b(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(y.a,{history:this.history,children:this.props.children})},t}(i.a.Component);g.propTypes={initialEntries:s.a.array,initialIndex:s.a.number,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node};var v=g,w=n(4),E=n(3),k=n.n(E);var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){k()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);O.propTypes={when:s.a.bool,message:s.a.oneOfType([s.a.func,s.a.string]).isRequired},O.defaultProps={when:!0},O.contextTypes={router:s.a.shape({history:s.a.shape({block:s.a.func.isRequired}).isRequired}).isRequired};var R=O,j=n(18),P=n.n(j),S={},x=0,T=function(e){var t=e,n=S[t]||(S[t]={});if(n[e])return n[e];var r=P.a.compile(e);return x<1e4&&(n[e]=r,x++),r},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===e)return e;var n=T(e);return n(t,{pretty:!0})},N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){k()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(l.c)(e.to),n=Object(l.c)(this.props.to);Object(l.f)(t,n)?o()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?C(n,t.params):N({},n,{pathname:C(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(i.a.Component);_.propTypes={computedMatch:s.a.object,push:s.a.bool,from:s.a.string,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired},_.defaultProps={push:!1},_.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired}).isRequired,staticContext:s.a.object}).isRequired};var A=_,I=n(13),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var W=function(e){return"/"===e.charAt(0)?e:"/"+e},B=function(e,t){return e?L({},t,{pathname:W(e)+t.pathname}):t},H=function(e,t){if(!e)return t;var n=W(e);return 0!==t.pathname.indexOf(n)?t:L({},t,{pathname:t.pathname.substr(n.length)})},J=function(e){return"string"===typeof e?e:Object(l.e)(e)},D=function(e){return function(){k()(!1,"You cannot %s with <StaticRouter>",e)}},q=function(){},F=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=M(this,e.call.apply(e,[this].concat(a))),r.createHref=function(e){return W(r.props.basename+J(e))},r.handlePush=function(e){var t=r.props,n=t.basename,o=t.context;o.action="PUSH",o.location=B(n,Object(l.c)(e)),o.url=J(o.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,o=t.context;o.action="REPLACE",o.location=B(n,Object(l.c)(e)),o.url=J(o.location)},r.handleListen=function(){return q},r.handleBlock=function(){return q},M(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},t.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},t.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:H(t,Object(l.c)(n)),push:this.handlePush,replace:this.handleReplace,go:D("go"),goBack:D("goBack"),goForward:D("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(y.a,L({},r,{history:o}))},t}(i.a.Component);F.propTypes={basename:s.a.string,context:s.a.object.isRequired,location:s.a.oneOfType([s.a.string,s.a.object])},F.defaultProps={basename:"",location:"/"},F.childContextTypes={router:s.a.object.isRequired};var U=F,V=n(40),G=C,Y=n(6).a,z=n(74),Q=n.n(z),K=n(17),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var Z=function(e){var t=function(t){var n=t.wrappedComponentRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["wrappedComponentRef"]);return i.a.createElement(K.a,{children:function(t){return i.a.createElement(e,X({},r,t,{ref:n}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:s.a.func},Q()(t,e)};n.d(t,"BrowserRouter",(function(){return h})),n.d(t,"HashRouter",(function(){return m.a})),n.d(t,"Link",(function(){return d.a})),n.d(t,"MemoryRouter",(function(){return v})),n.d(t,"NavLink",(function(){return w.a})),n.d(t,"Prompt",(function(){return R})),n.d(t,"Redirect",(function(){return A})),n.d(t,"Route",(function(){return I.a})),n.d(t,"Router",(function(){return u.a})),n.d(t,"StaticRouter",(function(){return U})),n.d(t,"Switch",(function(){return V.a})),n.d(t,"generatePath",(function(){return G})),n.d(t,"matchPath",(function(){return Y})),n.d(t,"withRouter",(function(){return Z}))}}]);
//# sourceMappingURL=6.90a77218.chunk.js.map