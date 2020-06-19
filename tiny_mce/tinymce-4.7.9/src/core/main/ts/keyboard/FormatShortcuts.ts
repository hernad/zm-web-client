/**
 * FormatShortcuts.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

const setup = function (editor) {
  // Add some inline shortcuts
  editor.addShortcut('meta+b', '', 'Bold');
  editor.addShortcut('meta+i', '', 'Italic');
  editor.addShortcut('meta+u', '', 'Underline');

  // BlockFormat shortcuts keys
  for (let i = 1; i <= 6; i++) {
    editor.addShortcut('access+' + i, '', ['FormatBlock', false, 'h' + i]);
  }

  editor.addShortcut('access+7', '', ['FormatBlock', false, 'p']);
  editor.addShortcut('access+8', '', ['FormatBlock', false, 'div']);
  editor.addShortcut('access+9', '', ['FormatBlock', false, 'address']);
};

export default {
  setup
};