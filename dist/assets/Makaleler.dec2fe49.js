import{r as t,l,j as e,B as n}from"./index.25304028.js";import{A as D,a as x,b,c as C}from"./AccordionBody.192e176b.js";import{M as _,a as Y,b as S}from"./ModalFooter.94dab00c.js";import{T as z}from"./Table.10f6df49.js";import{L as r,I as i}from"./Label.71252a90.js";import{y as O,z as B,A as K}from"./Firebase.9eee80fd.js";import{P as A}from"./plus.3c2a8fc4.js";import{T as L}from"./trash.add7cc23.js";import"./App.9c64a1a5.js";import"./tslib.es6.b15f5115.js";const X=()=>{const[j,F]=t.exports.useState(""),w=a=>{j===a?F():F(a)},[f,E]=t.exports.useState([]),[d,h]=t.exports.useState(!1),[T,I]=t.exports.useState(!1),[s,y]=t.exports.useState(""),[o,M]=t.exports.useState(""),[m,p]=t.exports.useState(""),[u,g]=t.exports.useState(""),[k,v]=t.exports.useState(""),N=()=>{s!==""&&o!==""&&m!==""&&u!==""&&k!==""?B(s,o,m,u,k).then(()=>{I(!T),h(!d),y(""),M(""),p(""),g(""),v("")}):alert("L\xFCtfen t\xFCm alanlar\u0131 doldurunuz.")};return t.exports.useEffect(()=>{(async()=>{try{const c=await K();E(c)}catch(c){console.log(c)}})()},[T,f]),l("div",{id:"dersler",children:[e("h1",{children:"Makaleler"}),l(D,{className:"accordion-margin",open:j,toggle:w,children:[l(x,{children:[e(b,{targetId:"1",children:"T\xFCm\xFC"}),l(C,{accordionId:"1",children:[l("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:[l(n,{color:"primary",size:"sm",onClick:()=>h(!d),children:[e(A,{})," Ekle"]}),e("div",{className:"modal-header d-flex align-items-center justify-content-center flex-row ",children:l(_,{isOpen:d,className:"modal-dialog-centered",children:[e("h4",{className:" text-center fs-1 my-2",children:"Makale ekle"}),e("h5",{className:"text-center text-muted mx-2 ",children:"L\xFCtfen bilgileri eksiksiz doldurunuz."}),l(Y,{children:[l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Ad\u0131:"}),e(i,{placeholder:"Makale Ad\u0131",value:s,onChange:a=>y(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Sahibi:"}),e(i,{placeholder:"Makale Sahibi",value:o,onChange:a=>M(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Yeri:"}),e(i,{placeholder:"Makale Yay\u0131n Yeri",value:m,onChange:a=>p(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Tarihi:"}),e(i,{placeholder:"Makale Yay\u0131n Tarihi",value:u,onChange:a=>g(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Linki:"}),e(i,{placeholder:"Makale Linki",value:k,onChange:a=>v(a.target.value)})]})]}),l(S,{className:"d-flex justify-content-center align-items-center",children:[e(n,{color:"dark",outline:!0,onClick:()=>h(!d),children:"Vazge\xE7"}),e(n,{color:"primary",onClick:N,children:"Kaydet"})]})]})})]}),l(z,{striped:!0,responsive:!0,children:[e("thead",{children:l("tr",{children:[e("th",{children:"Makale Ad\u0131"}),e("th",{children:"Makale Sahibi"}),e("th",{children:"Makale Yay\u0131n Yeri"}),e("th",{children:"Makale Yay\u0131n Tarihi"}),e("th",{children:"Makale Linki"}),e("th",{children:"\u0130\u015Flemler"})]})}),e("tbody",{children:f.map((a,c)=>l("tr",{children:[e("td",{children:a.makale_adi}),e("td",{children:a.makale_sahibi}),e("td",{children:a.makale_yayin_yeri}),e("td",{children:a.makale_yayin_tarihi}),e("td",{children:a.makale_link}),e("td",{children:e(n.Ripple,{color:"flat-danger",onClick:()=>{O(a.makale_adi),I(!T)},children:e(L,{className:"mr-50",size:15})})})]},c))})]})]})]}),l(x,{children:[e(b,{targetId:"2",children:"Uluslararas\u0131 Hakemli"}),l(C,{accordionId:"2",children:[l("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:[l(n,{color:"primary",size:"sm",onClick:()=>h(!d),children:[e(A,{})," Ekle"]}),e("div",{className:"modal-header d-flex align-items-center justify-content-center flex-row ",children:l(_,{isOpen:d,className:"modal-dialog-centered",children:[e("h4",{className:" text-center fs-1 my-2",children:"Makale ekle"}),e("h5",{className:"text-center text-muted mx-2 ",children:"L\xFCtfen bilgileri eksiksiz doldurunuz."}),l(Y,{children:[l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Ad\u0131:"}),e(i,{placeholder:"Makale Ad\u0131",value:s,onChange:a=>y(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Sahibi:"}),e(i,{placeholder:"Makale Sahibi",value:o,onChange:a=>M(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Yeri:"}),e(i,{placeholder:"Makale Yay\u0131n Yeri",value:m,onChange:a=>p(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Tarihi:"}),e(i,{placeholder:"Makale Yay\u0131n Tarihi",value:u,onChange:a=>g(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Linki:"}),e(i,{placeholder:"Makale Linki",value:k,onChange:a=>v(a.target.value)})]})]}),l(S,{className:"d-flex justify-content-center align-items-center",children:[e(n,{color:"dark",outline:!0,onClick:()=>h(!d),children:"Vazge\xE7"}),e(n,{color:"primary",onClick:N,children:"Kaydet"})]})]})})]}),l(z,{striped:!0,responsive:!0,children:[e("thead",{children:l("tr",{children:[e("th",{children:"Makale Ad\u0131"}),e("th",{children:"Makale Sahibi"}),e("th",{children:"Makale Yay\u0131n Yeri"}),e("th",{children:"Makale Yay\u0131n Tarihi"}),e("th",{children:"Makale Linki"}),e("th",{children:"\u0130\u015Flemler"})]})}),e("tbody",{children:f.map((a,c)=>l("tr",{children:[e("td",{children:a.makale_adi}),e("td",{children:a.makale_sahibi}),e("td",{children:a.makale_yayin_yeri}),e("td",{children:a.makale_yayin_tarihi}),e("td",{children:a.makale_link}),e("td",{children:e(n.Ripple,{color:"flat-danger",onClick:()=>handleDelete(c),children:e(L,{className:"mr-50",size:15})})})]},c))})]})]})]}),l(x,{children:[e(b,{targetId:"3",children:"Ulusal Hakemli"}),l(C,{accordionId:"3",children:[l("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:[l(n,{color:"primary",size:"sm",onClick:()=>h(!d),children:[e(A,{})," Ekle"]}),e("div",{className:"modal-header d-flex align-items-center justify-content-center flex-row ",children:l(_,{isOpen:d,className:"modal-dialog-centered",children:[e("h4",{className:" text-center fs-1 my-2",children:"Makale ekle"}),e("h5",{className:"text-center text-muted mx-2 ",children:"L\xFCtfen bilgileri eksiksiz doldurunuz."}),l(Y,{children:[l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Ad\u0131:"}),e(i,{placeholder:"Makale Ad\u0131",value:s,onChange:a=>y(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Sahibi:"}),e(i,{placeholder:"Makale Sahibi",value:o,onChange:a=>M(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Yeri:"}),e(i,{placeholder:"Makale Yay\u0131n Yeri",value:m,onChange:a=>p(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Tarihi:"}),e(i,{placeholder:"Makale Yay\u0131n Tarihi",value:u,onChange:a=>g(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Linki:"}),e(i,{placeholder:"Makale Linki",value:k,onChange:a=>v(a.target.value)})]})]}),l(S,{className:"d-flex justify-content-center align-items-center",children:[e(n,{color:"dark",outline:!0,onClick:()=>h(!d),children:"Vazge\xE7"}),e(n,{color:"primary",onClick:N,children:"Kaydet"})]})]})})]}),l(z,{striped:!0,responsive:!0,children:[e("thead",{children:l("tr",{children:[e("th",{children:"Makale Ad\u0131"}),e("th",{children:"Makale Sahibi"}),e("th",{children:"Makale Yay\u0131n Yeri"}),e("th",{children:"Makale Yay\u0131n Tarihi"}),e("th",{children:"Makale Linki"}),e("th",{children:"\u0130\u015Flemler"})]})}),e("tbody",{children:f.map((a,c)=>l("tr",{children:[e("td",{children:a.makale_adi}),e("td",{children:a.makale_sahibi}),e("td",{children:a.makale_yayin_yeri}),e("td",{children:a.makale_yayin_tarihi}),e("td",{children:a.makale_link}),e("td",{children:e(n.Ripple,{color:"flat-danger",onClick:()=>handleDelete(c),children:e(L,{className:"mr-50",size:15})})})]},c))})]})]})]}),l(x,{children:[e(b,{targetId:"4",children:"Di\u011Fer"}),l(C,{accordionId:"4",children:[l("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:[l(n,{color:"primary",size:"sm",onClick:()=>h(!d),children:[e(A,{})," Ekle"]}),e("div",{className:"modal-header d-flex align-items-center justify-content-center flex-row ",children:l(_,{isOpen:d,className:"modal-dialog-centered",children:[e("h4",{className:" text-center fs-1 my-2",children:"Makale ekle"}),e("h5",{className:"text-center text-muted mx-2 ",children:"L\xFCtfen bilgileri eksiksiz doldurunuz."}),l(Y,{children:[l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Ad\u0131:"}),e(i,{placeholder:"Makale Ad\u0131",value:s,onChange:a=>y(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Sahibi:"}),e(i,{placeholder:"Makale Sahibi",value:o,onChange:a=>M(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Yeri:"}),e(i,{placeholder:"Makale Yay\u0131n Yeri",value:m,onChange:a=>p(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Yay\u0131n Tarihi:"}),e(i,{placeholder:"Makale Yay\u0131n Tarihi",value:u,onChange:a=>g(a.target.value)})]}),l("div",{className:"m-2",children:[e(r,{className:"form-label",for:"channel",children:"Makale Linki:"}),e(i,{placeholder:"Makale Linki",value:k,onChange:a=>v(a.target.value)})]})]}),l(S,{className:"d-flex justify-content-center align-items-center",children:[e(n,{color:"dark",outline:!0,onClick:()=>h(!d),children:"Vazge\xE7"}),e(n,{color:"primary",onClick:N,children:"Kaydet"})]})]})})]}),l(z,{striped:!0,responsive:!0,children:[e("thead",{children:l("tr",{children:[e("th",{children:"Makale Ad\u0131"}),e("th",{children:"Makale Sahibi"}),e("th",{children:"Makale Yay\u0131n Yeri"}),e("th",{children:"Makale Yay\u0131n Tarihi"}),e("th",{children:"Makale Linki"}),e("th",{children:"\u0130\u015Flemler"})]})}),e("tbody",{children:f.map((a,c)=>l("tr",{children:[e("td",{children:a.makale_adi}),e("td",{children:a.makale_sahibi}),e("td",{children:a.makale_yayin_yeri}),e("td",{children:a.makale_yayin_tarihi}),e("td",{children:a.makale_link}),e("td",{children:e(n.Ripple,{color:"flat-danger",onClick:()=>handleDelete(c),children:e(L,{className:"mr-50",size:15})})})]},c))})]})]})]})]})]})};export{X as default};
