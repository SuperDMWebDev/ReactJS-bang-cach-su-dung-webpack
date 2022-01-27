const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
        filename: "bundle.js" // Tên file được build ra
    },
    module: {
        rules: [{
                test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: ["babel-loader"]
            },
            {
                test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'build', 'assets') },
            ],
        })
    ],




};