# any2rem

According to one stylesheet, generate rem or other units version stylesheet.

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/any2rem.svg?style=flat-square
[npm-url]: https://npmjs.org/package/any2rem
[travis-image]: https://img.shields.io/travis/JunbinDeng/any2rem.svg?style=flat-square
[travis-url]: https://travis-ci.org/JunbinDeng/any2rem
[coveralls-image]: https://img.shields.io/coveralls/JunbinDeng/any2rem.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/JunbinDeng/any2rem
[downloads-image]: http://img.shields.io/npm/dm/any2rem.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/any2rem

## Usage

### CLI tool

Install any2rem:

```
$ npm install -g any2rem
```

Apply conversion from rpx to rem by overriding raw file:

```
$ any2rem src/*.css
```

Output conversion from rpx to rem in a folder:

```
$ any2rem -o dirname src/*.css
```

Apply conversion from rem to rpx with times ratio:

```
$ any2rem -o dirname src/*.css -fu rem -tu rpx -t 100
```

```
  Usage: any2rem [options] <file...>

  Options:
    -v --version             output the version number
    -o, --output [path]      the output file dirname
    -fu, --fromUnit [value]  the unit convert from (default: "rpx")
    -tu, --toUnit [value]    the unit convert to (default: "rem")
    -t, --times [value]      the conversion times ratio (default: "0.01")
    -h, --help               display help for command
```

### Example

#### Pre processing:

One raw stylesheet:

```
.selector {
  width: 120rpx;
  height: 44rpx;
  font-size: 28rpx;
  border: 1rpx solid #ddd;
  padding: 0.5rpx; 0 .5rpx; 0
}
```

#### After processing:

Rem version (rpx to rem):

```
.selector {
  width: 1.2rem;
  height: 0.44rem;
  font-size: 0.28rem;
  border: 0.01rem solid #ddd;
  padding: 0.005rem; 0 0.005rem; 0
}
```

#### Continue processing:

Rpx version (rem to rpx):

```
.selector {
  width: 120rpx;
  height: 44rpx;
  font-size: 28rpx;
  border: 1px solid #ddd;
  padding: 0.5rpx; 0 0.5rpx; 0
}
```

## Change Log

### 1.0.1

* Fix wrong file path outputs in console.

## License

MIT
