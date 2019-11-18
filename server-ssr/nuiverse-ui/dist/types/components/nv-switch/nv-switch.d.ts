/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
import { Color } from '../../interface';
export declare class NvSwitch {
    /**
     * If `true`, the user cannot interact with the Swicth.
     */
    disabled: boolean;
    /**
     * The color of the Switch.
     */
    color?: Color;
    /**
     * If `true`, the switch is checked.
     */
    checked: boolean;
    render(): any;
}
