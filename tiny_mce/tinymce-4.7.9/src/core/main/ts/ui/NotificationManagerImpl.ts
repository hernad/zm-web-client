/**
 * NotificationManagerImpl.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

export default function () {
  const unimplemented = function () {
    throw new Error('Theme did not provide a NotificationManager implementation.');
  };

  return {
    open: unimplemented,
    close: unimplemented,
    reposition: unimplemented,
    getArgs: unimplemented
  };
}