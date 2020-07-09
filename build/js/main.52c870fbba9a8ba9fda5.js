(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,n,e){var a=e(103);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(37)(a,o);a.locals&&(t.exports=a.locals)},103:function(t,n,e){(t.exports=e(36)(!1)).push([t.i,"body {\n\tmargin: 0;\n\tfont-family: 'Roboto', sans-serif;\n}\n",""])},104:function(t,n,e){"use strict";e.r(n);var a=e(1),o=e.n(a),i=e(0),r=e.n(i),s=e(18),d=e.n(s),c=e(28),v=e(16),l=e(46),h=e.n(l),m=e(47),g=e.n(m);var p=t=>{let{component:n,auth:e}=t,a=g()(t,["component","auth"]);return r.a.createElement(v.b,h()({},a,{render:t=>e?r.a.createElement(n,t):o()(v.a,{to:{pathname:"/login",state:{from:t.location}}})}))},u=(e(63),e(49)),f=e.n(u),b=e(11),x=e.n(b),y=e(133),L=e(137),S=e(134),k=e(135),w=e(132),D=e(130),_=e(131),B=e(50),j=e.n(B),C=e(51),O=e.n(C);const Q=2e3;var F=o()("div",{},void 0,o()("p",{},void 0,"Crowdsourced Patient Databse API from"," ",o()("a",{href:"https://github.com/covid19india/api",target:"_blank"},void 0,"Covid19API"))),W=o()("div",{},void 0,o()("p",{},void 0,"Stay Home, Kids")),I=o()("div",{},void 0,o()("p",{},void 0,"Developed by"," ",o()("a",{href:"https://slarity.com",target:"_blank"},void 0,"Slarity")));const T=()=>o()("div",{className:x.a.footer},void 0,F,W,I),P={marginBottom:20};var U=o()(i.Fragment,{},void 0,o()(L.a,{style:P,animation:"wave",variant:"rect",height:40}),o()(L.a,{style:P,variant:"rect",height:40}),o()(L.a,{style:P,animation:"wave",variant:"rect",height:40}),o()(L.a,{style:P,variant:"rect",height:40}),o()(L.a,{style:P,animation:"wave",variant:"rect",height:40}),o()(L.a,{style:P,variant:"rect",height:40}));const X=()=>U;var G=o()(X,{}),H=o()(D.a,{},void 0,o()(_.a,{},void 0,o()(w.a,{},void 0,"Position"),o()(w.a,{},void 0,"State"),o()(w.a,{},void 0,"Active"),o()(w.a,{},void 0,"Confirmed"),o()(w.a,{},void 0,"Deaths"),o()(w.a,{},void 0,"Recovered")));const q=t=>{let{list:n,isLoading:e}=t;return e?G:o()(y.a,{container:!0,style:{overflow:"auto"}},void 0,o()(y.a,{item:!0,xs:12},void 0,o()(S.a,{className:x.a.covidTable},void 0,H,o()(k.a,{},void 0,n.map((t,n)=>o()(_.a,{},n,o()(w.a,{},void 0,n+1),o()(w.a,{},void 0,t.state),o()(w.a,{},void 0,t.active),o()(w.a,{},void 0,t.confirmed),o()(w.a,{},void 0,t.deaths),o()(w.a,{},void 0,t.recovered)))))))},E=t=>{let{data:n,isLoading:e}=t;return o()("div",{className:x.a.totalCounterBox},void 0,o()(z,{title:"Confirmed",count:n.confirmed,isLoading:e}),o()(z,{title:"Active",count:n.active,isLoading:e}),o()(z,{title:"Recovered",count:n.recovered,isLoading:e}),o()(z,{title:"Deaths",count:n.deaths,isLoading:e}))},z=t=>{let{title:n,count:e,isLoading:a}=t;if(!n||!e||a)return o()(L.a,{className:"".concat(x.a.countBox," ").concat(x.a.isGrey),animation:"wave",height:80});let i="";return"Confirmed"===n&&(i="isRed"),"Active"===n&&(i="isBlue"),"Recovered"===n&&(i="isGreen"),"Deaths"===n&&(i="isGrey"),o()("div",{className:"".concat(x.a.countBox," ").concat(x.a[i])},void 0,o()("h6",{},void 0,n),o()("h1",{},void 0,o()(j.a,{end:e})))};var A=o()("h1",{},void 0,"Knockout Stage"),V=o()("div",{}),K=o()("h1",{},void 0,"Poll Stage"),R=o()(T,{});class Y extends r.a.Component{constructor(t){super(t),this.setLoading=t=>{setTimeout(()=>{this.setState({isLoading:t||!1})},Q)},this.state={activeList:[],inactiveList:[],totalObject:{active:0,deaths:0,recovered:0,confirmed:0},isLoading:!0}}componentDidMount(){this.getData()}getData(){var t=this;return f()((function*(){try{const n="https://api.covid19india.org/data.json",e=yield O.a.get(n);if(200===e.status){const n=e.data,a=n&&n.statewise?n.statewise:[],{activeList:o,inactiveList:i,totalObject:r}=t.parseStateWiseData(a),s=o.sort((t,n)=>t.confirmed-n.confirmed);t.setState({activeList:s,inactiveList:i,totalObject:r})}else console.log("Something Went Wrong with Getting Data");t.setLoading()}catch(n){console.log("getDataErr",n),t.setLoading()}}))()}parseStateWiseData(t){try{let n=[],e=[],a=null;for(let o=0;o<t.length;o++){const i=t[o];"Total"!==i.state?i.active>0?n.push(i):e.push(i):a=i}return{activeList:n,inactiveList:e,totalObject:a}}catch(n){return console.log("parseStateWiseDataErr",n,t),{activeList:[],inactiveList:[],totalObject:{}}}}render(){const{isLoading:t,activeList:n,inactiveList:e,totalObject:a}=this.state;return o()(i.Fragment,{},void 0,o()("div",{className:x.a.homeContainer},void 0,o()("div",{},void 0,o()("h1",{className:x.a.headingText},void 0,"COVID 19 - India"),o()(E,{data:a,isLoading:t}),e.length>0?o()("div",{className:x.a.covidTableBox},void 0,A,o()(q,{list:e,isLoading:t})):V,o()("div",{className:x.a.covidTableBox},void 0,K,o()(q,{list:n,isLoading:t})))),R)}}var Z=Y,N=o()(p,{path:"/",component:Z,auth:!0});class J extends i.Component{constructor(t){super(t),this.state={}}render(){return o()(c.a,{},void 0,o()(v.d,{},location.pathname,N))}}var M=J,$=e(136),tt=e(138);let nt;class et extends r.a.Component{constructor(){super(...arguments),this.state={open:!1,message:"",variant:""},this.openSnackbar=t=>{let{message:n,variant:e}=t;this.setState({open:!0,message:n,variant:e})},this.handleSnackbarClose=()=>{this.setState({open:!1,message:""})}}componentDidMount(){nt=this.openSnackbar}componentWillUnmount(){nt=this.openSnackbar}getVariant(t){switch(t){case"success":return"#27ae60";case"warn":return"#f39c12";case"error":return"#c0392b";default:return"#34495e"}}render(){const{variant:t,message:n}=this.state;return o()($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3,onClose:this.handleSnackbarClose,open:this.state.open},void 0,o()(tt.a,{style:{backgroundColor:this.getVariant(t)},message:o()("span",{id:"client-snackbar"},void 0,n)}))}}var at=et,ot=(e(102),o()(r.a.Fragment,{},void 0,o()(at,{}),o()(M,{})));class it extends i.Component{constructor(t){super(t),this.state={}}render(){return ot}}var rt=it;e(4);class st extends i.Component{constructor(t){super(t),this.state={error:null,errorInfo:null,hasError:!1}}static getDrivedStateFromError(){return{hasError:!0}}componentDidCatch(t,n){this.setState({error:t,errorInfo:n})}render(){const{hasError:t,error:n,errorInfo:e}=this.state,{children:a}=this.props;return t?o()("div",{},void 0,o()("p",{},void 0,n)):a}}d.a.render(o()(st,{},void 0,o()(rt,{})),document.getElementById("root"))},11:function(t,n,e){var a=e(81);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(37)(a,o);a.locals&&(t.exports=a.locals)},81:function(t,n,e){(n=t.exports=e(36)(!1)).push([t.i,'p {\n  margin-block-start: 0;\n  margin-bottom: 5px;\n}\n\n._31QhKg6k95SzeFWkLh2SOB {\n  background-color: #ffffff;\n  font-family: "Montserrat";\n  padding: 5% 10%;\n}\n\n._3-qKQboizbr6_xSjUJS3eA {\n  font-weight: bold;\n}\n\n._1oBIFj7whJH9IGDrvDIXME {\n  display: block;\n}\n\n.bPPQfSnsZvjdXxxsrYULO {\n  min-height: 40px;\n  padding: 20px 30px;\n  margin: 20px 0;\n  border-radius: 15px;\n}\n\n.bPPQfSnsZvjdXxxsrYULO h1 {\n  font-size: 1.8rem;\n  font-weight: 600;\n  margin: 0;\n}\n\n.bPPQfSnsZvjdXxxsrYULO h6 {\n  font-size: 1em;\n  margin: 0 0 5px 0;\n}\n\n._3dFUw3VPbTaoF-cBmrzChh {\n  padding: 20px 0;\n}\n\nthead tr {\n  background-color: rgba(108, 117, 125, 0.0627451);\n}\n\nthead tr th {\n  font-weight: 600 !important;\n}\n\ntr:nth-of-type(even) {\n  background-color: rgba(108, 117, 125, 0.0627451);\n}\n\n.ltyvDpiOChF77At_K5hm3 {\n  background-color: rgba(255, 7, 58, 0.12549);\n  color: #ff073a;\n}\n\n._1FbEB5GgxRWfzhW2W4jZVv {\n  background-color: rgba(40, 167, 69, 0.12549);\n  color: #28a745;\n}\n\n._1j5DzAQnpZT1-AHWeVHBeS {\n  background-color: rgba(0, 123, 255, 0.0627451);\n  color: #007bff;\n}\n\n._3TYhKvyXbtGRBVl7G17YIm {\n  background-color: rgba(108, 117, 125, 0.0627451);\n  color: #6c757d;\n}\n\n._1mOQyeUW-3Fxq6mmqXQHkT {\n  padding: 5% 10%;\n  background-color: rgba(108, 117, 125, 0.0627451);\n  color: #6c757d;\n  font-family: "Montserrat";\n  text-align: center;\n}\n\n._1mOQyeUW-3Fxq6mmqXQHkT p {\n  margin: 20px 0px;\n}\n\n._1mOQyeUW-3Fxq6mmqXQHkT a {\n  color: #000;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 768px) {\n  ._1oBIFj7whJH9IGDrvDIXME {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .bPPQfSnsZvjdXxxsrYULO {\n    min-width: 100px;\n  }\n  ._1mOQyeUW-3Fxq6mmqXQHkT {\n    padding: 5% 10%;\n    display: flex;\n    justify-content: space-around;\n  }\n  ._1mOQyeUW-3Fxq6mmqXQHkT div {\n    flex-basis: 33%;\n  }\n}\n\n@media screen and (min-width: 981px) {\n  .bPPQfSnsZvjdXxxsrYULO {\n    min-width: 150px;\n  }\n}\n',""]),n.locals={homeContainer:"_31QhKg6k95SzeFWkLh2SOB",headingText:"_3-qKQboizbr6_xSjUJS3eA",totalCounterBox:"_1oBIFj7whJH9IGDrvDIXME",countBox:"bPPQfSnsZvjdXxxsrYULO",covidTableBox:"_3dFUw3VPbTaoF-cBmrzChh",isRed:"ltyvDpiOChF77At_K5hm3",isGreen:"_1FbEB5GgxRWfzhW2W4jZVv",isBlue:"_1j5DzAQnpZT1-AHWeVHBeS",isGrey:"_3TYhKvyXbtGRBVl7G17YIm",footer:"_1mOQyeUW-3Fxq6mmqXQHkT"}}},[[104,1,2]]]);
//# sourceMappingURL=main.52c870fbba9a8ba9fda5.js.map