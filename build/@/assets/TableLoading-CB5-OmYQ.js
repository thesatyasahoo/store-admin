import{l as f,r as O,d as k,j as l}from"./index-BJRbsysg.js";const A=f.createContext({}),v=!0;function _({baseColor:o,highlightColor:i,width:n,height:c,borderRadius:e,circle:d,direction:a,duration:m,enableAnimation:y=v}){const t={};return a==="rtl"&&(t["--animation-direction"]="reverse"),typeof m=="number"&&(t["--animation-duration"]=`${m}s`),y||(t["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(t.width=n),(typeof c=="string"||typeof c=="number")&&(t.height=c),(typeof e=="string"||typeof e=="number")&&(t.borderRadius=e),d&&(t.borderRadius="50%"),typeof o<"u"&&(t["--base-color"]=o),typeof i<"u"&&(t["--highlight-color"]=i),t}function p({count:o=1,wrapper:i,className:n,containerClassName:c,containerTestId:e,circle:d=!1,style:a,...m}){var y,t,g;const E=f.useContext(A),C={...m};for(const[s,r]of Object.entries(m))typeof r>"u"&&delete C[s];const h={...E,...C,circle:d},w={...a,..._(h)};let j="react-loading-skeleton";n&&(j+=` ${n}`);const S=(y=h.inline)!==null&&y!==void 0?y:!1,u=[],b=Math.ceil(o);for(let s=0;s<b;s++){let r=w;if(b>o&&s===b-1){const x=(t=r.width)!==null&&t!==void 0?t:"100%",N=o%1,T=typeof x=="number"?x*N:`calc(${x} * ${N})`;r={...r,width:T}}const $=f.createElement("span",{className:j,style:r,key:s},"‌");S?u.push($):u.push(f.createElement(f.Fragment,{key:s},$,f.createElement("br",null)))}return f.createElement("span",{className:c,"data-testid":e,"aria-live":"polite","aria-busy":(g=h.enableAnimation)!==null&&g!==void 0?g:v},i?u.map((s,r)=>f.createElement(i,{key:r},s)):u)}const R=({row:o=5,col:i=4,width:n=290,height:c=25})=>{const{mode:e}=O.useContext(k.WindmillContext),d=[];for(let a=1;a<=o;a++)d.push(a);return l.jsxs(k.TableContainer,{className:"mb-8",children:[l.jsxs("div",{className:"text-center",children:[l.jsx(p,{height:40,width:n,count:i,inline:!0,className:"mx-1 my-1 dark:bg-gray-800 bg-gray-200",baseColor:`${e==="dark"?"#010101":"#f9f9f9"}`,highlightColor:`${e==="dark"?"#1a1c23":"#f8f8f8"} `}),d.map(a=>l.jsx("div",{children:l.jsx(p,{height:c,width:n,count:i,inline:!0,className:"mx-1 my-1 dark:bg-gray-800 bg-gray-200",baseColor:`${e==="dark"?"#010101":"#f9f9f9"}`,highlightColor:`${e==="dark"?"#1a1c23":"#f8f8f8"} `})},a))]}),l.jsxs(k.TableFooter,{className:"flex justify-between",children:[l.jsx(p,{className:"dark:bg-gray-800 bg-gray-200",baseColor:`${e==="dark"?"#010101":"#f9f9f9"}`,highlightColor:`${e==="dark"?"#1a1c23":"#f8f8f8"} `,height:25,width:290,count:1}),l.jsx(p,{className:"dark:bg-gray-800 bg-gray-200",baseColor:`${e==="dark"?"#010101":"#f9f9f9"}`,highlightColor:`${e==="dark"?"#1a1c23":"#f8f8f8"} `,height:25,width:290,count:1})]})]})};export{p as S,R as T};
