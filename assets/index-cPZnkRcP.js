(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c={name:"Tony",age:45,key:"Ironman"},l=({key:i,name:t,age:n,rank:o=1})=>({keyName:i,user:{name:t,age:n},rank:o}),{rank:u,keyName:a,user:{name:d}}=l(c);console.log({rank:u,keyName:a,alias:d});document.querySelector("#app").innerHTML=`
  <div>
    <h1>Typescript Training</h1>
    <p>hello world</p>
  </div>
`;
