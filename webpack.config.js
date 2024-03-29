const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
		}
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ] 
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new EnvironmentPlugin({
          FIREBASE_API_KEY: 'AIzaSyCc-uTnFkRVZMKO8jRbvPi008lsEn8ID6g',
          FIREBASE_AUTH_DOMAIN: 'pruebagifs1.firebaseapp.com',
          FIREBASE_PROJECT_ID: 'pruebagifs1',
          FIREBASE_STORAGE_BUCKET: 'pruebagifs1.appspot.com',
          FIREBASE_MESSAGING_SENDER_ID: '523557135287',
          FIREBASE_APP_ID: '1:523557135287:web:9d61464ba4db556fc0be32'
        }),
    ],
    devServer: {
        static: path.join(__dirname, './dist'),
        port: 3006,
        compress: true,
        historyApiFallback: true
    }
}