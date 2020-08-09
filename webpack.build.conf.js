const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminSvgo = require('imagemin-svgo')

const path = require('path')
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
}

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`,
                    to: `${PATHS.dist}/img`,
                },
            ],
        }),
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/,
            pngquant: {
                quality: 85,
            },
            plugins: [
                imageminMozjpeg({
                    quality: 95,
                    progressive: true,
                }),
                imageminSvgo({
                    plugins: [{ removeViewBox: false }],
                }),
            ],
        }),
    ],
})

// export buildWebpackConfig
module.exports = new Promise(resolve => {
    resolve(buildWebpackConfig)
})
