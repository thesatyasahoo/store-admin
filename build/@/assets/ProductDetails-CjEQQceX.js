import{j as e,d as l,o as v,c as B,r as f,S as F}from"./index-DR52bIsS.js";import{u as A}from"./useAsync-cXMJzStY.js";import{u as E}from"./useFilter-D-m0kUwX.js";import{u as I,P as O}from"./ProductDrawer-B9_d0Hxp.js";import{u as _,M as D}from"./DrawerButton-CixPwFnj.js";import{P as L}from"./ProductServices-NbXIK0mp.js";import{u as C}from"./Layout-DPUGPqSp.js";import{L as R}from"./Loading-Ds7b5e17.js";import{P as k}from"./PageTitle-DJrGqo0Y.js";import"./vendor-BzEnyBH3.js";import"./httpService-os1UCMXb.js";import"./browser-BVlrnu6m.js";import"./index-DGmkQahL.js";import"./toast-De5mugnc.js";import"./index-C8dE5CkU.js";import"./ParentCategory-Ij5WpYVB.js";import"./index.esm-BRC1Nkeg.js";import"./InputArea-qp50nf3Q.js";import"./LabelArea-D5e3rwVI.js";import"./InputValue-B3OHuFs6.js";import"./Uploader-mnTOUaKJ.js";import"./tslib.es6-BgFQhbLt.js";import"./Tooltip-BoVQ-j71.js";import"./index.prod-Bs4lfUYW.js";import"./SelectLanguageTwo-CjwNQPNz.js";import"./spinner-CkndCogW.js";import"./iconBase-Ix33kjE1.js";import"./useDispatch-B3QTCHxn.js";const V=({variants:n,variantTitle:r})=>{const{showingTranslateValue:h,currency:c,getNumberTwo:a}=C();return e.jsx(e.Fragment,{children:e.jsx(l.TableBody,{children:n==null?void 0:n.map((t,x)=>{var s;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:x+1}),e.jsx(l.TableCell,{children:e.jsx("div",{className:"flex items-center",children:t.image?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:t.image,alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex flex-col text-sm",children:[e.jsx("span",{children:(s=r==null?void 0:r.map(i=>{var p,u;const d=(p=i==null?void 0:i.variants)==null?void 0:p.filter(m=>(m==null?void 0:m.name)!=="All"),o=(u=d==null?void 0:d.find(m=>m._id===t[i==null?void 0:i._id]))==null?void 0:u.name;return o===void 0?o==null?void 0:o.en:h(o)}))==null?void 0:s.filter(Boolean).join(" ")}),t.productId&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",t.productId,")"]})]})}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.sku}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.barcode}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.originalPrice)]}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.price)]}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.quantity})]},x+1)})})})},ue=()=>{var b,y,N,T;const{id:n}=v(),{t:r}=B(),{handleUpdate:h}=_(),{attribue:c}=I(n),[a,t]=f.useState([]),{lang:x}=f.useContext(F),{data:s,loading:i}=A(()=>L.getProductById(n)),{currency:d,showingTranslateValue:o,getNumberTwo:p}=C(),{handleChangePage:u,totalResults:m,resultsPerPage:P,dataTable:w}=E(s==null?void 0:s.variants);return f.useEffect(()=>{if(!i){const g=Object.keys(Object.assign({},...s==null?void 0:s.variants)),j=c==null?void 0:c.filter(S=>g.includes(S._id));t(j)}},[c,s==null?void 0:s.variants,i,x]),console.log("product",s),e.jsxs(e.Fragment,{children:[e.jsx(D,{product:!0,children:e.jsx(O,{id:n})}),e.jsx(k,{children:r("ProductDetails")}),i?e.jsx(R,{loading:i}):e.jsx("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform",children:e.jsxs("div",{className:"flex flex-col lg:flex-row md:flex-row w-full overflow-hidden",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center justify-center h-auto",children:s!=null&&s.image[0]?e.jsx("img",{src:s==null?void 0:s.image[0],alt:"product",className:"h-64 w-64"}):e.jsx("img",{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"})}),e.jsxs("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[e.jsxs("div",{className:"mb-5 block ",children:[e.jsx("div",{className:"font-serif font-semibold py-1 text-sm",children:e.jsxs("p",{className:"text-sm text-gray-500 pr-4",children:[r("Status"),":"," ",s.status==="show"?e.jsx("span",{className:"text-emerald-400",children:r("ThisProductShowing")}):e.jsx("span",{className:"text-red-400",children:r("ThisProductHidden")})]})}),e.jsx("h2",{className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400",children:o(s==null?void 0:s.title)}),e.jsxs("p",{className:"uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm",children:[r("Sku")," :"," ",e.jsx("span",{className:"font-bold text-gray-500 dark:text-gray-500",children:s==null?void 0:s.sku})]})]}),e.jsx("div",{className:"font-serif product-price font-bold dark:text-gray-400",children:e.jsxs("span",{className:"inline-block text-2xl",children:[d,p((b=s==null?void 0:s.prices)==null?void 0:b.price),((y=s==null?void 0:s.prices)==null?void 0:y.discount)>=1&&e.jsxs("del",{className:"text-gray-400 dark:text-gray-500 text-lg pl-2",children:[d,p((N=s==null?void 0:s.prices)==null?void 0:N.originalPrice)]})]})}),e.jsxs("div",{className:"mb-3",children:[(s==null?void 0:s.stock)<=0?e.jsxs(l.Badge,{type:"danger",children:[e.jsx("span",{className:"font-bold",children:r("StockOut")})," "]}):e.jsxs(l.Badge,{type:"success",children:[" ",e.jsx("span",{className:"font-bold",children:r("InStock")})]}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium pl-4",children:[r("Quantity"),": ",s==null?void 0:s.stock]})]}),e.jsx("p",{className:"text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7",children:o(s==null?void 0:s.description)}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsxs("p",{className:"font-serif font-semibold py-1 text-gray-500 text-sm",children:[e.jsxs("span",{className:"text-gray-700 dark:text-gray-400",children:[r("Category"),":"," "]})," ",o((T=s==null?void 0:s.category)==null?void 0:T.name)]}),e.jsx("div",{className:"flex flex-row",children:JSON.parse(s==null?void 0:s.tag).map((g,j)=>e.jsx("span",{className:"bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",children:g},j+1))})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:()=>h(n),className:"cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 ",children:r("EditProduct")})})]})]})}),(s==null?void 0:s.isCombination)&&(a==null?void 0:a.length)>0&&!i&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:r("ProductVariantList")}),e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:r("SR")}),e.jsx(l.TableCell,{children:r("Image")}),e.jsx(l.TableCell,{children:r("Combination")}),e.jsx(l.TableCell,{children:r("Sku")}),e.jsx(l.TableCell,{children:r("Barcode")}),e.jsx(l.TableCell,{children:r("OrginalPrice")}),e.jsx(l.TableCell,{children:r("SalePrice")}),e.jsx(l.TableCell,{children:r("Quantity")})]})}),e.jsx(V,{lang:x,variants:w,currency:d,variantTitle:a})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:m,resultsPerPage:P,onChange:u,label:"Product Page Navigation"})})]})]})]})};export{ue as default};
