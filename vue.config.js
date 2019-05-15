const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  chainWebpack: (config) => {
    // storybook-source
    config.module
      .rule('storysource')
      .test(/\.stories\.jsx?$/)
      .use(require.resolve('@storybook/addon-storysource/loader'))
      .loader(require.resolve('@storybook/addon-storysource/loader'))
      .options({
        enforce: 'pre',
      });

    // storybook-markdown
    config.module
      .rule('storyMarkdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end();

    // storybook-info
    config.module
      .rule('storyInfo')
      .test(/\.vue$/)
      .enforce('post')
      .use('storybook-addon-vue-info/loader')
      .loader('storybook-addon-vue-info/loader');
  },
};
