/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/

import { Component, Prop, h, Host } from '@stencil/core';
import { Color } from '../../interface';
@Component({
  tag: 'nv-switch',
  shadow: false,
})
export class NvSwitch {

  /**
   * If `true`, the user cannot interact with the Swicth.
   */
  @Prop() disabled: boolean = false;

  /**
   * The color of the Switch.
   */
  @Prop() color?: Color = 'primary';

  /**
   * If `true`, the switch is checked.
   */
  @Prop() checked: boolean = false;

  render() {
    return (
      <Host class={{
        'nv-switch': true,
        'nv-switch-primary': this.color === 'primary' ? true : false,
        'nv-switch-secondary': this.color === 'secondary' ? true : false,
        'nv-switch-warning': this.color === 'warning' ? true : false,
        'nv-switch-danger': this.color === 'danger' ? true : false,
        'nv-switch-success': this.color === 'success' ? true : false,
        'nv-switch-disabled': this.disabled,
      }}>
        <label>
          <input type='checkbox' checked={ this.checked } disabled={ this.disabled }/>
          <span class='nv-slider round'></span>
        </label>
      </Host>
    );
  }
}
