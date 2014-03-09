var
pathnorm = require('..'),
path     = require('path'),
test     = require('tap').test;

test('normalize to unix like path in default', function (t) {
  t.same(pathnorm.normalize('a/b/c'), 'a/b/c');
  t.same(pathnorm.normalize('a\\b\\c'), 'a/b/c');
  t.end();
});

test('normalize to windows like', function (t) {
  [['aaa/bbb', 'aaa\\bbb'], ['aaa/bbb/ccc', 'aaa\\bbb\\ccc']].forEach(function (p) {
    t.same(pathnorm.normalize(p[0], '\\'), p[1]);
    t.same(pathnorm.normalize(p[1], '\\'), p[1]);
  });
  t.end();
});
