/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
import { h, Host } from "@stencil/core";
export class NvSwitch {
    constructor() {
        /**
         * If `true`, the user cannot interact with the Swicth.
         */
        this.disabled = false;
        /**
         * The color of the Switch.
         */
        this.color = 'primary';
        /**
         * If `true`, the switch is checked.
         */
        this.checked = false;
    }
    render() {
        return (h(Host, { class: {
                'nv-switch': true,
                'nv-switch-primary': this.color === 'primary' ? true : false,
                'nv-switch-secondary': this.color === 'secondary' ? true : false,
                'nv-switch-warning': this.color === 'warning' ? true : false,
                'nv-switch-danger': this.color === 'danger' ? true : false,
                'nv-switch-success': this.color === 'success' ? true : false,
                'nv-switch-disabled': this.disabled,
            } },
            h("label", null,
                h("input", { type: 'checkbox', checked: this.checked, disabled: this.disabled }),
                h("span", { class: 'nv-slider round' }))));
    }
    static get is() { return "nv-switch"; }
    static get properties() { return {
        "disabled": {
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
                "text": "If `true`, the user cannot interact with the Swicth."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The color of the Switch."
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "checked": {
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
                "text": "If `true`, the switch is checked."
            },
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
