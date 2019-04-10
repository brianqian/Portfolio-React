(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=n(3),c=n(4),s=n(6),u=n(5),d=n(7),m=n(1),h=n(2),p=[{title:"Web Developer",body:["Current skills: Javascript, React, Redux, Node, Express, SQL, MongoDB, Git, Jest, Enzyme, jQuery","Currently working on learning GraphQL and Apollo","The things I like most in life are puzzles and learning so I guess I like coding. ","I'm always looking for the best and most efficient way to do things","Outside of coding I like rock climbing, board games, and seeing live music."]},{title:"Rock Climber",body:["The best thing about rock climbing is it lets you problem solve and get a workout in at the same time.","You can usually find me at a Touchstone or Planet Granite trying to get my first V6"]},{title:"Movie enthusiast",body:["I worked at a talent agency for a couple of years because movies were my first love.","...but I like it all. Ask me about my favorite Movie/TV show/Podcast/Book/Comedian/Musical artist/Twitch channel"]},{title:"Board Gamer",body:["Board games are back!","Some of the favorites are Codenames, Coup, Avalon, Catan, Twilight Struggle, Star Realms, Colt Express, and many more."]},{title:"Reader",body:["Anything by Michael Lewis, Michael Crichton, Malcolm Gladwell, or Gyllian Flynn. Currently making my way through Brandon Sanderson's Stormlight Archive Series"]},{title:"Camper",body:["As an Eagle Scout I spent a lot of time outdoors, including an 80-miler through New Mexico.","I'm biased but California has the best outdoor camping spots in the world. Yosemite, Big Sur, Joshua Tree, and the Lost Coast trail are top tier and if you're a fan, definitely check those out!"]}];function v(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 80%;\n  margin: auto;\n  color: #ff9007;\n  > p {\n    margin: 0.5rem;\n  }\n"]);return v=function(){return e},e}function f(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > img {\n    height: 1rem;\n    width: 1rem;\n    padding: 0.25rem;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(m.a)(["\n  color: #ff9007;\n"]);return g=function(){return e},e}function b(){var e=Object(m.a)(["\n  background-color: #0c1821;\n  color: #fff;\n  font-family: 'Cutive Mono';\n  font-size: 1.15em;\n  text-align: center;\n  border-radius: 5px;\n  box-sizing: border-box;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  scroll-snap-align: start;\n"]);return b=function(){return e},e}var y=h.b.div(b()),w=h.b.span(g()),E=(h.b.div(f()),h.b.div(v())),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectionIndex:0},n.nextSelection=function(){var e=(n.state.selectionIndex+1)%p.length;n.setState({selectionIndex:e})},n.prevSelection=function(){var e=n.state.selectionIndex-1;e<0&&(e=p.length-1),n.setState({selectionIndex:e})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){p[this.state.selectionIndex].body.map(function(e){return r.a.createElement("p",null,e)});var e=["Javascript","React","Redux","Node","Express","SQL","MongoDB","Jest","Enzyme","jQuery"].map(function(e){return r.a.createElement("p",null,e)});return r.a.createElement(y,{id:"about"},r.a.createElement("h1",null,"Hi my name is ",r.a.createElement(w,null,"Brian")),r.a.createElement("div",null,"I'm from the Bay Area and I'm a Web Developer."),r.a.createElement("div",null,r.a.createElement("p",null,"Current skills: "),r.a.createElement(E,null,e),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore veniam earum odit eveniet at ratione, voluptatum aspernatur voluptas quaerat eligendi totam perferendis qui pariatur ad expedita amet vitae. Numquam, quod."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ipsum molestias, veniam obcaecati quasi aliquid repellat reprehenderit labore sint sed blanditiis, sunt adipisci nulla consequatur delectus, odio asperiores dolores! Veniam?")))}}]),t}(a.Component);function x(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  align-items: center;\n\n  @media (max-width: 780px) {\n    grid-template-columns: 1fr;\n  }\n  > div {\n    margin: 1.5rem 0;\n    box-sizing: border-box;\n    @media (max-width: 780px) {\n      display: none;\n      :nth-child(1) {\n        display: block;\n      }\n    }\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(m.a)(["\n  font-family: 'Markazi Text';\n  align-self: center;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n  > div {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    cursor: default;\n    > span {\n      background-color: #ff9007;\n      /* font-family: 'Open Sans'; */\n      font-size: 0.75em;\n      border-radius: 3px;\n      padding: 4px 8px;\n      margin: 0 5px;\n    }\n  }\n  > h1 {\n    margin: 0.5rem;\n  }\n"]);return O=function(){return e},e}function S(){var e=Object(m.a)(["\n  font-family: 'Economica';\n  font-size: 1.3em;\n  color: white;\n  min-width: 100%;\n  max-width: 100%;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return S=function(){return e},e}var C=h.b.div(S()),z=h.b.div(O()),H=h.b.div(j()),M=h.b.div(x()),V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.stack,a=e.desc,i=(e.img,n.map(function(e){return r.a.createElement("span",null,e)}));return r.a.createElement(C,{id:this.props.id},r.a.createElement(z,null,r.a.createElement("h1",null,t),r.a.createElement("div",null,i)),r.a.createElement(M,null,r.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}}),r.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}}),r.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}})),r.a.createElement(H,null,a))}}]),t}(a.Component),T=[{title:"nSuns Calculator",stack:["HTML/CSS","Javascript","React","Redux","Node/Express","SQL","Jest","Enzyme"],description:"This is a calculator for the nSuns workout program that interchangeably calculates your training and rep maxes. This app is a one stop shop for users to track their workouts and rests between sets. This app is also fully mobile responsive to make it available in the gym. Various presets of accessory work are available along with the option to create your own accessory plan. This webapp uses React/Redux and Styled Components for the front end with Node and SQL for the backend. The app uses JWT (JSON Web Tokens) to persist user authorization. Tests are written with Jest/Enzyme",img:"",github:"",deployment:""},{title:"SnackTime",stack:["HTML/CSS","Javascript","React","Node/Express","SQL"],description:"A CRM platform built for parents and caretakers of young children. Snacktime provides a solution for busy parents and daycares by creating an easy way to transfer and log information. Has support for multiple organizations and families.",img:"",github:"",deployment:""},{title:"DevLab",stack:["HTML/CSS","Javascript","jQuery","Node/Express","SQL"],description:"DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources.",img:"",github:"",deployment:""},{title:"EventSpotter",stack:["HTML/CSS","Javascript","jQuery"],description:"DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources.",img:"",github:"",deployment:""},{title:"Google Books API",stack:["HTML/CSS","Javascript","React","HTML","CSS","Node"],description:"A project done for 8th Light. A basic application that searches the Google Books API and cross references searches with Wikipedia.",img:"",github:"",deployment:""}];function L(){var e=Object(m.a)(["\n  padding: 0 2rem;\n  color: white;\n  font-family: 'Economica';\n  display: flex;\n  max-width: 100%;\n  justify-content: space-evenly;\n  > * {\n    cursor: pointer;\n  }\n"]);return L=function(){return e},e}var I=h.b.div(L());var B=function(e){var t=e.children;return r.a.createElement(I,null,t)};function A(){var e=Object(m.a)(["\n  color: ",";\n"]);return A=function(){return e},e}function R(){var e=Object(m.a)([""]);return R=function(){return e},e}function J(){var e=Object(m.a)(["\n  margin: 0;\n  scroll-snap-type: x mandatory;\n  display: flex;\n  /* color: gray; */\n  width: 100%;\n  overflow: auto;\n  height: 90%;\n"]);return J=function(){return e},e}function P(){var e=Object(m.a)(["\n  max-width: 100%;\n  height: 100%;\n  grid-row: 2;\n  grid-column: 2;\n  overflow: auto;\n  background-color: #0c1820;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]);return P=function(){return e},e}var Q=h.b.div(P()),N=h.b.div(J()),D=(h.b.div(R()),h.b.span(A(),function(e){return e.selected?"orange":"white"})),G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedProject:0,numOfProjects:0,scheduledFrame:!1},n.componentDidMount=function(){n.setState({numOfProjects:T.length}),window.addEventListener("resize",n.onResize)},n.onResize=function(){n.adjustAlignment()},n.adjustAlignment=function(){console.log("running");var e=document.getElementById("portfolio"),t=e.scrollWidth/n.state.numOfProjects;e.scrollLeft=t*n.state.selectedProject},n.onScroll=function(e){e.stopPropagation();var t=e.target,a=t.scrollWidth/t.scrollLeft,r=Math.round(T.length/a);r!==n.state.selectedProject&&n.setState({selectedProject:r})},n.navBarOnClick=function(e){var t=document.getElementById("portfolio"),a=t.scrollWidth,r=n.state,i=r.selectedProject,o=a/r.numOfProjects*(e-i);t.scrollBy({left:o,behavior:"smooth"})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[],n=[];return T.forEach(function(a,i){t.push(r.a.createElement(D,{onClick:function(){return e.navBarOnClick(i)},selected:e.state.selectedProject===i},a.title)),n.push(r.a.createElement(V,{id:"project-".concat(i),title:a.title,stack:a.stack,desc:a.description}))}),r.a.createElement(Q,null,r.a.createElement(B,null,t),r.a.createElement(N,{id:"portfolio",onScroll:this.onScroll},n))}}]),t}(a.Component);function W(){var e=Object(m.a)(["\n  margin: 0;\n  width: 3rem;\n  display: flex;\n  grid-row: 1;\n  overflow: hidden;\n  max-height: 100%;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  flex-direction: column;\n\n  > li {\n    list-style: none;\n    padding: 1rem 0;\n    > img {\n      cursor: pointer;\n    }\n  }\n"]);return W=function(){return e},e}var q=h.b.div(W());var F=function(e){var t=e.selected,n=e.scrollFn;return r.a.createElement(q,null,r.a.createElement("li",null,r.a.createElement("img",{onClick:function(){return n(0)},src:"./img/circle-".concat(0===t?"fill":"outline","-white.svg"),height:"15px",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{onClick:function(){return n(1)},src:"./img/circle-".concat(1===t?"fill":"outline","-white.svg"),height:"15px",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{onClick:function(){return n(2)},src:"./img/circle-".concat(2===t?"fill":"outline","-white.svg"),height:"15px",alt:""})))};function Y(){var e=Object(m.a)(["\n  min-height: 100%;\n  scroll-snap-align: start;\n"]);return Y=function(){return e},e}var K=h.b.div(Y()),U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{id:"contact"},r.a.createElement("p",null,"Contact me:"),r.a.createElement("p",null,"email:"),r.a.createElement("p",null,"github"),r.a.createElement("p",null,"linkedin"))}}]),t}(a.Component);function X(){var e=Object(m.a)(["\n  max-height: 100%;\n  overflow: auto;\n  scroll-snap-type: y mandatory;\n"]);return X=function(){return e},e}function Z(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 5% 90% 5%;\n  grid-template-rows: 100%;\n  background-color: #0c1821;\n  color: #d6bb33;\n  font-family: 'Cutive Mono';\n  font-size: 1.15em;\n  text-align: center;\n  align-self: center;\n  justify-self: center;\n  max-height: 95vh;\n  width: 95vw;\n  margin: auto;\n  border-radius: 20px;\n  border: 5px solid rgb(255, 255, 255);\n"]);return Z=function(){return e},e}function $(){var e=Object(m.a)(["\n  background-color: #38618c;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23c7badb' fill-opacity='0.13'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  background-repeat: repeat;\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  min-width: 100vw;\n"]);return $=function(){return e},e}function _(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n  min-height: 100vh;\n"]);return _=function(){return e},e}function ee(){var e=Object(m.a)(["\n@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Economica|Markazi+Text|Open+Sans');\nbody, html{\n  margin: 0;\n  font-size: 100%;\n}\n::-webkit-scrollbar {\n    width: 0px;\n    background: transparent;  \n}\n"]);return ee=function(){return e},e}var te=Object(h.a)(ee()),ne=h.b.div(_()),ae=h.b.div($()),re=h.b.div(Z()),ie=h.b.div(X()),oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedSection:0,scrollTop:0,numOfSections:3},n.selectActiveOnScroll=function(e){var t=e.target,a=t.scrollHeight,r=t.scrollTop,i=a/r,o=Math.round(n.state.numOfSections/i);o!==n.state.selectedSection&&n.setState({selectedSection:o,scrollTop:r})},n.navBarOnClick=function(e){var t=n.state,a=t.selectedSection,r=t.numOfSections,i=document.getElementById("content"),o=(e-a)*(i.scrollHeight/r);i.scrollBy({top:o,behavior:"smooth"})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement(ae,null),r.a.createElement(te,null),r.a.createElement(re,null,r.a.createElement(F,{scrollFn:this.navBarOnClick,selected:this.state.selectedSection}),r.a.createElement(ie,{id:"content",onScroll:this.selectActiveOnScroll},r.a.createElement(k,null),r.a.createElement(G,null),r.a.createElement(U,null))))}}]),t}(a.Component);o.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.32a31d39.chunk.js.map