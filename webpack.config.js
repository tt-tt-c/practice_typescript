const path = require("path");
module.exports = {
    entry: {
        bundle: "./src/index.ts",
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.ts$/,
            },
        ],
    },
};
