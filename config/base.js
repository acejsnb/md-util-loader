const { resolve } = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const {
    name, version, author, license
} = require('../package.json');

// 获取时间
const TimeFn = require('../get_time');

const banner = `@${name}-docs v${version}
(c) 2020-2021 ${author}
Released under the ${license} License.
${TimeFn()}`;

const config = {
    entry: {
        index: resolve(__dirname, '../index.js') // 入口文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner,
            test: /\.js$/
        }),
        new ProgressBarPlugin(
            {
                format: chalk.blue(`[  build :bar ${chalk.green.bold(':percent')} (:elapsed seconds) ]`),
                clear: true,
                summary: true
            }
        )
    ],
    cache: true,
    bail: true, // 在第一个错误出现时抛出失败结果
    target: 'node'
};

module.exports = config;
