#!/usr/bin/env node
const commander = require('commander')
const any2rem = require('../index')
const pkg = require('../package.json')

const defaultConfig = {
  fromUnit: 'rpx',
  toUnit: 'rem',
  times: '0.01',
  output: undefined
}

commander.version(pkg.version, '-v --version').
  option('-o, --output [path]', 'the output file dirname').
  option('-fu, --fromUnit [value]',
    'the unit convert from', defaultConfig.fromUnit).
  option('-tu, --toUnit [value]',
    'the unit convert to', defaultConfig.toUnit).
  option('-t, --times [value]',
    'the conversion times ratio', defaultConfig.times).
  parse(process.argv)

commander.args.forEach((filePath) => {
  any2rem.initConfigs(filePath, commander)
})