const path = require("path");

module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../charts/**/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../advanced/**/*.stories.@(mdx|js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-google-analytics",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        controls: true,
        docs: true,
        measure: false,
        outline: false,
        toolbars: false,
        viewport: false
      }
    }
  ]
};
