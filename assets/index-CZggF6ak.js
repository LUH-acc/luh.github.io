import{d as e,h as t,r as l,o as a,c as n,a as o,F as u,b as r,u as s,y as i,g as h,t as d}from"./index-BpSucwqX.js";const v=o("div",{class:"water-full-loading"}," loading... ",-1),c=230,f=e({__name:"index",setup(e){t(null);const f=l([]),g=t(0),m=t(0),p=t(0),w=t([]);a((()=>{window.addEventListener("resize",y),b(),T(),x()}));const x=()=>{let e=document.querySelector(".water-full-loading");new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&setTimeout((()=>{T()}),2e3)}))})).observe(e)},b=()=>{g.value=document.documentElement.clientWidth||document.body.clientWidth,p.value=Math.floor(g.value/c),w.value=Array.from({length:p.value},(()=>0))},y=((e,t)=>{let l=null;return function(...a){l&&clearTimeout(l),l=setTimeout((()=>{e(...a)}),t)}})((()=>{b();for(let e=0;e<f.length;e++){let t=M(),l=w.value[t]+"px";f[e].top=l,f[e].left=t*c+"px",w.value[t]+=f[e].height}E()}),100),M=()=>{let e=0,t=w.value[0];for(let l=0;l<w.value.length;l++)w.value[l]<t&&(t=w.value[l],e=l);return e},E=()=>{let e=0,t=w.value[0];for(let l=0;l<w.value.length;l++)w.value[l]>t&&(t=w.value[l],e=l);return m.value=t+20,e};function $(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}const T=()=>{for(let e=0;e<15;e++){let t=M(),l=w.value[t]+"px",a={id:e,content:`内容${e}`,with:c,top:l,left:t*c+"px",height:Math.floor(100*Math.random())+250,bg:$()};w.value[t]+=a.height,f.push(a)}E()};return(e,t)=>(h(),n("div",null,[o("div",{class:"water-full",style:i({height:`${s(m)}px`})},[(h(!0),n(u,null,r(s(f),((e,t)=>(h(),n("div",{class:"water-full-item",key:t,style:i({width:`${e.with}px`,height:`${e.height}px`,backgroundColor:e.bg,top:e.top,left:e.left})},d(e.content),5)))),128))],4),v]))}});export{f as default};
