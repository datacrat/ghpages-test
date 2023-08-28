/*! For license information please see lib.js.LICENSE.txt */
!function(){var e={74806:function(e,t,r){"use strict";var o=r(82702).Promise,i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=o))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveActivitiesOnePage=void 0;var c=a(r(83300));t.retrieveActivitiesOnePage=function(e,t,r){return i(this,void 0,void 0,(function(){var n,o;return s(this,(function(i){switch(i.label){case 0:n="https://www.strava.com/api/v3/athlete/activities",n+="?",n+="page=".concat(r.toString()),n+="&",n+="per_page=".concat(t),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,(0,c.default)(n,{method:"GET",headers:{Authorization:"Bearer "+e}})];case 2:return[4,i.sent().json()];case 3:return[2,i.sent()];case 4:throw o=i.sent(),new Error("retrieveActivitiesOnePage() failed: ".concat(o.message));case 5:return[2]}}))}))},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==n?n:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=void 0;try{i=r[o]}catch(e){continue}e.register(i,o,"C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\activities.ts")}}else e.register(r,"module.exports","C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\activities.ts")}}()},16392:function(e,t,r){"use strict";var o=r(82702).Promise,i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=o))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Session=void 0;var c=a(r(83300)),u=function(){function e(e){if(null!=e){var t=JSON.parse(e);if(!t.clientId)throw new Error("Source session string doesn't have clientId.");if(this.clientId=t.clientId,!t.clientSecret)throw new Error("Source session string doesn't have clientSecret.");if(this.clientSecret=t.clientSecret,!t.firstName)throw new Error("Source session string doesn't have firstName.");if(this.firstName=t.firstName,!t.lastName)throw new Error("Source session string doesn't have lastName.");if(this.lastName=t.lastName,!t.accessToken)throw new Error("Source session string doesn't have accessToken.");if(this.accessToken=t.accessToken,!t.refreshToken)throw new Error("Source session string doesn't have refreshToken.");if(this.refreshToken=t.refreshToken,!t.expiresAt)throw new Error("Source session string doesn't have expiresAt.");if(this.expiresAt=t.expiresAt,!t.profileMedium)throw new Error("Source session string doesn't have profileMedium.");this.profileMedium=t.profileMedium}else console.log("creating brand-new session")}return e.build=function(t,r,n){return i(this,void 0,void 0,(function(){var o,i,a,u,l;return s(this,(function(s){switch(s.label){case 0:return console.log("Session.build()"),(o=new e).clientId=t,o.clientSecret=r,(i=new URLSearchParams).append("client_id",o.clientId),i.append("client_secret",o.clientSecret),i.append("code",n),i.append("grant_type","authorization_code"),console.log("Session.build(): calling fetch()"),[4,(0,c.default)("https://www.strava.com/api/v3/oauth/token",{method:"POST",body:i})];case 1:if(200!==(a=s.sent()).status)return[3,6];s.label=2;case 2:return s.trys.push([2,4,,5]),[4,a.json()];case 3:if("Bearer"!==(u=s.sent()).token_type)throw new Error("Session.build(): got unexpected API response.");return l=u,o.firstName=l.athlete.firstname,o.lastName=l.athlete.lastname,o.accessToken=l.access_token,o.refreshToken=l.refresh_token,o.expiresAt=l.expires_at,o.profileMedium=l.athlete.profile_medium,[2,o];case 4:throw s.sent(),new Error("Session.build(): got unexpected API response.");case 5:return[3,7];case 6:throw new Error("Error: got response status: ".concat(a.status,"."));case 7:return[2]}}))}))},e.prototype.expired=function(){return Math.floor((new Date).getTime()/1e3)+120>this.expiresAt},e.prototype.refresh=function(){return i(this,void 0,void 0,(function(){var e,t,r;return s(this,(function(n){switch(n.label){case 0:return(e=new URLSearchParams).append("client_id",this.clientId),e.append("client_secret",this.clientSecret),e.append("refresh_token",this.refreshToken),e.append("grant_type","refresh_token"),console.log("Session.build(): calling fetch()"),[4,(0,c.default)("https://www.strava.com/api/v3/oauth/token",{method:"POST",body:e})];case 1:return[4,n.sent().json()];case 2:if("Bearer"!==(t=n.sent()).token_type)throw new Error("Session.refresh(): got unexpected API response.");return r=t,console.log(r),this.accessToken=r.access_token,this.refreshToken=r.refresh_token,this.expiresAt=r.expires_at,[2]}}))}))},e}();t.Session=u,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==n?n:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=void 0;try{i=r[o]}catch(e){continue}e.register(i,o,"C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\session.ts")}}else e.register(r,"module.exports","C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\session.ts")}}()},38800:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==n?n:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=void 0;try{i=r[o]}catch(e){continue}e.register(i,o,"C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\strava.ts")}}else e.register(r,"module.exports","C:\\Users\\snaka\\Documents\\task67\\stractivity-excelizer\\src\\lib\\strava.ts")}}()},82702:function(e,t,r){e.exports=function(){"use strict";function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=0,o=void 0,i=void 0,s=function(e,t){p[n]=e,p[n+1]=t,2===(n+=2)&&(i?i(d):b())};var a="undefined"!=typeof window?window:void 0,c=a||{},u=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var e=setTimeout;return function(){return e(d,1)}}var p=new Array(1e3);function d(){for(var e=0;e<n;e+=2)(0,p[e])(p[e+1]),p[e]=void 0,p[e+1]=void 0;n=0}var v,y,w,_,b=void 0;function g(e,t){var r=this,n=new this.constructor(x);void 0===n[k]&&G(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return D(o,n,i,r._result)}))}else C(r,n,e,t);return n}function m(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(x);return P(t,e),t}b=l?function(){return process.nextTick(d)}:u?(y=0,w=new u(d),_=document.createTextNode(""),w.observe(_,{characterData:!0}),function(){_.data=y=++y%2}):f?((v=new MessageChannel).port1.onmessage=d,function(){return v.port2.postMessage(0)}):void 0===a?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(d)}:h()}catch(e){return h()}}():h();var k=Math.random().toString(36).substring(2);function x(){}var S=void 0,A=1,T=2;function E(t,r,n){r.constructor===t.constructor&&n===g&&r.constructor.resolve===m?function(e,t){t._state===A?O(e,t._result):t._state===T?M(e,t._result):C(t,void 0,(function(t){return P(e,t)}),(function(t){return M(e,t)}))}(t,r):void 0===n?O(t,r):e(n)?function(e,t,r){s((function(e){var n=!1,o=function(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}(r,t,(function(r){n||(n=!0,t!==r?P(e,r):O(e,r))}),(function(t){n||(n=!0,M(e,t))}),e._label);!n&&o&&(n=!0,M(e,o))}),e)}(t,r,n):O(t,r)}function P(e,t){if(e===t)M(e,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=t),null===n||"object"!==o&&"function"!==o)O(e,t);else{var r=void 0;try{r=t.then}catch(t){return void M(e,t)}E(e,t,r)}var n,o}function j(e){e._onerror&&e._onerror(e._result),N(e)}function O(e,t){e._state===S&&(e._result=t,e._state=A,0!==e._subscribers.length&&s(N,e))}function M(e,t){e._state===S&&(e._state=T,e._result=t,s(j,e))}function C(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+A]=r,o[i+T]=n,0===i&&e._state&&s(N,e)}function N(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,o=void 0,i=e._result,s=0;s<t.length;s+=3)n=t[s],o=t[s+r],n?D(r,n,o,i):o(i);e._subscribers.length=0}}function D(t,r,n,o){var i=e(n),s=void 0,a=void 0,c=!0;if(i){try{s=n(o)}catch(e){c=!1,a=e}if(r===s)return void M(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;r._state!==S||(i&&c?P(r,s):!1===c?M(r,a):t===A?O(r,s):t===T&&M(r,s))}var I=0;function G(e){e[k]=I++,e._state=void 0,e._result=void 0,e._subscribers=[]}var L=function(){function e(e,r){this._instanceConstructor=e,this.promise=new e(x),this.promise[k]||G(this.promise),t(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&O(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===S&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===m){var o=void 0,i=void 0,s=!1;try{o=e.then}catch(e){s=!0,i=e}if(o===g&&e._state!==S)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===U){var a=new r(x);s?M(a,i):E(a,e,o),this._willSettleAt(a,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===S&&(this._remaining--,e===T?M(n,r):this._result[t]=r),0===this._remaining&&O(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;C(e,void 0,(function(e){return r._settledAt(A,t,e)}),(function(e){return r._settledAt(T,t,e)}))},e}();var U=function(){function t(e){this[k]=I++,this._result=this._state=void 0,this._subscribers=[],x!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){P(e,t)}),(function(t){M(e,t)}))}catch(t){M(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this,n=r.constructor;return e(t)?r.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))})):r.then(t,t)},t}();return U.prototype.then=g,U.all=function(e){return new L(this,e).promise},U.race=function(e){var r=this;return t(e)?new r((function(t,n){for(var o=e.length,i=0;i<o;i++)r.resolve(e[i]).then(t,n)})):new r((function(e,t){return t(new TypeError("You must pass an array to race."))}))},U.resolve=m,U.reject=function(e){var t=new this(x);return M(t,e),t},U._setScheduler=function(e){i=e},U._setAsap=function(e){s=e},U._asap=s,U.polyfill=function(){var e=void 0;if(void 0!==r.g)e=r.g;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=U},U.Promise=U,U}()},83300:function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r(38800),r(16392);var n=r(74806)}();
//# sourceMappingURL=lib.js.map