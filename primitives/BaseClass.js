import {formatLocale} from "d3plus-format";

export default {
  argTypes: {
    locale: {
      type: {
        summary: "object | string"
      },
      table: {
        defaultValue: {
          summary: "\"en-US\"",
          detail: JSON.stringify(formatLocale["en-US"], null, 2),
        }
      },
      control: {
        type: "select",
        options: Object.keys(formatLocale)
      },
      description: `Sets the locale used for all text and number formatting.

The locale passed to this method can either be a locale \`object\` (internal examples [here](https://github.com/d3plus/d3plus-format/blob/master/src/locale.js)) or a locale code matching to any of the ones defined here.

Both 4-character and 2-character codes are accepted (ex. "en" becomes "en-US").`
    },
    on: {
      type: {
        summary: "object"
      },
      table: {
        defaultValue: {
          summary: "{}"
        }
      },
      control: {type: "object"},
      description: `An \`object\` where the keys match event typenames (like "click", "mousemove", and so on) and the value at each key is a listener \`function\` that will be invoked whenever that event is fired for a given data point.

As with most Array accessor functions, the event \`function\` provided receives the current data point (\`d\`) and index (\`i\`) of that data point in the array as it's 2 arguments.`
    }
  }
}
