'use strict'

const fs = require('fs')
const path = require('path')

/**
 * Process configs
 *
 * @param srcPath source file path.
 * @param config arguments user pass from command line.
 */
function initConfigs (srcPath, config) {
  let text = fs.readFileSync(srcPath, 'utf8')
  text = convertUnit(String(text),
    Number(config.times),
    config.fromUnit,
    config.toUnit
  )
  saveFile(srcPath, config.output, text)
}

/**
 * Save text to destination file, may override.
 *
 * @param srcPath source file path.
 * @param destPath destination file path.
 * @param text text to be saved.
 */
function saveFile (srcPath, destPath, text) {
  let outputPath = destPath || path.dirname(srcPath)
  let filename = path.basename(srcPath)
  let newFilePath = path.join(outputPath, filename)
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
  }
  fs.writeFileSync(newFilePath, text, { encoding: 'utf8' })
  console.log('[Success]: ' + newFilePath)
}

/**
 *
 * The unit converter.
 *
 * @param text The original text.
 * @param times The times original number multiples after converting, e.g. 0.01.
 * @param fromUnit The original unit.
 * @param toUnit The unit which converts to.
 * @returns {void | string | *}
 */
function convertUnit (text, times, fromUnit, toUnit) {
  const exp = new RegExp('\\s*(\\d+)*(\\.)*(\\d+)' + fromUnit, 'img')
  const transUnit = toUnit || fromUnit
  return text.replace(exp, frag => {
    let result = frag.trim().replace(fromUnit, '')
    result = parseFloat((result * times).toFixed(5))
    result = frag.startsWith(' ') ? ' ' + result : result
    return result + transUnit
  })
}

module.exports = { initConfigs, convertUnit }