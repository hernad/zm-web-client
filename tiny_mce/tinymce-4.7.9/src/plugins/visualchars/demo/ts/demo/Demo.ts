/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'visualchars code',
  toolbar: 'visualchars code',
  skin_url: '../../../../../js/tinymce/skins/lightgray',
  height: 600
});

export {};