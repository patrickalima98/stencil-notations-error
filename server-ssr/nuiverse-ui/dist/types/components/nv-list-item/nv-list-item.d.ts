/**
* Copyright (c) 2019 The Nuinalp Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/
export declare class NvListItem {
    nvList: HTMLNvListItemElement;
    /**
     * Reference to the host element
     */
    el: HTMLNvListItemElement;
    /**
     * The text title for the list item.
     */
    textTitle?: string;
    /**
     * The subtitle text's text for the list item.
     */
    textSubtitle?: string;
    /**
     * The first name used by **user** list.
     */
    firstName?: string;
    /**
     * The last name used by **user** list.
     */
    lastName?: string;
    /**
     * The company name used by **user** list.
     */
    company?: string;
    /**
     * The subject text used by **email** list.
     */
    textSubject?: string;
    /**
     * The message text used by **email** list
     */
    textMessage?: string;
    /**
     * A stamp text for the message, used by **email** list.
     */
    textStamp?: string;
    /**
     * If `true`, a small rounded element, will be displayed on the left of the list
     * Used by **email** list.
     */
    unread?: boolean;
    componentDidLoad(): void;
    private makeTitles;
    private makeCompany;
    private makeSubject;
    private makeMessage;
    private makeTime;
    private makeAvatar;
    private makeUnread;
    private makeSlot;
    render(): any;
}
