import { r as registerInstance, c as createEvent, h, H as Host } from './core-00b8a7c9.js';
var NvList = /** @class */ (function () {
    function NvList(hostRef) {
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
    NvList.prototype.componentDidLoad = function () {
        if (this.stickyHeader) {
            var headers = this.container.querySelectorAll('.nv-list-header');
            this.headerList = headers;
        }
    };
    NvList.prototype.componentDidUpdate = function () {
        this.nvDidUpdate.emit();
    };
    NvList.prototype.render = function () {
        var _this = this;
        return (h(Host, { ref: function (el) { return _this.nvList = el; }, class: {
                'nv-list': true,
                'nv-list-users-type': this.users,
                'nv-list-email-type': this.email,
                'nv-list-sticky-header': this.stickyHeader,
                'nv-d-grid': true,
            } }, h("div", { class: 'nv-list-container', ref: function (el) { return _this.container = el; } }, h("slot", null))));
    };
    return NvList;
}());
export { NvList as nv_list };
