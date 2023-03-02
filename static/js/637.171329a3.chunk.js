"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[637],{9637:function(a,r,e){e.r(r),e.d(r,{default:function(){return y}});var n,t=e(5705),o=e(6727),i=e(1087),l=e(4281),p=e(1588),s=e(890),u=e(168),m=e(6088).Z.form(n||(n=(0,u.Z)(["\n  display: flex;\n  max-width: 350px;\n  gap: 20px;\n  flex-direction: column;\n"]))),h=e(9434),d=e(9273),g=e(184),c=o.Ry({name:o.Z_("Enter your name").required("Name is required"),email:o.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:o.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),v=function(){var a=(0,h.I0)(),r=(0,t.TA)({initialValues:{name:"",email:"",password:""},validationSchema:c,onSubmit:function(r,e){var n=e.resetForm;a(d.z2(r)),n()}});return(0,g.jsxs)(m,{onSubmit:r.handleSubmit,children:[(0,g.jsx)(p.Z,{id:"name",type:"text",label:"Name",variant:"outlined",name:"name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name)}),(0,g.jsx)(p.Z,{id:"email",type:"email",label:"E-mail",variant:"outlined",name:"email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),(0,g.jsx)(p.Z,{id:"password",type:"password",label:"Password",variant:"outlined",name:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.email&&r.errors.email}),(0,g.jsx)(l.Z,{variant:"contained",type:"submit",children:"Regisater"}),(0,g.jsxs)(s.Z,{variant:"p",children:["If you already have an account ",(0,g.jsx)(i.rU,{to:"/login",children:"Log in"})]})]})},y=function(){return(0,g.jsx)(v,{})}},890:function(a,r,e){e.d(r,{Z:function(){return Z}});var n=e(3366),t=e(7462),o=e(2791),i=e(8182),l=e(8519),p=e(4419),s=e(6934),u=e(1402),m=e(4036),h=e(5878),d=e(1217);function g(a){return(0,d.Z)("MuiTypography",a)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var c=e(184),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(a,r){var e=a.ownerState;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,m.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((function(a){var r=a.theme,e=a.ownerState;return(0,t.Z)({margin:0},e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(a,r){var e=(0,u.Z)({props:a,name:"MuiTypography"}),o=function(a){return w[a]||a}(e.color),s=(0,l.Z)((0,t.Z)({},e,{color:o})),h=s.align,d=void 0===h?"inherit":h,Z=s.className,x=s.component,b=s.gutterBottom,B=void 0!==b&&b,j=s.noWrap,C=void 0!==j&&j,S=s.paragraph,W=void 0!==S&&S,M=s.variant,T=void 0===M?"body1":M,_=s.variantMapping,k=void 0===_?f:_,q=(0,n.Z)(s,v),E=(0,t.Z)({},s,{align:d,color:o,className:Z,component:x,gutterBottom:B,noWrap:C,paragraph:W,variant:T,variantMapping:k}),N=x||(W?"p":k[T]||f[T])||"span",R=function(a){var r=a.align,e=a.gutterBottom,n=a.noWrap,t=a.paragraph,o=a.variant,i=a.classes,l={root:["root",o,"inherit"!==a.align&&"align".concat((0,m.Z)(r)),e&&"gutterBottom",n&&"noWrap",t&&"paragraph"]};return(0,p.Z)(l,g,i)}(E);return(0,c.jsx)(y,(0,t.Z)({as:N,ref:r,ownerState:E,className:(0,i.Z)(R.root,Z)},q))}))}}]);
//# sourceMappingURL=637.171329a3.chunk.js.map