import{a as n,j as e}from"./index-BmSsj0-w.js";const i=({enabled:t,onToggle:l})=>{const[s,a]=n.useState(t);n.useEffect(()=>{a(t)},[t]);const c=()=>{const r=!s;a(r),l(r)};return e.jsx("div",{className:"flex items-center",children:e.jsx("label",{className:"flex cursor-pointer select-none items-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"checkbox",className:"sr-only",checked:s,onChange:c}),e.jsx("div",{className:`block h-6 w-11 rounded-full transition ${s?"bg-primary":"bg-slate-400 "}`}),e.jsx("div",{className:`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${s?"translate-x-5 bg-primary":""}`})]})})})};export{i as S};