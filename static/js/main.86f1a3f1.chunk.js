(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={btn_del:"Style_btn_del__3izHy",contact_item:"Style_contact_item__16F5u"}},29:function(t,e,n){t.exports={label:"Style_label__kPIUp"}},58:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(12),i=n(13),s=n(16),b=n(14),l=n(3),j=n(8),d=n.n(j),f=n(6),O=n(9),h=n.n(O),p=n(2),m=Object(p.b)("contacts/fetchContactRequest"),_=Object(p.b)("contacts/fetchCotactSuccsess"),v=Object(p.b)("contacts/fetchContactError"),y=Object(p.b)("contacts/addContactRequest"),C=Object(p.b)("contacts/addCotactSuccsess"),x=Object(p.b)("contacts/addContactError"),g=Object(p.b)("contacts/deleteContactRequest"),S=Object(p.b)("contacts/deleteCotactSuccsess"),k=Object(p.b)("contacts/deleteContactError"),N=Object(p.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:3000";var w,A,q,z=n(11),L=function(t){return t.contacts.loading},E=function(t){return t.contacts.filter},R=function(t){return t.contacts.error},D=function(t){return t.contacts.items},F=Object(z.a)([D,E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),J=n(1),T=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleinput=function(e){t.setState(Object(l.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault();var n=!!t.props.value.find((function(e){return e.name===t.state.name}));n&&alert("".concat(t.state.name," is already in contacts")),!n&&t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(J.jsxs)("label",{className:d.a.label,children:[" Name",Object(J.jsx)("input",{className:d.a.input_name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleinput,value:this.state.name})]}),Object(J.jsxs)("label",{className:d.a.label,children:["Number",Object(J.jsx)("input",{className:d.a.input_tel,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleinput,value:this.state.number})]}),Object(J.jsx)("button",{type:"submit",className:d.a.btn_add,children:"Add contact"})]})}}]),n}(c.Component),Z=Object(f.b)((function(t){return{value:D(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(y()),h.a.post("/contacts",c).then((function(e){var n=e.data;return t(C(n))})).catch((function(e){return t(x(e))}))}}(e))}}}))(T),M=n(29),B=n.n(M),I=Object(f.b)((function(t){return{value:E(t)}}),(function(t){return{onChange:function(e){return t(N(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(J.jsxs)("label",{className:B.a.label,children:[" Find contacts by name",Object(J.jsx)("input",{type:"text",value:e,onChange:n})]})})),P=n(20),U=n.n(P),H=Object(f.b)((function(t){return{value:F(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return function(e){e(g()),h.a.delete("/contacts/".concat(t)).then((function(){return e(S(t))})).catch((function(t){return e(k(t))}))}}(e))}}}))((function(t){var e=t.value,n=t.onDeleteContact;return Object(J.jsx)("ul",{children:e.map((function(t){return Object(J.jsxs)("li",{className:U.a.contact_item,children:[t.name,": ",t.number," ",Object(J.jsx)("button",{type:"button",className:U.a.btn_del,onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})})),X=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(J.jsxs)("div",{children:[this.props.error&&Object(J.jsx)("h1",{children:"Error,please try later"}),this.props.isLoadingContacts&&Object(J.jsx)("h1",{children:"Loading..."}),Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(Z,{onSubmit:this.submitForm}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(I,{}),Object(J.jsx)(H,{})]})}}]),n}(c.Component),$=Object(f.b)((function(t){return{isLoadingContacts:L(t),error:R(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(m()),h.a.get("/contacts").then((function(e){var n=e.data;return t(_(n))})).catch((function(e){return t(v(e))}))}))}}}))(X),G=n(15),K=n(4),Q=Object(p.c)([],(w={},Object(l.a)(w,_,(function(t,e){return e.payload})),Object(l.a)(w,C,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(l.a)(w,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),V=Object(p.c)(!1,(A={},Object(l.a)(A,m,(function(){return!0})),Object(l.a)(A,_,(function(){return!1})),Object(l.a)(A,v,(function(){return!1})),Object(l.a)(A,y,(function(){return!0})),Object(l.a)(A,C,(function(){return!1})),Object(l.a)(A,x,(function(){return!1})),Object(l.a)(A,g,(function(){return!0})),Object(l.a)(A,S,(function(){return!1})),Object(l.a)(A,k,(function(){return!1})),A)),W=Object(p.c)("",Object(l.a)({},N,(function(t,e){return e.payload}))),Y=Object(p.c)(null,(q={},Object(l.a)(q,v,(function(t,e){return e.payload})),Object(l.a)(q,x,(function(t,e){return e.payload})),Object(l.a)(q,k,(function(t,e){return e.payload})),q)),tt=Object(K.b)({items:Q,filter:W,loading:V,error:Y}),et=n(7),nt=Object(G.a)(Object(p.d)({serializableCheck:{ignoredActions:[et.a,et.f,et.b,et.c,et.d,et.e]}})),ct=Object(p.a)({reducer:{contacts:tt},middleware:nt,devTools:!1});n(57);o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(f.a,{store:ct,children:Object(J.jsx)($,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={label:"Style_label__Zs0X2",input_name:"Style_input_name__1sq64",input_tel:"Style_input_tel__ewRfJ",btn_add:"Style_btn_add__26Nqh"}}},[[58,1,2]]]);
//# sourceMappingURL=main.86f1a3f1.chunk.js.map