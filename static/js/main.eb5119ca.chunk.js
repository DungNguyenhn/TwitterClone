(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(11),l=n.n(c),i=(n(18),n(8)),r=n(5),o=(n(19),n(7)),d=n(13),u=n(12),b=n(0);function h(e){var t=e.handleChange,n=e.placeholder,a=e.value;return Object(b.jsx)("textarea",{onChange:t,className:"textarea-post",placeholder:n,value:a})}function j(e){var t=e.placeholder,n=e.handleChange,a=e.lengthInput,s=e.value,c=250-a;return Object(b.jsxs)("div",{className:"textarea-wrap",children:[Object(b.jsx)(h,{handleChange:n,placeholder:t,value:s}),Object(b.jsx)("span",{className:"count-number-text",children:c})]})}function p(e){var t=e.value,n=e.classname,a=e.disable,s=e.handleClick,c=e.type;return Object(b.jsx)("div",{className:"btn-wrap",children:Object(b.jsxs)("button",{type:c,onClick:s,className:n,disabled:a,children:[t," "]})})}function m(e){var t=e.handleClick,n=Object(a.useState)({disableBtn:!0,inputData:""}),s=Object(r.a)(n,2),c=s[0],l=s[1],i=0;return void 0!==c.inputData&&(i=c.inputData.length),Object(b.jsx)("div",{className:"post-block",children:Object(b.jsxs)("form",{onSubmit:function(e){t(e,c.inputData),l({disableBtn:!0,inputData:""})},children:[Object(b.jsx)(j,{lengthInput:i,handleChange:function(e){!function(e){""!==e.target.value?l({disableBtn:!1,inputData:e.target.value}):l({disableBtn:!0,inputData:""})}(e),function(e){e.target.value.length>250&&l({disableBtn:!0,inputData:e.target.value})}(e)},placeholder:"Tweet about 30 Days Of React...",value:c.inputData}),Object(b.jsx)(p,{disable:c.disableBtn,value:"Add Post",classname:"".concat(c.disableBtn?"btn btn-disabled btn-add-post":"btn btn-active btn-add-post"),type:"submit"})]})})}function f(e){var t=e.username,n=e.tagname;return Object(b.jsxs)("div",{className:"top-user-block",children:[Object(b.jsx)("div",{className:"img-user-wrap",children:Object(b.jsx)("div",{className:"img-circle-wrap",children:Object(b.jsx)(o.a,{icon:d.a})})}),Object(b.jsxs)("div",{className:"user-name-wrap",children:[Object(b.jsx)("span",{children:t}),Object(b.jsx)("span",{children:n})]})]})}function v(e){var t=e.post;return Object(b.jsx)("div",{className:"content-text-wrap",children:Object(b.jsx)("p",{className:"content-text",children:t})})}function O(e){var t=e.dayPost,n=e.handleDelete,a=e.handleEdit,s=e.index;return Object(b.jsxs)("div",{className:"post-detail-wrap",children:[Object(b.jsxs)("div",{className:"post-icon-left",children:[Object(b.jsx)(o.a,{icon:u.a,onClick:function(){return a(s)}}),Object(b.jsx)(o.a,{icon:u.b,onClick:function(){return n(s)}})]}),Object(b.jsx)("div",{className:"date-posted",children:t})]})}function x(e){var t=e.username,n=e.tagname,s=e.post,c=e.dayPost,l=e.handleDelete,i=e.handleEdit,o=e.i,d=Object(a.useState)(!1),u=Object(r.a)(d,2),j=u[0],m=u[1],x=Object(a.useState)(s),g=Object(r.a)(x,2),y=g[0],D=g[1],N=y.replace(/\s\s\s+/g,"");return!1===j?Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{username:t,tagname:n}),Object(b.jsx)(v,{post:s}),Object(b.jsx)(O,{dayPost:c,handleDelete:l,handleEdit:function(){m(!0)},index:o})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)(h,{value:N,handleChange:function(e){D(e.target.value)}}),Object(b.jsxs)("div",{className:"btn-edit-wrap ",children:[Object(b.jsx)(p,{value:"Save",classname:"btn btn-small save-btn",handleClick:function(e){i(o,e,N),D(y),m(!1)},type:"submit"}),Object(b.jsx)(p,{value:"Cancel",classname:"btn btn-small cancel-btn",handleClick:function(e){D(s),m(!1)},type:"button"})]})]})}function g(e){var t=e.data,n=e.handleDelete,a=e.handleEdit,s=t.map((function(e,t){var s=e.username,c=e.tagname,l=e.post,i=e.dayPost;return Object(b.jsx)("div",{className:"user-post-block",children:Object(b.jsx)(x,{username:s,tagname:c,post:l,dayPost:i,handleDelete:n,i:t,handleEdit:a})},"".concat(s," + ").concat(t))}));return Object(b.jsx)("div",{children:s})}var y=function(){var e=function(){return(new Date).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},t=Object(a.useState)([{username:"user",tagname:"@user",post:"30 Days Of React challenge has been started on 1 October and still ongoing. \n        It will end the 30 October 2020. It was a real challenge for everyone. \n        Students learned quite a lot of concepts. I hope this will help lots of students.",dayPost:e()},{username:"user",tagname:"@user",post:"30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. \n         It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. \n         I hope this will help lots of students. JavaScript for Ever!",dayPost:e()},{username:"user",tagname:"@user",post:"30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.\n         It is of the best references for Pythonistas, data scientists and aspiring ML.\n        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",dayPost:e()},{username:"user",tagname:"@user",post:"30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.\n         It is of the best references for Pythonistas, data scientists and aspiring ML.\n        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",dayPost:e()},{username:"user",tagname:"@user",post:"I have no idea about the coming challenge. \n         It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.",dayPost:e()}]),n=Object(r.a)(t,2),s=n[0],c=n[1];return console.log("render lai nay"),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"main-wrap",children:[Object(b.jsx)(m,{handleClick:function(t,n){console.log("Submit xong"),t.preventDefault(),c([].concat(Object(i.a)(s),[{username:"Anonymous User",tagname:"@Anonymous",post:n,dayPost:e()}]))}}),Object(b.jsx)(g,{data:s,handleDelete:function(e){var t=Object(i.a)(s);t.splice(e,1),c(t)},handleEdit:function(e,t,n){t.preventDefault();var a=Object(i.a)(s);a[e].post=n,c(a)}})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),s(e),c(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),D()}},[[26,1,2]]]);
//# sourceMappingURL=main.eb5119ca.chunk.js.map