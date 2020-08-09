const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
}
const PAGES_DIR = `${PATHS.src}/pages`
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    externals: {
        paths: PATHS,
    },
    entry: {
        main: `${PATHS.src}/js/main.js`,
    },
    output: {
        filename: 'js/[name].js',
        path: PATHS.dist,
        publicPath: '/',
    },
    plugins: [
        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}/${page}`,
                    filename: `./${page.replace(/\.pug/, '.html')}`,
                    inject: false,
                })
        ),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new StylelintPlugin({ fix: true }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: './' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ],
    },
}
