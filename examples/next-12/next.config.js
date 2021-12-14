const withCssLoaderOptions = require('../../');

module.exports = withCssLoaderOptions({
  cssLoaderOptions: {
    modules: {
      getLocalIdent: (context, localIdentName, localName, options) => localName
    }
  }
})