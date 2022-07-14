"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[367],{4245:function(){},4145:function(t,e,i){i(4245);var s=i(3434),r=i(401),l=i(8860),n=i(7678);e["Z"]=(0,n.Z)(r.Z,l.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...l.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},4886:function(t,e,i){i.d(e,{EB:function(){return a},Qq:function(){return n},ZB:function(){return o},h7:function(){return l}});var s=i(4145),r=i(5352);const l=(0,r.Ji)("v-card__actions"),n=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),a=(0,r.Ji)("v-card__title");s.Z},266:function(t,e,i){i(6699),i(1884);var s=i(144),r=i(1767),l=i(5352);const n=["sm","md","lg","xl"],o=(()=>n.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),a=(()=>n.reduce(((t,e)=>(t["offset"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>n.reduce(((t,e)=>(t["order"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),v={col:Object.keys(o),offset:Object.keys(a),order:Object.keys(c)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...a,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:l}){let n="";for(const r in e)n+=String(e[r]);let o=u.get(n);if(!o){let t;for(t in o=[],v)v[t].forEach((i=>{const s=e[i],r=d(t,i,s);r&&o.push(r)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(n,o)}return t(e.tag,(0,r.ZP)(i,{class:o}),s)}})},1713:function(t,e,i){i(6699),i(1884);var s=i(144),r=i(1767),l=i(5352);const n=["sm","md","lg","xl"],o=["start","end","center"];function a(t,e){return n.reduce(((i,s)=>(i[t+(0,l.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),v=a("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...o,"space-between","space-around"].includes(t),u=a("justify",(()=>({type:String,default:null,validator:d}))),m=t=>[...o,"space-between","space-around","stretch"].includes(t),g=a("alignContent",(()=>({type:String,default:null,validator:m}))),h={align:Object.keys(v),justify:Object.keys(u),alignContent:Object.keys(g)},_={align:"align",justify:"justify",alignContent:"align-content"};function p(t,e,i){let s=_[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const f=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...v,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:m},...g},render(t,{props:e,data:i,children:s}){let l="";for(const r in e)l+=String(e[r]);let n=f.get(l);if(!n){let t;for(t in n=[],h)h[t].forEach((i=>{const s=e[i],r=p(t,i,s);r&&n.push(r)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),f.set(l,n)}return t(e.tag,(0,r.ZP)(i,{staticClass:"row",class:n}),s)}})},401:function(t,e,i){i.d(e,{Z:function(){return h}});var s=i(144),r=i(7394),l=i(6750),n=i(6878),o=i(4263),a=i(3457),c=i(6669),v=i(5352),d=i(7678);const u=(0,d.Z)(n.Z,(0,o.d)(["absolute","fixed","top","bottom"]),a.Z,c.Z);var m=u.extend({name:"v-progress-linear",directives:{intersect:l.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,v.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,v.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,v.kb)(this.normalizedValue,"%"),width:(0,v.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,v.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,v.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,i){this.isVisible=i},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,v.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m,h=s.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},3367:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var s=function(){var t=this,e=t._self._c;return e("div",[e("v-card",{attrs:{"max-width":"2000"}},[e("v-card-title",[t._v("Dipatch Details")]),e("v-divider"),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-card",[e("v-card-title",[t._v("ጠቅላላ የተሽከርካሪ የአሽከርካሪ አና የጉዞ መረጃ!")]),e("v-divider"),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Driver Name")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.driverName))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Vehicle")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.vehicleName))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Palte Number")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.plateNumber))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Start Location")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripStartLocation))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Start Date")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripStartDate))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Load Order Number")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.loadOrderNumber))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip End Location")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripEndLocation))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip End Data")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripEndDate))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Distance By load")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.distanceByLoad))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Status")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripStatus))])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Income Document")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.incomeDocument))])],1)],1)],1)],1),e("v-divider")],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-card",[e("v-card-title",[t._v("የስራው አይነት ፣ ስራው የተሰራለት እና የክፍያ ሁኔታ!")]),e("v-divider"),e("v-card-text",[e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Customer")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.customer))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Load Type")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.loadType))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Load Size")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.loadSize))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Load Size")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tariff))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Code")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.tripCode))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Income Cash")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.incomeCash))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Status")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.status))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Remaining Payment")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.remainingPayment))])],1)],1)],1)],1),e("v-divider")],1),e("v-divider",{staticClass:"mx-4"})],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"7"}},[e("v-card",[e("v-card-title",[t._v("የኦፕሬሽን የወጪ ዝርዝር!")]),e("v-divider"),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Fule")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.fule))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Allowance")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.allowance))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Loading / Unloading ")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.loadingUnloading))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Maintenance ")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.maintenance))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Vehicle Gurd ")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.vehicleGurd))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Dealer")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.dealer))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Laviyajo")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.laviyajo))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Balance Kota")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.balanceKota))])],1)],1)],1)],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Workflow")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.workflow))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Total Operational Cost")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.totalOperationalCost))])],1)],1)],1),e("v-col",{attrs:{col:"3"}}),e("v-col",{attrs:{col:"3"}})],1),e("v-divider")],1)],1),e("v-divider",{staticClass:"mx-4"})],1)],1),e("v-col",{attrs:{cols:"5"}},[e("v-card",[e("v-card-title",[t._v("ተጨማሪ መረጃ!")]),e("v-divider"),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Pre Paid Sent by Driver")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.prepaid))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Month")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.month))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("CPV")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.cpv))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Document")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.document))])],1)],1)],1),e("v-col",{attrs:{col:"3"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Remark")]),e("v-list-item-subtitle",[t._v(t._s(t.currentBooking.remark))])],1)],1)],1)],1)],1)],1),e("v-divider",{staticClass:"mx-4"})],1)],1)],1)],1),e("v-divider",{staticClass:"mx-4"})],1)],1)},r=[],l=i(1192),n={data(){return{currentBooking:{driverName:"Gebeyw",vehicleName:"Sino",plateNumber:"45654",tripStartLocation:"Muger",tripStartDate:"23/5/2015",tripEndLocation:"Gorgora",tripEndDate:"2/6/2015",loadOrderNumber:"12",incomeDocument:"yes",distanceByLoad:"200",tripStatus:"Running",customer:"Kesadael",loadType:"Cement",loadSize:"345",tariff:"5000",tripCode:"34324",incomeCash:"345678",status:"Partially Paid",remainingPayment:"1000",fule:"565656",allowance:"450",loadingUnloading:"456",maintenance:"345",vehicleGurd:"2344",dealer:"676",laviyajo:"567",balanceKota:"3243",workflow:"5645",totalOperationalCost:"23434",prepaid:"454",month:"June",cpv:"5",document:"yes",remark:"done",id:1},items:["ISUZU","HILUX","MINI-BUS","5L"]}},methods:{getBooking(t){l.Z.getSigleBooking(t).then((t=>{this.currentBooking=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){}},o=n,a=i(3736),c=i(3453),v=i.n(c),d=i(4145),u=i(4886),m=i(266),g=i(2118),h=i(9223),_=i(4525),p=i(9500),f=i(1713),b=(0,a.Z)(o,s,r,!1,null,null,null),k=b.exports;v()(b,{VCard:d.Z,VCardText:u.ZB,VCardTitle:u.EB,VCol:m.Z,VContainer:g.Z,VDivider:h.Z,VListItem:_.Z,VListItemContent:p.km,VListItemSubtitle:p.oZ,VListItemTitle:p.V9,VRow:f.Z})}}]);
//# sourceMappingURL=367.307222ec.js.map