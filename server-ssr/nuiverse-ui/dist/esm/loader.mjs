import { a as patchEsm, b as bootstrapLazy } from './core-00b8a7c9.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["nv-list",[[4,"nv-list",{"users":[4],"email":[4],"stickyHeader":[4,"sticky-header"]}]]],["nv-list-item",[[4,"nv-list-item",{"textTitle":[1,"text-title"],"textSubtitle":[1,"text-subtitle"],"firstName":[1,"first-name"],"lastName":[1,"last-name"],"company":[1],"textSubject":[1,"text-subject"],"textMessage":[1,"text-message"],"textStamp":[1,"text-stamp"],"unread":[4]}]]],["nv-switch",[[0,"nv-switch",{"disabled":[4],"color":[1],"checked":[4]}]]]], options);
  });
};

export { defineCustomElements };
