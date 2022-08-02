"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[242],{5125:function(t,e,r){r(6699);var a=r(7678),i=r(2500),l=r(4712);e["Z"]=(0,a.Z)(i.Z,(0,l.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),r={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))})):r.valid=e(t),r},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const r=this.watchers.find((t=>t._uid===e._uid));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},266:function(t,e,r){r(6699),r(1884);var a=r(144),i=r(1767),l=r(5352);const n=["sm","md","lg","xl"],s=(()=>n.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),o=(()=>n.reduce(((t,e)=>(t["offset"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d=(()=>n.reduce(((t,e)=>(t["order"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(s),offset:Object.keys(o),order:Object.keys(d)};function c(t,e,r){let a=t;if(null!=r&&!1!==r){if(e){const r=e.replace(t,"");a+=`-${r}`}return"col"!==t||""!==r&&!0!==r?(a+=`-${r}`,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["Z"]=a.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:r,children:a,parent:l}){let n="";for(const i in e)n+=String(e[i]);let s=f.get(n);if(!s){let t;for(t in s=[],u)u[t].forEach((r=>{const a=e[r],i=c(t,r,a);i&&s.push(i)}));const r=s.some((t=>t.startsWith("col-")));s.push({col:!r||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(n,s)}return t(e.tag,(0,i.ZP)(r,{class:s}),a)}})},1713:function(t,e,r){r(6699),r(1884);var a=r(144),i=r(1767),l=r(5352);const n=["sm","md","lg","xl"],s=["start","end","center"];function o(t,e){return n.reduce(((r,a)=>(r[t+(0,l.jC)(a)]=e(),r)),{})}const d=t=>[...s,"baseline","stretch"].includes(t),u=o("align",(()=>({type:String,default:null,validator:d}))),c=t=>[...s,"space-between","space-around"].includes(t),f=o("justify",(()=>({type:String,default:null,validator:c}))),h=t=>[...s,"space-between","space-around","stretch"].includes(t),p=o("alignContent",(()=>({type:String,default:null,validator:h}))),g={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(p)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,r){let a=v[t];if(null!=r){if(e){const r=e.replace(t,"");a+=`-${r}`}return a+=`-${r}`,a.toLowerCase()}}const y=new Map;e["Z"]=a.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:c},...f,alignContent:{type:String,default:null,validator:h},...p},render(t,{props:e,data:r,children:a}){let l="";for(const i in e)l+=String(e[i]);let n=y.get(l);if(!n){let t;for(t in n=[],g)g[t].forEach((r=>{const a=e[r],i=m(t,r,a);i&&n.push(i)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(l,n)}return t(e.tag,(0,i.ZP)(r,{staticClass:"row",class:n}),a)}})},8242:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var a=function(){var t=this,e=t._self._c;return e("div",[e("v-card",{attrs:{"max-width":"2000"}},[e("v-card-title",[t._v("Add USer")]),e("v-divider"),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-text-field",{attrs:{label:"Name",placeholder:"Enter Name",rules:[t=>!!t||"Name is required"],outlined:""}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-text-field",{attrs:{label:"Email",placeholder:"Enter Email",rules:[t=>!!t||"Email is required"],outlined:""}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-text-field",{attrs:{label:"User Name",placeholder:"Enter User Name",rules:[t=>!!t||"User Name is required"],outlined:""}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-text-field",{attrs:{label:"Password",placeholder:"Enter Password",rules:[t=>!!t||"Password is required"],outlined:""}})],1)],1),e("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.saveVehicle}},[t._v(" Add User ")]),e("v-btn",[t._v(" Clear ")])],1)],1)],1),e("v-divider",{staticClass:"mx-4"})],1)],1)},i=[],l=r(3736),n=r(3453),s=r.n(n),o=r(6190),d=r(4145),u=r(4886),c=r(266),f=r(2118),h=r(9223),p=r(5125),g=r(1713),v=r(7808),m={},y=(0,l.Z)(m,a,i,!1,null,null,null),w=y.exports;s()(y,{VBtn:o.Z,VCard:d.Z,VCardText:u.ZB,VCardTitle:u.EB,VCol:c.Z,VContainer:f.Z,VDivider:h.Z,VForm:p.Z,VRow:g.Z,VTextField:v.Z})}}]);
//# sourceMappingURL=242.9cecf599.js.map