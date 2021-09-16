const path = require("path");

module.exports = {
  stories: [
    "../charts/**/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
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
