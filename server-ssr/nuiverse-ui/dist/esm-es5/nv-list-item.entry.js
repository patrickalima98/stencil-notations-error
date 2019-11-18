import { r as registerInstance, h, H as Host, g as getElement } from './core-00b8a7c9.js';
/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
function inserted(el) {
    var computed = window.getComputedStyle(el);
    if (computed && (computed.position === 'relative' || computed.position === 'absolute')) {
        var ripples = document.createElement('div');
        ripples.setAttribute('class', 'nv-ripples');
        el.appendChild(ripples);
        addRipple(el, true);
    }
}
function addRipple(el, rippleOk) {
    if (rippleOk) {
        var isTouchSupported = 'ontouchstart' in document;
        if (isTouchSupported) {
            el.addEventListener('touchstart', rippleShow, { passive: true });
        }
        else {
            el.addEventListener('mousedown', rippleShow);
        }
    }
}
function isTouchEvent(e) {
    return e.constructor.name === 'TouchEvent';
}
function rippleShow(e) {
    var el = e.currentTarget;
    var computed = window.getComputedStyle(el);
    var computedWidth = computed.width.replace('px', '');
    var computedHeight = computed.height.replace('px', '');
    var width = parseInt(computedWidth, 10);
    var height = parseInt(computedHeight, 10);
    var rippleWidth = width > height ? width : height;
    var halfRippleWidth = rippleWidth / 2;
    var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
    var rippleId = new Date().toISOString();
    var target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    var containerRipples = el.querySelector(el.tagName + " > .nv-ripples");
    var ripple = document.createElement('div');
    ripple.setAttribute('style', "width : " + rippleWidth + "px;\n    height: " + rippleWidth + "px;\n    left  : " + ((target.clientX) - left - halfRippleWidth) + "px;\n    top   : " + (target.clientY - top - halfRippleWidth) + "px;");
    ripple.setAttribute('id', rippleId);
    ripple.setAttribute('class', 'nv-ripple nv-ripple-enter');
    containerRipples.appendChild(ripple);
    var typeAnim = checkAnimation();
    ripple.addEventListener(typeAnim, function (e) { return watchEvents(e, el); });
}
function watchEvents(evt, btn) {
    var element = evt.currentTarget;
    if (evt.type === checkAnimation()) {
        btn.querySelector('.nv-ripples').removeChild(element);
    }
}
// Check animation support for transtions and animations
function checkAnimation() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozOAnimation: 'animationend',
        WebkitOAnimation: 'webkitAnimationEnd',
    };
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}
var NvListItem = /** @class */ (function () {
    function NvListItem(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, a small rounded element, will be displayed on the left of the list
         * Used by **email** list.
         */
        this.unread = false;
    }
    NvListItem.prototype.componentDidLoad = function () {
        inserted(this.nvList);
    };
    NvListItem.prototype.makeTitles = function () {
        if (this.textTitle || this.textSubtitle) {
            return (h("div", { class: 'nv-list-title' }, h("div", { class: 'nv-list-title-area' }, h("div", { class: 'nv-list-title' }, this.textTitle), h("div", { class: 'nv-list-sub-title' }, this.textSubtitle))));
        }
        if (this.firstName || this.lastName) {
            return (h("div", { class: 'nv-list-title' }, h("span", { class: 'nv-list-first-name' }, this.firstName), h("span", { class: 'nv-list-last-name' }, " ", this.lastName)));
        }
    };
    NvListItem.prototype.makeCompany = function () {
        if (this.company) {
            return h("span", { class: 'nv-list-company' }, this.company);
        }
    };
    NvListItem.prototype.makeSubject = function () {
        if (this.textSubject) {
            return h("small", { class: 'nv-list-subject' }, this.textSubject);
        }
    };
    NvListItem.prototype.makeMessage = function () {
        if (this.textMessage) {
            return h("small", { class: 'nv-list-message' }, this.textMessage);
        }
    };
    NvListItem.prototype.makeTime = function () {
        if (this.textStamp) {
            return h("time", null, this.textStamp);
        }
    };
    NvListItem.prototype.makeAvatar = function () {
        return h("div", { class: 'nv-avatar-slot' }, h("slot", { name: 'avatar' }));
    };
    NvListItem.prototype.makeUnread = function () {
        if (this.unread) {
            return h("div", { class: 'unread-email-badge' });
        }
    };
    NvListItem.prototype.makeSlot = function () {
        if (!this.firstName && !this.lastName && !this.textStamp && !this.unread) {
            return h("slot", null);
        }
    };
    NvListItem.prototype.render = function () {
        var _this = this;
        var title = this.makeTitles();
        var company = this.makeCompany();
        var subject = this.makeSubject();
        var textMessage = this.makeMessage();
        var time = this.makeTime();
        var avatar = this.makeAvatar();
        var unread = this.makeUnread();
        var slot = this.makeSlot();
        return (h(Host, { class: {
                'nv-list-item': true,
                'nv-list-email-unread': this.unread,
            }, ref: function (el) { return _this.nvList = el; } }, unread, h("div", { class: 'nv-list-item-container' }, h("div", { class: 'nv-list-slot-start' }, h("slot", { name: 'start' })), h("header", { class: 'nv-list-title-container' }, title, company, subject, textMessage), slot, time, avatar, h("div", { class: 'nv-list-slot-end' }, h("slot", { name: 'end' })))));
    };
    Object.defineProperty(NvListItem.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return NvListItem;
}());
export { NvListItem as nv_list_item };
