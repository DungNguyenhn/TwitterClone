(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(12),i=n.n(c),l=(n(18),n(9)),o=n(7),r=(n(19),n(3)),d=n(13),u=n(6),h=n(0);function b(e){var t=e.input,n=e.handleChange,a=e.placeholder,s=e.value;return Object(h.jsx)("textarea",{ref:t,onChange:n,className:"textarea-post",placeholder:a,value:s})}function j(e){var t=e.placeholder,n=e.input,a=e.handleChange,s=e.lengthInput,c=e.value,i=250-s;return Object(h.jsxs)("div",{className:"textarea-wrap",children:[Object(h.jsx)(b,{input:n,handleChange:a,placeholder:t,value:c}),Object(h.jsx)("span",{className:"count-number-text",children:i})]})}function p(e){var t=e.value,n=e.classname,a=e.disable,s=e.handleClick;return Object(h.jsx)("div",{className:"btn-wrap",children:Object(h.jsxs)("button",{onClick:s,className:n,disabled:a,children:[t," "]})})}function m(e){var t=e.handleClick,n=e.input,a=e.blockAddPost,s=e.handleChangeInput,c=0;return void 0!==a.inputData&&(c=a.inputData.length),Object(h.jsx)("div",{className:"post-block",children:Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)(j,{lengthInput:c,handleChange:s,input:n,placeholder:"Tweet about 30 Days Of React...",value:a.inputData}),Object(h.jsx)(p,{disable:a.disableBtn,value:"Add Post",classname:"".concat(a.disableBtn?"btn btn-disabled btn-add-post":"btn btn-active btn-add-post")})]})})}function O(e){var t=e.username,n=e.tagname;return Object(h.jsxs)("div",{className:"top-user-block",children:[Object(h.jsx)("div",{className:"img-user-wrap",children:Object(h.jsx)("div",{className:"img-circle-wrap",children:Object(h.jsx)(r.a,{icon:d.b})})}),Object(h.jsxs)("div",{className:"user-name-wrap",children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("span",{children:n})]})]})}function v(e){var t=e.post;return Object(h.jsx)("div",{className:"content-text-wrap",children:Object(h.jsx)("p",{className:"content-text",children:t})})}function f(e){var t=e.dayPost,n=e.handleDelete,a=e.handleEdit,s=e.index;return Object(h.jsxs)("div",{className:"post-detail-wrap",children:[Object(h.jsxs)("div",{className:"post-icon-left",children:[Object(h.jsx)(r.a,{icon:u.b,onClick:function(){return a(s)}}),Object(h.jsx)(r.a,{icon:u.d,onClick:function(){return n(s)}})]}),Object(h.jsxs)("div",{className:"post-icon-center",children:[Object(h.jsx)(r.a,{icon:u.a}),Object(h.jsx)(r.a,{icon:u.c}),Object(h.jsx)(r.a,{icon:d.a})]}),Object(h.jsx)("div",{className:"date-posted",children:t})]})}function g(e){var t=e.username,n=e.tagname,s=e.post,c=e.dayPost,i=e.handleDelete,l=e.handleEdit,r=e.i,d=e.input,u=Object(a.useState)(!1),j=Object(o.a)(u,2),m=j[0],g=j[1],x=Object(a.useState)(s),y=Object(o.a)(x,2),k=y[0],D=y[1],N=function(){g(!1),D(s)},P=k.replace(/\s\s\s+/g,"");return!1===m?Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{username:t,tagname:n}),Object(h.jsx)(v,{post:s}),Object(h.jsx)(f,{dayPost:c,handleDelete:i,handleEdit:function(){g(!0)},index:r})]}):Object(h.jsxs)("form",{onSubmit:function(){return N()},children:[Object(h.jsx)(b,{value:P,handleChange:function(){D(d.current.value)},input:d}),Object(h.jsxs)("div",{className:"btn-edit-wrap ",children:[Object(h.jsx)(p,{value:"Save",classname:"btn btn-small save-btn",handleClick:function(){return l(r)}}),Object(h.jsx)(p,{value:"Cancel",classname:"btn btn-small cancel-btn",handleClick:N})]})]})}function x(e){var t=e.data,n=e.handleDelete,a=e.handleEdit,s=e.input,c=t.map((function(e,t){var c=e.username,i=e.tagname,l=e.post,o=e.dayPost;return Object(h.jsx)("div",{className:"user-post-block",children:Object(h.jsx)(g,{username:c,tagname:i,post:l,dayPost:o,handleDelete:n,i:t,input:s,handleEdit:a})},"".concat(c," + ").concat(t))}));return Object(h.jsx)("div",{children:c})}var y=function(){var e=function(){return(new Date).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},t=Object(a.useState)([{username:"dunghutkhoi",tagname:"@dunghutkhoi",post:"30 Days Of React challenge has been started on 1 October and still ongoing. \n        It will end the 30 October 2020. It was a real challenge for everyone. \n        Students learned quite a lot of concepts. I hope this will help lots of students.",dayPost:e()},{username:"dunghutkhoi",tagname:"@dunghutkhoi",post:"30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. \n         It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. \n         I hope this will help lots of students. JavaScript for Ever!",dayPost:e()},{username:"dunghutkhoi",tagname:"@dunghutkhoi",post:"30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.\n         It is of the best references for Pythonistas, data scientists and aspiring ML.\n        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",dayPost:e()},{username:"dunghutkhoi",tagname:"@dunghutkhoi",post:"30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.\n         It is of the best references for Pythonistas, data scientists and aspiring ML.\n        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",dayPost:e()},{username:"dunghutkhoi",tagname:"@dunghutkhoi",post:"I have no idea about the coming challenge. \n         It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.",dayPost:e()}]),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)({disableBtn:!0,inputData:""}),r=Object(o.a)(i,2),d=r[0],u=r[1],b=Object(a.useRef)(null);return console.log("render lai nay"),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"main-wrap",children:[Object(h.jsx)(m,{blockAddPost:d,handleChangeInput:function(e){""!==e.target.value?u({disableBtn:!1,inputData:e.target.value}):u({disableBtn:!0,inputData:""})},input:b,handleClick:function(t){console.log("Submit xong"),t.preventDefault(),c([].concat(Object(l.a)(s),[{username:"Anonymous User",tagname:"@Anonymous",post:b.current.value,dayPost:e()}])),u({disableBtn:!0,inputData:""})}}),Object(h.jsx)(x,{data:s,handleDelete:function(e){var t=Object(l.a)(s);t.splice(e,1),c(t)},input:b,handleEdit:function(e){var t=Object(l.a)(s);t[e].post=b.current.value,c(t)}})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.2b1a248f.chunk.js.map