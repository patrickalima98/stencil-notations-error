'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9ef3aa8a.js');

const NvSwitch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h(core.Host, { class: {
                'nv-switch': true,
                'nv-switch-primary': this.color === 'primary' ? true : false,
                'nv-switch-secondary': this.color === 'secondary' ? true : false,
                'nv-switch-warning': this.color === 'warning' ? true : false,
                'nv-switch-danger': this.color === 'danger' ? true : false,
                'nv-switch-success': this.color === 'success' ? true : false,
                'nv-switch-disabled': this.disabled,
            } }, core.h("label", null, core.h("input", { type: 'checkbox', checked: this.checked, disabled: this.disabled }), core.h("span", { class: 'nv-slider round' }))));
    }
};

exports.nv_switch = NvSwitch;
