/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Events from '../api/Events';

const insertChar = function (editor, chr) {
  const evtChr = Events.fireInsertCustomChar(editor, chr).chr;
  editor.execCommand('mceInsertContent', false, evtChr);
};

export default {
  insertChar
};