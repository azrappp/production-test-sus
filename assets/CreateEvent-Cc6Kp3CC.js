import{a as d,j as e,L as t}from"./index-BmSsj0-w.js";import"./react-toastify.esm-gax5al5G.js";import{h as m,g as x}from"./index-CEowF-TQ.js";import"./useAuthUser-Ca2iW8uB.js";import"./ReactToastify-C0kldYmm.js";/* empty css                 */import{S as i}from"./react-select.esm-DCbcmiGx.js";import{i as f}from"./react-select-animated.esm-m97VzaJ2.js";import"./moment-C5S46NFB.js";import{A as u}from"./AdminOrganisasiLayout-BkMouUm5.js";import"./iconBase-B-ZdwKJU.js";import"./index-Cxkkhgo1.js";import"./index-BFccei9X.js";import"./index-CpiXYaPp.js";const S=()=>{d.useState("");const s=f(),o=[{value:"bootcamp",label:"Paid"},{value:"course",label:"Free"}],c=[{value:"Internal",label:"Internal"},{value:"External",label:"External"}],n=[{value:"Assignments",label:"Assignments"},{value:"Certificate of completion",label:"Certificate of completion"},{value:"84 downloadable resources",label:"84 downloadable resources"},{value:"33 PDF",label:"33 PDF"}],a={control:(l,r)=>({...l,borderColor:r.isFocused?"#0F62FE":l.borderColor,boxShadow:r.isFocused?"0 1px 1px rgba(158, 165, 173,0.1)":"0 1px 1px rgba(158, 165, 173,0.5)","&:hover":{borderColor:r.isFocused?"#0F62FE":l.borderColor},backgroundColor:"transparent",borderRadius:"8px",minHeight:"48.5px",transition:"border-color 0.2s, box-shadow 0.2s",color:"black",dark:{backgroundColor:"#1f2937",color:"white"}}),menu:l=>({...l,backgroundColor:"#fff",color:"black",dark:{backgroundColor:"#1f2937",color:"white"}}),singleValue:l=>({...l,color:"black",dark:{color:"white"}}),multiValue:l=>({...l,backgroundColor:"#0F62FE",borderRadius:"40px",padding:"1px 2px",color:"white"}),multiValueLabel:l=>({...l,color:"white"}),multiValueRemove:l=>({...l,color:"white",":hover":{color:"gray"}})};return e.jsx(u,{children:e.jsxs("div",{className:"w-full bg-white rounded-xl px-5 md:px-10 min-h-screen flex flex-col items-center py-10",children:[e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsxs(t,{to:"/admin-org/event",className:"bg-gray-50 border rounded-lg px-5 py-2.5 text-[14px] font-semibold text-primary hover:opacity-90 hover:bg-opacity-90 flex items-center gap-2",children:[e.jsx(m,{size:16})," Back"]}),e.jsxs(t,{to:"/admin-org/event/create/voucher",className:"bg-primary rounded-lg px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-opacity-90 flex items-center gap-2",children:["Next ",e.jsx(x,{size:16})]})]}),e.jsxs("div",{className:"flex gap-x-3 lg:gap-x-6 mt-14 flex-wrap gap-y-3 justify-center",children:[e.jsx("p",{className:"p-2 bg-[#E1ECFF] font-semibold text-sm text-black rounded-full w-9 h-9 flex items-center justify-center",children:"1"}),e.jsx("p",{className:"p-2 bg-[#E1ECFF] font-semibold text-sm text-black rounded-full w-9 h-9 flex items-center justify-center",children:"2"}),e.jsx("p",{className:"p-2 bg-[#E1ECFF] font-semibold text-sm text-black rounded-full w-9 h-9 flex items-center justify-center",children:"3"})]}),e.jsxs("div",{className:"text-center mt-14",children:[e.jsx("p",{className:"text-2xl font-bold",children:"Event Name"}),e.jsx("p",{className:"text-gray60 mt-1",children:"Please provide your event price for your participant here"})]}),e.jsx("form",{className:"max-w-4xl w-full mt-16",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"font-medium text-sm",children:"Event Name"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"text",id:"field",placeholder:"John Doe",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]}),e.jsx("div",{className:"flex flex-col gap-5",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"font-medium text-sm",children:"Category"}),e.jsx("div",{className:"relative mt-2",children:e.jsx(i,{options:o,className:"basic-multi-select",classNamePrefix:"select",placeholder:"Select Category",components:s,styles:a})})]})}),e.jsxs("div",{className:"flex lg:flex-row flex-col gap-y-5 gap-x-6",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"audience",className:"font-medium text-sm",children:"Audience"}),e.jsx("div",{className:"relative mt-2",children:e.jsx(i,{options:c,isMulti:!0,className:"basic-multi-select",classNamePrefix:"select",placeholder:"Select Audience",components:s,styles:a})})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"max_reg",className:"font-medium text-sm",children:"Max Registrant"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"number",id:"field",placeholder:"Ex : 50",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]})]}),e.jsxs("div",{className:"flex lg:flex-row flex-col gap-y-5 gap-x-6",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"audience",className:"font-medium text-sm",children:"Registration Start - Date"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"date",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"max_reg",className:"font-medium text-sm",children:"Registration Start - Time"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"time",id:"field",placeholder:"huseinakbar@gmail.com",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]})]}),e.jsxs("div",{className:"flex lg:flex-row flex-col gap-y-5 gap-x-6",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"audience",className:"font-medium text-sm",children:"Registration Deadline - Date"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"date",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"max_reg",className:"font-medium text-sm",children:"Registration Deadline - Time"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("input",{type:"time",id:"field",placeholder:"huseinakbar@gmail.com",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary"})})]})]}),e.jsx("div",{className:"flex flex-col gap-5",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"benefit",className:"font-medium text-sm",children:"Benefit"}),e.jsx("div",{className:"relative mt-2",children:e.jsx(i,{options:n,isMulti:!0,className:"basic-multi-select",classNamePrefix:"select",placeholder:"Select Benefit",components:s,styles:a})})]})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"font-medium text-sm",children:"Description"}),e.jsx("div",{className:"relative mt-2",children:e.jsx("textarea",{type:"text",id:"field",placeholder:"Describe your persona",className:"pl-5 p-3 border shadow bg-white rounded-lg w-full outline-none focus:border-primary h-32"})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"font-medium text-sm",children:"Photo"}),e.jsx("div",{className:"relative mt-2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"file-input",className:"sr-only",children:"Choose file"}),e.jsx("img",{src:"/images/profile/foto_user.png",alt:"",className:"w-24 h-28 mb-4 object-cover rounded-md"}),e.jsx("input",{type:"file",name:"file-input",id:"file-input",accept:"image/*",className:`block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none \r
    file:bg-gray-50 file:border-0\r
    file:mr-4\r
    file:py-3 file:px-4\r
    `})]})})]})]})})]})})};export{S as default};
