module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" } },
      "@babel/preset-react",
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@atoms": "./src/components/atoms",
          "@types": "./src/types",
          "@variables": "./src/variables",
        },
      },
    ],
  ],
}
