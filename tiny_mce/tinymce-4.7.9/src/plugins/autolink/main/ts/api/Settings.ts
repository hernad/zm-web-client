/**
 * Settings.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

const getAutoLinkPattern = function (editor) {
  return editor.getParam('autolink_pattern', /^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i);
};

const getDefaultLinkTarget = function (editor) {
  return editor.getParam('default_link_target', '');
};

export default {
  getAutoLinkPattern,
  getDefaultLinkTarget
};