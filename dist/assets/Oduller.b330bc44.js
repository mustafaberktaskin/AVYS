import{r as s,l,j as e,B as n,$ as F}from"./index.25304028.js";import{B as w}from"./App.9c64a1a5.js";import{C as j,a as B}from"./CardBody.da7ce105.js";import{C as M}from"./CardHeader.96848eb5.js";import{C as x}from"./CardText.f6b21a8b.js";import{M as z,a as E,b as L}from"./ModalFooter.94dab00c.js";import{L as t,I as r}from"./Label.71252a90.js";import{E as R,F as T,G as O}from"./Firebase.9eee80fd.js";import{P as Y}from"./plus.3c2a8fc4.js";import"./tslib.es6.b15f5115.js";const J=()=>{const[c,o]=s.exports.useState(!1),[p,k]=s.exports.useState(!1),[d,N]=s.exports.useState(""),[i,g]=s.exports.useState(""),[m,C]=s.exports.useState(""),[h,v]=s.exports.useState(""),[u,b]=s.exports.useState(""),[y,D]=s.exports.useState([]),S=()=>{d!==""&&i!==""&&m!==""&&h!==""&&u!==""&&(T(d,i,m,h,u),k(!p),o(!c),N(""),g(""),C(""),v(""),b(""))};return s.exports.useEffect(()=>{(async()=>{try{const f=await O();D(f)}catch(f){console.log(f)}})()},[p,y]),l("div",{children:[e("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:l(n,{color:"primary",size:"sm",onClick:()=>o(!c),children:[e(Y,{})," Ekle"]})}),e("div",{className:"modal-header d-flex align-items-center justify-content-center flex-row ",children:l(z,{isOpen:c,className:"modal-dialog-centered",children:[e("h4",{className:" text-center fs-1 my-2",children:"\xD6d\xFCl ekle"}),e("h5",{className:"text-center text-muted mx-2 ",children:"L\xFCtfen bilgileri eksiksiz doldurunuz."}),l(E,{children:[l("div",{className:"m-2",children:[e(t,{className:"form-label",for:"channel",children:"Y\u0131l:"}),e(r,{placeholder:"Y\u0131l",value:d,onChange:a=>N(a.target.value)})]}),l("div",{className:"m-2",children:[e(t,{className:"form-label",children:"\xDCniversite:"}),e(r,{placeholder:"\xDCniversite",value:i,onChange:a=>g(a.target.value)})]}),l("div",{className:"m-2",children:[e(t,{className:"form-label",children:"\xD6d\xFCl:"}),e(r,{placeholder:"\xD6d\xFCl",value:m,onChange:a=>C(a.target.value)})]}),l("div",{className:"m-2",children:[e(t,{className:"form-label",children:"T\xFCr:"}),e(r,{placeholder:"T\xFCr",value:h,onChange:a=>v(a.target.value)})]}),l("div",{className:"m-2",children:[e(t,{className:"form-label",children:"\xDClke:"}),e(r,{placeholder:"\xDClke",value:u,onChange:a=>b(a.target.value)})]})]}),l(L,{className:"d-flex justify-content-center align-items-center",children:[e(n,{color:"dark",outline:!0,onClick:()=>o(!c),children:"Vazge\xE7"}),e(n,{color:"primary",onClick:S,children:"Kaydet"})]})]})}),e("div",{className:"d-flex justify-content-start flex-row mb-1",children:e(w,{color:"success",className:"px-2 py-1",children:e("h5",{className:"text-center text-white fw-bolderer",children:"\xD6D\xDCLLER"})})}),y.map(a=>e(j,{className:"card-app-design justify-content-center align-items-center text-center w-50 ms-5",children:l(F,{children:[e(M,{children:e(w,{color:"warning",className:"p-1",children:e("h5",{className:"fw-bolder",children:a.yil})})}),l(B,{children:[l(x,{className:"font-large-1 mb-1",children:[e("span",{className:"font-weight-bold",children:a.odul})," "]}),l(x,{className:"font-small-2 mb-1",children:[e("span",{className:"font-weight-bold",children:a.universite})," "]}),l(x,{className:"font-small-2",children:[l("span",{className:"font-weight-bold",children:[a.tur,",",a.ulke]})," "]})]}),e(n,{color:"danger",size:"sm",className:"mb-1",onClick:()=>R(a.odul),children:"Sil"})]})}))]})};export{J as default};
