const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/dist'
    },
    module: {
        rules: [
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'    
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    },
                    
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            
        ]
    },
    devServer: {
        // contentBase: 'dist',
        compress: true,
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
         filename: "[name].css"}), 
    ]
}