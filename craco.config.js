const path = require('path')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
        },
      },
    },
  },
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@layouts': path.resolve(__dirname, 'src/layouts')
    }
  }
}