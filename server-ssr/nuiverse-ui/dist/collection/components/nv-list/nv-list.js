/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
import { h, Host } from "@stencil/core";
export class NvList {
    constructor() {
        /**
         * If `true`, the list will have a **user** style.
         */
        this.users = false;
        /**
         * If `true`, the list will have a **email** style.
         */
        this.email = false;
        /**
         * If `true`, the header will have a sticky effect.
         */
        this.stickyHeader = false;
    }
    componentDidLoad() {
        if (this.stickyHeader) {
            const headers = this.container.querySelectorAll('.nv-list-header');
            this.headerList = headers;
        }
    }
    componentDidUpdate() {
        this.nvDidUpdate.emit();
    }
    render() {
        return (h(Host, { ref: (el) => this.nvList = el, class: {
                'nv-list': true,
                'nv-list-users-type': this.users,
                'nv-list-email-type': this.email,
                'nv-list-sticky-header': this.stickyHeader,
                'nv-d-grid': true,
            } },
            h("div", { class: 'nv-list-container', ref: el => this.container = el },
                h("slot", null))));
    }
    static get is() { return "nv-list"; }
    static get properties() { return {
        "users": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "If `true`, the list will have a **user** style."
            },
            "attribute": "users",
            "reflect": false,
            "defaultValue": "false"
        },
        "email": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the list will have a **email** style."
            },
            "attribute": "email",
            "reflect": false,
            "defaultValue": "false"
        },
        "stickyHeader": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the header will have a sticky effect."
            },
            "attribute": "sticky-header",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "nvDidUpdate",
            "name": "nvDidUpdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the component is updated."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
