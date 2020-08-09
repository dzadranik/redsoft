const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    ],
})

// export buildWebpackConfig
module.exports = new Promise(resolve => {
    resolve(buildWebpackConfig)
})
