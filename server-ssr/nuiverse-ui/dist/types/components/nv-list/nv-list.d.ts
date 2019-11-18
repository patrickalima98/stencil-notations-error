/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
import { EventEmitter } from '../../stencil.core';
export declare class NvList {
    container: HTMLDivElement;
    nvList: HTMLNvListElement;
    headerList: NodeListOf<Element>;
    /**
     * If `true`, the list will have a **user** style.
     */
    users?: boolean;
    /**
     * If `true`, the list will have a **email** style.
     */
    email: boolean;
    /**
     * If `true`, the header will have a sticky effect.
     */
    stickyHeader: boolean;
    /**
     * Emitted when the component is updated.
     */
    nvDidUpdate: EventEmitter<any>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
}
