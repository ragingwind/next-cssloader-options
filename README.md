# next-cssloader-options

> Next plugin to update css loader options until `cssOptions` will be supported officially.

# Install

```sh
npm install next-cssloader-options
```

# Usese

```js
const withCssLoaderOptions = require('next-cssloader-options');

module.exports = withCssLoaderOptions({
  cssOptions: {
    modules: {
      getLocalIdent: (context, localIdentName, localName, options) => localName
    }
  }
})
```

# License

MIT @ Jimmy Moon