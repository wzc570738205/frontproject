/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-04-24 17:25:07
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-04-24 17:25:39
 */
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
	return path.join(__dirname, dir)
}

const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

const name = defaultSettings.title || 'frontproject' // page title

const port = process.env.port || process.env.npm_config_port || 8004 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
	publicPath: './',
	outputDir: 'frontproject',
	assetsDir: 'static',
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,
}
