'use strict'

const assert = require('assert')
const { initConfigs, convertUnit, saveFile } = require('../lib/any2rem')
const path = require('path')
const fs = require('fs')

describe('should work with raw css file', () => {
  let srcPath = path.join(__dirname, 'assets/test.scss')
  let srcText = fs.readFileSync(srcPath, 'utf8')

  it('should work with convert unit', () => {
    let destText = convertUnit(srcText, 0.01, 'rpx', 'rem')
    let destPath = path.join(__dirname, 'output/test.rem.scss')
    assert.equal(destText, fs.readFileSync(destPath, 'utf8'))
  })

  it('should work with keeping intact', () => {
    let destPath = path.join(__dirname, 'output/test.rem.scss')
    initConfigs(destPath, {
      fromUnit: 'rem',
      times: '1'
    })
    assert.equal(fs.existsSync(destPath), true)
  })

  it('should work with output file', () => {
    let destPath = path.join(__dirname, 'output/testOutput')
    let destFile = path.basename(srcPath)
    let destFilePath = path.join(destPath, destFile)
    initConfigs(srcPath, {
      fromUnit: 'rpx',
      toUnit: 'rem',
      times: '0.01',
      output: destPath
    })
    assert.equal(fs.existsSync(destFilePath), true)

    fs.unlinkSync(destFilePath)
    fs.rmdirSync(destPath)
  })
})