const path = require("path")

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../src/docs/*.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    path.resolve("./.storybook/vanilla-extract.js"),
    path.resolve("./.storybook/ts-paths"),
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    enabled: true,
    docsPage: "automatic",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}
