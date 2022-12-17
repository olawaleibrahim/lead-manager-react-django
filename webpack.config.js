const { node } = import("prop-types");
const nodeExternals = import("webpack-node-externals");

module.exports = {
    // target: "node",
    externals: [nodeExternals],
    externalsPresets: { node: true },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}