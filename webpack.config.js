const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
       path: path.join(__dirname, '/bundle'),
       filename: 'index_bundle.js'
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins:[
       new HtmlWebpackPlugin({
          template: './index.html'
       })
    ]
}
