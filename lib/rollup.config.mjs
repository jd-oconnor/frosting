import typescript from "@rollup/plugin-typescript"
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin"
import { defineConfig } from "rollup"
import esbuild from "rollup-plugin-esbuild"
import depsExternal from "rollup-plugin-node-externals"

export default defineConfig([
  {
    input: "src/index.ts",
    plugins: [
      typescript({
        exclude: [
          "node_modules/**",
          ".storybook",
          "**/*.stories.tsx",
          "tests/*",
        ],
        declaration: false,
        declarationMap: false,
      }),
      vanillaExtractPlugin(),
      depsExternal(),
      esbuild(),
    ],
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules: true,

      entryFileNames({ name }) {
        return `${name.replace(/\.css$/, ".css.lib")}.js`
      },
      assetFileNames({ name }) {
        return (
          name
            ?.replace(/^src\//, "")
            .replace(/\.css\.ts\.vanilla\.css$/, "-lib.css") ?? ""
        )
      },
      exports: "named",
    },
  },
])
