/**
 * ImageSize.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. is Copyright holder
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

function getImageSize(img) {
  let width, height;

  function isPxValue(value) {
    return /^[0-9\.]+px$/.test(value);
  }

  width = img.style.width;
  height = img.style.height;
  if (width || height) {
    if (isPxValue(width) && isPxValue(height)) {
      return {
        w: parseInt(width, 10),
        h: parseInt(height, 10)
      };
    }

    return null;
  }

  width = img.width;
  height = img.height;

  if (width && height) {
    return {
      w: parseInt(width, 10),
      h: parseInt(height, 10)
    };
  }

  return null;
}

function setImageSize(img, size) {
  let width, height;

  if (size) {
    width = img.style.width;
    height = img.style.height;

    if (width || height) {
      img.style.width = size.w + 'px';
      img.style.height = size.h + 'px';
      img.removeAttribute('data-mce-style');
    }

    width = img.width;
    height = img.height;

    if (width || height) {
      img.setAttribute('width', size.w);
      img.setAttribute('height', size.h);
    }
  }
}

function getNaturalImageSize(img) {
  return {
    w: img.naturalWidth,
    h: img.naturalHeight
  };
}

export default {
  getImageSize,
  setImageSize,
  getNaturalImageSize
};