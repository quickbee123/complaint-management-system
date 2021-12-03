(this["webpackJsonpcomplaint-management-system"]=this["webpackJsonpcomplaint-management-system"]||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),s=n.n(c),o=n(6),i=n.n(o),l=n(9),u=n(4),d=n(20),j=n(8),p=n(114),b=(n(89),n(11)),m=n(2),h=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1];return[r,function(e){c(Object(m.a)(Object(m.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))}]},f=n(118),O=n(111),x=n(1),v=function(e){var t=e.loginFunct,n=e.setActor,r=Object(j.f)();var c=h({name:"",userName:"",password:"",repeatPassword:"",phno:"",email:"",actor:"student"}),s=Object(u.a)(c,2),o=s[0],d=s[1],p=Object(a.useState)({name:"",username:"",password:"",repeatpassword:"",phno:"",email:"",final:""}),b=Object(u.a)(p,2),m=b[0],v=b[1];function g(){return(g=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)(f.a,{onSubmit:function(e){console.log(o),e.preventDefault();var a="",c="",s="",i="",l="",u="";if("student"===o.actor&&(""===o.phno?i="This field is required":10!==o.phno.length&&(i="Enter a valid phone number"),""===o.email?l="This field is required":o.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)||(l="Enter a valid email")),""===o.userName?a="This field is required":o.userName.length<5&&(a="Minimum 5 characters required"),""===o.name&&(s="This field is required"),""===o.password&&(c="This field is required"),""===o.repeatPassword&&(u="This field is required"),""!==o.password&&""!==o.repeatPassword&&(o.password!==o.repeatPassword?u="Passwords do not match":o.password.length<8&&(c="Minimum 8 characters required")),v({name:s,username:a,password:c,repeatpassword:u,phno:i,email:l}),""===a&&""===c&&""===s&&""===i&&""===l&&""===u){console.log(o),function(e,t){return g.apply(this,arguments)}("/register","student"===o.actor?{actor:o.actor,userName:o.userName,name:o.name,phno:o.phno,email:o.email,password:o.password}:{actor:o.actor,userName:o.userName,name:o.name,password:o.password}).then((function(e){"success"===e.variant?(localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("actor",o.actor),n(o.actor),t(),r("../home/",{replace:!0})):v({final:"* Username already exists"})}))}},className:"w-25 m-auto mt-5",children:[Object(x.jsxs)(f.a.Select,{className:"mb-3",name:"actor",value:o.actor,onChange:d,children:[Object(x.jsx)("option",{value:"student",children:"Student"}),Object(x.jsx)("option",{value:"department",children:"Department"})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Name"}),Object(x.jsx)(f.a.Control,{type:"text",onChange:d,name:"name",value:o.name,placeholder:"Name",isInvalid:!!m.name}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.name})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3 ",children:[Object(x.jsx)(f.a.Label,{children:"Username"}),Object(x.jsx)(f.a.Control,{type:"text",onChange:d,name:"userName",value:o.userName,placeholder:"Username",isInvalid:!!m.username}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.username})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3 ".concat("student"===o.actor?"":"d-none"),children:[Object(x.jsx)(f.a.Label,{children:"Phone no"}),Object(x.jsx)(f.a.Control,{type:"number",onChange:d,name:"phno",value:o.phno,placeholder:"Phone no",isInvalid:!!m.phno}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.phno})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3 ".concat("student"===o.actor?"":"d-none"),children:[Object(x.jsx)(f.a.Label,{children:"Email"}),Object(x.jsx)(f.a.Control,{type:"text",onChange:d,name:"email",value:o.email,placeholder:"Email",isInvalid:!!m.email}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.email})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Password"}),Object(x.jsx)(f.a.Control,{type:"password",onChange:d,name:"password",value:o.password,placeholder:"Password",isInvalid:!!m.password}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.password})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Confirm Password"}),Object(x.jsx)(f.a.Control,{type:"password",onChange:d,name:"repeatPassword",value:o.repeatPassword,placeholder:"Confirm Password",isInvalid:!!m.repeatpassword}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.repeatpassword})]}),Object(x.jsxs)(f.a.Group,{className:"position-absolute",children:[Object(x.jsx)(f.a.Control,{className:"d-none",isInvalid:!!m.final}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.final})]}),Object(x.jsx)(O.a,{variant:"primary",type:"submit",className:"mt-4",children:"Submit"})]})},g=function(e){var t=e.loginFunct,n=e.setActor;return Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(v,{loginFunct:t,setActor:function(e){return n(e)}})})},y=function(e){var t=e.loginFunct,n=e.setActor,r=Object(j.f)(),c=h({userName:"",password:"",actor:"student"}),s=Object(u.a)(c,2),o=s[0],d=s[1],p=Object(a.useState)({username:"",password:"",final:""}),b=Object(u.a)(p,2),m=b[0],v=b[1];function g(){return(g=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)(f.a,{onSubmit:function(e){if(e.preventDefault(),""===o.userName||""===o.password){var a="",c="";return""===o.userName&&(a="This field is required"),""===o.password&&(c="This field is required"),void v({username:a,password:c})}console.log(o),function(e,t){return g.apply(this,arguments)}("/login",o).then((function(e){"success"===(null===e||void 0===e?void 0:e.variant)?(console.log(e),localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("actor",o.actor),n(o.actor),t(),r("../home/",{replace:!0})):v({final:"* Username or password is incorrect"})}))},className:"w-25 m-auto mt-5",children:[Object(x.jsxs)(f.a.Select,{className:"mb-3",name:"actor",value:o.actor,onChange:d,children:[Object(x.jsx)("option",{value:"student",children:"Student"}),Object(x.jsx)("option",{value:"department",children:"Department"})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Username"}),Object(x.jsx)(f.a.Control,{type:"text",onChange:d,name:"userName",value:o.userName,placeholder:"Username",isInvalid:!!m.username}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.username})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Password"}),Object(x.jsx)(f.a.Control,{type:"password",onChange:d,name:"password",value:o.password,placeholder:"Password",isInvalid:!!m.password}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.password})]}),Object(x.jsxs)(f.a.Group,{className:"position-absolute",children:[Object(x.jsx)(f.a.Control,{className:"d-none",isInvalid:!!m.final}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:m.final})]}),Object(x.jsx)(O.a,{variant:"primary",type:"submit",className:"mt-4",children:"Submit"})]})},w=function(e){var t=e.loginFunct,n=e.setActor;return Object(x.jsx)("div",{children:Object(x.jsx)(y,{loginFunct:function(){return t()},setActor:function(e){return n(e)}})})},k=n(112),C=n(79),S=n(115),N=n(113),T=n(119),F=n(80),I=function(e){var t=e.initialCall,n=e.departments,r=e.routeLogin;function c(){return s.apply(this,arguments)}function s(){return s=Object(l.a)(i.a.mark((function e(){var t,n,a,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"/api/student/addcomplaint",n=c.length>1?c[1]:void 0,e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(n)});case 4:if(200===(a=e.sent).status){e.next=8;break}return r(),e.abrupt("return",null);case 8:return e.abrupt("return",a.json());case 9:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}Object(a.useEffect)((function(){console.log(n)}),[n]);var o=h({title:"",depId:"",description:""}),d=Object(u.a)(o,2),j=d[0],p=d[1],b=Object(a.useState)({department:"",title:"",description:""}),m=Object(u.a)(b,2),v=m[0],g=m[1],y=Object(a.useState)(!1),w=Object(u.a)(y,2),k=w[0],C=w[1],S=function(){C(!1),g({department:"",title:"",description:""})},N=function(){var e=Object(l.a)(i.a.mark((function e(n){var a,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="",r="",s="",""!==j.depId&&""!==j.title&&""!==j.description){e.next=10;break}return""===j.depId&&(a="Please select any department"),""===j.title&&(r="This field is required"),""===j.description&&(s="This field is required"),g({department:a,title:r,description:s}),n.preventDefault(),e.abrupt("return");case 10:return e.next=12,c("/api/student/addcomplaint",j);case 12:o=e.sent,console.log(o),C(!1),null!==o&&t();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"d-flex mt-3 justify-content-end",children:Object(x.jsx)(O.a,{variant:"primary",onClick:function(){return C(!0)},className:"mr-0 w-",children:"Add Complaint"})}),Object(x.jsx)(T.a,{show:k,onHide:S,centered:!0,size:"xl",children:Object(x.jsxs)(f.a,{onSubmit:N,children:[Object(x.jsx)(T.a.Header,{closeButton:!0,children:Object(x.jsx)(T.a.Title,{children:"Add Complaint"})}),Object(x.jsxs)(T.a.Body,{children:[Object(x.jsxs)(F.a,{label:"Department",className:"mb-3",children:[Object(x.jsxs)(f.a.Select,{name:"depId",value:j.depId,onChange:p,isInvalid:!!v.department,children:[Object(x.jsx)("option",{value:"",children:"Select Department"}),n.map((function(e){return Object(x.jsx)("option",{value:e[0],children:e[1]},e[0])}))]}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:v.department})]}),Object(x.jsx)(f.a.Group,{className:"mb-3",children:Object(x.jsxs)(F.a,{label:"Title",children:[Object(x.jsx)(f.a.Control,{type:"text",onChange:p,name:"title",value:j.title,placeholder:"Title",isInvalid:!!v.title}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:v.title})]})}),Object(x.jsxs)(F.a,{label:"Description",children:[Object(x.jsx)(f.a.Control,{as:"textarea",name:"description",value:j.description,onChange:p,placeholder:"Description",style:{height:"200px"},isInvalid:!!v.description}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:v.description})]})]}),Object(x.jsxs)(T.a.Footer,{children:[Object(x.jsx)(O.a,{variant:"secondary",onClick:S,children:"Close"}),Object(x.jsx)(O.a,{variant:"primary",type:"submit",children:"Add"})]})]})})]})},P=(n(93),function(e){var t=e.complaint;e.deleteFunct;return Object(x.jsxs)("div",{className:"complaint-item p-3 mt-3",children:[Object(x.jsx)("div",{className:"complaint-title",children:t["title: "]}),Object(x.jsx)("div",{className:"complaint-details mt-1 "+t["status: "],children:Object(x.jsxs)("div",{className:"complaint-status",children:[Object(x.jsx)("div",{className:"status-icon"}),Object(x.jsx)("div",{className:"status-text"})]})})]})}),D=function(e){e.actor;var t,n=e.list;return Object(a.useEffect)((function(){console.log(n)}),[n]),Object(x.jsx)(x.Fragment,{children:null===(t=n.complaints)||void 0===t?void 0:t.map((function(e){var t;return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row flex-box",children:Object(x.jsx)(d.b,(t={className:"col-8",to:"/home/complaint?id=".concat(e["complaint ID: "])},Object(b.a)(t,"className","text-decoration-none"),Object(b.a)(t,"children",Object(x.jsx)(P,{className:"col-8",complaint:e},e["complaint ID: "])),t))})})}))})},B=n(121),A=n(78),L=n(81),E=n(82),z=function(e){return Object(x.jsxs)(B.a,{className:"w-100 mr-0",children:[Object(x.jsx)(B.a.Text,{className:"bg-dark text-white",children:Object(x.jsx)(L.a,{icon:E.a})}),Object(x.jsx)(A.a,{placeholder:"Search complaint ...",onChange:e.nameChange})]})},G=function(e){return Object(x.jsx)(f.a,{className:"align-self-center my-2",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a.Check,{className:"mx-2",inline:!0,label:"Pending",name:"status",type:"checkbox",id:"checkbox1",value:"pending",defaultChecked:!0,onChange:e.statusChange}),Object(x.jsx)(f.a.Check,{className:"mx-2",inline:!0,label:"On Process",name:"status",type:"checkbox",id:"checkbox2",value:"onProcess",defaultChecked:!0,onChange:e.statusChange}),Object(x.jsx)(f.a.Check,{className:"mx-2",inline:!0,label:"Resolved",name:"status",type:"checkbox",id:"checkbox3",value:"resolved",defaultChecked:!0,onChange:e.statusChange}),Object(x.jsx)(f.a.Check,{className:"mx-2",inline:!0,label:"Rejected",name:"status",type:"checkbox",id:"checkbox4",value:"rejected",defaultChecked:!0,onChange:e.statusChange})]})})},q=n(66),H=n.n(q),J=function(e){var t=e.logoutFunct,n=e.actor,r=Object(j.f)(),c=Object(a.useState)({complaints:[],avgRating:0}),s=Object(u.a)(c,2),o=s[0],d=s[1],p=Object(a.useState)(!1),h=Object(u.a)(p,2),f=h[0],O=h[1],v=Object(a.useState)(""),g=Object(u.a)(v,2),y=g[0],w=g[1],T=Object(a.useState)({pending:!0,onProcess:!0,resolved:!0,rejected:!0}),F=Object(u.a)(T,2),P=F[0],B=F[1],A=Object(a.useState)({complaints:[]}),L=Object(u.a)(A,2),E=L[0],q=L[1],J=Object(a.useState)([[]]),R=Object(u.a)(J,2),U=R[0],M=R[1];function _(){t(),r("../",{replace:!0})}function Y(){return(Y=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t.target.value);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},t.target.value,t.target.checked))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.complaints.filter((function(e){return(""===y||e["title: "].toLowerCase().startsWith(y.toLowerCase()))&&P[e["status: "]]})),q((function(e){return Object(m.a)(Object(m.a)({},e),{},{complaints:t})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return Q.apply(this,arguments)}function Q(){return Q=Object(l.a)(i.a.mark((function e(){var t,a,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"student"===n?"/api/student/getcomplaints":"/api/department/getcomplaints",e.next=3,fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}});case 3:if(200!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.json());case 8:return _(),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function V(){return X.apply(this,arguments)}function X(){return X=Object(l.a)(i.a.mark((function e(){var t,n,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"/api/student/addcomplaint",e.next=3,fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}var Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("accessToken")){e.next=3;break}return _(),e.abrupt("return");case 3:return e.next=5,K();case 5:if(t=e.sent,d(t),O(!0),q(t),"student"!==n){e.next=14;break}return e.next=12,V();case 12:a=e.sent,M(a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Z()}),[]),Object(a.useEffect)((function(){!function(){$.apply(this,arguments)}()}),[y,P]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k.a,{className:"mt-4",children:[Object(x.jsx)(C.a,{sm:7,children:Object(x.jsx)(z,{nameChange:function(e){return Y.apply(this,arguments)}})}),Object(x.jsx)(C.a,{className:"d-flex justify-content-end",children:Object(x.jsx)(G,{statusChange:function(e){return W.apply(this,arguments)}})})]}),"student"===n&&Object(x.jsx)(I,{initialCall:function(){return Z()},departments:U,routeLogin:function(){return _()}}),f&&"department"===n&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(S.a,{placement:"right",overlay:Object(x.jsx)(N.a,{children:o.avgRating.toFixed(2)}),children:Object(x.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(x.jsx)("b",{className:"m-2",children:"Rating"}),Object(x.jsx)(H.a,{count:5,value:o.avgRating.toFixed(2),edit:!1,isHalf:!0,size:24,activeColor:"#ffd700"})]})},"1")}),E.complaints.length&&Object(x.jsx)(D,{actor:n,list:E})||Object(x.jsx)("i",{children:"No Data found"})]})},R=function(e){var t=Object(j.f)();function n(){e.logoutFunct(),t("../../",{replace:!0})}var r=h({description:e.complaint.description}),c=Object(u.a)(r,2),s=c[0],o=c[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),b=p[0],m=p[1],v=function(){m(!1),s.description=e.complaint.description},g=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),m(!1),console.log(s),a={complaint_id:e.complaint.id,description:s.description},t.next=6,y("/api/student/editcomplaint",a);case 6:r=t.sent,console.log(r),null!==r&&e.logID();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(a)});case 2:if(200===(r=e.sent).status){e.next=6;break}return n(),e.abrupt("return",null);case 6:return e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){localStorage.getItem("accessToken")||n()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.a,{variant:"primary",onClick:function(){return m(!0)},className:"m-3 px-3",children:"Edit"}),Object(x.jsx)(T.a,{show:b,onHide:v,centered:!0,size:"lg",children:Object(x.jsxs)(f.a,{onSubmit:g,children:[Object(x.jsx)(T.a.Header,{closeButton:!0,children:Object(x.jsx)(T.a.Title,{children:"Edit Complaint"})}),Object(x.jsx)(T.a.Body,{children:Object(x.jsx)(F.a,{label:"Description",children:Object(x.jsx)(f.a.Control,{as:"textarea",name:"description",value:s.description,onChange:o,placeholder:"Description",style:{height:"200px"}})})}),Object(x.jsxs)(T.a.Footer,{children:[Object(x.jsx)(O.a,{variant:"secondary",onClick:v,children:"Close"}),Object(x.jsx)(O.a,{variant:"primary",type:"submit",children:"Save"})]})]})})]})},U=n(120),M=function(e){var t=Object(j.f)();Object(a.useEffect)((function(){b(e.resubmit)}),[e.resubmit]);var n=h({comment:""}),r=Object(u.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(e.resubmit),d=Object(u.a)(o,2),p=d[0],b=d[1],m=Object(a.useState)(!1),v=Object(u.a)(m,2),g=v[0],y=v[1],w=function(){y(!1),e.submitRating()},k=function(){var n=Object(l.a)(i.a.mark((function n(a){var r,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),console.log(c),r={complaint_id:e.complaint.id,comment:c.comment},n.next=5,C("/api/student/resubmitcomplaint",r);case 5:s=n.sent,console.log(s),null!==s&&t("../home",{replace:!0});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(i.a.mark((function t(n,a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(a)});case 2:if(200===(r=t.sent).status){t.next=6;break}return e.routeLogin(),t.abrupt("return",null);case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(T.a,{show:p,onHide:w,centered:!0,children:Object(x.jsxs)(f.a,{onSubmit:k,children:[Object(x.jsx)(T.a.Header,{closeButton:!0,children:Object(x.jsx)(T.a.Title,{children:"Re-Submit Complaint"})}),Object(x.jsxs)(T.a.Body,{children:[!g&&Object(x.jsx)("div",{children:"Your rating seems to be too low. Do you want to re-submit the complaint?"}),g&&Object(x.jsx)(F.a,{label:"Comment",children:Object(x.jsx)(f.a.Control,{as:"textarea",name:"comment",value:c.comment,onChange:s,placeholder:"Comment",style:{height:"100px"}})})]}),Object(x.jsxs)(T.a.Footer,{children:[!g&&Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{variant:"primary",className:"mx-1",onClick:w,children:"No"}),Object(x.jsx)(O.a,{variant:"primary",className:"mx-1",onClick:function(){y(!0)},children:"Yes"})]}),g&&Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{variant:"primary",className:"mx-1",onClick:w,children:"Close"}),Object(x.jsx)(O.a,{variant:"success",className:"mx-1",onClick:k,children:"ReSubmit"})]})]})]})})})},_=function(e){var t=e.complaint,n=e.routeLogin,r=Object(j.f)();var c=Object(a.useState)(0),s=Object(u.a)(c,2),o=s[0],d=s[1],p=Object(a.useState)(!1),b=Object(u.a)(p,2),m=b[0],h=b[1],f=function(){var e=Object(l.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),n={id:t.id,stars:o},e.next=4,g("/api/student/rate",n);case 4:a=e.sent,console.log(a),r("../home",{replace:!0});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o<=2?h(!0):f();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(a)});case 2:if(200===(r=e.sent).status){e.next=6;break}return n(),e.abrupt("return",null);case 6:return e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(U.a,{className:"mt-5 text-center w-50",children:[Object(x.jsx)(U.a.Header,{className:"bg-dark text-white",children:"Feedback"}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Text,{children:"Rate from 1-5"}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(H.a,{count:5,onChange:function(e){d(e)},size:30,activeColor:"#ffd700"})}),Object(x.jsx)(O.a,{onClick:v,className:"mt-3",children:"Submit"})]})]}),Object(x.jsx)(M,{submitRating:f,resubmit:m,routeLogin:function(){return n()},complaint:t})]})},Y=function(e){var t=e.complaint,n=e.logoutFunct,r=e.logID,c=Object(j.f)(),s=Object(a.useState)([[]]),o=Object(u.a)(s,2),d=o[0],p=o[1];function b(){n(),c("../../",{replace:!0})}var m=h({status:t.status}),v=Object(u.a)(m,2),g=v[0],y=v[1],w=function(){N(!1),g.status=t.status},k=Object(a.useState)(!1),C=Object(u.a)(k,2),S=C[0],N=C[1],I=function(){var e=Object(l.a)(i.a.mark((function e(n){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),N(!1),a={complaint_id:t.id,status:g.status},e.next=5,P("/api/department/editstatus",a);case 5:c=e.sent,console.log(c),null!==c&&r();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function P(e,t){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(n)});case 2:if(200===(a=e.sent).status){e.next=6;break}return b(),e.abrupt("return",null);case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return A.apply(this,arguments)}function A(){return A=Object(l.a)(i.a.mark((function e(){var t,n,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"/api/department/editstatus",e.next=3,fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}});case 3:return 200!==(n=e.sent).status&&b(),e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}var L=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.getItem("accessToken")?L():b()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.a,{variant:"primary",onClick:function(){return N(!0)},className:"mr-0 mt-3",children:"Edit Status"}),Object(x.jsx)(T.a,{show:S,onHide:w,centered:!0,children:Object(x.jsxs)(f.a,{onSubmit:I,children:[Object(x.jsx)(T.a.Header,{closeButton:!0,children:Object(x.jsx)(T.a.Title,{children:"Edit Status"})}),Object(x.jsx)(T.a.Body,{children:Object(x.jsx)(F.a,{label:"Status",children:Object(x.jsxs)(f.a.Select,{className:"mb-3",name:"status",value:g.status,onChange:y,children:[Object(x.jsx)("option",{value:"",children:"--Select Status--"}),d.map((function(e){return Object(x.jsx)("option",{value:e[0],children:e[0]},e[0])}))]})})}),Object(x.jsxs)(T.a.Footer,{children:[Object(x.jsx)(O.a,{variant:"secondary",onClick:w,children:"Close"}),Object(x.jsx)(O.a,{variant:"primary",type:"submit",children:"Save"})]})]})})]})},W=(n(99),function(){var e=Object(j.f)();return Object(x.jsx)("div",{class:"back-button",onClick:function(){e("../home",{replace:!0})},children:Object(x.jsxs)("div",{class:"arrow-wrap",children:[Object(x.jsx)("span",{class:"arrow-part-1"}),Object(x.jsx)("span",{class:"arrow-part-2"}),Object(x.jsx)("span",{class:"arrow-part-3"})]})})}),$=function(e){var t=Object(j.f)();function n(){e.logoutFunct(),t("../../",{replace:!0})}var r=Object(a.useState)(!1),c=Object(u.a)(r,2),s=c[0],o=c[1],d=function(){o(!1)},p=function(){var e=Object(l.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b("/api/student/deletecomplaint",{id:a});case 3:r=e.sent,o(!1),console.log(r),"Complaint deleted successfully"!==r.message?n():t("../",{replace:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function b(e,t){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(n)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){localStorage.getItem("accessToken")||n()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.a,{variant:"danger",onClick:function(){return o(!0)},className:"m-3 px-2",children:"Delete"}),Object(x.jsxs)(T.a,{show:s,onHide:d,centered:!0,children:[Object(x.jsx)(T.a.Header,{closeButton:!0,children:Object(x.jsx)(T.a.Title,{children:"Delete Complaint"})}),Object(x.jsx)(T.a.Body,{children:"Are you sure you want to delete this complaint?"}),Object(x.jsxs)(T.a.Footer,{children:[Object(x.jsx)(O.a,{variant:"secondary",onClick:d,children:"Close"}),Object(x.jsx)(O.a,{variant:"danger",onClick:function(){return p(e.complaint.id)},children:"Delete"})]})]})]})},K=(n(100),function(e){var t=e.logoutFunct,n=e.actor,r=Object(j.f)();function c(){t(),r("../../",{replace:!0})}var s=Object(a.useState)({}),o=Object(u.a)(s,2),d=o[0],p=o[1],b=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(v),0===v){e.next=7;break}return e.next=4,m("student"===n?"/api/student/getdescriptions":"/api/department/getdescriptions",{complaint_id:v});case 4:t=e.sent,console.log(t),p({depId:t.depId,description:t.description,feedback:t.feedback,id:t.id,stars:t.stars,status:t.status,title:t.title});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function m(e,t){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(n)});case 2:if(200===(a=e.sent).status){e.next=6;break}return c(),e.abrupt("return",null);case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=Object(a.useState)(0),O=Object(u.a)(f,2),v=O[0],g=O[1],y=Object(j.e)();return Object(a.useEffect)((function(){!function(){var e=y.search.split("=")[1];g(e)}()}),[]),Object(a.useEffect)((function(){b()}),[v]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(W,{}),Object(x.jsxs)("div",{className:"w-75 m-auto",children:[Object(x.jsxs)("h2",{className:"pl-0 my-4",children:[d.title,Object(x.jsx)("span",{className:"title-status "+d.status})]}),Object(x.jsx)("p",{children:d.description}),d.feedback&&Object(x.jsxs)("div",{className:"comment",children:[Object(x.jsx)("b",{children:"Comments"}),Object(x.jsx)("p",{children:d.feedback})]}),"student"===n&&"pending"===d.status&&Object(x.jsxs)("div",{className:"d-flex mt-5 justify-content-end",children:[Object(x.jsx)(R,{complaint:d,logoutFunct:function(){return t()},logID:function(){return b()}}),Object(x.jsx)($,{complaint:d,logoutFunct:function(){return t()}})]}),"student"===n&&"resolved"===d.status&&Object(x.jsx)("div",{className:"d-flex justify-content-around mt-5",children:Object(x.jsx)(_,{complaint:d,routeLogin:function(){return c()}})}),"department"===n&&Object(x.jsx)("div",{className:"d-flex mt-5 justify-content-end",children:Object(x.jsx)(Y,{complaint:d,logoutFunct:function(){return t()},logID:function(){return b()}})})]})]})}),Q=n(117),V=n(116),X=function(e){var t=e.log,n=e.logoutFunct;return Object(x.jsxs)(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(x.jsx)(Q.a.Brand,{as:d.b,to:"/",children:"CMS"}),Object(x.jsx)(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(Q.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:[!t&&Object(x.jsxs)(V.a,{children:[Object(x.jsx)(V.a.Link,{as:d.b,to:"/",children:"Login"}),Object(x.jsx)(V.a.Link,{as:d.b,to:"/register",children:"Register"})]}),t&&Object(x.jsx)(V.a,{children:Object(x.jsx)(V.a.Link,{as:d.b,onClick:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),to:"/",children:"Logout"})})]})]})};var Z=function(){var e=Object(a.useState)(localStorage.getItem("log")||!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(localStorage.getItem("actor")||"student"),s=Object(u.a)(c,2),o=s[0],b=s[1],m=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/logout",t={actor:localStorage.getItem("actor")},e.next=4,h("/logout",t);case 4:n=e.sent,console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(n)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(X,{log:n,logoutFunct:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:r(0);case 3:case"end":return e.stop()}}),e)})))}),Object(x.jsx)(p.a,{className:"container",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/register",element:Object(x.jsx)(g,{loginFunct:function(){r(1),localStorage.setItem("log",1)},setActor:function(e){return b(e)}})}),Object(x.jsx)(j.a,{path:"/home/",element:Object(x.jsx)(J,{logoutFunct:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:r(0),localStorage.clear();case 4:case"end":return e.stop()}}),e)}))),actor:o})}),Object(x.jsx)(j.a,{path:"/home/complaint",element:Object(x.jsx)(K,{logoutFunct:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:r(0),localStorage.clear();case 4:case"end":return e.stop()}}),e)}))),actor:o})}),Object(x.jsx)(j.a,{path:"/",element:Object(x.jsx)(w,{loginFunct:function(){r(1),localStorage.setItem("log",1)},setActor:function(e){return b(e)}})})]})})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(103),n(104);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root")),ee()},89:function(e,t,n){},93:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.2c32a921.chunk.js.map