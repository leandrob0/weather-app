const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: './src/index.js',
 output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
 },
 devtool: 'inline-source-map',
 devServer: {
    static: './dist',
  },
 plugins: [
    new HtmlWebpackPlugin({
      title: 'Weathery',
      favicon: './src/favicon.ico'
    }),
 ], 
 module: {
   rules: [   
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ],
              cacheDirectory: true,
              plugins: [
		 ["@babel/transform-runtime"]
	      ],
            }
          },
          { loader: 'eslint-loader'},
        ]
      },
    ],
  },
  resolve: {
            extensions: ['', '.js', '.jsx', '.css']
        }
};