(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{740:function(t,e,n){"use strict";n.r(e);n(16),n(10),n(30),n(47);var r=n(11),o=n(441),c="routes.gb_forecast_cost.";e.default={head:function(){return this.$store.set("hero",{title:c+"hero.title",subtitle:c+"hero.subtitle"}),{title:this.$t(c+"title")}},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,r=t.store,Object.keys(r.get("foe/gbs")).length){e.next=6;break}return e.next=4,n.$axios.$get("/foe-data/gbs.json");case 4:o=e.sent,r.set("foe/gbs",o);case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{}},components:{gbForecastCost:o.a}}}}]);