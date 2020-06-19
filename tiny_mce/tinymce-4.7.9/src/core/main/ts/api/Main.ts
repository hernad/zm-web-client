/**
 * Main.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Tinymce from './Tinymce';

declare const window: any;

const exportToModuleLoaders = (tinymce) => {
  if (typeof module === 'object') {
    try {
      module.exports = tinymce;
    } catch (_) {
      // It will thrown an error when running this module
      // within webpack where the module.exports object is sealed
    }
  }
};

const exportToWindowGlobal = (tinymce) => {
  window.tinymce = tinymce;
  window.tinyMCE = tinymce;
};

exportToWindowGlobal(Tinymce);
exportToModuleLoaders(Tinymce);
