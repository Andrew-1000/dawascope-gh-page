(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{be99:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[t.loadingSomethingBigger?i("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):t._e(),i("div",{staticClass:"row"},[i("q-table",{staticClass:"col",attrs:{title:"Units",data:t.units,filter:t.filter,columns:t.columns,"row-key":"UnitName",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[i("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("q-btn",{attrs:{flat:""}},[i("q-icon",{attrs:{color:"primary",name:"refresh"},on:{click:function(e){return t.listAllUnits()}}}),i("q-tooltip",{attrs:{"content-class":"bg-primary",offset:[10,10]}},[t._v("\n        Refresh page\n      ")])],1),i("q-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){t.createUnitDialog=!0}}},[i("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("\n        Create Unit\n      ")]),i("q-icon",{attrs:{color:"primary",name:"add",side:""}})],1)]},proxy:!0},{key:"body-cell-action",fn:function(e){return[i("q-td",{attrs:{props:e}},[i("q-btn",{staticClass:"q-mr-sm",attrs:{icon:"create",color:"primary",size:"sm",dense:""},on:{click:function(i){return t.opendialog(e.row.id,e.row.unit_name)}}},[i("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("\n        Edit Unit\n      ")])],1),t._v(" |\n      "),i("q-btn",{staticClass:"q-ml-sm",attrs:{icon:"delete",color:"negative",size:"sm",dense:""},on:{click:function(i){return t.openDeleteDialog(e.row.id,e.row.unit_name)}}},[i("q-tooltip",{attrs:{"content-class":"bg-red",offset:[10,10]}},[t._v("\n        Delete Unit\n      ")])],1)],1)]}}])})],1),i("q-dialog",{model:{value:t.createUnitDialog,callback:function(e){t.createUnitDialog=e},expression:"createUnitDialog"}},[i("q-card",{staticClass:"q-ma-md"},[i("q-card-section",{staticClass:"bg-secondary text-white"},[i("div",{staticClass:"text-h6"},[t._v("Create New Unit"),i("q-btn",{staticClass:"float-right",attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(e){t.createUnitDialog=!1}}})],1)]),i("q-card-section",[i("unitForm",{attrs:{inside:"true",main:t.main}})],1)],1)],1),i("q-dialog",{model:{value:t.updateDialog,callback:function(e){t.updateDialog=e},expression:"updateDialog"}},[i("q-card",{staticClass:"q-ma-md"},[i("q-card-section",{staticClass:"bg-secondary text-white"},[i("div",{staticClass:"text-h6 "},[t._v("Edit Unit"),i("q-btn",{staticClass:"float-right",attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(e){t.updateDialog=!1}}})],1)]),i("q-card-section",[i("q-form",{ref:"unitUpdateForm",on:{submit:t.editUnit}},[i("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",type:"text",label:"Id",disable:"",readonly:""},model:{value:t.unitId,callback:function(e){t.unitId=e},expression:"unitId"}}),i("q-input",{attrs:{outlined:"",type:"text",label:"Unit name","lazy-rules":"",rules:[function(t){return!!t||"Field is required"},function(t){return t.length>1||"Minimum of 2 characters only allowed"}]},model:{value:t.updateName,callback:function(e){t.updateName=e},expression:"updateName"}}),i("div",[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",flat:""}})],1)],1)],1)],1)],1),i("q-dialog",{model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[i("q-card",{staticClass:"q-ma-md"},[i("q-card-section",{staticClass:" "},[i("div",{staticClass:"text-h6"},[t._v("Delete Unit"),i("q-btn",{staticClass:"float-right",attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(e){t.deleteDialog=!1}}})],1)]),i("q-card-section",[i("q-form",{ref:"unitDeleteForm",on:{submit:t.deleteUnit}},[i("div",{staticClass:"text q-mb-lg"},[t._v("Are you sure you want to delete "+t._s(t.updateName)+" ?")]),i("div",[i("q-btn",{attrs:{label:"Yes",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Cancel",type:"reset",flat:""},on:{click:function(e){t.deleteDialog=!1}}})],1)])],1)],1)],1)],1)},a=[],s=(i("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-form",{ref:"unitCreationForm",staticClass:"q-gutter-md",on:{submit:t.createUnit,reset:t.onReset}},[i("q-input",{attrs:{outlined:"",type:"text",label:"Unit Name","lazy-rules":"",rules:[function(t){return!!t||"Field is required"},function(t){return t.length>1||"Minimum of 2 characters only allowed"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.Unit_name,callback:function(e){t.Unit_name=e},expression:"Unit_name"}}),i("div",[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",flat:""}})],1)],1)}),l=[];const o=i("20e6"),r=i("c2a1").default,c=i("1712").to;var u={name:"unitForm",props:["inside","main"],data(){return{Unit_name:""}},methods:{async liastAllUnits(){this.loadingSomethingBigger=!0;let[t,e]=await c(r.listAllUnits(this.filters));this.loadingSomethingBigger=!1,this.units=e||[]},submit(){this.$refs.unitCreationForm.submit()},async createUnit(){r.setSettings({TBURL:o["TB_URL"]});let[t]=await c(r.createUnit({unit_name:this.Unit_name}));if(t){t=t.msg||t.message||t.error||t;try{t=JSON.parse(t)}catch(e){}if("object"==typeof t){let e=Object.keys(t);t=t[e[0]]}this.$q.notify({type:"negative",message:t})}else this.$q.notify({type:"positive",message:"Unit Created Successfully"});await this.main.listAllUnits()},onReset(){this.Unit_name=null}}},d=u,m=i("2877"),g=i("0378"),p=i("27f9"),f=i("9c40"),b=i("eebe"),h=i.n(b),y=Object(m["a"])(d,s,l,!1,null,null,null),q=y.exports;h()(y,"components",{QForm:g["a"],QInput:p["a"],QBtn:f["a"]});const U=i("c2a1").default,v=i("1712").to;var _={components:{unitForm:q},data(){return{pagination:{rowsPerPage:10},updateName:"",unitId:"",filter:"",main:this,createUnitDialog:!1,deleteDialog:!1,updateDialog:!1,loadingSomethingBigger:!1,columns:[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"unit_name",label:"Unit Name",field:"unit_name",align:"left",sortable:!0},{name:"action",label:"Action",field:"id",align:"center"}],units:[]}},async created(){this.units=this.units.filter((t=>{let e=units.children;try{return e=e.filter((t=>{let e=t.units;return e.some((t=>this.units.includes(t)))})),e.length>0}catch(i){return!0}}))},mounted(){this.listAllUnits()},methods:{submit(){this.$refs.unitUpdateForm.submit()},async listAllUnits(){this.loadingSomethingBigger=!0;let[t,e]=await v(U.listAllUnits(this.filters));this.loadingSomethingBigger=!1,this.units=e||[]},async editUnit(){return new Promise((async(t,e)=>{let i={id:this.unitId,Unit_name:this.updateName},[n]=await v(U.updateUnit(i));if(console.log(n),n)return this.$q.notify({type:"negative",message:n.msg||n}),t(!1);this.$q.notify({type:"positive",message:`Saved changes to ${this.updateName}`}),await this.main.listAllUnits(),t(!0)}))},async deleteUnit(){return new Promise((async(t,e)=>{let i={id:this.unitId,Unit_name:this.updateName};console.log(i);let[n,a]=await v(U.deleteUnit(i));if(n)return this.$q.notify({type:"negative",message:n.msg||n}),t(!1);this.$q.notify({type:"positive",message:`${i.Unit_name} has been deleted successfully.`}),await this.main.listAllUnits(),t(!0)}))},openDeleteDialog(t,e){this.deleteDialog=!0,this.unitId=t,this.updateName=e},opendialog(t,e){this.updateDialog=!0,this.unitId=t,this.updateName=e,console.log("clicked on",e)}}},C=_,w=i("9989"),k=i("6b1d"),D=i("eaac"),x=i("0016"),S=i("05c0"),N=i("db86"),Q=i("24e8"),I=i("f09f"),F=i("a370"),$=Object(m["a"])(C,n,a,!1,null,null,null);e["default"]=$.exports;h()($,"components",{QPage:w["a"],QLinearProgress:k["a"],QTable:D["a"],QInput:p["a"],QIcon:x["a"],QBtn:f["a"],QTooltip:S["a"],QTd:N["a"],QDialog:Q["a"],QCard:I["a"],QCardSection:F["a"],QForm:g["a"]})}}]);