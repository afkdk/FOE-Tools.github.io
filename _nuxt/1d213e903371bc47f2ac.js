(window.webpackJsonp=window.webpackJsonp||[]).push([[50,51],{381:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(31),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22),core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(382),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(60),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(27),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_11__),vue_invisible_recaptcha__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(412),_scripts_utils__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3);function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var i=0,t=function(){};return{s:t,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,_,n=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return n=e.done,e},e:function(e){o=!0,_=e},f:function(){try{n||null==r.return||r.return()}finally{if(o)throw _}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var i18nPrefix="routes.survey.";__webpack_exports__.a={head:function(){return this.$store.set("hero",{title:i18nPrefix+"hero.title",subtitle:i18nPrefix+"hero.subtitle"}),{title:this.$t(i18nPrefix+"title")}},beforeRouteEnter:function(e,t,r){r((function(e){e.$store.get("survey")&&0!==e.$store.get("survey").length||e.$router.push({name:"index"})}))},data:function(){return this.$store.commit("RESTORE_HERO"),{i18nPrefix:i18nPrefix,result:{},errors:{},loading:!1}},computed:{survey:function(){var e,t={survey:this.$store.get("survey")&&this.$store.get("survey").length?this.$store.get("survey@[0].survey.questions"):[],result:{}},r=_createForOfIteratorHelper(t.survey);try{for(r.s();!(e=r.n()).done;){var _=e.value;if(this.$data.errors[_.name]=!1,"checkbox"===_.type)t.result[_.name]=[];else if("matrix"===_.type){t.result[_.name]={};var n,o=_createForOfIteratorHelper(_.rows);try{for(o.s();!(n=o.n()).done;){var l=n.value;t.result[_.name][l.value]=null}}catch(e){o.e(e)}finally{o.f()}}else["html"].indexOf(_.type)<0&&(t.result[_.name]=null)}}catch(e){r.e(e)}finally{r.f()}return this.$data.result=t.result,t.survey},sitekey:function(){return"6Le0qqAUAAAAADcXlFuBa9hfCXfdUi53i85sWzSp"}},methods:{getSurveyLocal:function(e){return this.$store.get("locale")in e?e[this.$store.get("locale")]:e.default},getConstraint:function(e,t){return e.validators.filter((function(e){return t in e})).map((function(e){return e[t]}))[0]},checkCondition:function checkCondition(question){var _this=this,r;if(!question.visibleIf)return!0;var simpleExpression=/{(\w+)}\s*=\s*('?\w+'?)/,containsExpression=/{(\w+)}\s*contains\s*"?'?(\w+)'?"?/,customExpression=/\{([^{]+)\}/g;return simpleExpression.test(question.visibleIf)?(r=simpleExpression.exec(question.visibleIf),eval("".concat(this.$data.result[r[1]],"===").concat(r[2]))):containsExpression.test(question.visibleIf)?(r=containsExpression.exec(question.visibleIf),this.$data.result[r[1]]&&this.$data.result[r[1]].indexOf(r[2])>=0):eval(question.visibleIf.replace(customExpression,(function(e,text){return _this.$data.result[text]?"'".concat(_this.$data.result[text].replace(/\n/gm,""),"'"):"''"})))},callback:function(e){var t=this;this.$axios.post("https://api.foe.tools/surveyresponses",{response:{response:this.$data.result,survey:this.$store.get("survey@[0].id")},captcha:e}).then((function(){t.$data.loading=!1,t.complete({message:t.$t(i18nPrefix+"survey_complete"),type:"is-success",indefinite:!0})})).catch((function(e){t.$data.loading=!1,400===e.response.status?t.$buefy.notification.open({message:t.$t(i18nPrefix+"error"),type:"is-danger",indefinite:!0}):t.$buefy.notification.open({message:t.$t(i18nPrefix+"unknown_error"),type:"is-danger",indefinite:!0}),console.error("error: ",e)}))},prepare:function(){var e=this,t=this.$refs.formSurvey.reportValidity();if(!t)return!1;var r,_=_createForOfIteratorHelper(this.survey);try{for(_.s();!(r=_.n()).done;){var n=r.value;this.$data.errors[n.name]=!1}}catch(e){_.e(e)}finally{_.f()}var o=function(r){var _=e.survey.find((function(e){return e.name===r}));if(e.$data.result[r]instanceof Array&&_.isRequired&&e.checkCondition(_)&&0===e.$data.result[r].length||e.survey.find((function(e){return e.name===r})).isRequired&&e.checkCondition(_)&&null===e.$data.result[r])e.$data.errors[r]=!0,t=!1;else if("object"===Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_8__.a)(e.$data.result[r])&&_.isRequired&&e.checkCondition(_))for(var n in e.$data.result[r])if(null===e.$data.result[r][n]){e.$data.errors[r]=!0,t=!1;break}};for(var l in this.$data.result)o(l);return this.$forceUpdate(),!!t&&(this.$data.loading=!0,!0)},getErrorMessage:function(e){return e.isRequired&&this.$data.errors[e.name]?this.$t(i18nPrefix+"required_field"):""},complete:function(e){var t=this.$cookies.get("survey");t||(t=[]),t.push(this.$store.get("survey@[0].id")),this.$cookies.set("survey",t,{path:"/",expires:_scripts_utils__WEBPACK_IMPORTED_MODULE_13__.a.getDefaultCookieExpireTime()}),this.$buefy.notification.open(e),this.$router.push("/"),this.$store.dispatch("nuxtServerInit")}},components:{InvisibleRecaptcha:vue_invisible_recaptcha__WEBPACK_IMPORTED_MODULE_12__.a}}},382:function(e,t,r){"use strict";var _=r(23),n=r(383)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),_(_.P+_.F*o,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r(108)("find")},383:function(e,t,r){var _=r(52),n=r(109),o=r(51),l=r(48),c=r(384);e.exports=function(e,t){var r=1==e,d=2==e,f=3==e,m=4==e,v=6==e,h=5==e||v,y=t||c;return function(t,c,E){for(var O,P,M=o(t),k=n(M),D=_(c,E,3),x=l(k.length),C=0,w=r?y(t,x):d?y(t,0):void 0;x>C;C++)if((h||C in k)&&(P=D(O=k[C],C,M),e))if(r)w[C]=P;else if(P)switch(e){case 3:return!0;case 5:return O;case 6:return C;case 2:w.push(O)}else if(m)return!1;return v?-1:f||m?m:w}}},384:function(e,t,r){var _=r(385);e.exports=function(e,t){return new(_(e))(t)}},385:function(e,t,r){var _=r(28),n=r(295),o=r(13)("species");e.exports=function(e){var t;return n(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!n(t.prototype)||(t=void 0),_(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},405:function(e,t){},412:function(e,t,r){"use strict";r(88);var _={props:{sitekey:{type:String,required:!0},badge:{type:String,required:!1,default:"bottomright"},theme:{type:String,required:!1,default:"dark"},validate:{type:Function,required:!1},callback:{type:Function,required:!0},disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},reference:{type:String,required:!1},type:{type:String,required:!1,default:"submit"}},data:function(){return{widgetId:!1,loaded:!1}},methods:{render:function(){var e=this;this.widgetId=grecaptcha.render(this.recaptchaId,{sitekey:this.sitekey,size:"invisible",badge:this.badge,theme:this.theme,callback:function(t){e.callback(t),grecaptcha.reset(e.widgetId)}}),this.loaded=!0},renderWait:function(){var e=this;setTimeout((function(){"undefined"!=typeof grecaptcha&&grecaptcha.render?e.render():e.renderWait()}),200)},click:function(){(!this.validate||this.validate&&!1!==this.validate())&&grecaptcha.execute()}},computed:{computedClass:function(){var e=this.class?this.class.split(" "):[];return this.value&&e.push("invisible-recaptcha"),e},recaptchaId:function(){return"vue-invisible-recaptcha-"+this._uid}},mounted:function(){if("undefined"==typeof grecaptcha){var script=document.createElement("script");script.src="https://www.google.com/recaptcha/api.js?render=explicit",script.onload=this.renderWait,document.head.appendChild(script)}else this.render()}},n=r(14),component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{ref:e.reference,class:e.computedClass,attrs:{id:e.id,type:e.type,disabled:!e.loaded||e.disabled},on:{click:function(t){return t.preventDefault(),e.click(t)}}},[r("div",{attrs:{id:e.recaptchaId,"data-size":"invisible"}}),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},446:function(e,t,r){"use strict";r.r(t);var _=r(381).a,n=r(14),component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"surveyContainer"}},[r("b-loading",{attrs:{"is-full-page":!1,active:e.loading},on:{"update:active":function(t){e.loading=t}}}),r("form",{ref:"formSurvey"},[e._l(e.survey,(function(t,_){return r("section",{staticClass:"margin-top-two-em"},["html"===t.type?r("div",{domProps:{innerHTML:e._s(e.getSurveyLocal(t.html))}}):"radiogroup"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:e.errors[t.name]?"is-danger":"",message:e.getErrorMessage(t)}}),e._l(t.choices,(function(_,n){return r("b-field",{key:t.name+"__"+_.value},[r("b-radio",{attrs:{"native-value":_.value,disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(e.getSurveyLocal(_.text)))])],1)}))]:"checkbox"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}}),e._l(t.choices,(function(_,n){return r("b-field",{key:t.name+"__"+_.value},[r("b-checkbox",{attrs:{"native-value":_.value,disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(e.getSurveyLocal(_.text)))])],1)}))]:"comment"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-input",{attrs:{id:t.name,type:"textarea",required:t.isRequired&&e.checkCondition(t),disabled:e.loading,maxlength:e.getConstraint(t,"maxLength")},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}})],1)]:"dropdown"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-select",{attrs:{id:t.name,required:t.isRequired&&e.checkCondition(t),disabled:e.loading,expanded:""},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},e._l(t.choices,(function(_,n){return r("option",{key:t.name+"__"+_,attrs:{"native-value":_},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(_))])})),0)],1)]:"text"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-input",{attrs:{type:t.inputType?t.inputType:"text",required:t.isRequired&&e.checkCondition(t),disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}})],1)]:"matrix"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}}),r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[r("thead",[r("tr",[r("th"),e._l(t.columns,(function(_,n){return r("th",{key:t.name+"__"+_.value},[e._v(e._s(e.getSurveyLocal(_.text)))])}))],2)]),r("tbody",e._l(t.rows,(function(_,n){return r("tr",{key:t.name+"__"+_.value},[r("td",[r("p",[e._v(e._s(e.getSurveyLocal(_.text)))])]),e._l(t.columns,(function(n,o){return r("td",{key:t.name+"__"+_.value+"__"+n.value,staticClass:"has-text-centered"},[r("b-radio",{attrs:{"native-value":n.value,disabled:e.loading},model:{value:e.result[t.name][_.value],callback:function(r){e.$set(e.result[t.name],_.value,r)},expression:"result[question.name][row.value]"}})],1)}))],2)})),0)])])]:e._e()],2)})),r("hr"),r("div",{staticClass:"has-text-centered"},[r("invisible-recaptcha",{staticClass:"button is-info",attrs:{sitekey:e.sitekey,validate:e.prepare,callback:e.callback,type:"button",id:"submitSurvey",disabled:e.loading}},[e._v(e._s(e.$t("utils.Submit")))])],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,r){"use strict";var _=r(405),n=r.n(_);t.default=n.a},552:function(e,t,r){"use strict";r.r(t);var _=r(446).default,n=r(14),o=r(478),component=Object(n.a)(_,void 0,void 0,!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);t.default=component.exports}}]);