webpackJsonp([0],{"/ZQZ":function(e,t){},"1KIr":function(e,t,a){"use strict";function n(e){a("w5RS")}var r=a("CGKw"),s=a("5qaT"),i=a("VU/8"),o=n,c=i(r.a,s.a,o,"data-v-cefbca34",null);t.a=c.exports},"4APA":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",[a("router-link",{staticClass:"nameHeader",attrs:{to:"/"}},[a("h1",[e._v("SAM LINEHAN")])]),e._v(" "),e._m(0),e._v(" "),a("nav",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),a("router-link",{attrs:{to:"/work"}},[e._v("Work")]),e._v(" "),a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1),e._v(" "),a("router-view")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"betaDiv"},[a("h3",[e._v("Beta Website")])])}],s={render:n,staticRenderFns:r};t.a=s},"5qaT":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"work"}},[a("p",{staticClass:"title"},[e._v("My Work")]),e._v(" "),a("ul",e._l(e.projects,function(t){return a("li",[a("div",[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("p",[e._v(e._s(t.tech))]),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),a("a",{staticClass:"github",attrs:{href:t.githubLink}},[e._v("GITHUB")]),e._v(" "),a("a",{staticClass:"web",attrs:{href:t.webLink}},[e._v("LIVE")])])])}))])},r=[],s={render:n,staticRenderFns:r};t.a=s},"7DnR":function(e,t){},"9lab":function(e,t,a){"use strict";t.a={name:"resume"}},CCNa:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"resume"}},[a("p",{staticClass:"title"},[e._v("Resume")]),e._v(" "),a("section",[a("p",[e._v("If you fancy killing trees and want to print a copy, please \n        "),a("a",{attrs:{href:"./resume-linehan-samuel.pdf",target:"_blank"}},[e._v("Click Here")]),e._v(".")])])])}],s={render:n,staticRenderFns:r};t.a=s},CGKw:function(e,t,a){"use strict";t.a={name:"work",data:function(){return{projects:[{name:"Twig of Life",tech:"AngularJS, D3.js, Python, Flask, PostgreSQL",description:"A representation of a portion of the tree of life. By creating an interactive, radial dendrogram users are able to see taxonomic relationships between species. The significance of this project is not just in the final product, but in the technological scope as well. We were faced with the challenge of incorporating at least one new significant technology that was not taught in the Galvanize curriculum. We decided to use D3.js to create the dendrogram and Python with the Flask web framework to serve our backend.",githubLink:"https://github.com/TelegraphMoarInterstices",webLink:"https://twig-of-life.firebaseapp.com/#/"},{name:"Evently",tech:"SASS, Socket.io, Node.js, Ionic, ngCordova, Python, Flask, MongoDB",description:"A mobile event app that allows users to join the event they are attending and interact with other attendees in real time.  Users search for an event (or create one if it does not exist) and are then directed to that event’s live feed. While on the live feed, users can create a post, read other posts, and select favorite posts.",githubLink:"https://github.com/SamLinehan/evently-front-end",webLink:"https://linehan-capstone.firebaseapp.com/#/home"},{name:"Stock Market Game",tech:"SASS, Bootstrap, jQuery, Yahoo Finance API, Node.js, PostgreSQL, Gulp.js",description:"The Stock Market Game is a web app that simulates the stock market in real time. The app is designed as a game where users create an account and are allowed to buy and sell stocks from the S&P 100. Each trading day, users begin with $10,000 and the value of their investments are updated every five minutes to reflect the market. Users are also able to view a portfolio of the stocks they own as well as how they are performing against other users. At the end of the trading day, all ending balances are tallied and stored in each individual user's balance history.",githubLink:"https://github.com/SamLinehan/fe_stock_kings",webLink:"https://youtu.be/JUOCFfqog7Q"},{name:"The Dark Star Project",tech:"SASS, jQuery, Star API",description:"The Dark Star Project is a web app that gives users information about the stars in our galaxy. Some of this information includes the distance in light years from earth, the luminosity of that stars, and whether or not there are any exo-planets in a star’s system. The data used in this project comes from Star API, which compiled public data provided by the American Museum of Natural History. To access information about a star, the user types the name of that star into the search bar and presses submit. There is also a random generated list of stars to aide the user in their search because the majority of stars aren’t known.",githubLink:"https://github.com/SamLinehan/front_end_project",webLink:"https://dsproject.firebaseapp.com/"}]}}}},Fs8J:function(e,t,a){"use strict";t.a={name:"app"}},M93x:function(e,t,a){"use strict";function n(e){a("7DnR")}var r=a("xJD8"),s=a("4APA"),i=a("VU/8"),o=n,c=i(r.a,s.a,o,null,null);t.a=c.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("M93x"),s=a("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},QdFq:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("p",{staticClass:"title"},[e._v("Software Engineer")]),e._v(" "),a("section",[a("router-link",{attrs:{to:"/work",tag:"button"}},[e._v("My Work")]),e._v(" "),a("router-link",{attrs:{to:"/about",tag:"button"}},[e._v("About Me")])],1)])},r=[],s={render:n,staticRenderFns:r};t.a=s},V40r:function(e,t){},YaEn:function(e,t,a){"use strict";var n=a("7+uW"),r=a("/ocq"),s=a("lO7g"),i=a("1KIr"),o=a("fc3l"),c=a("c27y");n.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Home",component:s.a},{path:"/work",name:"Work",component:i.a},{path:"/resume",name:"Resume",component:o.a},{path:"/about",name:"About",component:c.a}]})},Zs8U:function(e,t,a){"use strict";t.a={name:"about"}},c27y:function(e,t,a){"use strict";function n(e){a("kN6N")}var r=a("Zs8U"),s=a("ij7A"),i=a("VU/8"),o=n,c=i(r.a,s.a,o,"data-v-2cf024f0",null);t.a=c.exports},fc3l:function(e,t,a){"use strict";function n(e){a("/ZQZ")}var r=a("9lab"),s=a("CCNa"),i=a("VU/8"),o=n,c=i(r.a,s.a,o,"data-v-58c69a7c",null);t.a=c.exports},ij7A:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about"}},[a("p",{staticClass:"title"},[e._v("About Me")]),e._v(" "),a("section",[a("p",{staticClass:"hello"},[e._v("Hello.")]),e._v(" "),a("p",[e._v("My name is Sam and I'm a Software Engineer focusing on Web, Mobile, and IoT.")]),e._v(" "),a("p",[e._v("Please pardon the appearance of my website... I'm currently learning the ways of Vue.js.")]),e._v("Check me out here:"),a("p"),e._v(" "),a("div",[a("a",{staticClass:"github",attrs:{href:"https://github.com/SamLinehan"}},[e._v("GITHUB")]),e._v(" "),a("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/samuellinehan"}},[e._v("LINKEDIN")])])])])}],s={render:n,staticRenderFns:r};t.a=s},kN6N:function(e,t){},lO7g:function(e,t,a){"use strict";function n(e){a("V40r")}var r=a("Fs8J"),s=a("QdFq"),i=a("VU/8"),o=n,c=i(r.a,s.a,o,"data-v-7973b1b4",null);t.a=c.exports},w5RS:function(e,t){},xJD8:function(e,t,a){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.0a501902acd1dae5f622.js.map