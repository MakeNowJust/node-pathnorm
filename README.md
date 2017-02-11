#pathnorm

[![Greenkeeper badge](https://badges.greenkeeper.io/MakeNowJust/node-pathnorm.svg)](https://greenkeeper.io/)

![Build Status](https://api.travis-ci.org/MakeNowJust/node-pathnorm.png)

fix path.normalize to cross platform

##API

```js
var
path = require('path'),
pathnorm = require('pathnorm');
```

###`pathnorm.normalize(p, [useSep='/'])`

`p` normalize as path with separator `useSep`

e.g.

```
pathnorm.normalize('a/b/c');   //=> 'a/b/c'
pathnorm.normalize('a\\b\\c'); //=> 'a/b/c'

pathnorm.normalize('a/b/c', '/');    //=> 'a\\b\\c'
pathnorm.normalize('a\\b\\c', '\\'); //=> 'a\\b\\c'

//it returns `true` on all platform
pathnorm.normalize('a/b/c', pathnorm.sep) === path.normalize('a/b/c');
```

###`pathnorm.sep`

a file separator of your platform. (e.g. if you use windows, `pathnorm.sep` is `'\\'`, or if you use unix like os, `pathnorm.sep` is `'/'`)

###`pathnorm.seps`

the separator of each platforms.

such a object:

```js
{
  win32: '\\',
  darwin:  '/',
  freebsd: '/',
  linux:   '/',
  sunos:   '/',
}
```

##License

this library licensed Apache-2.0

##Author

Tsuyusato Kitsune <make.just.on@gmail.com>

