(this.webpackJsonploanapp=this.webpackJsonploanapp||[]).push([[0],{53:function(e,t){e.exports=function(e,t){localStorage.setItem(t,JSON.stringify(e))}},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(14),l=c(22),o=c.n(l),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},j=(c(62),c(63),c(7)),d=c(18),b=c.n(d),h=c(23),u=c(9),O=c(51),x=c(10),p=c(42),m=c(17),f=c(32),g=c(35),v=(c(28),c(65),function(e){var t=e.color;return Object(n.jsx)("hr",{style:{color:t,backgroundColor:t,height:1}})}),y=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(null),o=Object(u.a)(l,2),i=o[0],j=o[1],d=Object(a.useState)(null),y=Object(u.a)(d,2),N=y[0],C=y[1],S=Object(a.useState)(null),w=Object(u.a)(S,2),D=w[0],L=w[1],k=Object(a.useState)(null),P=Object(u.a)(k,2),I=P[0],T=P[1],A=Object(a.useState)(null),H=Object(u.a)(A,2),B=H[0],Y=H[1],G=Object(a.useState)(null),M=Object(u.a)(G,2),W=M[0],R=M[1],J={name:i,email:I,bvn:D,phone:N,password:B,confirmPass:W},F=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(J)},e.next=4,fetch("".concat("https://loanappbe.herokuapp.com","/api/signup"),c);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,s(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:" parentDiv",children:Object(n.jsxs)(O.a,{fluid:"md",className:"p-5",children:[Object(n.jsx)("h1",{className:"header",children:"Welcome To Your Loan App"}),Object(n.jsxs)("div",{className:"formContainer",children:[Object(n.jsx)("h2",{children:"Please SignUp Here"}),Object(n.jsx)(v,{color:"#230480"}),Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formName",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"Name:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(x.a.Control,{required:!0,type:"text",value:i,onChange:function(e){return j(e.target.value)}})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formPhone",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"",children:"Phone:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(f.a.Prepend,{children:Object(n.jsx)(f.a.Text,{id:"inputGroupPrepend",children:"+234"})}),Object(n.jsx)(x.a.Control,{type:"text",placeholder:"8161814763",required:!0,value:N,onChange:function(e){return C(e.target.value)}})]})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formBVN",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"BVN:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(x.a.Control,{required:!0,type:"text",value:D,onChange:function(e){return L(e.target.value)}})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"Email:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(x.a.Control,{required:!0,type:"email",value:I,onChange:function(e){return T(e.target.value)}})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formPassword",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"Password:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(x.a.Control,{required:!0,type:"password",value:B,onChange:function(e){return Y(e.target.value)}})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formConfirmPassword",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"Confirm Password:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(x.a.Control,{required:!0,type:"password",value:W,onChange:function(e){return R(e.target.value)}})})]}),Object(n.jsx)(g.a,{type:"submit",variant:"signup",className:"btn-signup",disabled:c,onClick:F,block:!0,children:c?"Please Wait":"Register"}),Object(n.jsx)("div",{className:"d-flex justify-content-end mt-2",children:Object(n.jsxs)("p",{style:{fontSize:"14px"},children:["Already Registered?"," ",Object(n.jsx)("span",{style:{cursor:"pointer",color:"#230480"},children:Object(n.jsx)(r.b,{to:"/login",children:"Login"})})]})})]}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h6",{style:{color:!1===c.success?"red":"green"},children:c?c.message:null})})]})]})})},N=c(53),C=c.n(N),S=(c(72),function(){var e=Object(j.g)(),t=Object(a.useState)(""),c=Object(u.a)(t,2),s=c[0],l=c[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),d=i[0],y=i[1],N=Object(a.useState)(""),S=Object(u.a)(N,2),w=S[0],D=S[1],L={phone:s,password:d},k=function(){var t=Object(h.a)(b.a.mark((function t(c){var n,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)},t.next=4,fetch("".concat("https://loanappbe.herokuapp.com","/api/login"),n);case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,D(s),!0===s.success&&(C()(s,"loginData"),e.push("/dashboard"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return console.log(w),Object(n.jsx)("div",{className:"loginParentDiv",children:Object(n.jsx)(O.a,{className:"loginContainerDiv",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(m.a,{style:{paddingTop:"120px",color:"#fff"},md:4,children:Object(n.jsxs)("h4",{children:["How Much Loan ",Object(n.jsx)("br",{})," Do You Need Today?"]})}),Object(n.jsx)(m.a,{md:{span:5,offset:3},children:Object(n.jsxs)("div",{className:"loginFormDiv",children:[Object(n.jsx)("h2",{children:"Login Here"}),Object(n.jsx)(v,{color:"#230480"}),Object(n.jsxs)(x.a,{onSubmit:k,children:[Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formPhone",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"",children:"Phone:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(f.a.Prepend,{children:Object(n.jsx)(f.a.Text,{id:"inputGroupPrepend",children:"+234"})}),Object(n.jsx)(x.a.Control,{type:"text",placeholder:"8161814763",value:s,onChange:function(e){return l(e.target.value)}})]})})]}),Object(n.jsxs)(x.a.Group,{as:p.a,controlId:"formName",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:"3",children:"Password:"}),Object(n.jsx)(m.a,{sm:"9",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(x.a.Control,{required:!0,type:"password",value:d,onChange:function(e){return y(e.target.value)}})})})]}),Object(n.jsx)(g.a,{onClick:k,type:"submit",variant:"flat",className:"btn-flat",block:!0,children:"Login"}),Object(n.jsx)("div",{className:"d-flex justify-content-end mt-2",children:Object(n.jsxs)("p",{style:{fontSize:"14px"},children:["Not Registered?"," ",Object(n.jsx)("span",{style:{cursor:"pointer",color:"#230480"},children:Object(n.jsx)(r.b,{to:"/",children:"Sign Up"})})]})})]}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h6",{style:{color:"red"},children:w.success?null:w.message})})]})})]})})})}),w=c(54),D=c.n(w),L=c(80),k=c(79),P=c(55),I=(c(73),c.p+"static/media/mastercard.6aa8bd45.jpg"),T=c(26),A=c(27),H=c(43),B=function(e){var t=Object(a.useState)(!1),c=Object(u.a)(t,2),s=c[0],r=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(A.a,Object(T.a)(Object(T.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(n.jsx)(A.a.Header,{closeButton:!0,children:Object(n.jsx)(A.a.Title,{id:"contained-modal-title-vcenter",children:Object(n.jsx)("h4",{className:"text-center",children:"Add your card Details"})})}),Object(n.jsx)(A.a.Body,{children:Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"Card Number"}),Object(n.jsx)(x.a.Control,{type:"email",placeholder:"Enter Card Number",onKeyPress:function(e){return e.target.value=e.target.value.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ")}})]}),Object(n.jsxs)(x.a.Row,{children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"Expiry Month"}),Object(n.jsx)(x.a.Control,{type:"email",placeholder:"MM/YY"})]})}),Object(n.jsx)(m.a,{children:Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"CVV"}),Object(n.jsx)(x.a.Control,{type:"email",placeholder:"CVV"})]})})]})]})}),Object(n.jsx)(A.a.Footer,{children:Object(n.jsx)(g.a,{onClick:function(){e.onHide(),r(!0)},variant:"flat",className:"btn-flat",children:"Add Card"})})]})),s&&Object(n.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",minHeight:"100px",minWidth:"300px",top:30,right:230},children:Object(n.jsxs)(H.a,{delay:4e3,autohide:!0,show:s,onClose:function(){return r(!1)},style:{position:"absolute",top:0,right:0},children:[Object(n.jsx)(H.a.Header,{children:"Successfull!"}),Object(n.jsx)(H.a.Body,{children:"Your Card has been added successfully"})]})})]})},Y=c(56),G=c.n(Y),M=(c(74),function(e){var t=Object(a.useState)(""),c=Object(u.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)(!1),o=Object(u.a)(l,2),i=o[0],j=o[1],d=Object(a.useState)(3e3),O=Object(u.a)(d,2),p=O[0],f=O[1],y=Object(a.useState)(15),N=Object(u.a)(y,2),C=N[0],S=N[1];function w(e){return Number(e/100*C)}function D(e){var t=new Date(Date.now()+24*+e*60*60*1e3).toDateString().split(" "),c={day:t[0],month:t[1],date:t[2]};return"".concat(c.day,", ").concat(c.month," ").concat(c.date)}var L={principalAmount:p,interestAmount:w(p),amountDue:+p+w(p),dueDate:D(C),loanPeriod:"".concat(C," days")},k=function(){var t=Object(h.a)(b.a.mark((function t(){var c,n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("loginData")).token)},body:JSON.stringify(L)},t.next=3,fetch("".concat("https://loanappbe.herokuapp.com","/api/takeloan"),c);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,r(a),console.log(a),!0===a.success&&(j(!0),e.onHide());case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsxs)(A.a,Object(T.a)(Object(T.a)({},e),{},{keyboard:!1,backdrop:"static",size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(n.jsx)(A.a.Header,{closeButton:!0,children:Object(n.jsx)(A.a.Title,{id:"contained-modal-title-vcenter",children:Object(n.jsx)("h5",{className:"text-center",children:"Congratulations,you have been approved for a loan Please select a loan offer below."})})}),Object(n.jsxs)(A.a.Body,{children:[Object(n.jsxs)(x.a,{className:"mb-4",children:[Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{style:{fontWeight:"bolder"},children:"Select a Loan Amount:"}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{max:"15000",min:"3000",tooltip:"on",tooltipPlacement:"top",value:p,onChange:function(e){return f(e.target.value)},step:3e3}),Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(m.a,{className:"col-md-2",children:Object(n.jsx)(x.a.Control,{placeholder:p,disabled:!0})})})]}),Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{style:{fontWeight:"bolder"},children:"Select Your Loan Duration:"}),Object(n.jsx)(x.a.Row,{children:Object(n.jsx)(m.a,{className:"col-md-5",children:Object(n.jsxs)(x.a.Control,{as:"select",value:C,onChange:function(e){return S(e.target.value)},children:[Object(n.jsx)("option",{disabled:!0,children:"Select Duration"}),Object(n.jsx)("option",{value:"15",children:"15 days"}),Object(n.jsx)("option",{value:"30",children:"30 days"})]})})})]})]}),Object(n.jsx)(v,{color:"#230480"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{style:{fontWeight:"bolder"},children:"Loan details"}),Object(n.jsxs)("div",{style:{border:"#230480 2px dotted",borderRadius:"10px",padding:"10px"},children:[Object(n.jsxs)("div",{className:"loanDetailsMember",children:[Object(n.jsx)("p",{children:"Principal Amount"}),Object(n.jsxs)("h5",{children:["\u20a6","".concat(p)]})]}),Object(n.jsxs)("div",{className:"loanDetailsMember",children:[Object(n.jsx)("p",{children:"Interest"}),Object(n.jsxs)("h5",{children:[" ",Object(n.jsx)("span",{style:{fontSize:"12px",fontWeight:"normal"},children:"(".concat(C,"%)")})," ","\u20a6","".concat(w(p))]})]}),Object(n.jsxs)("div",{className:"loanDetailsMember",children:[Object(n.jsx)("p",{children:"Loan Amount Due"}),Object(n.jsxs)("h5",{children:["\u20a6","".concat(+p+w(p))]})]}),Object(n.jsxs)("div",{className:"loanDetailsMember",children:[Object(n.jsx)("p",{children:"Loan Period"}),Object(n.jsx)("h5",{children:"".concat(C," days")})]}),Object(n.jsxs)("div",{className:"loanDetailsMember",children:[Object(n.jsx)("p",{children:"Due Date"}),Object(n.jsx)("h5",{children:"".concat(D(C))})]})]})]})]}),Object(n.jsx)(A.a.Footer,{children:Object(n.jsx)(g.a,{onClick:k,variant:"flat",className:"btn-flat",children:"Confirm"})}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h6",{style:{color:"red"},children:!1===s.success?s.message:null})})]})),i&&Object(n.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",minHeight:"100px",minWidth:"350px",top:30,right:230},children:Object(n.jsxs)(H.a,{delay:8e3,autohide:!0,show:i,onClose:function(){return j(!1)},style:{position:"absolute",top:0,right:0},children:[Object(n.jsx)(H.a.Header,{children:"Successfull!"}),Object(n.jsx)(H.a.Body,{style:{color:"#230480",fontSize:"16px"},children:"Your Loan Has been Placed Successfully, Credit Alert is on Your Way"})]})})]})}),W=function(e){return function(){return JSON.parse(localStorage.getItem("loginData")).token?Object(n.jsx)(e,{}):Object(n.jsx)(j.a,{to:"/"})}},R={reference:(new Date).getTime(),email:"user@example.com",amount:2e4,publicKey:"pk_test_61b233a715355010831dd3c09fc9888ee64f6f3d"},J=W((function(){var e=JSON.parse(localStorage.getItem("loginData")),t=s.a.useState(!1),c=Object(u.a)(t,2),a=c[0],l=c[1],o=s.a.useState(!1),i=Object(u.a)(o,2),j=i[0],d=i[1],b=s.a.useState(!1),h=Object(u.a)(b,2),x=h[0],f=h[1],g=function(e){console.log(e),"success"===e.status&&f(!0)},v=function(){console.log("closed")},y=Object(P.a)(R),N=e.loan;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(O.a,{className:"p-4",children:[Object(n.jsx)(p.a,{className:"mt-5 py-4",children:Object(n.jsxs)("h2",{children:["Welcome ",e.user.name]})}),Object(n.jsxs)(p.a,{className:"py-4",children:[Object(n.jsx)(m.a,{md:5,children:Object(n.jsxs)(L.a,{style:{borderLeft:"#3b1e94 solid 6px",borderRadius:"16px"},className:"bg-dark text-white",children:[Object(n.jsx)(L.a.Img,{src:I,alt:"Card image",style:{borderRadius:"16px"}}),Object(n.jsx)(L.a.ImgOverlay,{children:Object(n.jsx)(L.a.Header,{children:Object(n.jsxs)(k.a,{variant:"flat",children:[Object(n.jsx)(k.a.Item,{className:"nav-item",children:Object(n.jsx)(k.a.Link,{className:"nav-link",href:"#first",children:"Home"})}),Object(n.jsx)(k.a.Item,{className:"nav-item",children:Object(n.jsx)(k.a.Link,{className:"nav-link",href:"#link",children:"Settings"})})]})})})]})}),Object(n.jsx)(m.a,{md:{span:4,offset:3},children:x||N.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"py-3",style:{textAlign:"center"},children:"We are here for you."}),Object(n.jsx)("div",{className:"getStarted",children:Object(n.jsx)(r.b,{onClick:function(){return d(!0)},className:"getStart",children:"Take a Loan"})})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"py-3",style:{textAlign:"center"},children:"You're credit worthy, please fill in your card details to begin taking loans"}),Object(n.jsx)("div",{onClick:function(){return l(!1)},className:"getStarted",children:Object(n.jsxs)(r.b,{className:"getStart",onClick:function(){y(g,v)},children:[" ","Add your card"," "]})})]})})]}),Object(n.jsx)(B,{keyboard:!1,backdrop:"static",show:a,onHide:function(){return l(!1)}}),Object(n.jsx)(M,{show:j,onHide:function(){return d(!1)}}),Object(n.jsx)("h4",{className:"text-center",children:"Your Loan History"})]}),Object(n.jsx)("div",{style:{width:"80%",margin:"0 auto"},children:Object(n.jsxs)("table",{className:"historyTable",children:[Object(n.jsx)("thead",{className:"",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Start Date"}),Object(n.jsx)("th",{children:"Amount"}),Object(n.jsx)("th",{children:"Interest"}),Object(n.jsx)("th",{children:"Amount Payable"}),Object(n.jsx)("th",{children:"Due Date"}),Object(n.jsx)("th",{children:"Loan Period"}),Object(n.jsx)("th",{children:"Loan Status"})]})}),Object(n.jsx)("tbody",{children:N.length>0?N.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:D()(new Date(e.startDate)).format("MMM D YYYY").toString()}),Object(n.jsx)("td",{children:e.principalAmount}),Object(n.jsx)("td",{children:e.interestAmount}),Object(n.jsx)("td",{children:e.amountDue}),Object(n.jsx)("td",{children:e.dueDate}),Object(n.jsx)("td",{children:e.loanPeriod}),Object(n.jsx)("td",{children:e.status})]})})):Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colspan:"7",children:Object(n.jsx)("h4",{children:"You have no loan history yet."})})})})]})})]})})),F=function(){return Object(n.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{marginTop:"20px",color:"#230480"},children:[Object(n.jsx)("path",{opacity:"0.3",fillRule:"evenodd",clipRrule:"evenodd",d:"M49.9999 91.6667C73.0118 91.6667 91.6666 73.0119 91.6666 50C91.6666 26.9881 73.0118 8.33334 49.9999 8.33334C26.9881 8.33334 8.33325 26.9881 8.33325 50C8.33325 73.0119 26.9881 91.6667 49.9999 91.6667Z",fill:"#65B765"}),Object(n.jsx)("path",{d:"M69.8707 32.5737C71.4408 30.8914 74.0774 30.8005 75.7597 32.3706C77.442 33.9408 77.5329 36.5774 75.9628 38.2597L46.7961 69.5097C45.2728 71.1419 42.7336 71.2832 41.0384 69.8302L26.4551 57.3302C24.7079 55.8327 24.5056 53.2022 26.0032 51.455C27.5008 49.7079 30.1312 49.5055 31.8784 51.0031L43.4292 60.9038L69.8707 32.5737Z",fill:"#65B765"})]})},q=(c(75),function(){return Object(n.jsx)("div",{className:"SuccessPage",children:Object(n.jsx)("div",{className:"SuccessBox",children:Object(n.jsxs)("div",{className:"Container",children:[Object(n.jsx)(F,{}),Object(n.jsxs)("p",{className:"text",children:["Your email address ",Object(n.jsx)("br",{}),"has been confirmed!"]}),Object(n.jsxs)(r.c,{to:"/login",children:[" ",Object(n.jsx)("button",{className:"doneBtn",children:"Done"})]})]})})})});var z=Object(j.h)((function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/",exact:!0,component:y}),Object(n.jsx)(j.b,{path:"/login",component:S}),Object(n.jsx)(j.b,{path:"/dashboard",component:J}),Object(n.jsx)(j.b,{path:"/loan",component:M}),Object(n.jsx)(j.b,{path:"/changepass",component:q})]})})}));c(76);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(z,{})})}),document.getElementById("root")),i(console.log)}},[[77,1,2]]]);
//# sourceMappingURL=main.7101bd90.chunk.js.map