(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48eee0d3"],{3860:function(e,t,a){"use strict";var s=a("604c");t["a"]=s["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"7e58":function(e,t,a){},a609:function(e,t,a){"use strict";var s=a("5530"),o=(a("7e58"),a("3860")),n=a("a9ad"),r=a("58df");t["a"]=Object(r["a"])(o["a"],n["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var e=this.setTextColor(this.color,Object(s["a"])({},o["a"].options.methods.genData.call(this)));return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}})},ad5e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[e._v("MOUNTAIN RESULTS")]),a("div",{staticClass:"pl-3 mt-3"},[a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[e._v(" BRAC MTB RESULTS ")]),a("v-row",{staticClass:"ml-3 mt-2"},[a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",dense:"",items:e.Years,label:"Year"},model:{value:e.SelectedYear,callback:function(t){e.SelectedYear=t},expression:"SelectedYear"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:e.EventLoader,disabled:e.EventLoader,dense:"",items:e.Events,"item-value":"id","item-text":"name",label:"Event"},scopedSlots:e._u([{key:"item",fn:function(t){return[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.item.name))])],1)]}}]),model:{value:e.EventSelected,callback:function(t){e.EventSelected=t},expression:"EventSelected"}})],1),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:e.GroupLoader,disabled:e.GroupLoader,dense:"",items:e.Groups,"item-value":"id","item-text":"name",label:"Group"},model:{value:e.GroupSelcted,callback:function(t){e.GroupSelcted=t},expression:"GroupSelcted"}})],1)],1),a("v-row",{staticClass:"mt-2"},[a("v-col",[a("v-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"ml-2",attrs:{color:"primary",dense:"",borderless:""},model:{value:e.summaryBy,callback:function(t){e.summaryBy=t},expression:"summaryBy"}},[a("v-btn",[a("span",{staticClass:"hidden-sm-and-down"},[e._v("Summary By RaceGroup")])])],1),a("v-data-table",{staticClass:"elevation-1 mt-1",attrs:{loading:e.EventResultLoader,dense:"","footer-props":{"items-per-page-options":[15]},headers:e.headers,items:e.EventResult.results,"item-key":"name",search:e.ResultSearch,options:e.pagination_results,"server-items-length":e.EventResult.count},on:{"update:options":function(t){e.pagination_results=t}},scopedSlots:e._u([{key:"item.view_result",fn:function(t){var s=t.item;return[a("a",{on:{click:function(t){return e.selectedUserModal(s)}}},[e._v("${item.view_result}")])]}}])})],1)],1)],1)])],1)],1)],1)],1)},o=[],n=a("be3b"),r={mounted:function(){this.getYear()},data:function(){return{Years:[],SelectedYear:null,Events:[],EventLoader:!1,EventSelected:null,EventResult:[],EventResultLoader:!1,GroupSelcted:null,Groups:[],GroupLoader:!1,summaryBy:0,pagination_results:{},headers:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCate:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS\t"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCateWithGroup:[{text:"Place",value:"place"},{text:"TIME",value:"time"},{text:"CATEGORY",value:"eventracegroupid.mincategory"},{text:"FIRST NAME",value:"racerid.firstname"},{text:"Last NAME",value:"racerid.lastname"},{text:"CITY",value:"racerid.city"}],RaceByCity:[{text:"Home City",value:"CATEGORY"},{text:"FINISHERS\t",value:"STARTERS\t"}],RaceByTeam:[{text:"TEAM",value:"CATEGORY"},{text:"FINISHERS",value:"STARTERS"}],ResultSearch:""}},watch:{summaryBy:function(e){this.getHeaders()},EventSelected:function(e){var t=this;this.GroupLoader=!0,n["a"].get("/AcaEvent/".concat(e,"/get_groups/?fields=id,name,starters")).then((function(e){t.GroupSelcted=0,t.GroupLoader=!1,t.Groups=e.data,t.Groups.push({name:"Event Summary",id:-1}),t.GroupSelcted=-1,t.EventResult=[],t.EventResult={results:t.Groups}}))},GroupSelcted:function(e){var t=this;this.EventResult=[],-1==e?(console.log(e),this.EventResult={results:this.Groups},this.headers=[{text:"CATEGORY",value:"name"},{text:"STARTERS\t",value:"starters"},{text:"FINISHERS",value:"starters"}]):(this.EventResultLoader=!0,n["a"].get("/AcaResultNoPage/?resultsetid="+e).then((function(e){t.EventResultLoader=!1,t.EventResult={results:e.data},t.headers=t.RaceByCateWithGroup})))},SelectedYear:function(e){var t=this;this.EventLoader=!0,n["a"].get("/AcaEventNoPage/?eventtype=59&ordering=-eventdatetime&eventdatetime__year="+e).then((function(e){t.EventLoader=!1,t.Events=e.data}))}},methods:{getHeaders:function(){0==this.summaryBy?this.headers=this.RaceByCate:1==this.summaryBy?this.headers=this.RaceByCity:2==this.summaryBy&&(this.headers=this.RaceByTeam)},getYear:function(){var e=this;n["a"].get("/AcaEvent/get_years/").then((function(t){e.Years=t.data}))}}},l=r,i=a("2877"),u=a("6544"),c=a.n(u),d=a("c6a6"),v=a("8336"),m=a("a609"),p=a("b0af"),h=a("99d9"),g=a("62ad"),S=a("8fea"),E=a("5d23"),R=a("0fd9"),b=Object(i["a"])(l,s,o,!1,null,null,null);t["default"]=b.exports;c()(b,{VAutocomplete:d["a"],VBtn:v["a"],VBtnToggle:m["a"],VCard:p["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:g["a"],VDataTable:S["a"],VListItemContent:E["a"],VListItemTitle:E["c"],VRow:R["a"]})}}]);
//# sourceMappingURL=chunk-48eee0d3.709a3b64.js.map