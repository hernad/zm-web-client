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
import Commands from './api/Commands';
import Buttons from './ui/Buttons';

PluginManager.add('preview', function (editor) {
  Commands.register(editor);
  Buttons.register(editor);
});

export default function () { }