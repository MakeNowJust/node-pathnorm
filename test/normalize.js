var
pathnorm = require('..'),
path     = require('path'),
test     = require('tap').test;

test('normalize to unix like path in default', function (t) {
  t.same(pathnorm.normalize('a/b/c'), 'a/b/c');
  t.same(pathnorm.normalize('a\\b\\c'), 'a/b/c');
  t.end();
});

test('pathnorm.normalize(p, pathnorm.sep) === path.normalize(p)', function (t) {
  ['aaa/bbb', 'aaa/bbb/ccc', 'aaa\\bbb', 'aaa\\bbb\\ccc'].forEach(function (p) {
    t.same(pathnorm.normalize(p, pathnorm.sep), path.normalize(p));
  });
  t.end();
});
