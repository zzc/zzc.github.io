(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(t,e,l){var content=l(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("5a60cf2c",content,!0,{sourceMap:!1})},226:function(t,e,l){var content=l(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("32a981e8",content,!0,{sourceMap:!1})},239:function(t){t.exports={}},241:function(t,e,l){"use strict";var n=l(225);l.n(n).a},242:function(t,e,l){(t.exports=l(7)(!1)).push([t.i,".module-list .title[data-v-6755c7ca]{margin-bottom:20px}.module-list ul[data-v-6755c7ca]{margin-top:0;margin-bottom:0;padding-left:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));grid-gap:20px 60px}@media screen and (max-width:767px){.module-list ul[data-v-6755c7ca]{grid-gap:20px 40px}}.module-list ul li[data-v-6755c7ca]{list-style:none;font-size:14px}.module-list ul li .module-link[data-v-6755c7ca]{display:flex;align-items:center;height:100%}.module-list ul li .module-link[data-v-6755c7ca]:hover{text-decoration:underline}.module-list ul li .module-link .name-section[data-v-6755c7ca]{margin-right:auto;padding-right:10px;display:flex;flex-direction:column;justify-content:center}.module-list ul li .module-link .name-section .module-name[data-v-6755c7ca]{font-family:Montserrat;font-weight:600;font-size:15px}.module-list ul li .module-link .name-section .module-function[data-v-6755c7ca]{opacity:.6;margin-top:4px}.module-list ul li .module-link .price-section[data-v-6755c7ca]{display:flex;align-items:center;margin-right:30px}.module-list ul li .module-link .price-section .label[data-v-6755c7ca]{margin-right:20px}.module-list ul li .module-link .arrow[data-v-6755c7ca]{flex-shrink:0}",""])},247:function(t,e,l){"use strict";var n=l(226);l.n(n).a},248:function(t,e,l){(t.exports=l(7)(!1)).push([t.i,".article-layout[data-v-46b60de6]{display:flex;flex-wrap:wrap;margin-bottom:60px}@media screen and (max-width:767px){.article-layout[data-v-46b60de6]{margin-top:40px}}@media screen and (min-width:768px){.article-layout[data-v-46b60de6]{margin-top:50px;margin-left:-30px;margin-right:-30px}.article-layout>*[data-v-46b60de6]{padding-left:30px;padding-right:30px}}.article-layout .article[data-v-46b60de6]{flex-basis:700px;flex-grow:100000;flex-shrink:1}.article-layout .aside[data-v-46b60de6]{flex-basis:420px;flex-grow:1}",""])},263:function(t,e,l){"use strict";var n=l(265),r=l(38),o=(l(239),l(231)),c=l(240),d=l(223),m={props:{modules:{type:Array,default:function(){return[]}},title:{type:String,default:""}},components:{Arrow:o.a,PriceLabel:c.a,Ttl:d.a}},f=(l(241),l(2)),x=Object(f.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"module-list"},[t.title?l("ttl",{staticClass:"title",attrs:{level:2}},[t._v(t._s(t.title))]):t._e(),l("ul",t._l(t.modules,function(e){return l("li",[l("nuxt-link",{staticClass:"module-link",attrs:{to:{name:"categorySlug-moduleSlug",params:{categorySlug:e.category.slug,moduleSlug:e.slug,lang:t.$i18n.locale}}}},[l("div",{staticClass:"name-section"},[l("div",{staticClass:"module-name"},[t._v(t._s(e.name))]),l("div",{staticClass:"module-function"},[t._v(t._s(e.function[t.$i18n.locale]))])]),l("div",{staticClass:"price-section"},[l("price-label",{staticClass:"label"}),t._v(t._s(e.price?"$"+e.price:t.$t("free")))],1),l("arrow",{staticClass:"arrow"})],1)],1)}),0)],1)},[],!1,null,"6755c7ca",null).exports,v=l(264),h=l(230),y=new(l(246).a),w={components:{ArticleContent:n.a,Container:r.a,ModuleList:x,Rack:v.a,Subttl:h.a,Ttl:d.a},props:{crumbs:{type:Array,default:function(){return[]}},modules:{type:Array,default:function(){return[]}},relatedModules:{type:Array,default:function(){return[]}},markdown:{type:String,required:!0}},computed:{structure:function(){return y.parse(this.markdown)}}},k=(l(247),Object(f.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-page"},[e("rack",{attrs:{crumbs:this.crumbs,modules:this.modules}}),e("container",[e("div",{staticClass:"article-layout"},[e("article",{staticClass:"article"},[e("article-content",{staticClass:"content",attrs:{struct:this.structure}})],1),e("aside",{staticClass:"aside"},[e("module-list",{attrs:{title:this.$t("relatedModules"),modules:this.relatedModules}})],1)])])],1)},[],!1,null,"46b60de6",null));e.a=k.exports},321:function(t,e,l){"use strict";l.r(e);l(65);var n=l(10),r=l(263),o=l(228),c={components:{ArticlePage:r.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var l,n,r,path,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.$axios,n=e.app,e.params,r=n.i18n.locale,path="/markdown/index.".concat(r,".md"),t.next=5,l.$get(path);case 5:return o=t.sent,t.abrupt("return",{markdown:o});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{modules:o.a}}},d=l(2),component=Object(d.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page"},[e("article-page",{attrs:{markdown:this.markdown,crumbs:[],modules:this.modules,relatedModules:this.modules}})],1)},[],!1,null,null,null);e.default=component.exports}}]);