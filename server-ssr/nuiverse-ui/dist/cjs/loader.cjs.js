'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9ef3aa8a.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["nv-list.cjs",[[4,"nv-list",{"users":[4],"email":[4],"stickyHeader":[4,"sticky-header"]}]]],["nv-list-item.cjs",[[4,"nv-list-item",{"textTitle":[1,"text-title"],"textSubtitle":[1,"text-subtitle"],"firstName":[1,"first-name"],"lastName":[1,"last-name"],"company":[1],"textSubject":[1,"text-subject"],"textMessage":[1,"text-message"],"textStamp":[1,"text-stamp"],"unread":[4]}]]],["nv-switch.cjs",[[0,"nv-switch",{"disabled":[4],"color":[1],"checked":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
