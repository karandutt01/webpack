/**
 * Webpack Configuration
 *
 * This configuration file is used by Webpack to bundle JavaScript files for usage in a browser.
 * It uses Node.js modules and should be run in a Node.js environment.
 *
 * @module webpack.config
 */

/**
 * @type {import('webpack').Configuration}
 * @property {string} entry - The entry point for the bundle process.
 * @property {Object} output - Output configuration for the bundle.
 * @property {string} output.filename - The name of the output bundle file.
 * @property {string} output.path - The output directory as an absolute path.
*/


const path = require("path");

module.exports ={
  entry:'./index.js',
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname, 'dist')
  }
}