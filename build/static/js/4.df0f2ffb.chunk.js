(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__2ZFSf"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__1uvaw",loading:"QuoteForm_loading__3aC69",control:"QuoteForm_control__1yUHV",actions:"QuoteForm_actions__2Tc0e"}},54:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(1),a=c(22),r=c(45),s=c.n(r),u=c(0),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(o.useState)(!1),c=Object(a.a)(t,2),r=c[0],s=c[1],d=Object(o.useRef)(),b=Object(o.useRef)();return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)(n.a,{when:r,message:function(e){return"Are you sure you want to leave? All your data will be lost"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(20),h=c(21);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,a=Object(n.h)();Object(o.useEffect)((function(){"completed"===c&&a.push("/quotes")}),[c,a]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.df0f2ffb.chunk.js.map