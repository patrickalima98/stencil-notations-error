import { r as registerInstance, h, H as Host } from './core-00b8a7c9.js';
var NvSwitch = /** @class */ (function () {
    function NvSwitch(hostRef) {
        registerInstance(this, hostRef);
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
    NvSwitch.prototype.render = function () {
        return (h(Host, { class: {
                'nv-switch': true,
                'nv-switch-primary': this.color === 'primary' ? true : false,
                'nv-switch-secondary': this.color === 'secondary' ? true : false,
                'nv-switch-warning': this.color === 'warning' ? true : false,
                'nv-switch-danger': this.color === 'danger' ? true : false,
                'nv-switch-success': this.color === 'success' ? true : false,
                'nv-switch-disabled': this.disabled,
            } }, h("label", null, h("input", { type: 'checkbox', checked: this.checked, disabled: this.disabled }), h("span", { class: 'nv-slider round' }))));
    };
    return NvSwitch;
}());
export { NvSwitch as nv_switch };
