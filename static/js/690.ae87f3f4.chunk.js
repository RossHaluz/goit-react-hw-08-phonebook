"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{8690:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t,a,i,o,u,l,d,s,c,m,x,h,p,f,b,Z,g=r(2791),v=r(5705),j=r(5218),y=r(6727),w=r(9434),C=r(3634),k=r(346),S=r(6151),z=r(168),q=r(6088),E=r(890),_=q.Z.form(t||(t=(0,z.Z)(["\n  max-width: 250px;\n  display: flex;\n  margin: 0 auto;\n  gap: 20px;\n  flex-direction: column;\n"]))),N=(q.Z.label(a||(a=(0,z.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 700;\n"]))),(0,q.Z)(v.gN)(i||(i=(0,z.Z)(["\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  margin-bottom: 10px;\n"]))),q.Z.button(o||(o=(0,z.Z)(["\n  width: 100px;\n  padding: 5px;\n  background-color: #35363a;\n  border: 1px solid gray;\n  border-radius: 5px;\n  margin-top: 10px;\n  font-size: 14px;\n  color: white;\n  cursor: pointer;\n"]))),(0,q.Z)(v.Bc)(u||(u=(0,z.Z)(["\n  color: red;\n"]))),(0,q.Z)(E.Z)(l||(l=(0,z.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n"])))),B=r(6286),I=q.Z.ul(d||(d=(0,z.Z)(["\n  margin: 0;\n  text-align: center;\n  list-style: none;\n  padding: 0;\n"]))),L=q.Z.div(s||(s=(0,z.Z)(["\n  text-align: center;\n"]))),T=r(9439),A=r(3400),F=q.Z.li(c||(c=(0,z.Z)(["\n  font-size: 18px;\n  padding: 5px;\n"]))),P=q.Z.span(m||(m=(0,z.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),K=q.Z.span(x||(x=(0,z.Z)(["\n  font-size: 16px;\n"]))),R=(0,q.Z)(A.Z)(h||(h=(0,z.Z)(["\n  margin-left: 5px;\n"]))),V=r(7247),W=r(9e3),D=r(1413),G=q.Z.form(p||(p=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 350px;\n"]))),H=r(4164),J=q.Z.div(f||(f=(0,z.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n"]))),M=q.Z.div(b||(b=(0,z.Z)(["\n  padding: 20px;\n  background-color: white;\n"]))),O=r(184),Q=document.querySelector("#modal-root"),U=function(n){var e=n.children,r=n.onClose;(0,g.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,H.createPortal)((0,O.jsx)(J,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,O.jsx)(M,{children:e})}),Q)},X=y.Ry({name:y.Z_("Enter your name").required("Name is required"),number:y.Z_("Enter your number").required("Number is required")}),Y=function(n){var e=n.data,r=n.onClose,t=e.id,a=e.name,i=e.number,o=(0,w.I0)(),u=(0,v.TA)({initialValues:{name:a,number:i},validationSchema:X,onSubmit:function(n){o(C.bh((0,D.Z)({id:t},n))),r()}});return(0,O.jsx)(U,{onClose:r,children:(0,O.jsxs)(G,{onSubmit:u.handleSubmit,children:[(0,O.jsx)(k.Z,{id:"name",name:"name",label:"Name",value:u.values.name,onChange:u.handleChange,error:u.touched.name&&Boolean(u.errors.name),helperText:u.touched.name&&u.errors.name}),(0,O.jsx)(k.Z,{id:"number",name:"number",label:"Number",type:"tell",value:u.values.number,onChange:u.handleChange,error:u.touched.number&&Boolean(u.errors.number),helperText:u.touched.number&&u.errors.number}),(0,O.jsx)(S.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"})]})})},$=function(n){var e=n.data,r=(0,w.I0)(),t=e.id,a=e.name,i=e.number,o=(0,g.useState)(!1),u=(0,T.Z)(o,2),l=u[0],d=u[1],s=function(){d((function(n){return!n}))};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(F,{children:[(0,O.jsxs)(P,{children:[a,":"]}),(0,O.jsxs)(K,{children:[" ",i]}),(0,O.jsx)(R,{"aria-label":"delete",type:"button",onClick:function(){return r(C.GK(t))},children:(0,O.jsx)(V.Z,{})}),(0,O.jsx)(A.Z,{"aria-label":"create",type:"button",onClick:s,children:(0,O.jsx)(W.Z,{})})]}),l&&(0,O.jsx)(Y,{data:e,onClose:s})]})},nn=function(){var n=(0,w.v9)((function(n){return n.contacts.items})),e=(0,w.v9)((function(n){return n.contacts.isLoading})),r=(0,w.v9)((function(n){return n.filter})),t=(0,w.I0)();return(0,g.useEffect)((function(){t(C.K2())}),[t]),(0,O.jsxs)(L,{children:[e&&(0,O.jsx)(B.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0}),n&&n.length>0&&!e&&(0,O.jsx)(I,{children:n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())})).map((function(n){return(0,O.jsx)($,{data:n},n.id)}))})]})},en=r(3039),rn=(0,q.Z)(k.Z)(Z||(Z=(0,z.Z)(["\n  width: 250px;\n  padding: 0;\n  border-radius: 10px;\n  font-size: 13px;\n  display: flex;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  margin-top: 15px;\n"]))),tn=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return n.filter}));return(0,O.jsx)(rn,{type:"text",value:e,onChange:function(e){n((0,en.x)(e.target.value))},id:"outlined-basic",label:"Filter contacts",variant:"outlined"})},an=y.Ry().shape({name:y.Z_().required(),number:y.Rx().required()}),on=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return n.contacts.items})),r=(0,v.TA)({initialValues:{name:"",number:""},validationSchema:an,onSubmit:function(r,t){var a=t.resetForm;if(e.find((function(n){return n.name===r.name&&n.number===r.number})))return j.ZP.error("".concat(r.name," is already in contacts!")),void a();j.ZP.success("".concat(r.name," successfully added!")),n(C.uK(r)),a()}});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(N,{variant:"h2",sx:{mb:"12px"},children:"Add contact"}),(0,O.jsxs)(_,{onSubmit:r.handleSubmit,children:[(0,O.jsx)(k.Z,{id:"name",type:"text",name:"name",label:"Name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name)}),(0,O.jsx)(k.Z,{id:"number",type:"text",name:"number",label:"Phone",value:r.values.number,onChange:r.handleChange,error:r.touched.number&&Boolean(r.errors.number)}),(0,O.jsx)(S.Z,{variant:"contained",type:"submit",children:"Add contact"})]}),(0,O.jsx)(tn,{}),(0,O.jsx)(nn,{})]})},un=function(){return(0,O.jsx)(on,{})}}}]);
//# sourceMappingURL=690.ae87f3f4.chunk.js.map