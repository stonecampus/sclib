'use strict';

const fs = require('fs');

exports.dirExists = function (path) {
  try {
    return fs.lstatSync(path).isDirectory();
  } catch (ex) {
    return false;
  }
};
