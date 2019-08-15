const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.(htm|html)$/, use: ["raw-loader"] },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.styl$/, use: ["style-loader", "css-loader", "stylus-loader"] },
            { test: /\.(jpg|gif|bmp|jpeg|png)$/, use: ["url-loader?limit=0&name=[hash:8]-[name].[ext]"] },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
            { test: /\.vue$/, use: "vue-loader" }
        ]
    },
    resolve: {
        alias: { "vue$": "vue/dist/vue.js" }
    }
};