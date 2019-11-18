'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9ef3aa8a.js');

/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
function inserted(el) {
    const computed = window.getComputedStyle(el);
    if (computed && (computed.position === 'relative' || computed.position === 'absolute')) {
        const ripples = document.createElement('div');
        ripples.setAttribute('class', 'nv-ripples');
        el.appendChild(ripples);
        addRipple(el, true);
    }
}
function addRipple(el, rippleOk) {
    if (rippleOk) {
        const isTouchSupported = 'ontouchstart' in document;
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
    const el = e.currentTarget;
    const computed = window.getComputedStyle(el);
    const computedWidth = computed.width.replace('px', '');
    const computedHeight = computed.height.replace('px', '');
    const width = parseInt(computedWidth, 10);
    const height = parseInt(computedHeight, 10);
    const rippleWidth = width > height ? width : height;
    const halfRippleWidth = rippleWidth / 2;
    const { left, top } = el.getBoundingClientRect();
    const rippleId = new Date().toISOString();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    const containerRipples = el.querySelector(`${el.tagName} > .nv-ripples`);
    const ripple = document.createElement('div');
    ripple.setAttribute('style', `width : ${rippleWidth}px;
    height: ${rippleWidth}px;
    left  : ${(target.clientX) - left - halfRippleWidth}px;
    top   : ${target.clientY - top - halfRippleWidth}px;`);
    ripple.setAttribute('id', rippleId);
    ripple.setAttribute('class', 'nv-ripple nv-ripple-enter');
    containerRipples.appendChild(ripple);
    const typeAnim = checkAnimation();
    ripple.addEventListener(typeAnim, (e) => watchEvents(e, el));
}
function watchEvents(evt, btn) {
    const element = evt.currentTarget;
    if (evt.type === checkAnimation()) {
        btn.querySelector('.nv-ripples').removeChild(element);
    }
}
// Check animation support for transtions and animations
function checkAnimation() {
    let t;
    const el = document.createElement('fakeelement');
    const transitions = {
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

const NvListItem = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, a small rounded element, will be displayed on the left of the list
         * Used by **email** list.
         */
        this.unread = false;
    }
    componentDidLoad() {
        inserted(this.nvList);
    }
    makeTitles() {
        if (this.textTitle || this.textSubtitle) {
            return (core.h("div", { class: 'nv-list-title' }, core.h("div", { class: 'nv-list-title-area' }, core.h("div", { class: 'nv-list-title' }, this.textTitle), core.h("div", { class: 'nv-list-sub-title' }, this.textSubtitle))));
        }
        if (this.firstName || this.lastName) {
            return (core.h("div", { class: 'nv-list-title' }, core.h("span", { class: 'nv-list-first-name' }, this.firstName), core.h("span", { class: 'nv-list-last-name' }, " ", this.lastName)));
        }
    }
    makeCompany() {
        if (this.company) {
            return core.h("span", { class: 'nv-list-company' }, this.company);
        }
    }
    makeSubject() {
        if (this.textSubject) {
            return core.h("small", { class: 'nv-list-subject' }, this.textSubject);
        }
    }
    makeMessage() {
        if (this.textMessage) {
            return core.h("small", { class: 'nv-list-message' }, this.textMessage);
        }
    }
    makeTime() {
        if (this.textStamp) {
            return core.h("time", null, this.textStamp);
        }
    }
    makeAvatar() {
        return core.h("div", { class: 'nv-avatar-slot' }, core.h("slot", { name: 'avatar' }));
    }
    makeUnread() {
        if (this.unread) {
            return core.h("div", { class: 'unread-email-badge' });
        }
    }
    makeSlot() {
        if (!this.firstName && !this.lastName && !this.textStamp && !this.unread) {
            return core.h("slot", null);
        }
    }
    render() {
        const title = this.makeTitles();
        const company = this.makeCompany();
        const subject = this.makeSubject();
        const textMessage = this.makeMessage();
        const time = this.makeTime();
        const avatar = this.makeAvatar();
        const unread = this.makeUnread();
        const slot = this.makeSlot();
        return (core.h(core.Host, { class: {
                'nv-list-item': true,
                'nv-list-email-unread': this.unread,
            }, ref: (el) => this.nvList = el }, unread, core.h("div", { class: 'nv-list-item-container' }, core.h("div", { class: 'nv-list-slot-start' }, core.h("slot", { name: 'start' })), core.h("header", { class: 'nv-list-title-container' }, title, company, subject, textMessage), slot, time, avatar, core.h("div", { class: 'nv-list-slot-end' }, core.h("slot", { name: 'end' })))));
    }
    get el() { return core.getElement(this); }
};

exports.nv_list_item = NvListItem;
