/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/

interface IAnimation {
  animation: string;
  OAnimation: string;
  MozOAnimation: string;
  WebkitOAnimation: string;
}

function inserted(el: HTMLElement) {
  const computed: CSSStyleDeclaration = window.getComputedStyle(el);

  if (computed && (computed.position === 'relative' || computed.position === 'absolute')) {
    const ripples: HTMLElement = document.createElement('div');
    ripples.setAttribute('class', 'nv-ripples');
    el.appendChild(ripples);

    addRipple(el, true);
  }
}

function addRipple(el: HTMLElement, rippleOk: boolean): void {
  if (rippleOk) {
    const isTouchSupported: boolean = 'ontouchstart' in document;
    if (isTouchSupported) {
      el.addEventListener('touchstart', rippleShow, { passive: true });
    } else {
      el.addEventListener('mousedown', rippleShow);
    }
  }
}

function isTouchEvent(e: MouseEvent | TouchEvent): e is TouchEvent {
  return e.constructor.name === 'TouchEvent';
}

function rippleShow(e: MouseEvent | TouchEvent) {
  const el = e.currentTarget as HTMLElement;
  const computed: CSSStyleDeclaration = window.getComputedStyle(el);
  const computedWidth: string = computed.width.replace('px', '');
  const computedHeight: string = computed.height.replace('px', '');

  const width: number = parseInt(computedWidth, 10);
  const height: number = parseInt(computedHeight, 10);

  const rippleWidth = width > height ? width : height;
  const halfRippleWidth = rippleWidth / 2;

  const { left, top } = el.getBoundingClientRect();
  const rippleId: string = new Date().toISOString();

  const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
  const containerRipples: HTMLElement = el.querySelector(`${el.tagName} > .nv-ripples`);
  const ripple: HTMLElement = document.createElement('div');

  ripple.setAttribute(
    'style',
    `width : ${rippleWidth}px;
    height: ${rippleWidth}px;
    left  : ${(target.clientX) - left - halfRippleWidth}px;
    top   : ${target.clientY - top - halfRippleWidth}px;`);

  ripple.setAttribute('id', rippleId);
  ripple.setAttribute('class', 'nv-ripple nv-ripple-enter');

  containerRipples.appendChild(ripple);

  const typeAnim = (checkAnimation() as any);
  ripple.addEventListener(typeAnim, (e: MouseEvent | TouchEvent) => watchEvents(e, el));
}

function watchEvents(evt: MouseEvent | TouchEvent, btn: HTMLElement) {
  const element = evt.currentTarget as HTMLElement;
  if (evt.type === checkAnimation()) {
    (btn.querySelector('.nv-ripples') as HTMLElement).removeChild(element);
  }
}

// Check animation support for transtions and animations
function checkAnimation(): string {
  let t: any;
  const el: HTMLElement = document.createElement('fakeelement');
  const transitions: IAnimation = {
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
