"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[727],{6446:function(e,t,l){l.r(t),l.d(t,{default:function(){return I}});var a=function(){var e=this,t=e._self._c;return t("div",[t("v-card",{attrs:{"max-width":"2000"}},[t("v-card-title",[e._v("Add Customer Info")]),t("v-divider"),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Customer First Name",placeholder:"Customer First Name",rules:[e=>!!e||"Customer First Name is required"],outlined:""},model:{value:e.vehicle.vehicleModel,callback:function(t){e.$set(e.vehicle,"vehicleModel",t)},expression:"vehicle.vehicleModel"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Customer Last Name",placeholder:"Customer Last Name",rules:[e=>!!e||"Customer Last Name is required"],outlined:""},model:{value:e.vehicle.chassisNumber,callback:function(t){e.$set(e.vehicle,"chassisNumber",t)},expression:"vehicle.chassisNumber"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Phone Number",placeholder:"Phone Number",rules:[e=>!!e||"Phone Number is required"],outlined:""},model:{value:e.vehicle.vehicleColor,callback:function(t){e.$set(e.vehicle,"vehicleColor",t)},expression:"vehicle.vehicleColor"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-text-field",{attrs:{label:"Email",placeholder:"Email Price",outlined:""},model:{value:e.vehicle.vehicleColor,callback:function(t){e.$set(e.vehicle,"vehicleColor",t)},expression:"vehicle.vehicleColor"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Address",value:""}})],1)],1),t("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.saveVehicle}},[e._v(" Add Customer ")]),t("v-btn",[e._v(" clear ")])],1)],1)],1),t("v-divider",{staticClass:"mx-4"})],1)],1)},s=[],i={data(){return{vehicle:{vehicleName:"",vehicleModel:"",chassisNumber:"",vehicleColor:"",fuleConsumption:"",fuleType:"",vehicleType:""},fule:["Gasoline","Diesel"],items:["ISUZU","HILUX","MINI-BUS","5L"]}}},o=i,r=l(3736),n=l(3453),c=l.n(n),u=l(6190),h=l(4145),d=l(4886),v=l(266),m=l(2118),p=l(9223),f=l(5125),x=l(1713),C=l(7808),w=l(7678);const b=(0,w.Z)(C.Z);var g=b.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...C.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null==(t=this.$refs.input)||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,l=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(l,t)+"px"},genInput(){const e=C.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){C.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),N=(0,r.Z)(o,a,s,!1,null,null,null),I=N.exports;c()(N,{VBtn:u.Z,VCard:h.Z,VCardText:d.ZB,VCardTitle:d.EB,VCol:v.Z,VContainer:m.Z,VDivider:p.Z,VForm:f.Z,VRow:x.Z,VTextField:C.Z,VTextarea:g})}}]);
//# sourceMappingURL=customer.75d3e995.js.map