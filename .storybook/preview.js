export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  chromatic: {delay: 2000},
  controls: {
    expanded: false,
    sort: "requiredFirst"
  },
  jsx: {
    showFunctions: true
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Introduction", "Installation", "*", "Charts", "Advanced"]
    }
  }
}
