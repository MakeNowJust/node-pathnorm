var
pathnorm = require('..'),
test     = require('tap').test;

test('pathnorm.seps[process.platform] === pathnorm.sep', function (t) {
  t.same(pathnorm.seps[process.platform], pathnorm.sep);
  t.end();
});
