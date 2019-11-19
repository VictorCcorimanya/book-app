const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssXtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use:[
                    devMode ? 'style-loader' : MiniCssXtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
       
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssXtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
};