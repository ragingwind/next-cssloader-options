const withCssLoaderOptions = require('../../');

module.exports = withCssLoaderOptions({
  cssOptions: {
    modules: {
      getLocalIdent: (context, localIdentName, localName, options) => localName
    }
  }
})