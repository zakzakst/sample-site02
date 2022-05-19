const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
// const enabledSourceMap = MODE === 'development';
const enabledSourceMap = false;

exports.entries = {
  'style.css': './src/scss/style.scss',
  'style2.css': './src/scss/style2.scss',
};

exports.rules = [
  {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          url: false,
          sourceMap: enabledSourceMap,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['autoprefixer', { grid: true }]],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: enabledSourceMap,
        },
      },
    ],
  },
];

exports.plugins = [
  new RemoveEmptyScriptsPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name]',
  }),
];
