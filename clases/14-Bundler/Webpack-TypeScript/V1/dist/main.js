(()=>{"use strict";var e={731:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.getFullName=()=>`${this.first_name} ${this.last_name}`,this.first_name=e,this.last_name=t}}},752:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=s(r(860)),n=s(r(731)),i=r(721),a=(0,o.default)(),l=new n.default("Coder","House");a.get("/",((e,t)=>{t.send({time:(0,i.getTime)(),name:l.getFullName()})})),a.listen(8080,(()=>console.log("Server running on port 8080")))},721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=void 0,t.getTime=()=>({fyh:(new Date).toLocaleString(),timestamp:Date.now()})},860:e=>{e.exports=require("express")}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}(752)})();