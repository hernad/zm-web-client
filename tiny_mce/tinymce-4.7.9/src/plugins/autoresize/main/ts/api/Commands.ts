/**
 * Commands.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Resize from '../core/Resize';

const register = function (editor, oldSize) {
  editor.addCommand('mceAutoResize', function () {
    Resize.resize(editor, oldSize);
  });
};

export default {
  register
};