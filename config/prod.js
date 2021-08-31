const { resolve } = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./base');

const config = {
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'index.js', // [name] 是entry的key
        // library: {
        //     name: 'md-util-loader',
        //     type: 'amd',
        // }
    }
};

module.exports = merge(baseConfig, config);
