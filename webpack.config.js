const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
    mode: "development",
    //context: path.resolve(__dirname,"src"),
    entry: {
        app : './src/index.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: ASSET_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react','stage-0']
                    }
                }
                
            },
            {
                test: /\.css$/,
                use: 'style-loader'
            },
            {
              test : /\.css$/,
               // include: /node_modules/,
                use :'css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // name: '[path][name].[ext]'
                            name: '[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }

            /*{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: '/'
                        }
                    }]
            }*/
        ]
    },
    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",

        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser,
        historyApiFallback : true // Refresh page will not lost data
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                context: path.join(__dirname, 'src/assets'),
                from : 'images',
                to : 'assets/images'
            }
        ])
    ],
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    optimization: {
        splitChunks:{
            chunks: "all"
        }
    }
}