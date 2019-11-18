/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/

import { Component, h, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'nv-list',
  shadow: false,
})
export class NvList {
  container!: HTMLDivElement;
  nvList!: HTMLNvListElement;

  //
  // Events
  //

  /**
   * Emitted when the component is updated.
   */
  @Event() nvDidUpdate: EventEmitter<any>;

  componentDidUpdate() {
    this.nvDidUpdate.emit();
  }

  render() {
    return (
      <Host ref={ (el: HTMLNvListElement) => this.nvList = el } class={{
        'nv-list': true,
        'nv-d-grid': true,
      }}>
        <div class='nv-list-container' ref={ el => this.container = el }>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
