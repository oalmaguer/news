(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{39:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),r=a(40),i=a.n(r),l=(a(51),a.p,a(18)),o=a(44),j=a(20),h=a(21),b=a(14),d=a(23),u=a(22),g=a(41),O=a.n(g),x=a(17),p=a(16),v=a(77),m=a(78),f=a(42),w=a(81),y=a(79),S=a(82),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={articles:[],user:"",rememberMe:!1,language:"",news:[]},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.getNews=n.getNews.bind(Object(b.a)(n)),n.handleLanguage=n.handleLanguage.bind(Object(b.a)(n)),n.handleStorage=n.handleStorage.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"clearStorage",value:function(){window.localStorage.clear()}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),t=JSON.parse(e);console.log(t),null!=t&&this.setState({news:t})}},{key:"handleStorage",value:function(e){alert("News Saved");var t=e.target.value,a=t.split("*");console.log(a),this.state.news.push(t);var n=this.state.news;console.log(Object(o.a)(this.state.news)),localStorage.setItem("user",JSON.stringify(n)),console.log(t),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({topic:e.target.value})}},{key:"handleLanguage",value:function(e){this.setState({language:e.target.value})}},{key:"getNews",value:function(e){var t=this;O.a.get("http://newsapi.org/v2/everything?q=".concat(this.state.topic,"&language=").concat(this.state.language,"&apiKey=").concat("23de237b3d5a45c2becdee407614db97","&pageSize=50")).then((function(e){var a=e.data.articles;console.log(a),t.setState({articles:a})})),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{children:[Object(n.jsx)("h1",{children:"Search news!"}),Object(n.jsx)("div",{className:"form justify-content-center",style:{width:"40rem",margin:"0 auto"},children:Object(n.jsxs)("form",{children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{placeholder:"Search topic","aria-label":"Recipient's username","aria-describedby":"basic-addon2",name:"user",style:{width:"20rem"},onChange:this.handleChange,value:this.state.topic}),Object(n.jsxs)(w.a.Control,{as:"select",onChange:this.handleLanguage,children:[Object(n.jsx)("option",{value:"en",children:"English"}),Object(n.jsx)("option",{value:"es",children:"Spanish"}),Object(n.jsx)("option",{value:"de",children:"German"}),Object(n.jsx)("option",{value:"fr",children:"French"})]})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{className:"search btn btn-primary",value:"submit",onClick:this.getNews,children:"Search"}),Object(n.jsx)("button",{className:"search btn btn-primary",style:{margin:"20px"},value:"submit",onClick:this.clearStorage,children:"Clear"}),Object(n.jsx)(p.b,{to:"/saved",state:this.state,children:"Saved News"})]}),Object(n.jsx)("p",{})]})})]}),Object(n.jsx)(y.a,{className:"justify-content-center",children:this.state.articles.map((function(t,a){var s,c;return Object(n.jsxs)(x.a,{style:{width:"18rem",padding:"10px",margin:"20px",borderRadius:"10px",boxShadow:"0 0 10px #999999",display:"flex",flexDirection:"column"},children:[Object(n.jsx)(x.a.Img,{variant:"top",src:t.urlToImage}),Object(n.jsxs)(x.a.Body,{children:[Object(n.jsx)(x.a.Title,{children:t.title}),Object(n.jsx)(x.a.Text,{children:t.content}),Object(n.jsxs)("footer",{className:"blockquote-footer",children:["Published by ",Object(n.jsxs)("cite",{title:"Source Title",children:[t.source.name," ",Object(n.jsx)("br",{})," ",new Date(t.publishedAt).toLocaleDateString()]})]}),Object(n.jsx)(S.a,(s={style:{marginTop:"auto"},variant:"primary",target:"__blank",href:t.url},Object(l.a)(s,"style",{width:"15rem"}),Object(l.a)(s,"children","Read article"),s)),Object(n.jsx)(S.a,(c={style:{marginTop:"auto"},variant:"success",className:"mt-2",value:t.url+" * "+t.title,onClick:e.handleStorage},Object(l.a)(c,"style",{width:"15rem"}),Object(l.a)(c,"children","Save article"),c))]})]},a)}))}),Object(n.jsx)(v.a,{})]})}}]),a}(c.a.Component),N=(a(39),a(80)),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newsArticles:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),t=JSON.parse(e);console.log(t),null!=t?this.setState({newsArticles:t}):console.log(this.state.news)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.b,{to:"/",state:this.state,children:"Go back"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(n.jsxs)(x.a,{style:{width:"25rem"},children:[Object(n.jsx)(x.a.Header,{children:"Your saved news"}),Object(n.jsx)(N.a,{variant:"flush",children:null!=this.state.newsArticles?this.state.newsArticles.map((function(e,t){return Object(n.jsx)(N.a.Item,{children:Object(n.jsxs)("a",{href:e.split("*",1),target:"__blank",children:[e.split("*").slice(1),Object(n.jsx)("br",{})]},t)})})):""})]})}),Object(n.jsx)("p",{})]})}}]),a}(s.Component),A=a(6);function D(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)("hr",{}),Object(n.jsxs)(A.c,{children:[Object(n.jsx)(A.a,{exact:!0,path:"/newsApp",children:Object(n.jsx)(k,{})}),Object(n.jsx)(A.a,{path:"/saved",children:Object(n.jsx)(C,{})})]})]})}var I=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{}),Object(n.jsx)(D,{})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),T()}},[[76,1,2]]]);
//# sourceMappingURL=main.6f411131.chunk.js.map