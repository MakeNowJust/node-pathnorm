var
path = require('path');

var
SLASH     = '/',
BACKSLASH = '\\';

var
sep  = exports.sep = path.sep,
rSep = exports.rSep = /[\\\/]/g,
seps = exports.seps = 'darwin freebsd linux sunos'.split(' ')
  .reduce(function (seps, platform) {
    seps[platform] = SLASH;
    return seps;
  }, {win32: BACKSLASH});

exports.normalize = function (p, useSep) {
  useSep = useSep || SLASH;
  return path.normalize(p).replace(rSep, useSep);
};

