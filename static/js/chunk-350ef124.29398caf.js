(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350ef124"],{"5b5b":function(t,e,a){t.exports=a.p+"static/img/UC.4072bc07.svg"},7496:function(t,e,a){"use strict";var i=a("5530"),n=(a("df86"),a("7560")),o=a("58df");e["a"]=Object(o["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},"8cdb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{staticClass:"fill-height"},[i("v-col",{attrs:{cols:"12","align-self":"center"}},[i("v-row",{attrs:{align:"center",justify:"center","align-content":"center"}},[i("v-col",{attrs:{cols:"10"}},[i("div",[i("p",{staticClass:"myFont h2 text-center my-0 py-0"},[t._v("Comming Soon...")]),i("p",{staticClass:"myFont ovrline text-center my-0 py-0"},[t._v(" Website is currently undergoing development.Should be up shortly. ")])])])],1),i("v-row",{attrs:{justify:"center",align:"center","align-content":"center"}},[i("v-img",{attrs:{src:a("5b5b"),contain:"","max-width":"70vw","max-height":"70vh"}})],1),i("v-row",{attrs:{justify:"center",align:"center","align-content":"center"}},[i("v-col",{attrs:{cols:"6",sm:"6",md:"4",lg:"4",xl:"3","align-self":"center"}},[i("div",{staticClass:"my-5 text-center"},[i("v-btn",{staticClass:"text--primary",attrs:{tile:"",block:"",color:"secondary","max-height":"36px"},on:{click:t.loadAndMove}},[i("v-icon",{attrs:{color:"primary",left:""}},[t._v("mdi-eye")]),t._v("Take a Peek. ")],1)],1)])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"50vw",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{tile:"",hover:"",height:"300",width:"300","max-height":"90vh","max-width":"50vw"}},[i("waiter")],1)],1)],1)],1)],1)},n=[],o=(a("d3b7"),{data:function(){return{dialog:!1}},components:{Waiter:function(){return a.e("chunk-ef633c60").then(a.bind(null,"20c4"))}},methods:{loadAndMove:function(){var t=this;this.$data.dialog=!0,setTimeout((function(){t.$data.dialog=!1,t.$router.push("home")}),5e3)}}}),s=o,r=a("2877"),c=a("6544"),l=a.n(c),d=a("7496"),u=a("8336"),p=a("b0af"),f=a("62ad"),v=a("a523"),h=a("169a"),m=a("132d"),g=a("adda"),y=a("f6c4"),b=a("0fd9"),w=Object(r["a"])(s,i,n,!1,null,"23009ad2",null);e["default"]=w.exports;l()(w,{VApp:d["a"],VBtn:u["a"],VCard:p["a"],VCol:f["a"],VContainer:v["a"],VDialog:h["a"],VIcon:m["a"],VImg:g["a"],VMain:y["a"],VRow:b["a"]})},bd0c:function(t,e,a){},d10f:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},df86:function(t,e,a){},f6c4:function(t,e,a){"use strict";a("bd0c");var i=a("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,a=t.top,i=t.right,n=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(a+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(n+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);