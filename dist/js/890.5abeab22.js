"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[890],{6890:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var i=function(){var t=this,e=t._self._c;return e("div",[e("v-card",[e("v-card-title",[t._v(" Manage Dispatch "),e("v-spacer"),e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("v-divider"),e("v-data-table",{attrs:{headers:t.headers,items:t.bookings,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function({item:a}){return[e("v-icon",{staticClass:"mr-2",attrs:{medium:""},on:{click:function(e){return t.editItem(a.id)}}},[t._v(" mdi-eye ")]),e("v-icon",{staticClass:"mr-2",attrs:{medium:""},on:{click:function(e){return t.editItem(a.id)}}},[t._v(" mdi-printer ")]),e("v-icon",{staticClass:"mr-2",attrs:{medium:""},on:{click:function(e){return t.editItem(a.id)}}},[t._v(" mdi-pencil ")]),e("v-icon",{attrs:{medium:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")]),e("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e("v-btn",t._g({attrs:{elevation:"16","x-small":"",color:"primary",dark:""}},a),[t._v("Update Trip Status")])]}}],null,!0)},[e("v-list",[e("v-list-item",{attrs:{link:""}},[e("v-list-item-title",[t._v("Yet to start")])],1),e("v-divider"),e("v-list-item",{attrs:{link:""}},[e("v-list-item-title",[t._v("Running")])],1),e("v-divider"),e("v-list-item",{attrs:{link:""}},[e("v-list-item-title",[t._v("Delivered")])],1)],1)],1)]}},{key:"no-data",fn:function(){return[e("v-btn",{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)},r=[],n=a(1192),l={data(){return{search:"",headers:[{text:"የጭነት ማዘዣ ቁጥር",align:"start",sortable:!0,value:"id"},{text:"የሹፌር ስም",align:"start",sortable:!0,value:"driverName"},{text:"ሰሌዳ ቁጥር",value:"plateNumber"},{text:"መነሻ ቦታ",value:"tripStartLocation"},{text:"መነሻ ቀን",value:"tripStartDate"},{text:"መድረሻ ቦታ",value:"tripEndLocation"},{text:"መድረሻ ቀን",value:"tripEndDate"},{text:"የጉዞ ሁኔታ",value:"tripStatus"},{text:"የክፍያ ሁኔታ",value:"status"},{text:"Actions",value:"actions",sortable:!1}],bookings:[{driverName:"Gebeyw",vehicleName:"Sino",plateNumber:"45654",tripStartLocation:"Muger",tripStartDate:"23/5/2015",tripEndLocation:"Gorgora",tripEndDate:"2/6/2015",loadOrderNumber:"12",incomeDocument:"yes",distanceByLoad:"200",tripStatus:"Running",customer:"Kesadael",loadType:"Cement",loadSize:"345",tariff:"5000",tripCode:"34324",incomeCash:"345678",status:"Partially Paid",remainingPayment:"1000",fule:"565656",allowance:"450",loadingUnloading:"456",maintenance:"345",vehicleGurd:"2344",dealer:"676",laviyajo:"567",balanceKota:"3243",workflow:"5645",totalOperationalCost:"23434",prepaid:"454",month:"June",cpv:"5",document:"yes",remark:"done",id:1},{driverName:"Web Egzer",tripStatus:"Yet To Start",status:"Full Paid",fule:"4588",allowance:"450",plateNumber:"45654",tripStartLocation:"Dangote",tripStartDate:"23/5/2015",tripEndLocation:"Addis Ababa",tripEndDate:"2/6/2015",customer:"Ayele",id:2},{driverName:"Leuel",plateNumber:"45654",status:"Un Paid",fule:"600",allowance:"150",tripStatus:"Deliverd",tripStartLocation:"Gondor",tripStartDate:"23/5/2015",tripEndLocation:"Bahir Dar",tripEndDate:"2/6/2015",customer:"Adolam",id:3}]}},methods:{retrieveBooking(){n.Z.getAllBooking().then((t=>{this.bookings=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))},refreshList(){this.retrieveBooking()},editItem(t){this.$router.push({name:"booking-details",params:{id:t}})},deleteItem(t){n.Z["delete"](t).then((()=>{this.refreshList()})).catch((t=>{console.log(t)}))}},mounted(){}},o=l,s=a(3736),d=a(3453),c=a.n(d),u=a(6190),m=a(4145),v=a(4886),p=a(629),h=a(9223),f=a(4324),g=a(5808),b=a(4525),k=a(9500),S=a(4528),x=a(3687),y=a(7808),_=(0,s.Z)(o,i,r,!1,null,null,null),D=_.exports;c()(_,{VBtn:u.Z,VCard:m.Z,VCardTitle:v.EB,VDataTable:p.Z,VDivider:h.Z,VIcon:f.Z,VList:g.Z,VListItem:b.Z,VListItemTitle:k.V9,VMenu:S.Z,VSpacer:x.Z,VTextField:y.Z})}}]);
//# sourceMappingURL=890.5abeab22.js.map