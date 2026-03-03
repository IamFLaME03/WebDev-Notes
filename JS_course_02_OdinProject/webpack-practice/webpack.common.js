// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",    // entry point
    output: {                   //obj contains info about output bundle
        filename: "main.js",            //name of output bundle 
        path: path.resolve(__dirname, "dist"),      // path to the output diractory
        clean: true,    //true means each time when we run webpack to bundle, it'll be empty the output diractory first before bundling file into it.
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};


