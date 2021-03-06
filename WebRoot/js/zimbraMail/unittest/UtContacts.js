/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2011, 2013, 2014, 2016 Synacor, Inc.
 *
 * The contents of this file are subject to the Common Public Attribution License Version 1.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at: https://www.zimbra.com/license
 * The License is based on the Mozilla Public License Version 1.1 but Sections 14 and 15
 * have been added to cover use of software over a computer network and provide for limited attribution
 * for the Original Developer. In addition, Exhibit A has been modified to be consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * See the License for the specific language governing rights and limitations under the License.
 * The Original Code is Zimbra Open Source Web Client.
 * The Initial Developer of the Original Code is Zimbra, Inc.  All rights to the Original Code were
 * transferred by Zimbra, Inc. to Synacor, Inc. on September 14, 2015.
 *
 * All portions of the code are Copyright (C) 2011, 2013, 2014, 2016 Synacor, Inc. is Copyright holder.
 * ***** END LICENSE BLOCK *****
 */

UT.module("Contacts");

UT.test("Show Contacts view",
    function() {
        ZmUnitTestUtil.log("starting contacts test");

        ZmUnitTestUtil.chooseApp(ZmApp.CONTACTS);
        UT.stop(UtZWCUtils.MAX_STOP);

        UT.expect(1);
        setTimeout(
            function() {
                ZmUnitTestUtil.log("continuing contacts test");
                var isRightView = UtZWCUtils.isAddressBookViewCurrent();
                UT.ok(isRightView, "Contacts view loaded");
                UT.start();
            },
            UtZWCUtils.LOAD_VIEW_SETTIMEOUT
        );
    }
);

UT.test("Add new contact",
    function() {
        var zmContactsApp = appCtxt.getApp(ZmApp.CONTACTS)
        zmContactsApp._handleLoadNewItem();
    }
);

UT.test("Wrap Inline Contact",
  	function() {
		UT.expect(3);
		var inline1 = "jwagner@vmware.com";
		var obj = ZmContactsHelper._wrapInlineContact(inline1);
		UT.equal(obj.address, inline1);
		  
		var inline2 = "Jeff Wagner <jwagner@vmware.com>";
		var obj2 = ZmContactsHelper._wrapInlineContact(inline2);
		UT.equal(obj2.address, "jwagner@vmware.com");
		  
		var inline3 = "\"John Doe\" <x@x.com>";
		var obj3 = ZmContactsHelper._wrapInlineContact(inline3);
		UT.equal(obj3.address, "x@x.com");
	  }
);