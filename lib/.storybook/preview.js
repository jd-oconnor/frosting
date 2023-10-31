import { DocsPage, DocsContainer } from "@storybook/addon-docs"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#F2F2F2",
      },
      {
        name: "dark",
        value: "#1B1C1D",
      },
    ],
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  globalTypes: {
    theme: {
      defaultValue: "light",
      toolbar: {
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}
