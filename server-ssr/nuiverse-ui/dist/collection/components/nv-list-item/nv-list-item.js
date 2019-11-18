/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
import { h, Host } from "@stencil/core";
import { ripple } from '../../utils/';
export class NvListItem {
    constructor() {
        /**
         * If `true`, a small rounded element, will be displayed on the left of the list
         * Used by **email** list.
         */
        this.unread = false;
    }
    componentDidLoad() {
        ripple(this.nvList);
    }
    makeTitles() {
        if (this.textTitle || this.textSubtitle) {
            return (h("div", { class: 'nv-list-title' },
                h("div", { class: 'nv-list-title-area' },
                    h("div", { class: 'nv-list-title' }, this.textTitle),
                    h("div", { class: 'nv-list-sub-title' }, this.textSubtitle))));
        }
        if (this.firstName || this.lastName) {
            return (h("div", { class: 'nv-list-title' },
                h("span", { class: 'nv-list-first-name' }, this.firstName),
                h("span", { class: 'nv-list-last-name' },
                    " ",
                    this.lastName)));
        }
    }
    makeCompany() {
        if (this.company) {
            return h("span", { class: 'nv-list-company' }, this.company);
        }
    }
    makeSubject() {
        if (this.textSubject) {
            return h("small", { class: 'nv-list-subject' }, this.textSubject);
        }
    }
    makeMessage() {
        if (this.textMessage) {
            return h("small", { class: 'nv-list-message' }, this.textMessage);
        }
    }
    makeTime() {
        if (this.textStamp) {
            return h("time", null, this.textStamp);
        }
    }
    makeAvatar() {
        return h("div", { class: 'nv-avatar-slot' },
            h("slot", { name: 'avatar' }));
    }
    makeUnread() {
        if (this.unread) {
            return h("div", { class: 'unread-email-badge' });
        }
    }
    makeSlot() {
        if (!this.firstName && !this.lastName && !this.textStamp && !this.unread) {
            return h("slot", null);
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
        return (h(Host, { class: {
                'nv-list-item': true,
                'nv-list-email-unread': this.unread,
            }, ref: (el) => this.nvList = el },
            unread,
            h("div", { class: 'nv-list-item-container' },
                h("div", { class: 'nv-list-slot-start' },
                    h("slot", { name: 'start' })),
                h("header", { class: 'nv-list-title-container' },
                    title,
                    company,
                    subject,
                    textMessage),
                slot,
                time,
                avatar,
                h("div", { class: 'nv-list-slot-end' },
                    h("slot", { name: 'end' })))));
    }
    static get is() { return "nv-list-item"; }
    static get properties() { return {
        "textTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The text title for the list item."
            },
            "attribute": "text-title",
            "reflect": false
        },
        "textSubtitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The subtitle text's text for the list item."
            },
            "attribute": "text-subtitle",
            "reflect": false
        },
        "firstName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The first name used by **user** list."
            },
            "attribute": "first-name",
            "reflect": false
        },
        "lastName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The last name used by **user** list."
            },
            "attribute": "last-name",
            "reflect": false
        },
        "company": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The company name used by **user** list."
            },
            "attribute": "company",
            "reflect": false
        },
        "textSubject": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The subject text used by **email** list."
            },
            "attribute": "text-subject",
            "reflect": false
        },
        "textMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The message text used by **email** list"
            },
            "attribute": "text-message",
            "reflect": false
        },
        "textStamp": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "A stamp text for the message, used by **email** list."
            },
            "attribute": "text-stamp",
            "reflect": false
        },
        "unread": {
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
                "text": "If `true`, a small rounded element, will be displayed on the left of the list\nUsed by **email** list."
            },
            "attribute": "unread",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
}
