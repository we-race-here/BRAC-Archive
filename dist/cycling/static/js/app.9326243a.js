(function(t){function e(e){for(var o,n,l=e[0],i=e[1],c=e[2],d=0,v=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},s={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3735:function(t,e,a){"use strict";a("5354")},5354:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-banner",{attrs:{color:"white",app:"",sticky:"",transition:"slide-y-transition"}},[o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"6"}},[o("v-card",{attrs:{elevation:"0",height:"100"}},[o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"ma-0 pa-0"},[o("v-img",{staticClass:"ma-3",staticStyle:{cursor:"pointer"},attrs:{title:"Home",height:"80",width:"350",src:a("b0be")},on:{click:function(e){return t.$router.push("/")}}})],1)],1)],1)],1),o("v-col",{staticClass:"mt-5",attrs:{cols:"12",sm:"6"}},[o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({},"a",s,!1),a),[t._v("Events "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},[o("v-list-item",[o("v-list-item-title",[t._v("All Events")])],1),o("v-list-item",[o("v-list-item-title",[t._v("Races Only")])],1)],1)],1),o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({staticClass:"ml-5"},"a",s,!1),a),[t._v("Results "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},t._l(t.Results,(function(e){return o("v-list-item",{key:e,on:{click:function(a){return t.$router.push(e.url)}}},[o("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({staticClass:"ml-5"},"a",s,!1),a),[t._v("Programs "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},[o("v-list-item",[o("v-list-item-title",[t._v("All Events")])],1),o("v-list-item",[o("v-list-item-title",[t._v("Races Only")])],1)],1)],1),o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({staticClass:"ml-5"},"a",s,!1),a),[t._v("Resources "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},[o("v-list-item",[o("v-list-item-title",[t._v("All Events")])],1),o("v-list-item",[o("v-list-item-title",[t._v("Races Only")])],1)],1)],1),o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({staticClass:"ml-5"},"a",s,!1),a),[t._v("About "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},[o("v-list-item",[o("v-list-item-title",[t._v("All Events")])],1),o("v-list-item",[o("v-list-item-title",[t._v("Races Only")])],1)],1)],1),o("v-menu",{attrs:{"open-on-hover":"","offset-y":"",rounded:"lg",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("a",t._g(t._b({staticClass:"ml-5"},"a",s,!1),a),[t._v("News "),o("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[o("v-list",{attrs:{dense:"",outlined:""}},[o("v-list-item",[o("v-list-item-title",[t._v("All Events")])],1),o("v-list-item",[o("v-list-item-title",[t._v("Races Only")])],1)],1)],1)],1)],1)],1),o("v-main",[o("router-view")],1),o("v-footer",{attrs:{padless:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" @ copyright "+t._s((new Date).getFullYear())+" ")])],1)],1)},r=[],n={name:"App",data:function(){return{Results:[{name:"Road",url:"Road"},{name:"Road Cup",url:"RoadCup"},{name:"Road Cup Team",url:"RoadCupTeam"},{name:"Cross",url:"Cross"}]}}},l=n,i=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),v=a("e4e5"),p=a("b0af"),m=a("62ad"),R=a("553a"),h=a("132d"),C=a("adda"),f=a("8860"),g=a("da13"),S=a("5d23"),y=a("f6c4"),E=a("e449"),b=a("0fd9"),x=Object(i["a"])(l,s,r,!1,null,null,null),_=x.exports;u()(x,{VApp:d["a"],VBanner:v["a"],VCard:p["a"],VCol:m["a"],VFooter:R["a"],VIcon:h["a"],VImg:C["a"],VList:f["a"],VListItem:g["a"],VListItemTitle:S["b"],VMain:y["a"],VMenu:E["a"],VRow:b["a"]});a("ddb8");var T=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("carousel")],1),a("v-col",{attrs:{cols:"12",sm:"1"}})],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("UPCOMING RACES & EVENTS")]),a("v-card-text",[a("calendar")],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"1"}})],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h4 text-center"},[t._v("SPONSORS")]),a("center",[a("v-img",{attrs:{width:"100",src:"https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774",gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}})],1)],1)],1)],1)],1)],1)},A=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{cycle:"","show-arrows":!0},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.Images,(function(t,e){return a("v-carousel-item",{key:e},[a("v-sheet",{attrs:{color:t,height:"100%",tile:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{src:t}})],1)],1)],1)})),1)},G=[],L={data:function(){return{model:0,Images:["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mff-roka-0618-1-preview-maxwidth-3000-maxheight-3000-ppi-300-quality-90-1620433208.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1600:*","https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6bb87be9-d37c-4800-9fe9-e83e5ac46c8e.jpg?fit=scale-down&source=next&width=700"]}}},I=L,B=a("5e66"),O=a("3e35"),k=a("8dd9"),Y=Object(i["a"])(I,V,G,!1,null,null,null),N=Y.exports;u()(Y,{VCarousel:B["a"],VCarouselItem:O["a"],VImg:C["a"],VRow:b["a"],VSheet:k["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",[a("v-sheet",{attrs:{height:"400"}},[a("v-calendar",{ref:"calendar",attrs:{now:t.today,value:t.today,events:t.events,color:"primary",type:"week"}})],1)],1)],1)},P=[],j={data:function(){return{today:"2019-01-08",events:[{name:"Weekly Meeting",start:"2019-01-07 09:00",end:"2019-01-07 10:00"},{name:"Thomas' Birthday",start:"2019-01-10"},{name:"Mash Potatoes",start:"2019-01-09 12:30",end:"2019-01-09 15:30"}]}},mounted:function(){this.$refs.calendar.scrollToTime("08:00")}},F=j,H=(a("3735"),a("a4f6")),$=Object(i["a"])(F,M,P,!1,null,"1c5cf668",null),U=$.exports;u()($,{VCalendar:H["a"],VCol:m["a"],VRow:b["a"],VSheet:k["a"]});var D={name:"Home",components:{carousel:N,calendar:U}},W=D,q=a("99d9"),z=Object(i["a"])(W,w,A,!1,null,null,null),J=z.exports;u()(z,{VCard:p["a"],VCardText:q["a"],VCardTitle:q["b"],VCol:m["a"],VImg:C["a"],VRow:b["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v("Road")]),a("div",{staticClass:"pl-3 mt-3"},[a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[t._v(" BRAC ROAD RESULTS ")]),a("v-row",{staticClass:"ml-3 mt-2"},[a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",dense:"",items:t.Years,label:"Year"},model:{value:t.SelectedYear,callback:function(e){t.SelectedYear=e},expression:"SelectedYear"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:t.EventLoader,disabled:t.EventLoader,dense:"",items:t.Events,"item-value":"id","item-text":"name",label:"Event"},model:{value:t.EventSelected,callback:function(e){t.EventSelected=e},expression:"EventSelected"}})],1),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:t.GroupLoader,disabled:t.GroupLoader,dense:"",items:t.Groups,"item-value":"id","item-text":"name",label:"Group"},model:{value:t.GroupSelcted,callback:function(e){t.GroupSelcted=e},expression:"GroupSelcted"}})],1)],1),a("v-row",{staticClass:"mt-2"},[a("v-col",[a("b",[t._v("RACE SUMMARY:")]),a("v-btn-toggle",{staticClass:"ml-2",attrs:{color:"primary",dense:"",borderless:""},model:{value:t.summaryBy,callback:function(e){t.summaryBy=e},expression:"summaryBy"}},[a("v-btn",[a("span",{staticClass:"hidden-sm-and-down"},[t._v("Summary By RaceGroup")])])],1),a("v-data-table",{staticClass:"elevation-1 mt-1",attrs:{loading:t.EventResultLoader,dense:"","footer-props":{"items-per-page-options":[15]},headers:t.headers,items:t.EventResult.results,"item-key":"name",search:t.ResultSearch,options:t.pagination_results,"server-items-length":t.EventResult.count},on:{"update:options":function(e){t.pagination_results=e}},scopedSlots:t._u([{key:"item.view_result",fn:function(e){var o=e.item;return[a("a",{on:{click:function(e){return t.selectedUserModal(o)}}},[t._v("${item.view_result}")])]}}])})],1)],1)],1)])],1)],1)],1)],1)},K=[],Q=(a("4de4"),a("d3b7"),a("d81d"),a("ac1f"),a("1276"),a("498a"),a("2ca0"),a("bc3a")),Z=a.n(Q),tt="https://ccarchive.weracehere.org/",et=Z.a.create({baseURL:tt,withCredentials:!0});function at(t){if(!document.cookie)return null;var e=document.cookie.split(";").map((function(t){return t.trim()})).filter((function(e){return e.startsWith(t+"=")}));return 0===e.length?null:decodeURIComponent(e[0].split("=")[1])}et.interceptors.request.use((function(t){var e=at("csrftoken");return t.headers["X-CSRFToken"]=e,t}));var ot=et,st={data:function(){return{Years:[],SelectedYear:null,Events:[],EventLoader:!1,EventSelected:null,EventResult:[],EventResultLoader:!1,GroupSelcted:null,Groups:[],GroupLoader:!1,summaryBy:0,pagination_results:{},headers:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCate:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS\t"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCateWithGroup:[{text:"Place",value:"place"},{text:"TIME",value:"time"},{text:"CATEGORY",value:"eventracegroupid.mincategory"},{text:"FIRST NAME",value:"racerid.firstname"},{text:"Last NAME",value:"racerid.lastname"},{text:"CITY",value:"racerid.city"}],RaceByCity:[{text:"Home City",value:"CATEGORY"},{text:"FINISHERS\t",value:"STARTERS\t"}],RaceByTeam:[{text:"TEAM",value:"CATEGORY"},{text:"FINISHERS",value:"STARTERS"}],ResultSearch:""}},watch:{summaryBy:function(t){this.getHeaders()},EventSelected:function(t){var e=this;this.GroupLoader=!0,ot.get("/AcaEvent/".concat(t,"/get_groups/?fields=id,name,starters")).then((function(t){e.GroupSelcted=0,e.GroupLoader=!1,e.Groups=t.data,e.Groups.push({name:"Event Summary",id:-1}),e.GroupSelcted=-1,e.EventResult=[],e.EventResult={results:e.Groups}}))},GroupSelcted:function(t){var e=this;this.EventResult=[],-1==t?(console.log(t),this.EventResult={results:this.Groups},this.headers=[{text:"CATEGORY",value:"name"},{text:"STARTERS\t",value:"starters"},{text:"FINISHERS",value:"starters"}]):(this.EventResultLoader=!0,ot.get("/AcaResultNoPage/?resultsetid="+t).then((function(t){e.EventResultLoader=!1,e.EventResult={results:t.data},e.headers=e.RaceByCateWithGroup})))},SelectedYear:function(t){var e=this;this.EventLoader=!0,ot.get("/AcaEventNoPage/?eventdatetime__year="+t).then((function(t){e.EventLoader=!1,e.Events=t.data}))}},methods:{getHeaders:function(){0==this.summaryBy?this.headers=this.RaceByCate:1==this.summaryBy?this.headers=this.RaceByCity:2==this.summaryBy&&(this.headers=this.RaceByTeam)},getYear:function(){var t=this;ot.get("/AcaEvent/get_years/").then((function(e){t.Years=e.data}))}}},rt={mixins:[st],mounted:function(){this.getYear()}},nt=rt,lt=a("c6a6"),it=a("8336"),ct=a("a609"),ut=a("8fea"),dt=Object(i["a"])(nt,X,K,!1,null,null,null),vt=dt.exports;u()(dt,{VAutocomplete:lt["a"],VBtn:it["a"],VBtnToggle:ct["a"],VCard:p["a"],VCardText:q["a"],VCardTitle:q["b"],VCol:m["a"],VDataTable:ut["a"],VRow:b["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v("Road Cup")]),a("div",{staticClass:"pl-3 mt-3"},[t.RoadCupSelected?a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[t._v(" "+t._s(t.RoadCupSelected.description)+" ")]):t._e(),a("v-row",[a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{dense:"",hint:t.RoadCupSelected.lastrun?"Latest refresh to "+t.RoadCupSelected.description+" on "+t.RoadCupSelected.lastrun:"","persistent-hint":"",label:"Road Cup",items:t.RoadCup,"return-object":"","item-text":"description"},model:{value:t.RoadCupSelected,callback:function(e){t.RoadCupSelected=e},expression:"RoadCupSelected"}})],1),a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{loading:t.RoadCupCategoryLoader,dense:"",label:"Select a Category",items:t.RoadCupCategory,"return-object":"","item-text":"racegroupname"},model:{value:t.RoadCupCategorySelector,callback:function(e){t.RoadCupCategorySelector=e},expression:"RoadCupCategorySelector"}})],1)],1),a("v-row",[a("v-col",[a("v-data-table",{attrs:{loading:t.ReadCupResultLoader,items:t.ReadCupResult,headers:[{text:"Place",value:"place"},{text:"POINTS",value:"points"},{text:"FIRST NAME",value:"firstname"},{text:"LAST NAME",value:"lastname"},{text:"USAC #",value:"usac"},{text:"CURRENT CAT",value:"currentcat"},{text:"RACING AGE",value:"racingage"}]}})],1)],1)],1)])],1)],1)],1)],1)},mt=[],Rt=(a("99af"),{data:function(){return{RoadCup:[],RoadCupSelected:null,RoadCupCategory:[],RoadCupCategorySelector:null,RoadCupCategoryLoader:!1,ReadCupResult:[],ReadCupResultLoader:!1}},mounted:function(){this.getCupDetails()},watch:{RoadCupSelected:function(t){this.getCategory()},RoadCupCategorySelector:function(t){var e=this;this.ReadCupResultLoader=!0,console.log("vaue",t),ot.get("/AcaPointscompetitionresult/?pointscompetitionid=".concat(t.pointscompetitionid,"&racegroupid=").concat(t.racegroupid,"&fields=place,points,firstname,lastname,usac,currentcat,racingage")).then((function(t){console.log(t),e.ReadCupResult=t.data,e.ReadCupResultLoader=!1}))}},methods:{getCupDetails:function(){var t=this;ot.get("/AcaPointscompetition/?name=BAR").then((function(e){console.log(e),t.RoadCup=e.data,t.RoadCupSelected=t.RoadCup[t.RoadCup.length-1]}))},getCategory:function(){var t=this;this.RoadCupCategoryLoader=!0,ot.get("/AcaPointscompetitionraceresult/?pointscompetitionid=".concat(this.RoadCupSelected.id,"&fields=racegroupname,id,racegroupid,pointscompetitionid")).then((function(e){console.log(e),t.RoadCupCategory=e.data,t.RoadCupCategoryLoader=!1}))}}}),ht=Rt,Ct=Object(i["a"])(ht,pt,mt,!1,null,null,null),ft=Ct.exports;u()(Ct,{VAutocomplete:lt["a"],VCard:p["a"],VCardText:q["a"],VCardTitle:q["b"],VCol:m["a"],VDataTable:ut["a"],VRow:b["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v("Road Team Cup")]),a("div",{staticClass:"pl-3 mt-3"},[t.RoadCupSelected?a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[t._v(" "+t._s(t.RoadCupSelected.description)+" ")]):t._e(),a("v-row",[a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{dense:"",hint:t.RoadCupSelected.lastrun?"Latest refresh to "+t.RoadCupSelected.description+" on "+t.RoadCupSelected.lastrun:"","persistent-hint":"",label:"Road Cup",items:t.RoadCup,"return-object":"","item-text":"description"},model:{value:t.RoadCupSelected,callback:function(e){t.RoadCupSelected=e},expression:"RoadCupSelected"}})],1),a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{loading:t.RoadCupCategoryLoader,dense:"",label:"Select a Category",items:t.RoadCupCategory,"return-object":"","item-text":"racegroupname"},model:{value:t.RoadCupCategorySelector,callback:function(e){t.RoadCupCategorySelector=e},expression:"RoadCupCategorySelector"}})],1)],1),a("v-row",[a("v-col",[a("v-data-table",{attrs:{loading:t.ReadCupResultLoader,items:t.ReadCupResult,headers:[{text:"Place",value:"place"},{text:"Total POINTS",value:"points"},{text:"club #",value:"clubno"},{text:"TEAM NAME",value:"team"}]}})],1)],1)],1)])],1)],1)],1)],1)},St=[],yt={data:function(){return{RoadCup:[],RoadCupSelected:null,RoadCupCategory:[],RoadCupCategorySelector:null,RoadCupCategoryLoader:!1,ReadCupResult:[],ReadCupResultLoader:!1}},mounted:function(){this.getCupDetails()},watch:{RoadCupSelected:function(t){this.getCategory()},RoadCupCategorySelector:function(t){var e=this;this.ReadCupResultLoader=!0,console.log("vaue",t),ot.get("/AcaPointscompetitionresult/?pointscompetitionid=".concat(t.pointscompetitionid,"&racegroupid=").concat(t.racegroupid,"&fields=place,points,clubno,team")).then((function(t){console.log(t),e.ReadCupResult=t.data,e.ReadCupResultLoader=!1}))}},methods:{getCupDetails:function(){var t=this;ot.get("/AcaPointscompetition/?name=BAT").then((function(e){console.log(e),t.RoadCup=e.data,t.RoadCupSelected=t.RoadCup[t.RoadCup.length-1]}))},getCategory:function(){var t=this;this.RoadCupCategoryLoader=!0,ot.get("/AcaPointscompetitionresult/?pointscompetitionid=".concat(this.RoadCupSelected.id,"&fields=racegroupname,id,racegroupid,pointscompetitionid")).then((function(e){console.log(e),t.RoadCupCategory=e.data,t.RoadCupCategoryLoader=!1}))}}},Et=yt,bt=Object(i["a"])(Et,gt,St,!1,null,null,null),xt=bt.exports;u()(bt,{VAutocomplete:lt["a"],VCard:p["a"],VCardText:q["a"],VCardTitle:q["b"],VCol:m["a"],VDataTable:ut["a"],VRow:b["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v("Cross")]),a("div",{staticClass:"pl-3 mt-3"},[a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[t._v(" BRAC CROSS RESULTS ")]),a("v-row",{staticClass:"ml-3 mt-2"},[a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",dense:"",items:t.Years,label:"Year"},model:{value:t.SelectedYear,callback:function(e){t.SelectedYear=e},expression:"SelectedYear"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:t.EventLoader,disabled:t.EventLoader,dense:"",items:t.Events,"item-value":"id","item-text":"name",label:"Event"},model:{value:t.EventSelected,callback:function(e){t.EventSelected=e},expression:"EventSelected"}})],1),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-autocomplete",{attrs:{"hide-details":"",loading:t.GroupLoader,disabled:t.GroupLoader,dense:"",items:t.Groups,"item-value":"id","item-text":"name",label:"Group"},model:{value:t.GroupSelcted,callback:function(e){t.GroupSelcted=e},expression:"GroupSelcted"}})],1)],1),a("v-row",{staticClass:"mt-2"},[a("v-col",[a("b",[t._v("RACE SUMMARY:")]),a("v-btn-toggle",{staticClass:"ml-2",attrs:{color:"primary",dense:"",borderless:""},model:{value:t.summaryBy,callback:function(e){t.summaryBy=e},expression:"summaryBy"}},[a("v-btn",[a("span",{staticClass:"hidden-sm-and-down"},[t._v("Summary By RaceGroup")])])],1),a("v-data-table",{staticClass:"elevation-1 mt-1",attrs:{loading:t.EventResultLoader,dense:"","footer-props":{"items-per-page-options":[15]},headers:t.headers,items:t.EventResult.results,"item-key":"name",search:t.ResultSearch,options:t.pagination_results,"server-items-length":t.EventResult.count},on:{"update:options":function(e){t.pagination_results=e}},scopedSlots:t._u([{key:"item.view_result",fn:function(e){var o=e.item;return[a("a",{on:{click:function(e){return t.selectedUserModal(o)}}},[t._v("${item.view_result}")])]}}])})],1)],1)],1)])],1)],1)],1)],1)},Tt=[],wt={mixins:[st],mounted:function(){this.getYear()},data:function(){return{Years:[],SelectedYear:null,Events:[],EventLoader:!1,EventSelected:null,EventResult:[],EventResultLoader:!1,GroupSelcted:null,Groups:[],GroupLoader:!1,summaryBy:0,pagination_results:{},headers:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCate:[{text:"CATEGORY",value:"eventracegroupid.abbreviation"},{text:"STARTERS\t",value:"STARTERS\t"},{text:"FINISHERS",value:"FINISHERS"}],RaceByCateWithGroup:[{text:"Place",value:"place"},{text:"TIME",value:"time"},{text:"CATEGORY",value:"eventracegroupid.mincategory"},{text:"FIRST NAME",value:"racerid.firstname"},{text:"Last NAME",value:"racerid.lastname"},{text:"CITY",value:"racerid.city"}],RaceByCity:[{text:"Home City",value:"CATEGORY"},{text:"FINISHERS\t",value:"STARTERS\t"}],RaceByTeam:[{text:"TEAM",value:"CATEGORY"},{text:"FINISHERS",value:"STARTERS"}],ResultSearch:""}},watch:{summaryBy:function(t){this.getHeaders()},EventSelected:function(t){var e=this;this.GroupLoader=!0,ot.get("/AcaEvent/".concat(t,"/get_groups/?fields=id,name,starters")).then((function(t){e.GroupSelcted=0,e.GroupLoader=!1,e.Groups=t.data,e.Groups.push({name:"Event Summary",id:-1}),e.GroupSelcted=-1,e.EventResult=[],e.EventResult={results:e.Groups}}))},GroupSelcted:function(t){var e=this;this.EventResult=[],-1==t?(console.log(t),this.EventResult={results:this.Groups},this.headers=[{text:"CATEGORY",value:"name"},{text:"STARTERS\t",value:"starters"},{text:"FINISHERS",value:"starters"}]):(this.EventResultLoader=!0,ot.get("/AcaResultNoPage/?resultsetid="+t).then((function(t){e.EventResultLoader=!1,e.EventResult={results:t.data},e.headers=e.RaceByCateWithGroup})))},SelectedYear:function(t){var e=this;this.EventLoader=!0,ot.get("/AcaEventNoPage/?eventtype=52&eventdatetime__year="+t).then((function(t){e.EventLoader=!1,e.Events=t.data}))}},methods:{getHeaders:function(){0==this.summaryBy?this.headers=this.RaceByCate:1==this.summaryBy?this.headers=this.RaceByCity:2==this.summaryBy&&(this.headers=this.RaceByTeam)},getYear:function(){var t=this;ot.get("/AcaEvent/get_years/").then((function(e){t.Years=e.data}))}}},At=wt,Vt=Object(i["a"])(At,_t,Tt,!1,null,null,null),Gt=Vt.exports;u()(Vt,{VAutocomplete:lt["a"],VBtn:it["a"],VBtnToggle:ct["a"],VCard:p["a"],VCardText:q["a"],VCardTitle:q["b"],VCol:m["a"],VDataTable:ut["a"],VRow:b["a"]}),o["a"].use(T["a"]);var Lt=[{path:"/",name:"Home",component:J},{path:"/Road",name:"road",component:vt},{path:"/RoadCup",name:"roadcup",component:ft},{path:"/RoadCupTeam",name:"roadcup",component:xt},{path:"/Cross",name:"cross",component:Gt}],It=new T["a"]({base:"/",routes:Lt}),Bt=It,Ot=a("2f62");o["a"].use(Ot["a"]);var kt=new Ot["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Yt=a("f309");o["a"].use(Yt["a"]);var Nt=new Yt["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:Bt,store:kt,vuetify:Nt,render:function(t){return t(_)}}).$mount("#app")},b0be:function(t,e,a){t.exports=a.p+"cycling/static/img/brac_newlogo2.989d8246.png"},ddb8:function(t,e){}});
//# sourceMappingURL=app.9326243a.js.map