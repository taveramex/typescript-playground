(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=o=>`Hello, ${o}`,l=c("Armando");console.log(l);const d=o=>({id:o,nombre:"Armando",apellido:"Tamales",edad:42,direccion:"Calle 123"}),u=d(42);console.log(u);document.querySelector("#app").innerHTML=`
  <div>
    <h1>Typescript Training</h1>
    <p>hello world</p>
  </div>
`;
