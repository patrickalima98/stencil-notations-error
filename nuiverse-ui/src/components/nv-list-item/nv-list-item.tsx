/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/

import { Component, h, Prop, Element, Host } from '@stencil/core';
import { ripple } from '../../utils/';

@Component({
  tag: 'nv-list-item',
  shadow: false,
})
export class NvListItem {
  nvList!: HTMLNvListItemElement;
  /**
   * Reference to the host element
   */
  @Element() el: HTMLNvListItemElement;

  /**
   * The text title for the list item.
   */
  @Prop() textTitle?: string;

  /**
   * The subtitle text's text for the list item.
   */
  @Prop() textSubtitle?: string;

  /**
   * The first name used by **user** list.
   */
  @Prop() firstName?: string;

  /**
   * The last name used by **user** list.
   */
  @Prop() lastName?: string;

  /**
   * The company name used by **user** list.
   */
  @Prop() company?: string;

  /**
   * The subject text used by **email** list.
   */
  @Prop() textSubject?: string;

  /**
   * The message text used by **email** list
   */
  @Prop() textMessage?: string;

  /**
   * A stamp text for the message, used by **email** list.
   */
  @Prop() textStamp?: string;

  /**
   * If `true`, a small rounded element, will be displayed on the left of the list
   * Used by **email** list.
   */
  @Prop() unread?: boolean = false;

  componentDidLoad() {
    ripple(this.nvList);
  }

  private makeTitles(): HTMLElement | null {
    if (this.textTitle || this.textSubtitle) {
      return (
        <div class='nv-list-title'>
          <div class='nv-list-title-area'>
            <div class='nv-list-title'>{ this.textTitle }</div>
            <div class='nv-list-sub-title'>{ this.textSubtitle }</div>
          </div>
        </div>
      );
    }

    if (this.firstName || this.lastName) {
      return (
        <div class='nv-list-title'>
          <span class='nv-list-first-name'>{ this.firstName }</span>
          <span class='nv-list-last-name'> { this.lastName }</span>
        </div>
      );
    }
  }

  private makeCompany(): HTMLElement | null {
    if (this.company) {
      return <span class='nv-list-company'>{ this.company }</span>;
    }
  }

  private makeSubject(): HTMLElement | null {
    if (this.textSubject) {
      return <small class='nv-list-subject'>{ this.textSubject }</small>;
    }
  }

  private makeMessage(): HTMLElement | null {
    if (this.textMessage) {
      return <small class='nv-list-message'>{ this.textMessage }</small>;
    }
  }

  private makeTime(): HTMLElement | null {
    if (this.textStamp) {
      return <time>{ this.textStamp }</time>;
    }
  }

  private makeAvatar(): HTMLElement | null {
    return <div class='nv-avatar-slot'><slot name='avatar'/></div>;
  }

  private makeUnread(): HTMLElement | null {
    if (this.unread) {
      return <div class='unread-email-badge'></div>;
    }
  }

  private makeSlot () {
    if (!this.firstName && !this.lastName && !this.textStamp && !this.unread) {
      return <slot />;
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
    return (
      <Host
        class={{
          'nv-list-item': true,
          'nv-list-email-unread': this.unread,
        }}
        ref={ (el: HTMLNvListElement) => this.nvList = el }
      >
        { unread }
        <div class='nv-list-item-container'>
          <div class='nv-list-slot-start'>
            <slot name='start'></slot>
          </div>
          <header class='nv-list-title-container'>
            { title }
            { company }
            { subject }
            { textMessage }
          </header>
          { slot }
          { time }
          { avatar }
          <div class='nv-list-slot-end'>
            <slot name='end'></slot>
          </div>
        </div>
      </Host>
    );
  }
}
