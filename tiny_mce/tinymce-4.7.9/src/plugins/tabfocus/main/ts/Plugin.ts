/**
 * Plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import PluginManager from 'tinymce/core/api/PluginManager';
import Keyboard from './core/Keyboard';

PluginManager.add('tabfocus', function (editor) {
  Keyboard.setup(editor);
});

export default function () { }