"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[297],{5125:function(e,t,l){l(6699);var i=l(7678),r=l(2500),s=l(4712);t["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),l={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?l.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(l.valid=t(e)))})):l.valid=t(e),l},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const l=this.watchers.find((e=>e._uid===t._uid));l&&(l.valid(),l.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},266:function(e,t,l){l(6699),l(1884);var i=l(144),r=l(1767),s=l(5352);const a=["sm","md","lg","xl"],n=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>a.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(n),offset:Object.keys(o),order:Object.keys(u)};function d(e,t,l){let i=e;if(null!=l&&!1!==l){if(t){const l=t.replace(e,"");i+=`-${l}`}return"col"!==e||""!==l&&!0!==l?(i+=`-${l}`,i.toLowerCase()):i.toLowerCase()}}const h=new Map;t["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:l,children:i,parent:s}){let a="";for(const r in t)a+=String(t[r]);let n=h.get(a);if(!n){let e;for(e in n=[],c)c[e].forEach((l=>{const i=t[l],r=d(e,l,i);r&&n.push(r)}));const l=n.some((e=>e.startsWith("col-")));n.push({col:!l||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(a,n)}return e(t.tag,(0,r.ZP)(l,{class:n}),i)}})},1713:function(e,t,l){l(6699),l(1884);var i=l(144),r=l(1767),s=l(5352);const a=["sm","md","lg","xl"],n=["start","end","center"];function o(e,t){return a.reduce(((l,i)=>(l[e+(0,s.jC)(i)]=t(),l)),{})}const u=e=>[...n,"baseline","stretch"].includes(e),c=o("align",(()=>({type:String,default:null,validator:u}))),d=e=>[...n,"space-between","space-around"].includes(e),h=o("justify",(()=>({type:String,default:null,validator:d}))),f=e=>[...n,"space-between","space-around","stretch"].includes(e),v=o("alignContent",(()=>({type:String,default:null,validator:f}))),p={align:Object.keys(c),justify:Object.keys(h),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(e,t,l){let i=m[e];if(null!=l){if(t){const l=t.replace(e,"");i+=`-${l}`}return i+=`-${l}`,i.toLowerCase()}}const y=new Map;t["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:f},...v},render(e,{props:t,data:l,children:i}){let s="";for(const r in t)s+=String(t[r]);let a=y.get(s);if(!a){let e;for(e in a=[],p)p[e].forEach((l=>{const i=t[l],r=g(e,l,i);r&&a.push(r)}));a.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(s,a)}return e(t.tag,(0,r.ZP)(l,{staticClass:"row",class:a}),i)}})},5844:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var i=function(){var e=this,t=e._self._c;return t("div",[t("v-card",{attrs:{"max-width":"2000"}},[t("v-card-title",[e._v("Add Fule")]),t("v-divider"),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-select",{attrs:{items:e.items,label:"Vehicle",rules:[e=>!!e||"Vehicle is Required"],outlined:""}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-select",{attrs:{items:e.fule,label:"Fule Type",rules:[e=>!!e||"Fule Type is required"],outlined:""},model:{value:e.vehicle.fuleType,callback:function(t){e.$set(e.vehicle,"fuleType",t)},expression:"vehicle.fuleType"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Fule Quantity in Litter",placeholder:"Fule Quantity in Litter",rules:[e=>!!e||"Fule Quantity in Litter is required"],outlined:""},model:{value:e.vehicle.vehicleModel,callback:function(t){e.$set(e.vehicle,"vehicleModel",t)},expression:"vehicle.vehicleModel"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Odo Meter Reading",placeholder:"Odo Meter Reading",rules:[e=>!!e||"Odo Meter Reading is required"],outlined:""},model:{value:e.vehicle.chassisNumber,callback:function(t){e.$set(e.vehicle,"chassisNumber",t)},expression:"vehicle.chassisNumber"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-select",{attrs:{items:["Addis to Mekelle ","Gondor to Addis"],label:"Trip",rules:[e=>!!e||"Trip is required"],outlined:""},model:{value:e.vehicle.fuleType,callback:function(t){e.$set(e.vehicle,"fuleType",t)},expression:"vehicle.fuleType"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Fule Price per Litter",placeholder:"Fule Price per Litter",rules:[e=>!!e||"Fule Price per Litter is required"],outlined:""},model:{value:e.vehicle.vehicleColor,callback:function(t){e.$set(e.vehicle,"vehicleColor",t)},expression:"vehicle.vehicleColor"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Total Price",placeholder:"Total Price",disabled:"",outlined:""},model:{value:e.vehicle.vehicleColor,callback:function(t){e.$set(e.vehicle,"vehicleColor",t)},expression:"vehicle.vehicleColor"}})],1)],1),t("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.saveVehicle}},[e._v(" Add Fule ")]),t("v-btn",[e._v(" clear ")])],1)],1)],1),t("v-divider",{staticClass:"mx-4"})],1)],1)},r=[],s={data(){return{vehicle:{vehicleName:"",vehicleModel:"",chassisNumber:"",vehicleColor:"",fuleConsumption:"",fuleType:"",vehicleType:""},fule:["Gasoline","Diesel"],items:["ISUZU","HILUX","MINI-BUS","5L"]}}},a=s,n=l(3736),o=l(3453),u=l.n(o),c=l(6190),d=l(4145),h=l(4886),f=l(266),v=l(2118),p=l(9223),m=l(5125),g=l(1713),y=l(9481),b=l(7808),C=(0,n.Z)(a,i,r,!1,null,null,null),w=C.exports;u()(C,{VBtn:c.Z,VCard:d.Z,VCardText:h.ZB,VCardTitle:h.EB,VCol:f.Z,VContainer:v.Z,VDivider:p.Z,VForm:m.Z,VRow:g.Z,VSelect:y.Z,VTextField:b.Z})}}]);
//# sourceMappingURL=fule.736a313d.js.map