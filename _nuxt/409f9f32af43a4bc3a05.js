(window.webpackJsonp=window.webpackJsonp||[]).push([[63,31,32],{400:function(t,e){},435:function(t,e,n){"use strict";n.r(e);n(16),n(10),n(30),n(47);var r=n(11),o=n(441),c="routes.gb_forecast_cost.",l={head:function(){return this.$store.set("hero",{title:c+"hero.title",subtitle:c+"hero.subtitle"}),{title:this.$t(c+"title")}},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,r=t.store,Object.keys(r.get("foe/gbs")).length){e.next=6;break}return e.next=4,n.$axios.$get("/foe-data/gbs.json");case 4:o=e.sent,r.set("foe/gbs",o);case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{}},components:{gbForecastCost:o.a}},f=n(14),component=Object(f.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("gb-forecast-cost",{attrs:{"can-permalink":!0}})}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,n){"use strict";var r=n(400),o=n.n(r);e.default=o.a},469:function(t,e){},548:function(t,e,n){"use strict";n.r(e);var r=n(435).default,o=n(14),c=n(468),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},718:function(t,e,n){"use strict";var r=n(469),o=n.n(r);e.default=o.a},757:function(t,e,n){"use strict";n.r(e);var r=n(548).default,o=n(14),c=n(718),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports}}]);