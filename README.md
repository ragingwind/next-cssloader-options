# next-cssloader-options

> Next plugin to update css loader options until `cssOptions` will be supported officially.

# Usese

```js
const withCssLoaderOptions = require('next-cssloader-options');

module.exports = withCssLoaderOptions({
  cssLoaderOptions: {
    modules: {
      getLocalIdent: (context, localIdentName, localName, options) => localName
    }
  }
})
```

# License

MIT @ Jimmy Moon