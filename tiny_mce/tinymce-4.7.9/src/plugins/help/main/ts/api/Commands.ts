/**
 * Commands.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Dialog from '../ui/Dialog';

const register = function (editor, pluginUrl) {
  editor.addCommand('mceHelp', Dialog.open(editor, pluginUrl));
};

export default {
  register
};