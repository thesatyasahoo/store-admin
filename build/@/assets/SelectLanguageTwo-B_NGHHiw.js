import{r as u,S as d,j as r}from"./index-njudL7fz.js";import{u as i}from"./useAsync-CeSRD30R.js";import{L as c}from"./LanguageServices-DiisRc0f.js";const p=({handleSelectLanguage:s,register:t})=>{const{data:a,loading:n,error:g}=i(c.getShowingLanguage),{lang:o}=u.useContext(d);return r.jsx(r.Fragment,{children:r.jsxs("select",{name:"language",...t("language",{required:"language is required!"}),onChange:e=>s(e.target.value),className:"block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700",children:[r.jsx("option",{value:o,defaultChecked:!0,hidden:!0,children:o}),!g&&!n&&(a==null?void 0:a.map(e=>r.jsxs("option",{value:e.iso_code,children:[e.iso_code," "]},e._id)))]})})};export{p as S};
