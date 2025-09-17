(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();var c=(t=>(t.DC="DC",t.Marvel="Marvel",t))(c||{});const a=[{id:1,name:"Batman",owner:"DC"},{id:2,name:"Spiderman",owner:"Marvel"},{id:3,name:"Suerman",owner:"DC"},{id:4,name:"Flash",owner:"DC"},{id:5,name:"Wolverine",owner:"Marvel"},{id:6,name:"Green Lantern",owner:"DC"}],l=t=>a.filter(o=>o.owner===t);document.querySelector("#app").innerHTML=`
  <div>
    <h1>Typescript Training</h1>
    <p>${JSON.stringify(l(c.Marvel))}</p>
  </div>
`;
