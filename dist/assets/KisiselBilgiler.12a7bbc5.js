import{p,t as j,m as M,c as Y,j as e,l as n,r,B as h}from"./index.25304028.js";import{C as w,a as O}from"./CardBody.da7ce105.js";import{C as P}from"./CardHeader.96848eb5.js";import{C as Z}from"./CardText.f6b21a8b.js";import{C as z}from"./CardTitle.5bd093b7.js";import{M as L,a as R,b as G}from"./ModalFooter.94dab00c.js";import{L as d,I as u}from"./Label.71252a90.js";import{T as K}from"./index.13663824.js";import{d as ee,a as te,b as ae,g as re,c as oe,e as le}from"./Firebase.9eee80fd.js";import"./App.9c64a1a5.js";import"./tslib.es6.b15f5115.js";var ie=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","close"];function ne(a,c){if(a==null)return{};var s=se(a,c),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(o=0;o<l.length;o++)i=l[o],!(c.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,i)||(s[i]=a[i]))}return s}function se(a,c){if(a==null)return{};var s={},i=Object.keys(a),o,l;for(l=0;l<i.length;l++)o=i[l],!(c.indexOf(o)>=0)&&(s[o]=a[o]);return s}var ce={children:p.exports.node,className:p.exports.string,close:p.exports.object,closeAriaLabel:p.exports.string,cssModule:p.exports.object,tag:j,toggle:p.exports.func,wrapTag:j},de={tag:"h5",wrapTag:"div",closeAriaLabel:"Close"};function y(a){var c,s=a.className,i=a.cssModule,o=a.children,l=a.toggle,E=a.tag,f=a.wrapTag,x=a.closeAriaLabel,b=a.close,v=ne(a,ie),D=M(Y(s,"modal-header"),i);return!b&&l&&(c=e("button",{type:"button",onClick:l,className:M("btn-close",i),"aria-label":x})),n(f,{...v,className:D,children:[e(E,{className:M("modal-title",i),children:o}),b||c]})}y.propTypes=ce;y.defaultProps=de;const Ee=()=>{const[a,c]=r.exports.useState([]),[s,i]=r.exports.useState([]),[o,l]=r.exports.useState(!1),[E,f]=r.exports.useState(!1),[x,b]=r.exports.useState(""),[v,D]=r.exports.useState("");r.exports.useState("");const[S,I]=r.exports.useState(""),[T,W]=r.exports.useState(""),[F,_]=r.exports.useState(""),[A,H]=r.exports.useState(""),[B,V]=r.exports.useState("");r.exports.useState("");const[N,$]=r.exports.useState(""),[k,q]=r.exports.useState(""),[m,C]=r.exports.useState(!1),[J,Q]=r.exports.useState(!1),U=()=>{A!==""&&B!==""&&N!==""&&k!==""?ae(A,B,N,k).then(()=>{Q(!0),C(!m)}).catch(t=>{console.error("Error adding education record: ",t)}):alert("Please fill in all fields.")};r.exports.useEffect(()=>{(async()=>{try{const g=await re();i(g)}catch(g){console.error("Error getting education records: ",g)}})()},[J,s]);const X=()=>{x!==""&&v!==""&&S!==""&&T!==""&&F!==""?oe(x,v,S,T,F).then(()=>{f(!0),l(!o)}).catch(t=>{console.error("Error adding academic record: ",t)}):alert("Please fill in all fields.")};return r.exports.useEffect(()=>{(async()=>{try{const g=await le();c(g)}catch(g){console.error("Error getting academic records: ",g)}})()},[E,a]),n("div",{children:[e("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:e(h,{color:"primary",size:"sm",onClick:()=>l(!o),children:"Ekle"})}),n(L,{isOpen:o,toggle:()=>l(!o),children:[e(y,{toggle:()=>l(!o),children:"Ki\u015Fisel Bilgileri D\xFCzenle"}),n(R,{children:[e(d,{for:"university",children:"\xDCniversite Ad\u0131:"}),e(u,{id:"university",placeholder:"\xDCniversite Ad\u0131",value:x,onChange:t=>b(t.target.value)}),e(d,{for:"department",children:"B\xF6l\xFCm Ad\u0131:"}),e(u,{id:"department",placeholder:"B\xF6l\xFCm Ad\u0131",value:v,onChange:t=>D(t.target.value)}),e(d,{for:"duty",children:"G\xF6rev Ad\u0131:"}),e(u,{id:"duty",placeholder:"G\xF6rev Ad\u0131",value:S,onChange:t=>I(t.target.value)}),e(d,{for:"start-date",children:"Ba\u015Flang\u0131\xE7 Tarihi:"}),e(u,{id:"start-date",placeholder:"Ba\u015Flang\u0131\xE7 Tarihi",value:T,onChange:t=>W(t.target.value)}),e(d,{for:"end-date",children:"Biti\u015F Tarihi:"}),e(u,{id:"end-date",placeholder:"Biti\u015F Tarihi",value:F,onChange:t=>_(t.target.value)})]}),n(G,{children:[e(h,{color:"dark",onClick:()=>l(!o),children:"Vazge\xE7"}),e(h,{color:"primary",onClick:X,children:"Kaydet"})]})]}),n(w,{children:[e(P,{children:e(z,{tag:"h4",children:"Akademik G\xF6revler"})}),e(O,{className:"pt-1",children:e(K,{data:a.map(t=>({title:t.title,content:t.content,customContent:n("div",{className:"d-flex align-items-center",children:[e("div",{className:"avatar bg-light-primary me-1",children:e("div",{className:"ms-50",children:e("h6",{children:t.gorev})})}),n(Z,{tag:"span",className:"mb-0 font-weight-bold",children:[t.startDate," - ",t.endDate]}),e(h,{className:"ms-50",color:"danger",size:"sm",onClick:()=>{ee(t.title),f(!0)},children:"Sil"})]})})),className:"ms-50"})})]}),e("div",{className:"d-flex justify-content-end flex-row mb-1 ",children:e(h,{color:"primary",size:"sm",onClick:()=>C(!m),children:"Ekle"})}),n(L,{isOpen:m,toggle:()=>C(!m),children:[e(y,{toggle:()=>C(!m),children:"E\u011Fitim Bilgileri D\xFCzenle"}),n(R,{children:[e(d,{for:"university",children:"\xDCniversite Ad\u0131:"}),e(u,{id:"university",placeholder:"\xDCniversite Ad\u0131",value:A,onChange:t=>H(t.target.value)}),e(d,{for:"department",children:"B\xF6l\xFCm Ad\u0131:"}),e(u,{id:"department",placeholder:"B\xF6l\xFCm Ad\u0131",value:B,onChange:t=>V(t.target.value)}),e(d,{for:"start-date",children:"Ba\u015Flang\u0131\xE7 Tarihi:"}),e(u,{id:"start-date",placeholder:"Ba\u015Flang\u0131\xE7 Tarihi",value:N,onChange:t=>$(t.target.value)}),e(d,{for:"end-date",children:"Biti\u015F Tarihi:"}),e(u,{id:"end-date",placeholder:"Biti\u015F Tarihi",value:k,onChange:t=>q(t.target.value)})]}),n(G,{children:[e(h,{color:"dark",onClick:()=>C(!m),children:"Vazge\xE7"}),e(h,{color:"primary",onClick:U,children:"Kaydet"})]})]}),n(w,{children:[e(P,{children:e(z,{tag:"h4",children:"E\u011Fitim Bilgileri"})}),e(O,{className:"pt-1",children:e(K,{data:s.map(t=>({educationTitle:t.educationTitle,educationContent:t.educationContent,educationStartDate:t.educationStartDate,educationEndDate:t.educationEndDate,customContent:n("div",{children:[e("p",{className:"fw-bold",children:t.educationTitle}),e("p",{children:t.educationContent}),n("p",{children:[t.educationStartDate," - ",t.educationEndDate]}),e(h,{color:"danger",size:"sm",onClick:()=>{te(t.educationTitle),f(!0)},children:"Sil"})]})})),className:"ms-50"})})]})]})};export{Ee as default};