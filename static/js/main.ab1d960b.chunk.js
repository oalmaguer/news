(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{39:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),c=a.n(n),r=a(40),i=a.n(r),l=(a(51),a.p,a(14)),o=a(44),j=a(20),h=a(21),b=a(16),d=a(23),u=a(22),g=a(41),O=a.n(g),x=a(15),p=a.p+"static/media/noimage.09ea9f6b.png",v=a(18),m=a(77),f=a(78),w=a(42),y=a(81),S=a(79),k=a(82),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={articles:[],user:"",rememberMe:!1,language:"en",news:[]},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.getNews=s.getNews.bind(Object(b.a)(s)),s.handleLanguage=s.handleLanguage.bind(Object(b.a)(s)),s.handleStorage=s.handleStorage.bind(Object(b.a)(s)),s}return Object(h.a)(a,[{key:"clearStorage",value:function(){window.localStorage.clear()}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),t=JSON.parse(e);console.log(t),null!=t&&this.setState({news:t})}},{key:"handleStorage",value:function(e){alert("News Saved");var t=e.target.value,a=t.split("*");console.log(a),this.state.news.push(t);var s=this.state.news;console.log(Object(o.a)(this.state.news)),localStorage.setItem("user",JSON.stringify(s)),console.log(t),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({topic:e.target.value})}},{key:"handleLanguage",value:function(e){this.setState({language:e.target.value}),console.log(e.target.value)}},{key:"getNews",value:function(e){var t=this;O.a.get("http://api.mediastack.com/v1/news?access_key=fbda70b804223eba9a77a64b26c47c2b&keywords=".concat(this.state.topic,"&languages=").concat(this.state.language,"&sort=published_desc")).then((function(e){var a=e.data.data;console.log(a),console.log(a.length);var s=function(e,t){var a=[],s={};for(var n in e)s[e[n][t]]=e[n];for(n in s)a.push(s[n]);return a}(a,"title");console.log(s),t.setState({articles:s})})),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsx)("h1",{children:"Search news!"}),Object(s.jsx)("div",{className:"form justify-content-center",style:{width:"40rem",margin:"0 auto"},children:Object(s.jsxs)("form",{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)(w.a,{placeholder:"Search topic","aria-label":"Recipient's username","aria-describedby":"basic-addon2",name:"user",style:{width:"20rem"},onChange:this.handleChange,value:this.state.topic}),Object(s.jsxs)(y.a.Control,{as:"select",onChange:this.handleLanguage,children:[Object(s.jsx)("option",{value:"en",children:"English"}),Object(s.jsx)("option",{value:"es",children:"Spanish"}),Object(s.jsx)("option",{value:"de",children:"German"}),Object(s.jsx)("option",{value:"fr",children:"French"})]})]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"search btn btn-primary",value:"submit",onClick:this.getNews,children:"Search"}),Object(s.jsx)("button",{className:"search btn btn-primary",style:{margin:"20px"},value:"submit",onClick:this.clearStorage,children:"Clear"}),Object(s.jsx)(v.b,{to:"/saved",state:this.state,children:"Saved News"})]})]})})]}),Object(s.jsx)(S.a,{className:"justify-content-center",children:this.state.articles.map((function(t,a){var n,c,r,i;return Object(s.jsxs)(x.a,{style:{width:"20rem",padding:"10px",margin:"20px",borderRadius:"10px",boxShadow:"0 0 10px #999999",display:"flex",flexBasis:"auto"},children:[null!=t.image?Object(s.jsx)(x.a.Img,{style:{width:"100%",height:"250px"},variant:"top",src:t.image}):Object(s.jsx)(x.a.Img,{style:{width:"100%",height:"250px"},variant:"top",src:p}),";",Object(s.jsxs)(x.a.Body,{children:[Object(s.jsx)(x.a.Title,{children:t.title}),t.description.length>250?Object(s.jsxs)(x.a.Text,{children:["".concat(t.description.substring(0,250),"..."),Object(s.jsxs)("footer",{className:"blockquote-footer mt-5",children:["Published by ",Object(s.jsxs)("cite",{title:"Source Title",children:[t.source," ",Object(s.jsx)("br",{})," ",new Date(t.published_at).toLocaleDateString()]})]}),Object(s.jsx)(k.a,(n={style:{marginTop:"auto"},variant:"primary",target:"__blank",href:t.url},Object(l.a)(n,"style",{width:"15rem"}),Object(l.a)(n,"children","Read full article"),n)),Object(s.jsx)(k.a,(c={style:{marginTop:"auto"},variant:"success",className:"mt-2",value:t.url+" * "+t.title,onClick:e.handleStorage},Object(l.a)(c,"style",{width:"15rem"}),Object(l.a)(c,"children","Save article"),c))]}):Object(s.jsxs)(x.a.Text,{children:[t.description,Object(s.jsxs)("footer",{className:"blockquote-footer mt-5",children:["Published by ",Object(s.jsxs)("cite",{title:"Source Title",children:[t.source," ",Object(s.jsx)("br",{})," ",new Date(t.published_at).toLocaleDateString()]})]}),Object(s.jsx)(k.a,(r={style:{marginTop:"auto"},variant:"primary",target:"__blank",href:t.url},Object(l.a)(r,"style",{width:"15rem"}),Object(l.a)(r,"children","Go to the site"),r)),Object(s.jsx)(k.a,(i={style:{marginTop:"auto"},variant:"success",className:"mt-2",value:t.url+" * "+t.title,onClick:e.handleStorage},Object(l.a)(i,"style",{width:"15rem"}),Object(l.a)(i,"children","Save article"),i))]})]})]},a)}))}),Object(s.jsx)(m.a,{})]})}}]),a}(c.a.Component),C=(a(39),a(80)),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={newsArticles:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),t=JSON.parse(e);console.log(t),null!=t?this.setState({newsArticles:t}):console.log(this.state.news)}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{to:"/news",state:this.state,children:"Go back"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(s.jsxs)(x.a,{style:{width:"25rem"},children:[Object(s.jsx)(x.a.Header,{children:"Your saved news"}),Object(s.jsx)(C.a,{variant:"flush",children:null!=this.state.newsArticles?this.state.newsArticles.map((function(e,t){return Object(s.jsx)(C.a.Item,{children:Object(s.jsxs)("a",{href:e.split("*",1),target:"__blank",children:[e.split("*").slice(1),Object(s.jsx)("br",{})]},t)})})):""})]})}),Object(s.jsx)("p",{})]})}}]),a}(n.Component),_=a(6);function D(){return Object(s.jsxs)(v.a,{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)(_.c,{children:[Object(s.jsx)(_.a,{exact:!0,path:"/news",children:Object(s.jsx)(N,{})}),Object(s.jsx)(_.a,{path:"/saved",children:Object(s.jsx)(T,{})})]})]})}var I=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{}),Object(s.jsx)(D,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),L()}},[[76,1,2]]]);
//# sourceMappingURL=main.ab1d960b.chunk.js.map