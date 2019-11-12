const path = require('path');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
/**
 * https://github.com/microsoft/TypeScript-Vue-Starter
 * https://github.com/samteb/vue-2-webpack-4-boilerplate
 * https://github.com/vuejs-templates/webpack
 */
module.exports = {
  entry: {
    app: resolve('src/client/main.ts')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src/client'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              appendTsxSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  }
};
