System.register(["./p-b3f1150b.system.js"],(function(t){"use strict";var e,n,i,a;return{setters:[function(t){e=t.r;n=t.h;i=t.H;a=t.g}],execute:function(){function s(t){var e=window.getComputedStyle(t);if(e&&(e.position==="relative"||e.position==="absolute")){var n=document.createElement("div");n.setAttribute("class","nv-ripples");t.appendChild(n);r(t,true)}}function r(t,e){if(e){var n="ontouchstart"in document;if(n){t.addEventListener("touchstart",l,{passive:true})}else{t.addEventListener("mousedown",l)}}}function o(t){return t.constructor.name==="TouchEvent"}function l(t){var e=t.currentTarget;var n=window.getComputedStyle(e);var i=n.width.replace("px","");var a=n.height.replace("px","");var s=parseInt(i,10);var r=parseInt(a,10);var l=s>r?s:r;var v=l/2;var m=e.getBoundingClientRect(),p=m.left,d=m.top;var h=(new Date).toISOString();var f=o(t)?t.touches[t.touches.length-1]:t;var y=e.querySelector(e.tagName+" > .nv-ripples");var b=document.createElement("div");b.setAttribute("style","width : "+l+"px;\n    height: "+l+"px;\n    left  : "+(f.clientX-p-v)+"px;\n    top   : "+(f.clientY-d-v)+"px;");b.setAttribute("id",h);b.setAttribute("class","nv-ripple nv-ripple-enter");y.appendChild(b);var g=c();b.addEventListener(g,(function(t){return u(t,e)}))}function u(t,e){var n=t.currentTarget;if(t.type===c()){e.querySelector(".nv-ripples").removeChild(n)}}function c(){var t;var e=document.createElement("fakeelement");var n={animation:"animationend",OAnimation:"oAnimationEnd",MozOAnimation:"animationend",WebkitOAnimation:"webkitAnimationEnd"};for(t in n){if(e.style[t]!==undefined){return n[t]}}}var v=t("nv_list_item",function(){function t(t){e(this,t);this.unread=false}t.prototype.componentDidLoad=function(){s(this.nvList)};t.prototype.makeTitles=function(){if(this.textTitle||this.textSubtitle){return n("div",{class:"nv-list-title"},n("div",{class:"nv-list-title-area"},n("div",{class:"nv-list-title"},this.textTitle),n("div",{class:"nv-list-sub-title"},this.textSubtitle)))}if(this.firstName||this.lastName){return n("div",{class:"nv-list-title"},n("span",{class:"nv-list-first-name"},this.firstName),n("span",{class:"nv-list-last-name"}," ",this.lastName))}};t.prototype.makeCompany=function(){if(this.company){return n("span",{class:"nv-list-company"},this.company)}};t.prototype.makeSubject=function(){if(this.textSubject){return n("small",{class:"nv-list-subject"},this.textSubject)}};t.prototype.makeMessage=function(){if(this.textMessage){return n("small",{class:"nv-list-message"},this.textMessage)}};t.prototype.makeTime=function(){if(this.textStamp){return n("time",null,this.textStamp)}};t.prototype.makeAvatar=function(){return n("div",{class:"nv-avatar-slot"},n("slot",{name:"avatar"}))};t.prototype.makeUnread=function(){if(this.unread){return n("div",{class:"unread-email-badge"})}};t.prototype.makeSlot=function(){if(!this.firstName&&!this.lastName&&!this.textStamp&&!this.unread){return n("slot",null)}};t.prototype.render=function(){var t=this;var e=this.makeTitles();var a=this.makeCompany();var s=this.makeSubject();var r=this.makeMessage();var o=this.makeTime();var l=this.makeAvatar();var u=this.makeUnread();var c=this.makeSlot();return n(i,{class:{"nv-list-item":true,"nv-list-email-unread":this.unread},ref:function(e){return t.nvList=e}},u,n("div",{class:"nv-list-item-container"},n("div",{class:"nv-list-slot-start"},n("slot",{name:"start"})),n("header",{class:"nv-list-title-container"},e,a,s,r),c,o,l,n("div",{class:"nv-list-slot-end"},n("slot",{name:"end"}))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return t}())}}}));