!function e(t,n,a){function i(r,o){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!o&&c)return c(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){var n=t[r][1][e];return i(n?n:e)},u,u.exports,e,t,n,a)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<a.length;r++)i(a[r]);return i}({"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/ajax.js":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("es6-promise").Promise;n.get=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=void 0;return new a(function(a,i){n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),n.onreadystatechange=function(){if(n.readyState==XMLHttpRequest.DONE)if(200==n.status)if(n.responseText)try{a(JSON.parse(n.responseText))}catch(e){console.error("Response text is not null, but it's not a valid JSON: "+n.responseText),a(null)}else a(null);else i({code:n.status,responseText:n.responseText})},n.withCredentials=t.withCredentials!==!1,n.open("GET",e,!0),n.send()})},n.post=function(e,t){return new a(function(n,a){var i=void 0;i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),i.onreadystatechange=function(){if(i.readyState==XMLHttpRequest.DONE)if(200==i.status)if(i.responseText)try{n(JSON.parse(i.responseText))}catch(e){console.error("Response text is not null, but it's not a valid JSON: "+i.responseText),n(null)}else n(null);else a({code:i.status,responseText:i.responseText})},i.withCredentials=!0,i.open("POST",e,!0),i.send(JSON.stringify(t))})}},{"es6-promise":"es6-promise"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/CityList.jsx":[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e){return e=Math.round(e),e>0?"+"+e:e}Object.defineProperty(n,"__esModule",{value:!0});var s=e("react"),r=a(s),o=e("strftime"),c=a(o);n["default"]=r["default"].createClass({displayName:"CityList",onRemove:function(e){var t=this;return function(){t.props.onRemove(e)}},onMoveUp:function(e){var t=this;return function(){t.props.onMoveUp(e)}},onMoveDown:function(e){var t=this;return function(){t.props.onMoveDown(e)}},getIconCode:function(e){switch(e){case"01d":return"B";case"02d":return"H";case"03d":return"N";case"04d":return"Y";case"09d":return"R";case"10d":return"Q";case"11d":return"P";case"13d":return"V";case"50d":return"M";case"01n":return"2";case"02n":return"4";case"03n":return"5";case"04n":return"%";case"09n":return"8";case"10n":return"7";case"11n":return"6";case"13n":return'"';case"50n":return"M";default:return")"}},render:function(){function e(e){return e.substr(0,1).toUpperCase()+e.substr(1)}var t=this;return r["default"].createElement("div",{className:"city-list"},this.props.data.length>0?this.props.data.map(function(n){var a="city__temp";return n.weather.temp>0?a+=" city__temp--warm":n.weather.temp<0&&(a+=" city__temp--cold"),"full"===t.props.displayMode?r["default"].createElement("table",{key:n.name,className:"city city--full"},r["default"].createElement("tbody",null,r["default"].createElement("tr",null,r["default"].createElement("td",{className:"city__icon"},r["default"].createElement("i",{"aria-hidden":"true",className:"meteoicon",title:e(n.weather.desc.description)},t.getIconCode(n.weather.desc.icon))),r["default"].createElement("td",{className:"city__name",colSpan:"2"},n.name)),r["default"].createElement("tr",null,r["default"].createElement("td",{className:a},i(n.weather.temp)),r["default"].createElement("td",{className:"city__details"},r["default"].createElement("div",null,r["default"].createElement("span",{className:"city__aux-param"},"Pressure: ",n.weather.pressure," hPa"),r["default"].createElement("span",{className:"city__aux-param"},"Humidity: ",n.weather.humidity,"%"),r["default"].createElement("span",{className:"city__aux-param"},"Wind: ",n.weather.wind.speed," m/s (",n.weather.wind.deg,"°)")),r["default"].createElement("div",{className:"city__last-update"},"Last update: ",(0,c["default"])("%T %F",new Date(n.weather.dt))))),r["default"].createElement("tr",null,r["default"].createElement("td",{className:"city__remove-button",colSpan:"3"},r["default"].createElement("div",{className:"city__controls"},r["default"].createElement("div",{className:"arrow-up",onClick:t.onMoveUp(n.name)}),r["default"].createElement("div",{className:"arrow-down",onClick:t.onMoveDown(n.name)}),r["default"].createElement("button",{onClick:t.onRemove(n.name),tabIndex:"-1"},"Remove")))))):r["default"].createElement("table",{key:n.name,className:"city city--short"},r["default"].createElement("tbody",null,r["default"].createElement("tr",null,r["default"].createElement("td",{className:"city__icon"},r["default"].createElement("i",{"aria-hidden":"true",className:"meteoicon",title:e(n.weather.desc.description)},t.getIconCode(n.weather.desc.icon))),r["default"].createElement("td",{className:"city__name"},n.name),r["default"].createElement("td",{className:a},i(n.weather.temp)),r["default"].createElement("td",{className:"city__controls-parent"},r["default"].createElement("div",{className:"city__controls"},r["default"].createElement("div",{className:"city__remove-button",rowSpan:"2"},r["default"].createElement("button",{onClick:t.onRemove(n.name),tabIndex:"-1"},"Remove")),r["default"].createElement("div",{className:"city__up-down-buttons",rowSpan:"2"},r["default"].createElement("div",{className:"arrow-up",onClick:t.onMoveUp(n.name)}),r["default"].createElement("div",{className:"arrow-down",onClick:t.onMoveDown(n.name)})))))))}):r["default"].createElement("div",{className:"city-list__empty"},"There are no cities added yet"))}})},{react:"react",strftime:"strftime"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/DynamicSelect.js":[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("react"),s=a(i);n["default"]=s["default"].createClass({displayName:"DynamicSelect",getInitialState:function(){return{text:"",focused:!1,blurDisabled:!1,highlightedOption:null,optionList:[]}},onFocus:function(e){this.setState({focused:!0})},onBlur:function(e){this.state.blurDisabled||this.setState({focused:!1,text:"",optionList:[]})},onInput:function(e){var t=this,n=e.target.value;this.setState({text:n,highlightedOption:null},function(){t.props.loadOptions(t.state.text).then(function(e){t.setState(function(t){if(t.text===n){var a=[];return e.forEach(function(e){0===a.filter(function(t){return e.value===t.value}).length&&a.push(e)}),{optionList:a}}return t})},function(e){t.setState(function(e){return e.text===n?{optionList:[]}:e})})})},onSelect:function(e){var t=this;this.setState({text:"",optionList:[],blurDisabled:!1,focused:!1},function(){t.props.onChange(e)})},onMouseOverOptionList:function(){this.setState({blurDisabled:!0})},onMouseOutOptionList:function(){this.setState({blurDisabled:!1})},onMouseOverOption:function(e){this.setState({highlightedOption:e})},onMouseOutOption:function(){this.setState({highlightedOption:null})},onReset:function(){var e=this;this.setState({text:"",optionList:[]},function(){e.props.onReset&&e.props.onReset()})},onKeyDown:function(e){40===e.keyCode?(this.setState(function(e){var t=e.optionList,n=e.highlightedOption;if(0!==t.length){if(null===n)return{highlightedOption:t[0]};for(var a=0;a<t.length;++a)if(t[a].value===n.value)return a===t.length-1?{highlightedOption:t[0]}:{highlightedOption:t[a+1]}}return e}),e.preventDefault()):38===e.keyCode?(this.setState(function(e){var t=e.optionList,n=e.highlightedOption;if(0!==t.length){if(null===n)return{highlightedOption:t[0]};for(var a=0;a<t.length;++a)if(t[a].value===n.value)return 0===a?{highlightedOption:t[t.length-1]}:{highlightedOption:t[a-1]}}return e}),e.preventDefault()):13===e.keyCode?(null!==this.state.highlightedOption&&this.onSelect(this.state.highlightedOption),e.preventDefault()):9===e.keyCode?null!==this.state.highlightedOption&&this.onSelect(this.state.highlightedOption):27===e.keyCode&&(this.onReset(),e.preventDefault())},focus:function(){this.refs.inp.focus()},render:function(){var e=this,t="dynamic-select";this.state.focused&&(t+=" dynamic-select--focused");var n=this.props.value||{value:"",label:""};return s["default"].createElement("div",{className:t},s["default"].createElement("input",{tabIndex:this.props.tabIndex,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",id:this.props.id,className:"dynamic-select__input",type:"text",placeholder:this.state.focused||""!==this.state.text?"":this.props.placeholder,value:this.state.focused?this.state.text:n.label,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onInput,onClick:this.onClick,onKeyDown:this.onKeyDown,ref:"inp"}),s["default"].createElement("div",{className:"dynamic-select__reset",onClick:this.onReset},"✖"),s["default"].createElement("div",{className:"dynamic-select__option-list",onMouseOver:this.onMouseOverOptionList,onMouseOut:this.onMouseOutOptionList},0===this.state.optionList.length?s["default"].createElement("div",{className:"dynamic-select__option dynamic-select__option--nothing-found"},"Nothing found"):this.state.optionList.map(function(t){var n="dynamic-select__option";return null!==e.state.highlightedOption&&e.state.highlightedOption.value===t.value&&(n+=" dynamic-select__option--highlighted"),s["default"].createElement("div",{key:t.value,className:n,onMouseOver:function(n){return e.onMouseOverOption(t)},onMouseOut:function(t){return e.onMouseOutOption()},onClick:function(n){n.preventDefault(),e.onSelect(t)}},t.label)})))}})},{react:"react"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/NewCity.jsx":[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("react"),s=a(i),r=e("../data_access"),o=e("./DynamicSelect"),c=a(o);n["default"]=s["default"].createClass({displayName:"NewCity",onSubmit:function(e){var t=this;e.preventDefault(),this.setState({waiting:!0});var n=this.props.onAdd(this.state.selectValue.value);n.then(function(){t.setState({error:null})})["catch"](function(e){var n;n=404==e.code?"city have not found":500==e.code?"internal server error. Sorry :(":e.message,t.setState({error:"Unable to add city '"+e.city+"': "+n})}).then(function(){t.setState({selectValue:null,waiting:!1}),t.refs.select.focus()})},getInitialState:function(){return{selectValue:null,waiting:!1,error:null}},loadOptions:function(e){return(0,r.fetchCityList)(e).then(function(e){return e.map(function(e){return{value:e.name,label:e.name}})})},onFinishSearch:function(e){this.setState({selectValue:e})},onSelectReset:function(){this.setState({selectValue:null})},render:function(){return s["default"].createElement("div",{className:"new-city"},s["default"].createElement("form",{onSubmit:this.onSubmit,className:"new-city__form"},s["default"].createElement("div",{className:"new-city__item"},s["default"].createElement("label",{htmlFor:"city"},s["default"].createElement("span",null,"Add city: "))),s["default"].createElement("div",{className:"new-city__item"},s["default"].createElement(c["default"],{id:"city",loadOptions:this.loadOptions,value:this.state.selectValue,onReset:this.onSelectReset,onChange:this.onFinishSearch,placeholder:"Begin writing city name",ref:"select",tabIndex:"1"})),s["default"].createElement("div",{className:"new-city__item"},s["default"].createElement("button",{type:"submit",disabled:this.props.disabled||this.state.waiting||null===this.state.selectValue||""===this.state.selectValue.value,ref:"add_button",tabIndex:"2"},"Add")),s["default"].createElement("div",{className:"new-city__item new-city__item--empty"},s["default"].createElement("div",{className:"new-city__loader"},s["default"].createElement("img",{src:"images/ajax-loader.gif",style:{visibility:this.state.waiting?"visible":"hidden"}})))),this.state.error?s["default"].createElement("div",{className:"error"},this.state.error):null)}})},{"../data_access":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/data_access.js","./DynamicSelect":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/DynamicSelect.js",react:"react"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/Root.jsx":[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=e("react"),s=a(i),r=e("react-addons-update"),o=a(r),c=e("es6-promise"),l=e("./NewCity"),u=a(l),d=e("./CityList"),h=a(d),f=e("../data_access.js");t.exports=s["default"].createClass({displayName:"exports",getInitialState:function(){var e,t=this,n={initialized:!1,cityList:[],displayMode:"full"};localStorage.getItem("reactState");if(null!==localStorage.getItem("reactState"))try{e=JSON.parse(localStorage.getItem("reactState"))}catch(a){console.error("Unable to parse old state, use default"),e=n}else e=n;if(!e.initialized){var i=function(){t.setState(function(e){var n=(0,o["default"])(e,{initialized:{$set:!0}});return t.saveState(n),n})};setTimeout(i,12e3),(0,f.fetchCurrentCity)().then(function(e){return(0,f.fetchWeather)(e)}).then(function(e){t.setState(function(n){if(n.initialized)return n;var a;return a=(0,o["default"])(n,{cityList:{$push:[e]}}),t.saveState(a),a})})["catch"](function(e){console.error(e)}).then(function(){i()})}return this.saveState(e),e},saveState:function(e){e=e||this.state,localStorage.setItem("reactState",JSON.stringify(e))},componentDidMount:function(){var e=this,t=function n(){var t=e.state.cityList.map(function(e){return(0,f.fetchWeather)(e.name)});t.forEach(function(t){t.then(function(t){e.setState(function(e){var n=e.cityList.map(function(e){return e.name===t.name?t:e});return(0,o["default"])(e,{cityList:{$set:n}})})})["catch"](function(e){console.error("Failed to update '"+e.city+"': "+e.message)})}),t=t.map(function(e){return e["catch"](function(e){return c.Promise.resolve(e)})}),c.Promise.all(t).then(function(){e.saveState(),setTimeout(n,1e4)})};t()},onNewCity:function(e){var t=this,n=(0,f.fetchWeather)(e);return n.then(function(a){return t.setState(function(n){var i,s=0===n.cityList.filter(function(t){return t.name===e}).length;return i=s?(0,o["default"])(n,{cityList:{$push:[a]}}):n,t.saveState(i),i}),n})},onRemoveCity:function(e){var t=this;this.setState(function(n){var a=n.cityList.filter(function(t){return t.name!==e}),i=(0,o["default"])(n,{cityList:{$set:a}});return t.saveState(i),i})},onChangeDisplayMode:function(e,t){var n=this;this.setState(function(e){var t="full"===n.state.displayMode?"short":"full",a=(0,o["default"])(e,{displayMode:{$set:t}});return n.saveState(a),a})},onMoveCityUp:function(e){this.setState(function(t){for(var n=t.cityList.slice(0),a=1;a<n.length;a++)if(n[a].name===e){var i=n[a-1];n[a-1]=n[a],n[a]=i;break}return(0,o["default"])(t,{cityList:{$set:n}})})},onMoveCityDown:function(e){this.setState(function(t){for(var n=t.cityList.slice(0),a=0;a<n.length-1;a++)if(n[a].name===e){var i=n[a+1];n[a+1]=n[a],n[a]=i;break}return(0,o["default"])(t,{cityList:{$set:n}})})},render:function(){return s["default"].createElement("div",{className:"l-root"},s["default"].createElement("div",{className:"l-row "},s["default"].createElement("div",{className:"l-cell l-header"},this.state.initialized?null:s["default"].createElement("p",{className:"initializing-msg"},"Determining current city..."),s["default"].createElement(u["default"],{onAdd:this.onNewCity}))),s["default"].createElement("div",{className:"l-row"},s["default"].createElement("div",{className:"l-cell"},s["default"].createElement("div",{className:"l-content"},s["default"].createElement(h["default"],{data:this.state.cityList,displayMode:this.state.displayMode,onRemove:this.onRemoveCity,onMoveUp:this.onMoveCityUp,onMoveDown:this.onMoveCityDown})))),s["default"].createElement("div",{className:"l-row"},s["default"].createElement("div",{className:"l-cell l-footer"},s["default"].createElement("div",{className:"l-content"},s["default"].createElement("div",{className:"display-settings"},s["default"].createElement("label",null,s["default"].createElement("input",{type:"checkbox",checked:"full"===this.state.displayMode,onChange:this.onChangeDisplayMode,tabIndex:"-1"}),"show detailed information"))))))}})},{"../data_access.js":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/data_access.js","./CityList":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/CityList.jsx","./NewCity":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/NewCity.jsx","es6-promise":"es6-promise",react:"react","react-addons-update":"react-addons-update"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/data_access.js":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.fetchCityList=n.fetchCurrentCity=n.fetchWeather=void 0;var a=e("es6-promise"),i=e("./ajax");n.fetchWeather=function(e){return(0,i.get)(window.context.backend_url+"/weather?q="+e).then(function(t){return{name:e,weather:{temp:t.main.temp||0,pressure:t.main.pressure,humidity:t.main.humidity,dt:1e3*t.dt,wind:t.wind,desc:t.weather[0]}}},function(t){return a.Promise.reject({code:t.code,city:e,message:t.responseText})})},n.fetchCurrentCity=function(){var e=new a.Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){e(t)},function(e){t(e)})});return e.then(function(e){var t="http://maps.googleapis.com/maps/api/geocode/json?latlng="+e.coords.latitude+","+e.coords.longitude+"&sensor=true&language=en";return(0,i.get)(t,{withCredentials:!1})}).then(function(e){if(!e.results.length>0)throw new Error("Google hasn't found anything");var t=e.results[0],n=t.address_components;if(n=n.filter(function(e){return-1!=e.types.indexOf("administrative_area_level_1")&&-1!=e.types.indexOf("political")}),!n.length>0)throw new Error("City component hasn't found");var a=n[0],i=a.long_name;return i})},n.fetchCityList=function(e){return(0,i.get)(window.context.backend_url+"/cities?q="+e)}},{"./ajax":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/ajax.js","es6-promise":"es6-promise"}],"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/main.js":[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=e("react"),s=a(i),r=e("react-dom"),o=a(r),c=e("./components/Root"),l=a(c);"PROD"===window.context.env&&"http:"===window.location.protocol&&(window.location.href=window.location.href.replace(/^http/,"https")),document.addEventListener("DOMContentLoaded",function(){o["default"].render(s["default"].createElement(l["default"],null),document.getElementById("react"))})},{"./components/Root":"/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/components/Root.jsx",react:"react","react-dom":"react-dom"}]},{},["/Users/koluch/Dropbox/dev/js/weethr/weethr.github.io/src/scripts/main.js"]);