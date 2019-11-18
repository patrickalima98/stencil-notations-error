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
export default inserted;
