import{r as a,j as s}from"./index-C-eIvjp5.js";const c=()=>{const[e,o]=a.useState(!1);return{isCopied:e,copyToClipboard:t=>{navigator.clipboard.writeText(t).then(()=>{o(!0),setTimeout(()=>o(!1),2e3)})}}};function n({command:e}){const{isCopied:o,copyToClipboard:i}=c();return s.jsxs("div",{className:"console-view",children:[s.jsx("button",{className:"btn btn-outline-light btn-sm copy-button",onClick:()=>i(e),children:s.jsx("i",{className:`bi ${o?"bi-check":"bi-clipboard"}`})}),s.jsx("pre",{children:e})]})}function l({position:e}){return s.jsx("div",{className:`ad-space ad-space-${e}`,children:s.jsx("div",{className:"ad-placeholder"})})}export{l as A,n as C};