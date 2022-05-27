(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-title",[t._v("General-Utility-Nerima-Disaster-App-of-Map")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",[t._v("mdi-home")])],1),a("v-btn",{attrs:{icon:"",to:"/about"}},[a("v-icon",[t._v("mdi-information")])],1),a("v-btn",{attrs:{icon:"",to:"/link"}},[a("v-icon",[t._v("mdi-link")])],1)],1),a("v-content",[a("router-view")],1)],1)},o=[],i=a("2877"),s=a("6544"),l=a.n(s),c=a("7496"),p=a("40dc"),u=a("bb78"),f=a("8336"),v=a("a75b"),d=a("132d"),m=a("2fa4"),h={},b=Object(i["a"])(h,r,o,!1,null,null,null),y=b.exports;l()(b,{VApp:c["a"],VAppBar:p["a"],VAppBarTitle:u["a"],VBtn:f["a"],VContent:v["a"],VIcon:d["a"],VSpacer:m["a"]});var g=a("f309");n["a"].use(g["a"]);var _=new g["a"]({}),k=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center",attrs:{dense:"","no-gutters":""}},[a("v-col",[a("h1",[t._v("Home")])])],1),a("v-row",{attrs:{justify:"center",dense:"","no-gutters":""}},[a("v-col",[a("l-map",{ref:"map",attrs:{id:"mainMap",zoom:t.zoom,center:t.center,maxZoom:t.maxZoom}},[a("l-control-layers",{attrs:{position:"topright"}}),a("l-control",{attrs:{position:"bottomleft"}},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){return t.search("001")}}},[t._v(" 区庁舎 ")]),a("v-btn",{attrs:{small:"",color:"cyan"},on:{click:function(e){return t.search("002")}}},[t._v(" 避難所 ")]),a("v-btn",{attrs:{small:"",color:"teal"},on:{click:function(e){return t.search("999")}}},[t._v(" 全て表示 ")]),a("v-btn",{attrs:{small:""},on:{click:function(e){return t.search("000")}}},[t._v(" リセット ")])],1),t._l(t.tileProviders,(function(t){return a("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._l(t.tileOptions,(function(t){return a("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,opacity:t.opacity,url:t.url,attribution:t.attribution,"layer-type":"overlay"}})})),t._l(t.facilities,(function(e){return a("l-marker",{key:e.name,attrs:{"lat-lng":[e.latitude,e.longitude]}},[a("l-popup",[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"address"},[t._v(t._s(e.address))]),a("div",{staticClass:"facility"},[t._v(t._s(e.facility))])]),a("l-icon",{attrs:{"icon-url":"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"}})],1)}))],2)],1)],1)],1)},j=[],w=(a("6cc5"),a("2699")),O=a("a40a"),C=a("9ee8"),V=a("4e2b"),L=a("f60f"),z=a("fbba"),M=a("2253"),P=a("bc3a"),S=a.n(P),A={name:"Home",components:{LMap:w["a"],LTileLayer:O["a"],LControlLayers:C["a"],LMarker:V["a"],LPopup:L["a"],LIcon:z["a"],LControl:M["a"]},data:function(){return{zoom:13,maxZoom:17,center:[35.73569466802087,139.65174632215127],tileProviders:[{name:"OpenStreetMap",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"},{name:"国土地理院タイル",visible:!1,attribution:'&copy; <a target="_blank" href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',url:"https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"},{name:"国土地理院写真",visible:!1,attribution:'&copy; <a target="_blank" href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',url:"https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"}],tileOptions:[{name:"洪水浸水想定区域（想定最大規模）",visible:!1,opacity:.5,attribution:'&copy; <a target="_blank" href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a> contributors',url:"https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png"},{name:"洪水浸水想定区域（計画規模（現在の凡例））",visible:!1,opacity:.5,attribution:'&copy; <a target="_blank" href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a> contributors',url:"https://disaportaldata.gsi.go.jp/raster/01_flood_l1_shinsuishin_newlegend_data/{z}/{x}/{y}.png"}],facilities:[{name:"",address:"",latitude:0,longitude:0,facility:""}]}},methods:{search:function(t){var e=this;if("000"!==t){var a="https://gen-util-dis-app-of-map-api.herokuapp.com/",n=a+"main/search";S.a.post(n,{kbn:t}).then((function(t){e.facilities=t.data})).catch((function(t){console.log(t)}))}else this.facilities=[]}}},T=A,$=(a("cccb"),a("62ad")),B=a("a523"),E=a("0fd9"),R=Object(i["a"])(T,x,j,!1,null,null,null),H=R.exports;l()(R,{VBtn:f["a"],VCol:$["a"],VContainer:B["a"],VRow:E["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center",attrs:{dense:"","no-gutters":""}},[a("v-col",[a("h1",[t._v("About")])])],1),a("v-row",{staticClass:"text-center",attrs:{dense:"","no-gutters":""}},[a("v-col",[t._v(" General-Utility-Nerima-Disaster-App-of-Map(全般的な有用の練馬災害マップアプリケーション)です。"),a("br"),t._v(" 一個人により開発、運用されています。"),a("br"),t._v(" 要望、ご指摘等ございましたらリンク集にある開発者までご連絡ください。 ")])],1)],1)},U=[],Z={},D=Object(i["a"])(Z,N,U,!1,null,null,null),G=D.exports;l()(D,{VCol:$["a"],VContainer:B["a"],VRow:E["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center",attrs:{dense:"","no-gutters":""}},[a("v-col",[a("h1",[t._v("Link")])])],1),a("v-row",{attrs:{justify:"center",dense:"","no-gutters":""}},[a("v-col",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Name ")]),a("th",{staticClass:"text-left"},[t._v(" URL ")])])]),a("tbody",t._l(t.links,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[a("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.url))])])])})),0)]},proxy:!0}])})],1)],1)],1)},J=[],q={data:function(){return{links:[]}},methods:{getLinks:function(){var t=this,e="https://gen-util-dis-app-of-map-api.herokuapp.com/",a=e+"link/init";S.a.get(a).then((function(e){t.links=e.data})).catch((function(t){console.log(t)}))}},created:function(){this.getLinks()}},F=q,K=a("1f4f"),Q=Object(i["a"])(F,I,J,!1,null,null,null),W=Q.exports;l()(Q,{VCol:$["a"],VContainer:B["a"],VRow:E["a"],VSimpleTable:K["a"]}),n["a"].use(k["a"]);var X=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:G},{path:"/link",name:"Link",component:W},{path:"/*",component:H}],Y=new k["a"]({routes:X}),tt=Y;n["a"].config.productionTip=!1,new n["a"]({vuetify:_,router:tt,render:function(t){return t(y)}}).$mount("#app")},"5ced":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.0da963a9.js.map