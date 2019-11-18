'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9ef3aa8a.js');

const NvList = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.nvDidUpdate = core.createEvent(this, "nvDidUpdate", 7);
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
        return (core.h(core.Host, { ref: (el) => this.nvList = el, class: {
                'nv-list': true,
                'nv-list-users-type': this.users,
                'nv-list-email-type': this.email,
                'nv-list-sticky-header': this.stickyHeader,
                'nv-d-grid': true,
            } }, core.h("div", { class: 'nv-list-container', ref: el => this.container = el }, core.h("slot", null))));
    }
};

exports.nv_list = NvList;
