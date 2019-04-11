(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),l=t(3),c=t(4),s=t(6),u=t(5),d=t(7),m=t(1),h=t(2);function p(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 80%;\n  margin: auto;\n  color: #ff9007;\n  @media (max-width: 780px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  > p {\n    margin: 0.5rem;\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(m.a)(["\n  color: #ff9007;\n"]);return v=function(){return e},e}function f(){var e=Object(m.a)(["\n  background-color: #0c1821;\n  color: #fff;\n  font-family: 'Cutive Mono';\n  font-size: 1.15em;\n  text-align: center;\n  border-radius: 5px;\n  box-sizing: border-box;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  scroll-snap-align: start;\n"]);return f=function(){return e},e}var g=h.b.div(f()),b=h.b.span(v()),y=h.b.div(p()),w=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={selectionIndex:0},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=["Javascript","React","Redux","Node","Express","SQL","MongoDB","Jest","Enzyme","jQuery"].map(function(e){return a.a.createElement("p",null,e)});return a.a.createElement(g,{id:"about"},a.a.createElement("h1",null,"Hi my name is ",a.a.createElement(b,null,"Brian")),a.a.createElement("div",null,"I'm from the Bay Area and I'm a Web Developer."),a.a.createElement("div",null,a.a.createElement("p",null,"Current skills: "),a.a.createElement(y,null,e),a.a.createElement("p",null,"I've always been drawn to complicated systems and how they work. My interests of problem solving and optimizing systems led me to the path of computer engineering. I'm always looking to learn more to become a better programmer.")))}}]),n}(r.Component);function x(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > h1 {\n    margin: 0.5rem;\n  }\n  > a {\n    height: 100%;\n    display: flex;\n    align-items: center;\n  }\n"]);return x=function(){return e},e}function E(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  align-items: center;\n  @media (max-width: 780px) {\n    grid-template-columns: 1fr;\n  }\n  > div {\n    margin: 1.5rem 0;\n    box-sizing: border-box;\n    @media (max-width: 780px) {\n      display: none;\n      :nth-child(1) {\n        display: block;\n      }\n    }\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(m.a)(["\n  font-family: 'Markazi Text';\n  align-self: center;\n"]);return j=function(){return e},e}function k(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  cursor: default;\n  > span {\n    background-color: #ff9007;\n    font-size: 0.75em;\n    border-radius: 3px;\n    padding: 4px 8px;\n    margin: 0 5px;\n    @media (max-width: 780px) {\n      display: none;\n    }\n  }\n"]);return k=function(){return e},e}function O(){var e=Object(m.a)(["\n  font-family: 'Economica';\n  font-size: 1.3em;\n  color: white;\n  min-width: 100%;\n  max-width: 100%;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return O=function(){return e},e}var S=h.b.div(O()),z=h.b.div(k()),C=h.b.div(j()),H=h.b.div(E()),V=h.b.div(x()),T=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.stack,r=e.desc,i=(e.img,e.git),o=t.map(function(e){return a.a.createElement("span",null,e)});return a.a.createElement(S,{id:this.props.id},a.a.createElement(V,null,a.a.createElement("h1",null,n," "),a.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:"./img/GitHub-Light-64px.png",height:"30px",alt:""}))),a.a.createElement(z,null,o),a.a.createElement(H,null,a.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}}),a.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}}),a.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"black"}})),a.a.createElement(C,null,r))}}]),n}(r.Component),M=[{title:"nSuns Calculator",stack:["HTML/CSS","Javascript","React","Redux","Node/Express","SQL","Jest","Enzyme"],description:"This is a calculator for the nSuns workout program that interchangeably calculates your training and rep maxes. This app is a one stop shop for users to track their workouts and rests between sets. This app is also fully mobile responsive to make it available in the gym. Various presets of accessory work are available along with the option to create your own accessory plan. This webapp uses React/Redux and Styled Components for the front end with Node and SQL for the backend. The app uses JWT (JSON Web Tokens) to persist user authorization. Tests are written with Jest/Enzyme",img:"",github:"https://github.com/brianqian/nsuns-react",deployment:""},{title:"SnackTime",stack:["HTML/CSS","Javascript","React","Node/Express","SQL"],description:"A CRM platform built for parents and caretakers of young children. Snacktime provides a solution for busy parents and daycares by creating an easy way to transfer and log information. Has support for multiple organizations and families.",img:"",github:"https://github.com/brianqian/SnackTime",deployment:""},{title:"DevLab",stack:["HTML/CSS","Javascript","jQuery","Node/Express","SQL"],description:"DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources.",img:"",github:"https://github.com/brianqian/Dev-Lab",deployment:""},{title:"EventSpotter",stack:["HTML/CSS","Javascript","jQuery"],description:"DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources.",img:"",github:"https://github.com/brianqian/SpotifyEvents",deployment:""},{title:"Google Books API",stack:["HTML/CSS","Javascript","React","HTML","CSS","Node"],description:"A project done for 8th Light. A basic application that searches the Google Books API and cross references searches with Wikipedia.",img:"",github:"https://github.com/brianqian/8thlight-react",deployment:""}];function L(){var e=Object(m.a)(["\n  padding: 0 2em;\n  color: white;\n  font-family: 'Economica';\n  display: flex;\n  max-width: 100%;\n  user-select: none;\n  justify-content: space-evenly;\n  > * {\n    cursor: pointer;\n  }\n  @media (max-width: 780px) {\n    padding: 0;\n  }\n"]);return L=function(){return e},e}var B=h.b.div(L());var A=function(e){var n=e.children;return a.a.createElement(B,null,n)};function J(){var e=Object(m.a)(["\n  color: ",";\n"]);return J=function(){return e},e}function P(){var e=Object(m.a)(["\n  margin: 0;\n  scroll-snap-type: x mandatory;\n  display: flex;\n  width: 100%;\n  overflow: auto;\n  height: 90%;\n"]);return P=function(){return e},e}function R(){var e=Object(m.a)(["\n  max-width: 100%;\n  height: 100%;\n  grid-row: 2;\n  grid-column: 2;\n  overflow: auto;\n  background-color: #0c1820;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  @media (max-width: 780px) {\n    grid-column: 1;\n  }\n"]);return R=function(){return e},e}var I=h.b.div(R()),W=h.b.div(P()),Q=h.b.span(J(),function(e){return e.selected?"orange":"white"}),D=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={selectedProject:0,numOfProjects:0,width:0,runCount:0,resizeCount:0},t.componentDidMount=function(){t.setState({numOfProjects:M.length}),window.addEventListener("resize",function(){return t.onResize(t.adjustAlignment)})},t.onResize=function(){var e=document.getElementById("portfolio"),n=t.state.width,r=e.scrollWidth;r<n+50&&r>n-50||window.requestAnimationFrame(t.adjustAlignment)},t.adjustAlignment=function(){var e=document.getElementById("portfolio"),n=t.state,r=n.numOfProjects,a=n.selectedProject,i=e.scrollWidth/r;e.scrollLeft=i*a,e.scrollTop=0,t.setState({width:e.scrollWidth})},t.onScroll=function(e){e.stopPropagation();var n=e.target,r=n.scrollWidth/n.scrollLeft,a=Math.round(M.length/r);a!==t.state.selectedProject&&t.setState({selectedProject:a})},t.navBarOnClick=function(e){var n=document.getElementById("portfolio"),r=n.scrollWidth,a=t.state,i=a.selectedProject,o=r/a.numOfProjects*(e-i);n.scrollBy({left:o,behavior:"smooth"})},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=[],t=[];return M.forEach(function(r,i){n.push(a.a.createElement(Q,{onClick:function(){return e.navBarOnClick(i)},selected:e.state.selectedProject===i},r.title)),t.push(a.a.createElement(T,{id:"project-".concat(i),title:r.title,stack:r.stack,desc:r.description,git:r.github}))}),a.a.createElement(I,null,a.a.createElement(A,null,n),a.a.createElement(W,{id:"portfolio",onScroll:this.onScroll},t))}}]),n}(r.Component);function N(){var e=Object(m.a)(["\n  margin: 0;\n  width: 3rem;\n  display: flex;\n  grid-row: 1;\n  overflow: hidden;\n  max-height: 100%;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  flex-direction: column;\n  @media (max-width: 780px) {\n    grid-column: 2;\n  }\n  > li {\n    list-style: none;\n    padding: 1rem 0;\n    > img {\n      cursor: pointer;\n    }\n  }\n"]);return N=function(){return e},e}var q=h.b.div(N());var F=function(e){var n=e.selected,t=e.scrollFn;return a.a.createElement(q,null,a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(0)},src:"./img/circle-".concat(0===n?"fill":"outline","-white.svg"),height:"15px",alt:""})),a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(1)},src:"./img/circle-".concat(1===n?"fill":"outline","-white.svg"),height:"15px",alt:""})),a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(2)},src:"./img/circle-".concat(2===n?"fill":"outline","-white.svg"),height:"15px",alt:""})))};function G(){var e=Object(m.a)(["\n  min-height: 100%;\n  scroll-snap-align: start;\n"]);return G=function(){return e},e}var _=h.b.div(G()),K=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(_,{id:"contact"},a.a.createElement("p",null,"Contact me:"),a.a.createElement("p",null,"email:"),a.a.createElement("p",null,"github"),a.a.createElement("p",null,"linkedin"))}}]),n}(r.Component);function U(){var e=Object(m.a)(["\n  max-height: 100%;\n  overflow: auto;\n  scroll-snap-type: y mandatory;\n  grid-column: 2;\n  @media (max-width: 780px) {\n    grid-column: 1;\n  }\n"]);return U=function(){return e},e}function X(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 5% 90% 5%;\n  grid-template-rows: 100%;\n  background-color: #0c1821;\n  color: #d6bb33;\n  font-family: 'Cutive Mono';\n  font-size: 1.15em;\n  text-align: center;\n  align-self: center;\n  justify-self: center;\n  max-height: 95vh;\n  width: 95vw;\n  margin: auto;\n  border-radius: 20px;\n  border: 5px solid rgb(255, 255, 255);\n  box-sizing: border-box;\n  @media (max-width: 780px) {\n    grid-template-columns: 92% 8%;\n    min-width: 100vw;\n    min-height: 100vh;\n    border: none;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(m.a)(["\n  background-color: #263a47;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23648ca7' fill-opacity='0.13'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  background-repeat: repeat;\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  min-width: 100vw;\n"]);return Y=function(){return e},e}function Z(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n  min-height: 100vh;\n"]);return Z=function(){return e},e}function $(){var e=Object(m.a)(["\n@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Economica|Markazi+Text|Open+Sans');\nbody, html{\n  margin: 0;\n  font-size: 100%;\n}\n::-webkit-scrollbar {\n    width: 0px;\n    background: transparent;  \n}\n"]);return $=function(){return e},e}var ee=Object(h.a)($()),ne=h.b.div(Z()),te=h.b.div(Y()),re=h.b.div(X()),ae=h.b.div(U()),ie=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={selectedSection:0,scrollTop:0,numOfSections:3},t.selectActiveOnScroll=function(e){var n=e.target,r=n.scrollHeight,a=n.scrollTop,i=r/a,o=Math.round(t.state.numOfSections/i);o!==t.state.selectedSection&&t.setState({selectedSection:o,scrollTop:a})},t.navBarOnClick=function(e){var n=t.state,r=n.selectedSection,a=n.numOfSections,i=document.getElementById("content"),o=(e-r)*(i.scrollHeight/a);i.scrollBy({top:o,behavior:"smooth"})},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(ne,null,a.a.createElement(te,null),a.a.createElement(ee,null),a.a.createElement(re,null,a.a.createElement(F,{scrollFn:this.navBarOnClick,selected:this.state.selectedSection}),a.a.createElement(ae,{id:"content",onScroll:this.selectActiveOnScroll},a.a.createElement(w,null),a.a.createElement(D,null),a.a.createElement(K,null))))}}]),n}(r.Component);o.a.render(a.a.createElement(ie,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.32f7a129.chunk.js.map