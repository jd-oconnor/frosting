# Component Library

This is starter code for a frontend component library used for building pages and components.
The component library using TypeScript, React, and Vanilla Extract. It's compiled into tree-shakable ESM, with TypeScript definitions and source maps in the distribution.

## Structure

```bash
lib
├── .storybook
│   ├── main.js # storybook build file
│   ├── preview-head.html # storybook file for applying custom styles
│   ├── preview.js # storybook file
│   ├── ts-paths.js # webpack config for typescript paths with webpack
│   ├── vanilla-extract.js # webpack config for VE
├── dist # the bundled package
├── src
│   ├── components # uses atomic design structure
│   │   └── atoms # smallest components used as building blocks for UI elements
│   │   └── molecules # groups of atoms that work together to perform a certain action
│   │   └── organisms # the most complex, making up distinct sections of a UI
│   ├── types
│   │── utils
│   │── variables
│   ├── index.ts # Entrypoint. Exports all modules. Can be tree-shaken.
│   ├── base.css # Base CSS, includes a reset (modern-css-reset).
├── tests # folder for all tests
├── assetTransformer.js
├── babel.config.js
├── package.json
├── rollup.config.js # config for using rollup as our module bundler
├── tsconfig.json # TypeScript configuration, only emits declaration files
```

## How to run Storybook

- Install all dependencies using `yarn` or `yarn install`.
- `cd` into the `lib` directory `cd lib`
- Run storybook with `yarn storybook`
- A window should open up running Storybook locally in your [browser](http://localhost:6006/)

## Tips

If working with Webpack, you may need to use the following transformer to get VE to work with Jest

```ts
const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
const transformer = require("@vanilla-extract/jest-transform")

module.exports = {
  process(sourceText, sourcePath, options) {
    // if this is a vanilla-extract css.ts file then pass it to vanilla-extract/jest-transformer
    if (sourcePath.endsWith(".css.ts")) {
      return transformer.default.process(sourceText, sourcePath, {
        config: options,
      })
    }

    /**
     * else, we just return a simple string that exports the filename because
     * we don't want any CSS being transformed in Jest
     */
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    }
  },
}
```

If working with Vite, inside the `vite.config.ts` file, you may need to configure the `esbuildOptions` for the `vanillaExtractPlugin` like this

```ts
vanillaExtractPlugin({
  esbuildOptions: {
    loader: {
      '.css': 'empty',
    },
  },
}),
```
