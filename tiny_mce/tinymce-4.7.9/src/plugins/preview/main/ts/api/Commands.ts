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

const register = function (editor) {
  editor.addCommand('mcePreview', function () {
    Dialog.open(editor);
  });
};

export default {
  register
};