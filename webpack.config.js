const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    // 入口
    entry: {
        main: './main'
    },
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'main.js'
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    // 插件
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config;