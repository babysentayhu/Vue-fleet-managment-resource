"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[561],{2561:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var l=function(){var e=this,a=e._self._c;return a("div",[a("v-card",[a("v-card-title",[e._v(" Manage Customer Info "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),a("v-divider"),a("v-data-table",{attrs:{headers:e.headers,items:e.detail,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function({item:t}){return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return e.editItem(t.id)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){return e.deleteItem(t.id)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)},r=[],s={data(){return{search:"",detail:[{firstName:"Alemu",lastName:"Taddse",phoneNumber:"0934567812",email:"Alex@gmail.com",address:"Adama"},{firstName:"Belay",lastName:"Mamo",phoneNumber:"0934567812",email:"BelayMAmo@gmail.com",address:"Hawasa"},{firstName:"Abebe",lastName:"Kebede",phoneNumber:"0934567812",email:"Abebe@gmail.com",address:"Addis Ababa"}],headers:[{text:"Customer Firstname",align:"start",sortable:!0,value:"firstName"},{text:"Customer Lastname",value:"lastName"},{text:"Phone Number",value:"phoneNumber"},{text:"Email",value:"email"},{text:"Address",value:"address"},{text:"Actions",value:"actions",sortable:!1}],vehicles:[]}}},n=s,i=t(3736),m=t(3453),d=t.n(m),c=t(6190),o=t(4145),u=t(4886),v=t(629),f=t(9223),b=t(4324),h=t(3687),p=t(7808),N=(0,i.Z)(n,l,r,!1,null,null,null),x=N.exports;d()(N,{VBtn:c.Z,VCard:o.Z,VCardTitle:u.EB,VDataTable:v.Z,VDivider:f.Z,VIcon:b.Z,VSpacer:h.Z,VTextField:p.Z})}}]);
//# sourceMappingURL=561.91c2fc38.js.map