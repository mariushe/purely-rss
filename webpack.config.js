var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/rss-parser')],
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};