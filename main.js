var sveltApp=function(){"use strict";function A(){}function e(A){return A()}function t(){return Object.create(null)}function n(A){A.forEach(e)}function o(A){return"function"==typeof A}function i(A,e){return A!=A?e==e:A!==e||A&&"object"==typeof A||"function"==typeof A}function r(A,e){A.appendChild(e)}function a(A,e,t){A.insertBefore(e,t||null)}function s(A){A.parentNode.removeChild(A)}function u(A){return document.createElement(A)}function c(){return A=" ",document.createTextNode(A);var A}function l(A,e,t,n){return A.addEventListener(e,t,n),function(){return A.removeEventListener(e,t,n)}}function d(A,e,t){null==t?A.removeAttribute(e):A.getAttribute(e)!==t&&A.setAttribute(e,t)}function p(A,e,t,n){A.style.setProperty(e,t,n?"important":"")}function h(A,e,t){A.classList[t?"add":"remove"](e)}var f;function g(A){f=A}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function w(A){m().$$.on_destroy.push(A)}var E=[],v=[],y=[],B=[],Q=Promise.resolve(),_=!1;function C(A){y.push(A)}function R(){var A=new Set;do{for(;E.length;){var e=E.shift();g(e),b(e.$$)}for(;v.length;)v.pop()();for(var t=0;t<y.length;t+=1){var n=y[t];A.has(n)||(n(),A.add(n))}y.length=0}while(E.length);for(;B.length;)B.pop()();_=!1}function b(A){if(null!==A.fragment){A.update(),n(A.before_update);var e=A.dirty;A.dirty=[-1],A.fragment&&A.fragment.p(A.ctx,e),A.after_update.forEach(C)}}var I,D=new Set;function G(A,e){A&&A.i&&(D.delete(A),A.i(e))}function H(A,e,t,n){if(A&&A.o){if(D.has(A))return;D.add(A),I.c.push((function(){D.delete(A),n&&(t&&A.d(1),n())})),A.o(e)}}var N="undefined"!=typeof window?window:global;function k(A){A&&A.c()}function x(A,t,i){var r=A.$$,a=r.fragment,s=r.on_mount,u=r.on_destroy,c=r.after_update;a&&a.m(t,i),C((function(){var t=s.map(e).filter(o);u?u.push.apply(u,t):n(t),A.$$.on_mount=[]})),c.forEach(C)}function L(A,e){var t=A.$$;null!==t.fragment&&(n(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function S(A,e){-1===A.$$.dirty[0]&&(E.push(A),_||(_=!0,Q.then(R)),A.$$.dirty.fill(0)),A.$$.dirty[e/31|0]|=1<<e%31}function P(e,o,i,r,a,s,u){void 0===u&&(u=[-1]);var c=f;g(e);var l=o.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:A,not_equal:a,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:t(),dirty:u},p=!1;d.ctx=i?i(e,l,(function(A,t,n){return void 0===n&&(n=t),d.ctx&&a(d.ctx[A],d.ctx[A]=n)&&(d.bound[A]&&d.bound[A](n),p&&S(e,A)),t})):[],d.update(),p=!0,n(d.before_update),d.fragment=!!r&&r(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(A){return Array.from(A.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&G(e.$$.fragment),x(e,o.target,o.anchor),R()),g(c)}var $=function(){};function M(A,e,t){var n=e.routeList;w((function(){o.unsubscribe()}));var o=APPSTORE.AppRouterStore.subscribe((function(A){void 0!==A&&(t(1,A),console.log(A.path,"form >> "+A.component))}));return A.$set=function(A){"routeList"in A&&t(0,n=A.routeList)},A.$$.update=function(){A.$$.dirty},[n]}$.prototype.$destroy=function(){L(this,1),this.$destroy=A},$.prototype.$on=function(A,e){var t=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return t.push(e),function(){var A=t.indexOf(e);-1!==A&&t.splice(A,1)}},$.prototype.$set=function(){};var F=function(A){function e(e){A.call(this),P(this,e,M,null,i,{routeList:0})}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($);function Z(A,e,t){w((function(){n.unsubscribe()}));var n=APPSTORE.AppRouterStore.subscribe((function(A){void 0!==A&&(t(0,A),console.log(A.path,"form >> "+A.component))}));return A.$$.update=function(){A.$$.dirty},[]}var O=function(A){function e(e){A.call(this),P(this,e,Z,null,i,{})}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($),T=N.document;function W(e){var t,o,i,f,g,m,w,E,v,y,B,Q,_,C,R;return{c:function(){(t=u("audio")).innerHTML='<source id="audioSource" src="">\n  Your browser does not support the audio format.\n',o=c(),i=u("div"),f=u("img"),g=c(),m=u("div"),(w=u("div")).innerHTML='<i class="icon-extra-large svelte-x1yww9" data-feather="skip-back"></i>',E=c(),v=u("div"),(y=u("span")).innerHTML='<i class="icon-extra-large svelte-x1yww9" data-feather="play-circle"></i>',B=c(),(Q=u("span")).innerHTML='<i class="icon-extra-large svelte-x1yww9" data-feather="pause-circle"></i>',_=c(),(C=u("div")).innerHTML='<i class="icon-extra-large svelte-x1yww9" data-feather="skip-forward"></i>',d(t,"id","audio"),p(f,"display","none"),f.src!=="assets/images/bg.jpg"&&d(f,"src","assets/images/bg.jpg"),d(i,"class","clipboard svelte-x1yww9"),p(i,"opacity",e[2]),p(i,"background-size",e[4]+"%"),p(i,"background-image","url("+e[3]+")"),d(w,"class","pure-u-1-3 last-song svelte-x1yww9"),d(w,"id","last-song"),d(y,"class","play-song-play svelte-x1yww9"),h(y,"show",!e[0]),h(y,"hide",e[0]),d(Q,"class","play-song-pause svelte-x1yww9"),h(Q,"show",e[0]),h(Q,"hide",!e[0]),d(v,"class","pure-u-1-3"),d(v,"id","play-song"),d(C,"class","pure-u-1-3 next-song svelte-x1yww9"),d(C,"id","next-song"),d(m,"class","pure-g audio-ctrl svelte-x1yww9"),h(m,"show",e[1]),h(m,"hide",!e[1]),R=[l(i,"click",e[9]),l(w,"click",e[7]),l(y,"click",e[5]),l(Q,"click",e[6]),l(C,"click",e[8])]},m:function(A,e){a(A,t,e),a(A,o,e),a(A,i,e),r(i,f),a(A,g,e),a(A,m,e),r(m,w),r(m,E),r(m,v),r(v,y),r(v,B),r(v,Q),r(m,_),r(m,C)},p:function(A,e){4&e[0]&&p(i,"opacity",A[2]),16&e[0]&&p(i,"background-size",A[4]+"%"),8&e[0]&&p(i,"background-image","url("+A[3]+")"),1&e[0]&&h(y,"show",!A[0]),1&e[0]&&h(y,"hide",A[0]),1&e[0]&&h(Q,"show",A[0]),1&e[0]&&h(Q,"hide",!A[0]),2&e[0]&&h(m,"show",A[1]),2&e[0]&&h(m,"hide",!A[1])},i:A,o:A,d:function(A){A&&s(t),A&&s(o),A&&s(i),A&&s(g),A&&s(m),n(R)}}}function Y(A,e,t){!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NoSleep=e():A.NoSleep=e()}("undefined"!=typeof self?self:this,(function(){return function(A){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return A[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=0)}([function(A,e,t){var n=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}();var o=t(1),i=o.webm,r=o.mp4,a="undefined"!=typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,s=function(){function A(){var e=this;!function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,A),a?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("muted",""),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",i),this._addSourceToVideo(this.noSleepVideo,"mp4",r),this.noSleepVideo.addEventListener("loadedmetadata",(function(){e.noSleepVideo.duration<=1?e.noSleepVideo.setAttribute("loop",""):e.noSleepVideo.addEventListener("timeupdate",(function(){e.noSleepVideo.currentTime>.5&&(e.noSleepVideo.currentTime=Math.random())}))})))}return n(A,[{key:"_addSourceToVideo",value:function(A,e,t){var n=document.createElement("source");n.src=t,n.type="video/"+e,A.appendChild(n)}},{key:"enable",value:function(){a?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval((function(){document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))}),15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){a?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),A}();A.exports=s},function(A,e,t){A.exports={webm:"data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",mp4:"data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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"}}])})),document.onkeydown=function(A){"192"==(A=A||window.event).keyCode&&4==++n&&(document.getElementsByClassName("nav")[0].style.display="block",document.getElementsByClassName("img-container")[0].style.height="80%",document.getElementsByClassName("img-container")[0].style.position="static")};var n=0;var o=new NoSleep,i=!1,r=0,a=["assets/images/bg.jpg"],s=0;w((function(){c.unsubscribe()}));var u,c=APPSTORE.AppRouterStore.subscribe((function(A){var e;void 0!==A&&(t(14,A),console.log(A.path,"form >> "+A.params.albumId),e=A.params.albumId,AppSERVICES.ajaxSvc({type:"GET",url:"assets/data/"+e+".json?dynamic=00",onData:l}))}));function l(A){g((u=JSON.parse(A).songs)[0].song),a=u[0].images}var d,p,h=navigator.userAgent;d=h.indexOf("Firefox")>-1?"FIREFOX":h.indexOf("Opera")>-1||h.indexOf("OPR")>-1?"OPERA":h.indexOf("Trident")>-1?"IE":h.indexOf("Edge")>-1?"EDGE":h.indexOf("Chrome")>-1?"CHROME":h.indexOf("Safari")>-1?"SAFARI":"unknown";var f=document.getElementById("audio");function g(A){document.getElementById("audio-source");"FIREFOX"==d?p="assets/media/"+A+".ogg":"CHROME"!=d&&"IE"!=d&&"EDGE"!=d||(p="assets/media/"+A+".mp3"),setTimeout((function(){f=document.getElementById("audio"),document.getElementById("audioSource").src=p,f.load(),f.onended=function(){s<u.length-1?(g(u[s+=1].song),a=u[s].images):(g(u[s=0].song),a=u[s].images)},E&&(f.play(),t(0,i=!0))}),1e3)}var m,E=!1;var v=125,y="bg.jpg";function B(){clearTimeout(Q),Q=setTimeout((function(){t(1,b=!1)}),1e4)}!function A(){var e=50,n=50,o=0;t(22,v=125),t(23,y=a[r]),console.log(a[r]);var i=setInterval((function(){o>.99&&v<100.01&&(o=0,clearInterval(i),r<a.length-1?r+=1:r=0,A()),e>0&&n>0&&(e-=.5,n-=.5),o<1&&(o+=.01),v>100&&t(22,v-=.1),t(21,e+"% "+n+"%"),t(20,m=o)}),50)}(),_=m;var Q,_,C,R,b=!0;function I(){f.paused?t(0,i=!1):t(0,i=!0)}return A.$$.update=function(){A.$$.dirty[0],A.$$.dirty[0],1048576&A.$$.dirty[0]&&t(2,_=m),8388608&A.$$.dirty[0]&&t(3,C=y),4194304&A.$$.dirty[0]&&t(4,R=v)},[i,b,_,C,R,function(){E=!0,t(0,i=!0),B(),f.play(),o.enable(),document.documentElement.requestFullscreen()},function(){f.pause(),t(0,i=!1),B()},function(){I(),B(),s<0?(g(u[s-=1].song),a=u[s].images):(g(u[s=0].song),a=u[s].images)},function(){I(),B(),s<u.length-1?(g(u[s+=1].song),a=u[s].images):(g(u[s=0].song),a=u[s].images)},function(){t(1,b=!b),B()}]}var X=function(A){function e(e){var t;A.call(this),T.getElementById("svelte-x1yww9-style")||((t=u("style")).id="svelte-x1yww9-style",t.textContent="@media(min-width: 640px){}.clipboard.svelte-x1yww9{position:absolute;top:10px;left:10px;right:10px;bottom:10px;background-size:cover;background-position:center center}.audio-ctrl.svelte-x1yww9{display:block;height:auto;width:100%;background-color:#d3d3d3;position:absolute;top:50%;opacity:.7}.icon-extra-large.svelte-x1yww9{width:70px;height:70px\r\n}.hide.svelte-x1yww9{display:none}.show.svelte-x1yww9{display:block}.next-song.svelte-x1yww9:active,.last-song.svelte-x1yww9:active{color:orange}",r(T.head,t)),P(this,e,Y,W,i,{},[-1,-1])}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($);function V(e){var t;return{c:function(){(t=u("main")).innerHTML='<h1 class="svelte-c3y3e4">ABOUT </h1>',d(t,"class","svelte-c3y3e4")},m:function(A,e){a(A,t,e)},p:A,i:A,o:A,d:function(A){A&&s(t)}}}function j(A,e,t){window.APPSTORE.AoutPageStore,window.APPSTORE.AoutPageReducer,w((function(){n.unsubscribe()}));var n=APPSTORE.AppRouterStore.subscribe((function(A){void 0!==A&&(t(0,A),console.log(A))}));return A.$$.update=function(){A.$$.dirty},[]}var U=function(A){function e(e){var t;A.call(this),document.getElementById("svelte-c3y3e4-style")||((t=u("style")).id="svelte-c3y3e4-style",t.textContent="main.svelte-c3y3e4{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1.svelte-c3y3e4{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}@media(min-width: 640px){main.svelte-c3y3e4{max-width:none}}",r(document.head,t)),P(this,e,j,V,i,{})}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($);function J(A){var e,t,n,o,i,l=A[0]&&A[0].isInnerNested&&z();return{c:function(){e=u("div"),(t=u("h1")).textContent="Nested Route-1 contents",n=c(),(o=u("ul")).innerHTML='<li><a href="#/nested/param1/p1value/param2/p2value">Nested Route-2</a></li>',i=c(),l&&l.c(),d(e,"class","param1-details")},m:function(A,s){a(A,e,s),r(e,t),r(e,n),r(e,o),r(e,i),l&&l.m(e,null)},p:function(A,t){A[0]&&A[0].isInnerNested?l||((l=z()).c(),l.m(e,null)):l&&(l.d(1),l=null)},d:function(A){A&&s(e),l&&l.d()}}}function z(A){var e;return{c:function(){(e=u("div")).textContent="Nested Route 2 contents"},m:function(A,t){a(A,e,t)},d:function(A){A&&s(e)}}}function q(e){var t,n,o,i=e[0]&&e[0].isNested&&J(e);return{c:function(){t=u("main"),(n=u("div")).innerHTML='<p class="u-align-center u-text u-text-4"><a href="#/nested/param1/p1value">Netsed Route -1</a></p>',o=c(),i&&i.c(),d(n,"class","u-container-layout u-valign-top u-container-layout-2")},m:function(A,e){a(A,t,e),r(t,n),r(t,o),i&&i.m(t,null)},p:function(A,e){var n=e[0];A[0]&&A[0].isNested?i?i.p(A,n):((i=J(A)).c(),i.m(t,null)):i&&(i.d(1),i=null)},i:A,o:A,d:function(A){A&&s(t),i&&i.d()}}}function K(A,e,t){var n;w((function(){i.unsubscribe()}));var o,i=APPSTORE.AppRouterStore.subscribe((function(A){void 0!==A&&(t(1,n=A),console.log(A))}));return A.$$.update=function(){2&A.$$.dirty&&t(0,o=n)},[o]}var AA,eA=function(A){function e(e){A.call(this),P(this,e,K,q,i,{})}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($),tA=function(){function A(){}return A.prototype.getPageRoutes=function(){return[{path:"home",component:"Dashboard_page_component",display:"HOME",src:"dashboard-page.component"},{path:"home/album/:albumId",component:"Dashboard_page_component",display:"HOME",src:"dashboard-page.component"},{path:"about",component:"About_page_component",display:"ABOUT ",src:"about-page.component"},{path:"nested",component:"Nested_page_component",display:"NESTED",src:"nested-page.component"},{path:"nested/param1/:memberId",isNested:!0,component:"Nested_page_component",display:"NESTED",src:"nested-page.component"},{path:"nested/param1/:memberId/param2/:expertise",isNested:!0,isInnerNested:!0,component:"Nested_page_component",display:"NESTED",src:"nested-page.component"}]},A}();function nA(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function oA(A,e,t){this.root=null,this._routes=[],this._useHash=e,this._hash=void 0===t?"#":t,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!e&&nA(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",A?this.root=e?A.replace(/\/$/,"/"+this._hash):A.replace(/\/$/,""):e&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function iA(A){return A instanceof RegExp?A:A.replace(/\/+$/,"").replace(/^\/+/,"^/")}function rA(A){return A.replace(/\/$/,"").split("/").length}function aA(A,e){return rA(e)-rA(A)}function sA(A,e){return void 0===e&&(e=[]),e.map((function(e){var t=function(A){var e=[];return{regexp:A instanceof RegExp?A:new RegExp(A.replace(oA.PARAMETER_REGEXP,(function(A,t,n){return e.push(n),oA.REPLACE_VARIABLE_REGEXP})).replace(oA.WILDCARD_REGEXP,oA.REPLACE_WILDCARD)+oA.FOLLOWED_BY_SLASH_REGEXP,oA.MATCH_REGEXP_FLAGS),paramNames:e}}(iA(e.route)),n=t.regexp,o=t.paramNames,i=A.replace(/^\/+/,"/").match(n),r=function(A,e){return 0===e.length?null:A?A.slice(1,A.length).reduce((function(A,t,n){return null===A&&(A={}),A[e[n]]=decodeURIComponent(t),A}),null):null}(i,o);return!!i&&{match:i,route:e,params:r}})).filter((function(A){return A}))}function uA(A,e){return sA(A,e)[0]||!1}function cA(A,e){var t=e.map((function(e){return""===e.route||"*"===e.route?A:A.split(new RegExp(e.route+"($|/)"))[0]})),n=iA(A);return t.length>1?t.reduce((function(A,e){return A.length>e.length&&(A=e),A}),t[0]):1===t.length?t[0]:n}function lA(A,e,t){var n,o=function(A){return A.split(/\?(.*)?$/)[0]};return void 0===t&&(t="#"),nA()&&!e?o(A).split(t)[0]:(n=A.split(t)).length>1?o(n[1]):o(n[0])}function dA(A,e,t){if(e&&"object"==typeof e){if(e.before)return void e.before((function(n){void 0===n&&(n=!0),n&&(A(),e.after&&e.after(t))}),t);if(e.after)return A(),void(e.after&&e.after(t))}A()}oA.prototype={helpers:{match:uA,root:cA,clean:iA,getOnlyURL:lA},navigate:function(A,e){var t;return A=A||"",this._usePushState?(t=(t=(e?"":this._getRoot()+"/")+A.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",t),this.resolve()):"undefined"!=typeof window&&(A=A.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+A),this},on:function(){for(var A=this,e=[],t=arguments.length;t--;)e[t]=arguments[t];if("function"==typeof e[0])this._defaultHandler={handler:e[0],hooks:e[1]};else if(e.length>=2)if("/"===e[0]){var n=e[1];"object"==typeof e[1]&&(n=e[1].uses),this._defaultHandler={handler:n,hooks:e[2]}}else this._add(e[0],e[1],e[2]);else if("object"==typeof e[0]){var o=Object.keys(e[0]).sort(aA);o.forEach((function(t){A.on(t,e[0][t])}))}return this},off:function(A){return null!==this._defaultHandler&&A===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&A===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce((function(e,t){return t.handler!==A&&e.push(t),e}),[]),this},notFound:function(A,e){return this._notFoundHandler={handler:A,hooks:e},this},resolve:function(A){var e,t,n=this,o=(A||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(o=o.replace(new RegExp("^/"+this._hash),"/"));var i=function(A){return A.split(/\?(.*)?$/).slice(1).join("")}(A||this._cLoc()),r=lA(o,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&r===this._lastRouteResolved.url&&i===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(t=uA(r,this._routes))?(this._callLeave(),this._lastRouteResolved={url:r,query:i,hooks:t.route.hooks,params:t.params,name:t.route.name},e=t.route.handler,dA((function(){dA((function(){t.route.route instanceof RegExp?e.apply(void 0,t.match.slice(1,t.match.length)):e(t.params,i)}),t.route.hooks,t.params,n._genericHooks)}),this._genericHooks,t.params),t):this._defaultHandler&&(""===r||"/"===r||r===this._hash||function(A,e,t){if(nA()&&!e)return!1;if(!A.match(t))return!1;var n=A.split(t);return n.length<2||""===n[1]}(r,this._useHash,this._hash))?(dA((function(){dA((function(){n._callLeave(),n._lastRouteResolved={url:r,query:i,hooks:n._defaultHandler.hooks},n._defaultHandler.handler(i)}),n._defaultHandler.hooks)}),this._genericHooks),!0):(this._notFoundHandler&&dA((function(){dA((function(){n._callLeave(),n._lastRouteResolved={url:r,query:i,hooks:n._notFoundHandler.hooks},n._notFoundHandler.handler(i)}),n._notFoundHandler.hooks)}),this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var A=this;"undefined"!=typeof document&&this._findLinks().forEach((function(e){e.hasListenerAttached||(e.addEventListener("click",(function(t){if((t.ctrlKey||t.metaKey)&&"a"==t.target.tagName.toLowerCase())return!1;var n=A.getLinkPath(e);A._destroyed||(t.preventDefault(),A.navigate(n.replace(/\/+$/,"").replace(/^\/+/,"/")))})),e.hasListenerAttached=!0)}))},generate:function(A,e){void 0===e&&(e={});var t=this._routes.reduce((function(t,n){var o;if(n.name===A)for(o in t=n.route,e)t=t.toString().replace(":"+o,e[o]);return t}),"");return this._useHash?this._hash+t:t},link:function(A){return this._getRoot()+A},pause:function(A){void 0===A&&(A=!0),this._paused=A,this._historyAPIUpdateMethod=A?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(A){return void 0===A?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=A,A)},disableIfAPINotAvailable:function(){nA()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(A){return A.getAttribute("href")},hooks:function(A){this._genericHooks=A},_add:function(A,e,t){return void 0===e&&(e=null),void 0===t&&(t=null),"string"==typeof A&&(A=encodeURI(A)),this._routes.push("object"==typeof e?{route:A,handler:e.uses,name:e.as,hooks:t||e.hooks}:{route:A,handler:e,hooks:t}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=cA(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var A=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var e,t,n=this._cLoc();(t=function(){e=A._cLoc(),n!==e&&(n=e,A.resolve()),A._listeningInterval=setTimeout(t,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:iA(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var A=this._lastRouteResolved;A&&A.hooks&&A.hooks.leave&&A.hooks.leave(A.params)}},oA.PARAMETER_REGEXP=/([:*])(\w+)/g,oA.WILDCARD_REGEXP=/\*/g,oA.REPLACE_VARIABLE_REGEXP="([^/]+)",oA.REPLACE_WILDCARD="(?:.*)",oA.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",oA.MATCH_REGEXP_FLAGS="",function(A){A.ROUTE_LOADING="[APP] Route Loading",A.ROUTE_LOADED="[APP] Route Loaded"}(AA||(AA={}));var pA=N.document;function hA(A){var e,t,o,i,l,p,h,f=new F({props:{routeList:A[1]}}),g=A[0];if(g)var m=new g({});var w=new O({});return{c:function(){e=u("main"),t=u("div"),k(f.$$.fragment),o=c(),i=u("div"),m&&k(m.$$.fragment),l=c(),p=u("div"),k(w.$$.fragment),d(t,"id","header"),d(i,"id","view"),d(p,"id","footer")},m:function(A,n){a(A,e,n),r(e,t),x(f,t,null),r(e,o),r(e,i),m&&x(m,i,null),r(e,l),r(e,p),x(w,p,null),h=!0},p:function(A,e){e[0];if(g!==(g=A[0])){if(m){I={r:0,c:[],p:I};var t=m;H(t.$$.fragment,1,0,(function(){L(t,1)})),I.r||n(I.c),I=I.p}g?(k((m=new g({})).$$.fragment),G(m.$$.fragment,1),x(m,i,null)):m=null}},i:function(A){h||(G(f.$$.fragment,A),m&&G(m.$$.fragment,A),G(w.$$.fragment,A),h=!0)},o:function(A){H(f.$$.fragment,A),m&&H(m.$$.fragment,A),H(w.$$.fragment,A),h=!1},d:function(A){A&&s(e),L(f),m&&L(m),L(w)}}}function fA(A,e,t){var n,o={Header_component:F,Dashboard_page_component:X,About_page_component:U,Nested_page_component:eA};n=function(){window.feather.replace()},m().$$.after_update.push(n);var i,r=(new tA).getPageRoutes();var a,s=new oA(null,!0,"#");return s.resolve(),r.forEach((function(A){s.on(A.path,(function(e,n){var r={routeData:A,params:e,query:n},a=A.component;null==window[a]?function(A,e){t(2,i=o[A]),APPSTORE.AppRouterReducer.next({type:AA.ROUTE_LOADED,payload:e})}(a,r):(t(2,i=window[a]),APPSTORE.AppRouterReducer.next({type:AA.ROUTE_LOADED,payload:r}))})).resolve()})),s.on((function(){s.navigate("/home")})).resolve(),s.notFound((function(A){document.getElementById("view").innerHTML="<h3>Couldn't find the page you're looking for...</h3>"})),s.resolve(),A.$$.update=function(){4&A.$$.dirty&&t(0,a=i),A.$$.dirty},[a,r]}return new(function(A){function e(e){var t;A.call(this),pA.getElementById("svelte-o82qdp-style")||((t=u("style")).id="svelte-o82qdp-style",t.textContent='@import "../css/lib/cirrus.min.css";@import "../css/lib/pure-min.css";#view{background-color:#000000!important}',r(pA.head,t)),P(this,e,fA,hA,i,{})}return A&&(e.__proto__=A),e.prototype=Object.create(A&&A.prototype),e.prototype.constructor=e,e}($))({target:document.body})}();
//# sourceMappingURL=main.js.map
