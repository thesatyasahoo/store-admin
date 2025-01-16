import{r as j,S as D,j as e,d as a,L as E,t as P,c as k}from"./index-DR52bIsS.js";import{U as F}from"./UploadMany-Becj66v5.js";import{S as I,d as U,i as B}from"./Layout-DPUGPqSp.js";import{T as v,D as M,u as R,M as $}from"./DrawerButton-CixPwFnj.js";import{D as L,E as Y}from"./EditDeleteButton-BQfrl0-e.js";import{T as _}from"./Tooltip-BoVQ-j71.js";import{u as q,E as b}from"./index.esm-BRC1Nkeg.js";import{I as f}from"./InputArea-qp50nf3Q.js";import{L as C}from"./LabelArea-D5e3rwVI.js";import{r as h}from"./httpService-os1UCMXb.js";import{a as S,n as O}from"./toast-De5mugnc.js";import{T as V}from"./TableLoading-xM9uHJ3W.js";import{N as H}from"./NotFound-C8FKbPUX.js";import{P as J}from"./PageTitle-DJrGqo0Y.js";import{u as Z}from"./useAsync-cXMJzStY.js";import{u as z}from"./useFilter-D-m0kUwX.js";import{A as G}from"./AnimatedContent-DrL9jipF.js";import"./vendor-BzEnyBH3.js";import"./exportFromJSON-fDIoOtpr.js";import"./iconBase-Ix33kjE1.js";import"./spinner-CkndCogW.js";import"./ProductServices-NbXIK0mp.js";import"./useDispatch-B3QTCHxn.js";import"./SelectLanguageTwo-CjwNQPNz.js";import"./browser-BVlrnu6m.js";import"./index-DGmkQahL.js";const T={getAllCustomers:async({searchText:s=""})=>h.get(`/customer?searchText=${s}`),addAllCustomers:async s=>h.post("/customer/add/all",s),createCustomer:async s=>h.post("/customer/create",s),filterCustomer:async s=>h.post(`/customer/filter/${s}`),getCustomerById:async s=>h.get(`/customer/${s}`),updateCustomer:async(s,t)=>h.put(`/customer/${s}`,t),deleteCustomer:async s=>h.delete(`/customer/${s}`)},K=s=>{const[t,m]=j.useState(""),[c,o]=j.useState(!1),{closeDrawer:r,setIsUpdate:g}=j.useContext(D),{register:y,handleSubmit:N,setValue:x,formState:{errors:w}}=q(),u=async d=>{var p,l;try{o(!0);const i={name:d.name,email:d.email,phone:d.phone,address:d.address};if(s){const n=await T.updateCustomer(s,i);g(!0),O(n.message),r()}o(!1)}catch(i){S(((l=(p=i==null?void 0:i.response)==null?void 0:p.data)==null?void 0:l.message)||(i==null?void 0:i.message)),r()}};return j.useEffect(()=>{s&&(async()=>{var d,p;try{const l=await T.getCustomerById(s);l&&(x("name",l.name),x("phone",l.phone),x("email",l.email),x("address",l.address))}catch(l){S(((p=(d=l==null?void 0:l.response)==null?void 0:d.data)==null?void 0:p.message)||(l==null?void 0:l.message))}})()},[s,x]),{register:y,handleSubmit:N,onSubmit:u,errors:w,setImageUrl:m,imageUrl:t,isSubmitting:c}},Q=({id:s})=>{const{register:t,handleSubmit:m,onSubmit:c,errors:o,isSubmitting:r}=K(s);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:s?e.jsx(v,{title:"Update Customer",description:"Update your Customer necessary information from here"}):e.jsx(v,{title:"Add Customer",description:"Add your Customer necessary information from here"})}),e.jsx(I,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:m(c),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(C,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(f,{required:!0,register:t,label:"Name",name:"name",type:"text",placeholder:"Name"}),e.jsx(b,{errorName:o.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(C,{label:"Email"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(f,{required:!0,register:t,label:"Email",name:"email",type:"email",placeholder:"Email"}),e.jsx(b,{errorName:o.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(C,{label:"Phone"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(f,{register:t,label:"Phone",name:"phone",type:"text",placeholder:"Phone"}),e.jsx(b,{errorName:o.phone})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(C,{label:"Address"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(f,{register:t,label:"Address",name:"address",type:"text",placeholder:"Address"}),e.jsx(b,{errorName:o.address})]})]})]}),e.jsx(M,{id:s,title:"Customer",isSubmitting:r})]})})]})},W=({customers:s})=>{const{title:t,serviceId:m,handleModalOpen:c,handleUpdate:o}=R();return e.jsxs(e.Fragment,{children:[e.jsx(L,{id:m,title:t}),e.jsx($,{children:e.jsx(Q,{id:m})}),e.jsx(a.TableBody,{children:s==null?void 0:s.map(r=>{var g;return e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:e.jsxs("span",{className:"font-semibold uppercase text-xs",children:[" ",(g=r==null?void 0:r._id)==null?void 0:g.substring(20,24)]})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm",children:U(r.createdAt).format("MMM D, YYYY")})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm",children:r.name})}),e.jsxs(a.TableCell,{children:[e.jsx("span",{className:"text-sm",children:r.email})," "]}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm font-medium",children:r.phone})}),e.jsx(a.TableCell,{children:e.jsxs("div",{className:"flex justify-end text-right",children:[e.jsxs("div",{className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600",children:[" ",e.jsx(E,{to:`/customer-order/${r._id}`,children:e.jsx(_,{id:"view",Icon:B,title:P("ViewOrder"),bgColor:"#34D399"})})]}),e.jsx(Y,{title:r.name,id:r._id,handleUpdate:o,handleModalOpen:c})]})})]},r._id)})})]})},ve=()=>{const{data:s,loading:t,error:m}=Z(T.getAllCustomers),{userRef:c,dataTable:o,serviceData:r,filename:g,isDisabled:y,setSearchUser:N,totalResults:x,resultsPerPage:w,handleSubmitUser:u,handleSelectFile:d,handleChangePage:p,handleUploadMultiple:l,handleRemoveSelectFile:i}=z(s),{t:n}=k(),A=()=>{N(""),c.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:n("CustomersPage")}),e.jsxs(G,{children:[e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsx("form",{onSubmit:u,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:e.jsx("div",{className:"items-center",children:e.jsx(F,{title:"Customers",exportData:s,filename:g,isDisabled:y,handleSelectFile:d,handleUploadMultiple:l,handleRemoveSelectFile:i})})})})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:u,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(a.Input,{ref:c,type:"search",name:"search",placeholder:n("CustomersPageSearchPlaceholder")}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(a.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(a.Button,{layout:"outline",onClick:A,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})})]}),t?e.jsx(V,{row:12,col:6,width:190,height:20}):m?e.jsx("span",{className:"text-center mx-auto text-red-500",children:m}):(r==null?void 0:r.length)!==0?e.jsxs(a.TableContainer,{className:"mb-8",children:[e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(a.TableCell,{children:n("CustomersId")}),e.jsx(a.TableCell,{children:n("CustomersJoiningDate")}),e.jsx(a.TableCell,{children:n("CustomersName")}),e.jsx(a.TableCell,{children:n("CustomersEmail")}),e.jsx(a.TableCell,{children:n("CustomersPhone")}),e.jsx(a.TableCell,{className:"text-right",children:n("CustomersActions")})]})}),e.jsx(W,{customers:o})]}),e.jsx(a.TableFooter,{children:e.jsx(a.Pagination,{totalResults:x,resultsPerPage:w,onChange:p,label:"Table navigation"})})]}):e.jsx(H,{title:"Sorry, There are no customers right now."})]})};export{ve as default};
