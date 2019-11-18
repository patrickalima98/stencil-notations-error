import { r as registerInstance, c as createEvent, h, H as Host } from './core-00b8a7c9.js';

const NvList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.nvDidUpdate = createEvent(this, "nvDidUpdate", 7);
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
            } }, h("div", { class: 'nv-list-container', ref: el => this.container = el }, h("slot", null))));
    }
};

export { NvList as nv_list };
