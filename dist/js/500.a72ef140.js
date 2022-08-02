"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[500],{5125:function(e,t,l){l(6699);var i=l(7678),r=l(2500),s=l(4712);t["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),l={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?l.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(l.valid=t(e)))})):l.valid=t(e),l},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const l=this.watchers.find((e=>e._uid===t._uid));l&&(l.valid(),l.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},266:function(e,t,l){l(6699),l(1884);var i=l(144),r=l(1767),s=l(5352);const n=["sm","md","lg","xl"],a=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>n.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>n.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u={col:Object.keys(a),offset:Object.keys(o),order:Object.keys(c)};function d(e,t,l){let i=e;if(null!=l&&!1!==l){if(t){const l=t.replace(e,"");i+=`-${l}`}return"col"!==e||""!==l&&!0!==l?(i+=`-${l}`,i.toLowerCase()):i.toLowerCase()}}const h=new Map;t["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:l,children:i,parent:s}){let n="";for(const r in t)n+=String(t[r]);let a=h.get(n);if(!a){let e;for(e in a=[],u)u[e].forEach((l=>{const i=t[l],r=d(e,l,i);r&&a.push(r)}));const l=a.some((e=>e.startsWith("col-")));a.push({col:!l||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(n,a)}return e(t.tag,(0,r.ZP)(l,{class:a}),i)}})},1713:function(e,t,l){l(6699),l(1884);var i=l(144),r=l(1767),s=l(5352);const n=["sm","md","lg","xl"],a=["start","end","center"];function o(e,t){return n.reduce(((l,i)=>(l[e+(0,s.jC)(i)]=t(),l)),{})}const c=e=>[...a,"baseline","stretch"].includes(e),u=o("align",(()=>({type:String,default:null,validator:c}))),d=e=>[...a,"space-between","space-around"].includes(e),h=o("justify",(()=>({type:String,default:null,validator:d}))),f=e=>[...a,"space-between","space-around","stretch"].includes(e),p=o("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(p)},v={align:"align",justify:"justify",alignContent:"align-content"};function g(e,t,l){let i=v[e];if(null!=l){if(t){const l=t.replace(e,"");i+=`-${l}`}return i+=`-${l}`,i.toLowerCase()}}const V=new Map;t["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:f},...p},render(e,{props:t,data:l,children:i}){let s="";for(const r in t)s+=String(t[r]);let n=V.get(s);if(!n){let e;for(e in n=[],m)m[e].forEach((l=>{const i=t[l],r=g(e,l,i);r&&n.push(r)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),V.set(s,n)}return e(t.tag,(0,r.ZP)(l,{staticClass:"row",class:n}),i)}})},3737:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var i=function(){var e=this,t=e._self._c;return t("div",[t("v-card",{attrs:{"max-width":"2000"}},[t("v-card-title",[e._v("Edit Vehicle")]),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Vehcile Name",placeholder:"Vehcile Name",rules:[e=>!!e||"Vehcile Name is required"],outlined:""},model:{value:e.currentVehicle.vehicleName,callback:function(t){e.$set(e.currentVehicle,"vehicleName",t)},expression:"currentVehicle.vehicleName"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Vehicle Model",placeholder:"Vehicle Model",rules:[e=>!!e||"Vehcile Model is required"],outlined:""},model:{value:e.currentVehicle.vehicleModel,callback:function(t){e.$set(e.currentVehicle,"vehicleModel",t)},expression:"currentVehicle.vehicleModel"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Chassis Number",placeholder:"Chassis Number",rules:[e=>!!e||"Chassis Number is required"],outlined:""},model:{value:e.currentVehicle.chassisNumber,callback:function(t){e.$set(e.currentVehicle,"chassisNumber",t)},expression:"currentVehicle.chassisNumber"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Vehicle Color",placeholder:"Vehicle Color",rules:[e=>!!e||"Vehcile Color is required"],outlined:""},model:{value:e.currentVehicle.vehicleColor,callback:function(t){e.$set(e.currentVehicle,"vehicleColor",t)},expression:"currentVehicle.vehicleColor"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Fule Consumption",placeholder:"Fule Consumption in litter",rules:[e=>!!e||"Fule Consumption is required"],outlined:""},model:{value:e.currentVehicle.fuleConsumption,callback:function(t){e.$set(e.currentVehicle,"fuleConsumption",t)},expression:"currentVehicle.fuleConsumption"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-select",{attrs:{items:e.fule,label:"Fule Type",rules:[e=>!!e||"Fule Type is required"],outlined:""},model:{value:e.currentVehicle.fuleType,callback:function(t){e.$set(e.currentVehicle,"fuleType",t)},expression:"currentVehicle.fuleType"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-select",{attrs:{items:e.items,label:"Vehcile Type",rules:[e=>!!e||"Vehcile Type is required"],outlined:""},model:{value:e.currentVehicle.vehicleType,callback:function(t){e.$set(e.currentVehicle,"vehicleType",t)},expression:"currentVehicle.vehicleType"}})],1)],1),t("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.updateVehicle}},[e._v(" Update ")])],1)],1)],1),t("v-divider",{staticClass:"mx-4"})],1)],1)},r=[],s={data(){return{currentVehicle:{vehicleName:"ISUZU",vehicleModel:"Model 1232",chassisNumber:"23455-123",vehicleColor:"White",fuleConsumption:"7 liter per KM",fuleType:"Diesel",vehicleType:"MINI-BUS"},fule:["Gasoline","Diesel"],items:["ISUZU","HILUX","MINI-BUS","5L"]}},methods:{getVehicle(e){DataService.get(e).then((e=>{this.currentVehicle=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},updateVehicle(){DataService.update(this.currentVehicle.id,this.currentVehicle).then((e=>{console.log(e.data)})).catch((e=>{console.log(e)})),this.$router.push({path:"/manageVehicle"})}},mounted(){}},n=s,a=l(3736),o=l(3453),c=l.n(o),u=l(6190),d=l(4145),h=l(4886),f=l(266),p=l(2118),m=l(9223),v=l(5125),g=l(1713),V=l(9481),y=l(7808),b=(0,a.Z)(n,i,r,!1,null,null,null),C=b.exports;c()(b,{VBtn:u.Z,VCard:d.Z,VCardText:h.ZB,VCardTitle:h.EB,VCol:f.Z,VContainer:p.Z,VDivider:m.Z,VForm:v.Z,VRow:g.Z,VSelect:V.Z,VTextField:y.Z})}}]);
//# sourceMappingURL=500.a72ef140.js.map