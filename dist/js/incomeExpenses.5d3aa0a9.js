"use strict";(self["webpackChunkfleet_managment"]=self["webpackChunkfleet_managment"]||[]).push([[190],{4061:function(t,e,i){i.d(e,{Z:function(){return p}});i(6699);var s=i(920),a=i(1452),n=i(908),l=i(2694),o=i(9351),r=i(6401),c=i(8472),d=i(5942),h=i(7678),u=i(4101),m=i(5352);const v=(0,h.Z)(n.Z,l.Z,o.Z,r.Z,c.Z,a.Z);var p=v.extend({name:"v-dialog",directives:{ClickOutside:d.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},2114:function(t,e,i){i.r(e),i.d(e,{default:function(){return ot}});var s=function(){var t=this,e=t._self._c;return e("div",[e("v-card",[e("v-card-title",[t._v(" Manage Income "),e("v-spacer"),e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-select",{attrs:{items:t.customerPaymentStatusList,label:"Search by Payment Status"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("v-col",{attrs:{cols:"6"}},[e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),e("v-divider"),e("v-data-table",{attrs:{headers:t.headers,items:t.detail,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function({}){return[e("v-dialog",{attrs:{width:"1000px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{medium:""}},"v-icon",s,!1),i),[t._v(" mdi-eye ")])]}}],null,!0),model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"text-h5"},[t._v("Customer Payment History Detail")])]),e("v-divider"),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Customer Name")]),e("v-list-item-subtitle",[t._v("Abebe")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Vehicle")]),e("v-list-item-subtitle",[t._v("Sino")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Palte Number")]),e("v-list-item-subtitle",[t._v("123123")])],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Start Location")]),e("v-list-item-subtitle",[t._v("Addis Ababa")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Trip Start Date")]),e("v-list-item-subtitle",[t._v("23/4/14")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Dropoff Location")]),e("v-list-item-subtitle",[t._v("Gondor")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Dropoff Date")]),e("v-list-item-subtitle",[t._v("2/5/14")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Total Payment ")]),e("v-list-item-subtitle",[t._v("45000")])],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Payment Status")]),e("v-list-item-subtitle",[t._v("Partialy Paid")])],1)],1)],1)],1),e("v-divider"),e("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" Paid Amount ")]),e("th",{staticClass:"text-left"},[t._v(" Remaining Payment ")]),e("th",{staticClass:"text-left"},[t._v(" Date ")])])]),e("tbody",t._l(t.history,(function(i){return e("tr",{key:i.id},[e("td",[t._v(t._s(i.paidAmount))]),e("td",[t._v(t._s(i.remainingPayment))]),e("td",[t._v(t._s(i.dateUpdate))])])})),0)]},proxy:!0}],null,!0)})],1),e("v-card-actions",[e("v-spacer")],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",elevation:"16","x-small":""}},"v-btn",s,!1),i),[t._v(" Truck Income Status ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"text-h5"},[t._v("Cutomer Payment Status")])]),e("v-divider"),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Customer Name"},model:{value:t.detail2.customerName,callback:function(e){t.$set(t.detail2,"customerName",e)},expression:"detail2.customerName"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Driver Name"},model:{value:t.detail2.driverName,callback:function(e){t.$set(t.detail2,"driverName",e)},expression:"detail2.driverName"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Vehicle"},model:{value:t.detail2.vehicleName,callback:function(e){t.$set(t.detail2,"vehicleName",e)},expression:"detail2.vehicleName"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Trip Start Location"},model:{value:t.detail2.tripStartLocation,callback:function(e){t.$set(t.detail2,"tripStartLocation",e)},expression:"detail2.tripStartLocation"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Trip Start Date"},model:{value:t.detail2.tripStartDate,callback:function(e){t.$set(t.detail2,"tripStartDate",e)},expression:"detail2.tripStartDate"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Trip End Location"},model:{value:t.detail2.tripEndLocation,callback:function(e){t.$set(t.detail2,"tripEndLocation",e)},expression:"detail2.tripEndLocation"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Total Payment"},model:{value:t.detail2.totalPayment,callback:function(e){t.$set(t.detail2,"totalPayment",e)},expression:"detail2.totalPayment"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Paid Amount"},model:{value:t.detail2.paidAmount,callback:function(e){t.$set(t.detail2,"paidAmount",e)},expression:"detail2.paidAmount"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Remaining Payment"},model:{value:t.detail2.remainingPayment,callback:function(e){t.$set(t.detail2,"remainingPayment",e)},expression:"detail2.remainingPayment"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-select",{attrs:{items:["Paid","Not Fully Paid","Not Paid"],label:"Payment Status",required:""},model:{value:t.detail2.paymentStatus,callback:function(e){t.$set(t.detail2,"paymentStatus",e)},expression:"detail2.paymentStatus"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-autocomplete",{attrs:{items:["Yet to start","Running","Delivered"],label:"Trip Status",multiple:""},model:{value:t.detail2.tripStatus,callback:function(e){t.$set(t.detail2,"tripStatus",e)},expression:"detail2.tripStatus"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Update ")])],1)],1)],1)]}},{key:"no-data",fn:function(){return[e("v-btn",{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0}],null,!0)},[e("IncomeHistory")],1),e("v-divider"),e("v-card",{attrs:{"max-width":"374"}},[e("v-card-title",[t._v("Sum Report")]),e("v-divider"),e("v-card-text",[e("v-list",{attrs:{dense:""}},[e("v-list-item-group",{attrs:{color:"primary"}},[e("v-row",[e("v-col",{attrs:{col:"6"}},[t._v("ጠቅላላ ክፍያ ድምር: ")]),e("v-col",{attrs:{col:"6"}},[t._v(" $ 135000")])],1),e("v-row",[e("v-col",{attrs:{col:"6"}},[t._v("የተከፈለ መጠን ድምር: ")]),e("v-col",{attrs:{col:"6"}},[t._v(" $ 80000")])],1),e("v-row",[e("v-col",{attrs:{col:"6"}},[t._v(" ቀሪ ክፍያ ድምር:: ")]),e("v-col",{attrs:{col:"6"}},[t._v(" $ 55000")])],1)],1)],1)],1)],1)],1)],1)},a=[],n=function(){var t=this,e=t._self._c;return e("div",[e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",{attrs:{tile:""}},[e("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),e("v-toolbar-title",[t._v("Settings")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Save ")])],1),e("v-menu",{attrs:{bottom:"",right:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",s,!1),i),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.items,(function(i,s){return e("v-list-item",{key:s,on:{click:()=>{}}},[e("v-list-item-title",[t._v(t._s(i.title))])],1)})),1)],1)],1),e("v-card-text",[e("v-btn",{staticClass:"ma-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.dialog2=!t.dialog2}}},[t._v(" Open Dialog 2 ")]),e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e("v-btn",t._g(t._b({staticClass:"ma-2"},"v-btn",s,!1),i),[t._v(" Tool Tip Activator ")])]}}])},[t._v(" Tool Tip ")]),e("v-list",{attrs:{"three-line":"",subheader:""}},[e("v-subheader",[t._v("User Controls")]),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v("Content filtering")]),e("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v("Password")]),e("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),e("v-divider"),e("v-list",{attrs:{"three-line":"",subheader:""}},[e("v-subheader",[t._v("General")]),e("v-list-item",[e("v-list-item-action",[e("v-checkbox",{model:{value:t.notifications,callback:function(e){t.notifications=e},expression:"notifications"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Notifications")]),e("v-list-item-subtitle",[t._v("Notify me about updates to apps or games that I downloaded")])],1)],1),e("v-list-item",[e("v-list-item-action",[e("v-checkbox",{model:{value:t.sound,callback:function(e){t.sound=e},expression:"sound"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Sound")]),e("v-list-item-subtitle",[t._v("Auto-update apps at any time. Data charges may apply")])],1)],1),e("v-list-item",[e("v-list-item-action",[e("v-checkbox",{model:{value:t.widgets,callback:function(e){t.widgets=e},expression:"widgets"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Auto-add widgets")]),e("v-list-item-subtitle",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1),e("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)},l=[],o={data(){return{dialog:!1,dialog2:!1,dialog3:!1,notifications:!1,sound:!0,widgets:!1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],select:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]}}},r=o,c=i(3736),d=i(3453),h=i.n(d),u=i(6190),m=i(4145),v=i(4886),p=i(2240),g=i(573),f=i(7069),b=i(144),y=b.ZP.extend({name:"rippleable",directives:{ripple:f.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),S=i(6174),x=i(7678);function I(t){t.preventDefault()}var k=(0,x.Z)(g.Z,y,S.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=g.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:I},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),_=k.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...g.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(p.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),C=i(4061),A=i(9223),w=i(4324),D=i(5808),V=i(4525),Z=i(5187),$=i(1137),P=i(4568),T=i(3687),L=i(2540),N=i(6313),E=i(7953),F=i(1452),B=i(6878),O=i(3016),M=i(908),R=i(5943),U=i(5352),z=i(4101),W=(0,x.Z)(B.Z,O.Z,M.Z,R.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),`${this.calcXOverflow(a,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,U.kb)(this.maxWidth),minWidth:(0,U.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,U.sp)(this,"activator",!0)&&(0,z.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=F.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===U.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}}),K=(0,c.Z)(r,n,l,!1,null,null,null),G=K.exports;h()(K,{VBtn:u.Z,VCard:m.Z,VCardText:v.ZB,VCheckbox:_,VDialog:C.Z,VDivider:A.Z,VIcon:w.Z,VList:D.Z,VListItem:V.Z,VListItemAction:Z.Z,VListItemContent:$.km,VListItemSubtitle:$.oZ,VListItemTitle:$.V9,VMenu:P.Z,VSpacer:T.Z,VSubheader:L.Z,VToolbar:N.Z,VToolbarItems:E.lj,VToolbarTitle:E.qW,VTooltip:W});var q={components:{IncomeHistory:G},data(){return{search:"",customerPaymentStatusList:["Full Paid","Partially Paid","Un Paid"],customerPaymentStatusValue:"",dialog:!1,dialog1:!1,selectedItem:1,history:[{id:1,paidAmount:"1000",remainingPayment:"30000",dateUpdate:"2/7/14"},{id:2,paidAmount:"5000",remainingPayment:"25000",dateUpdate:"12/7/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"},{id:3,paidAmount:"1000",remainingPayment:"15000",dateUpdate:"23/8/14"}],detail:[{customerName:"Abebe",vehicleName:"Sino",driverName:"Ayele",tripStartLocation:"Addis Ababa",tripStartDate:"23/4/14",tripEndLocation:"Gondor",tripEndDate:"2/5/14",tripStatus:"Running",totalPayment:"45000",paidAmount:"35000",remainingPayment:"10000",paymentStatus:"Partially Paid"},{customerName:"Solomon",vehicleName:"Sino",driverName:"Kebede",tripStartLocation:"Addis Ababa",tripStartDate:"23/4/14",tripEndLocation:"Gondor",tripEndDate:"2/5/14",tripStatus:"Running",totalPayment:"45000",paidAmount:"45000",remainingPayment:"0",paymentStatus:"Full Paid"},{customerName:"Ayele",vehicleName:"Sino",driverName:"Zelalem",tripStartLocation:"Addis Ababa",tripStartDate:"23/4/14",tripEndLocation:"Gondor",tripEndDate:"2/5/14",tripStatus:"Running",totalPayment:"45000",paidAmount:"0",remainingPayment:"45000",paymentStatus:"Un Paid"}],detail2:{customerName:"Abebe",vehicleName:"Sino",driverName:"Ayele",tripStartLocation:"Addis Ababa",tripStartDate:"23/4/14",tripEndLocation:"Gondor",tripEndDate:"2/5/14",tripStatus:"Running",totalPayment:"45000",paidAmount:"35000",remainingPayment:"10000",paymentStatus:"Not Fully Paid"},headers:[{text:"የደንበኛ ስም",sortable:!0,value:"customerName"},{text:"የተሽከርካሪ ስም",value:"vehicleName"},{text:"መነሻ ቦታ",value:"tripStartLocation"},{text:"መነሻ ቀን",value:"tripStartDate"},{text:"መድረሻ ቦታ",value:"tripEndLocation"},{text:"መድረሻ ቀን",value:"tripEndDate"},{text:"ጠቅላላ ክፍያ",value:"totalPayment"},{text:"የተከፈለ መጠን",value:"paidAmount"},{text:"ቀሪ ክፍያ",value:"remainingPayment"},{text:"የክፍያ ሁኔታ",value:"paymentStatus"},{text:"Actions",value:"actions",sortable:!1}],bookings:[]}}},Y=q,H=(i(6699),i(9730)),j=i(7808),X=i(1767);const J={...H.l,offsetY:!0,offsetOverflow:!0,transition:!1};var Q=H.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:H.Z.options.props.menuProps.type,default:()=>J},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...H.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,U.qF)(t,this.itemText),i=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=H.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...J,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=H.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((t=>t===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===U.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===U.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==U.Do.backspace&&t!==U.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,a=t!==s-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,H.Z.options.methods.clearableCallback.call(this)},genInput(){const t=j.Z.options.methods.genInput.call(this);return t.data=(0,X.ZP)(t.data,{attrs:{"aria-activedescendant":(0,U.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,U.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=H.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?H.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[U.Do.home,U.Do.end].includes(e)||H.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){H.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){H.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){H.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],a=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}),tt=i(266),et=i(2118),it=i(629),st=i(7941),at=i(1713),nt=i(9449),lt=(0,c.Z)(Y,s,a,!1,null,null,null),ot=lt.exports;h()(lt,{VAutocomplete:Q,VBtn:u.Z,VCard:m.Z,VCardActions:v.h7,VCardText:v.ZB,VCardTitle:v.EB,VCol:tt.Z,VContainer:et.Z,VDataTable:it.Z,VDialog:C.Z,VDivider:A.Z,VIcon:w.Z,VList:D.Z,VListItem:V.Z,VListItemContent:$.km,VListItemGroup:st.Z,VListItemSubtitle:$.oZ,VListItemTitle:$.V9,VRow:at.Z,VSelect:H.Z,VSimpleTable:nt.Z,VSpacer:T.Z,VTextField:j.Z})}}]);
//# sourceMappingURL=incomeExpenses.5d3aa0a9.js.map