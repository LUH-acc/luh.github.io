import{d as e,h as t,o as a,c as l,a as n,u as s,F as i,g as u}from"./index-BKEwj3gw.js";const c={class:"chat-canvas"},o=["src"],r=["src"],v=e({__name:"canvas",setup(e){const v=t(""),d=t(null),h=t(null),g=t("");a((()=>{L()}));let m=0,f=0,w=0,p=0;const L=()=>{h.value.onload=()=>{var e,t;m=null==(e=h.value)?void 0:e.naturalWidth,f=null==(t=h.value)?void 0:t.naturalHeight,d.value.width=h.value.width,d.value.height=h.value.height,w=m/h.value.width,p=f/h.value.height},d.value.addEventListener("mousedown",_,!1)};let E=0,R=0,x=0,y=0;const _=e=>{E=e.clientX,R=e.clientY,d.value.addEventListener("mousemove",k,!1),d.value.addEventListener("mouseup",C,!1)},k=e=>{x=e.clientX-E,y=e.clientY-R;let t=d.value.getContext("2d");t.clearRect(0,0,d.value.width,d.value.height),t.fillStyle="#000",t.strokeRect(E,R,x,y)},C=()=>{d.value.removeEventListener("mousemove",k,!1),d.value.removeEventListener("mouseup",C,!1),H()},H=()=>{const e=document.createElement("canvas");e.width=300,e.height=300;const t=e.getContext("2d");t.clearRect(0,0,300,300),t.drawImage(h.value,E*w,R*p,x*w,y*p,0,0,300,300),g.value=e.toDataURL()},W=e=>{D({width:200,height:200,file:e.target.files[0]}).then((e=>{})).catch((e=>{}))},D=e=>new Promise(((t,a)=>{const l=new Image;function n(){const n=l.width,s=l.height;(n>e.width||s>e.height)&&a({status:!1,msg:"图片尺寸超过限制",naturalWidth:n,naturalHeight:s}),t({status:!0,msg:"图片尺寸符合要求",naturalWidth:n,naturalHeight:s})}if(e.src)l.src=e.src,l.onload=n;else if(e.file){const t=new FileReader;t.readAsDataURL(e.file),t.onload=e=>{var t;l.src=null==(t=e.target)?void 0:t.result,l.onload=n}}else a({status:!1,msg:"请传入图片地址或文件"})}));return(e,t)=>(u(),l(i,null,[n("div",c,[n("canvas",{class:"chat-canvas-box",ref_key:"canvas",ref:d},null,512),n("img",{src:s(v),alt:"",ref_key:"img",ref:h,class:"img"},null,8,o)]),n("div",null,[n("input",{type:"file",onChange:W},null,32)]),n("div",null,[n("img",{class:"img2",src:s(g),alt:""},null,8,r)])],64))}});export{v as default};
