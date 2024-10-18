import{a as n,j as e,b as p,L as h}from"./index-BmSsj0-w.js";/* empty css                 */import{A as b}from"./AdminOrganisasiLayout-BkMouUm5.js";import{b as u,c as f,e as y}from"./ReactToastify-C0kldYmm.js";import{h as j}from"./moment-C5S46NFB.js";import"./react-toastify.esm-gax5al5G.js";import"./index-Cxkkhgo1.js";import"./iconBase-B-ZdwKJU.js";import"./index-BFccei9X.js";import"./index-CEowF-TQ.js";import"./useAuthUser-Ca2iW8uB.js";import"./index-CpiXYaPp.js";const g=({isOpen:s,onClose:r})=>(n.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[s]),e.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-20 transition-opacity duration-200 ease-in-out ${s?"opacity-100":"opacity-0 pointer-events-none"}`,children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center px-4 sm:px-0",children:e.jsx("div",{className:`mx-auto w-full max-w-sm transform overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-200 ease-in-out ${s?"translate-y-0 scale-100":"translate-y-10 scale-95"}`,children:e.jsxs("div",{className:"px-6 py-4 text-sm",children:[e.jsx("div",{className:"mb-2 flex items-center justify-end",children:e.jsx("button",{onClick:r,className:"text-gray-600 hover:text-gray-800 focus:outline-none",children:e.jsx(u,{size:25})})}),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5",children:[e.jsx(f,{size:50,className:"text-primary"}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:" text-base font-semibold text-black mb-3",children:"Delete the Member"}),e.jsxs("p",{className:"text-[#6B7280]",children:["Are you sure to delete this member"," ",e.jsx("span",{className:"font-bold",children:"nama member"}),"?"]})]}),e.jsxs("div",{className:"mb-3 flex justify-center",children:[e.jsx("button",{className:"mr-4 rounded-lg border-2 border-primary bg-transparent px-10 py-2 text-primary",onClick:r,children:"Cancel"}),e.jsx("button",{type:"button",className:"rounded-lg bg-primary px-10 py-2 text-white hover:bg-opacity-90",children:"Delete"})]})]})]})})})})),E=()=>{const[s,r]=n.useState(!1),[i,l]=n.useState(null),c=n.useRef(null),m=[{name:"John Doe",email:"johndoe@example.com",joinedAt:"2023-06-10T10:00:00",attendance:"80%",score:95,description:"Active participant in all events and meetings."},{name:"Jane Smith",email:"janesmith@example.com",joinedAt:"2023-05-05T09:00:00",attendance:"90%",score:88,description:"Great team player and contributes actively."},{name:"Bob Johnson",email:"bobjohnson@example.com",joinedAt:"2023-04-20T08:30:00",attendance:"75%",score:80,description:"Attends regularly but needs improvement in participation."}],d=t=>{l(a=>a===t?null:t)},o=p(),x=[{name:"Post",href:"/admin-org/organization/post"},{name:"Activity",href:"/admin-org/organization/activity"},{name:"Member",href:"/admin-org/organization/member"},{name:"Followers",href:"/admin-org/organization/followers"},{name:"Finance",href:"/admin-org/organization/finance"}];return o.pathname.split("/").pop(),e.jsxs(b,{children:[e.jsx("div",{className:"flex overflow-x-auto scrollbar-hidden my-7 md:my-10",children:x.map(t=>e.jsx(h,{to:t.href,className:`py-1.5 font-semibold border min-w-[220px] xl:min-w-[285px] text-center ${o.pathname.includes(t.href)?"text-white bg-primary":"text-[#CED2D6] bg-white"} ${t.name==="Post"?"rounded-l-lg":""} ${t.name==="Finance"?"rounded-r-lg":""}`,children:t.name},t.name))}),e.jsxs("div",{className:"bg-white px-5 py-10 rounded-xl",children:[e.jsx("div",{className:"flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:justify-end md:gap-4",children:e.jsxs("div",{className:"flex w-full max-w-sm items-center rounded-lg bg-white ",children:[e.jsx("input",{type:"text",placeholder:"Search...",className:"w-full rounded-md border text-gray-700 border-slate-200 p-2 focus:border-primary focus:outline-none focus:ring-[0.1px] focus:ring-primary"}),e.jsx("button",{className:"ml-2 flex items-center justify-center rounded-md bg-primary p-3 text-white",children:e.jsx(y,{size:20})})]})}),e.jsx("div",{className:"overflow-x-auto scrollbar-hidden",children:e.jsxs("table",{className:"w-full table-auto text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-primary bg-opacity-5 text-left",children:[e.jsx("th",{className:"min-w-[25px] px-4 py-4 font-medium text-black  xl:pl-11",children:"No."}),e.jsx("th",{className:"min-w-[300px] px-4 py-4 font-medium text-black  xl:pl-11",children:"Name"}),e.jsx("th",{className:"min-w-[300px] px-4 py-4 font-medium text-black  ",children:"Email"}),e.jsx("th",{className:"min-w-[300px] px-4 py-4 font-medium text-black ",children:"Joined At"}),e.jsx("th",{className:"min-w-[150px] px-4 py-4 font-medium text-black ",children:"Attendance"}),e.jsx("th",{className:"min-w-[150px] px-4 py-4 font-medium text-black ",children:"Score"}),e.jsx("th",{className:"min-w-[150px] px-4 py-4 font-medium text-black ",children:"Action"})]})}),e.jsx("tbody",{children:m.map((t,a)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"border-b border-[#eee] px-4 py-5 pl-9 xl:pl-11",children:e.jsx("h5",{className:"font-medium text-black",children:a+1})}),e.jsx("td",{className:"border-b border-[#eee] px-4 py-5 pl-9 xl:pl-11",children:e.jsx("h5",{className:"font-medium text-black",children:t.name})}),e.jsx("td",{className:"border-b border-[#eee] px-4 py-5 ",children:e.jsx("h5",{className:"font-medium text-black",children:t.email})}),e.jsx("td",{className:"border-b border-[#eee] px-4 py-5",children:e.jsx("p",{className:"text-black",children:j(t.joinedAt).format("MMMM D, YYYY [at] h:mm A")})}),e.jsx("td",{className:"border-b border-[#eee] px-4 py-5 ",children:e.jsx("h5",{className:"font-semibold text-danger",children:t.attendance})}),e.jsx("td",{className:"border-b border-[#eee] px-4 py-5 ",children:e.jsxs("h5",{className:"font-semibold text-primary",children:[t.score," XP"]})}),e.jsxs("td",{className:"relative border-b border-[#eee] px-4 py-5",children:[e.jsx("button",{onClick:()=>d(a),className:"flex items-center justify-center rounded-full bg-primary bg-opacity-10 px-3 py-1 text-sm font-medium text-primary hover:bg-opacity-15",children:"Action"}),i===a&&e.jsx("div",{ref:c,className:`absolute right-10 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out  lg:right-18 ${i===a?"opacity-100":"pointer-events-none opacity-0"}`,children:e.jsx("div",{className:"py-1",children:e.jsx("button",{onClick:()=>r(!0),className:"text-gray-700  flex w-full items-center justify-start px-4 py-2 text-sm hover:bg-slate-100 hover:bg-opacity-30 ",children:"Remove Member"})})})]})]},a))})]})})]}),s&&e.jsx("div",{className:`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${s?"animate-fadeIn":"animate-fadeOut"}`,children:e.jsx("div",{className:"bg-white p-6 rounded shadow-lg",children:e.jsx(g,{isOpen:s,onClose:()=>{r(!s)}})})})]})};export{E as default};
