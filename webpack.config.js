const path = require('path')
const webpack = require('webpack');

//Plugins
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//Define custom css loader
const cssLoaders = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    // {
    //     loader: "postcss-loader",
    //     options: {
    //         postcssOptions: {
    //             plugins: [
    //                 [
    //                     "postcss-preset-env",
    //                     {
    //                         // Options
    //                     },
    //                 ],
    //             ],
    //         },
    //     },
    // },
]

//Default config : prod
let config= {
    devtool: false,
    entry: {
        main: [
            './src/js/app.js',
            './src/scss/global.scss'
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: './[name].[fullhash].js'
    },
    module: {
        rules: [
            // js babelization
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // css compilation
            {
                test: /\.css$/,
                use: cssLoaders
            },
            // sass compilation
            {
                test: /\.(scss|sass)$/,
                use: [...cssLoaders, 'sass-loader'],
            },
            // fonts compilation
            {
                test: /\.(woff|woff2|ttf|eot)/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]'
                }
            },
            // images compilation
            {
                test: /\.(jpeg|jpg|png|gif)/,
                type: 'asset/resource',
                generator: {
                    filename: './images/[name][ext]'
                },
            }
        ]
    },
    plugins: [
        // clear out build directories on each build
        new CleanWebpackPlugin(),
        // css extraction into dedicated file
        new MiniCssExtractPlugin({
            filename: './main.[fullhash].css'
        }),
        //Html webpack plugin with configuration
        new HtmlWebpackPlugin({
            title: 'Serre Benoît - Développeur web',
            template: './src/index.html',
            minify: false,
        }),

        //Jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    optimization: {
        // minification - only performed when mode = production
        minimizer: [
            // js minification - special syntax enabling webpack 5 default terser-webpack-plugin
            `...`,
            // css minification
            new CssMinimizerPlugin(),
        ]
    }
}

module.exports = (env, argv) => {

    //devmode overrides
    if (argv.mode === 'development') {
        //Enable eslint
        config.plugins.push(new ESLintPlugin({
            extensions: ['js'],
            context: './src/js/app.js'
        }))

        //Add source-map
        config.devtool = "eval-cheap-module-source-map"
    }

    return config;
};