import BaseClass from "./BaseClass";

export default {
  argTypes: {
    ...BaseClass.argTypes,
    data: {
      type: {
        summary: "string | object[] | string[]",
        required: true
      },
      table: {
        defaultValue: {
          summary: "[]",
        }
      },
      description: `Sets the primary data array to be used when drawing the visualization. The value passed should be an *Array* of objects or a *String* representing a filepath or URL to be loaded. The following filetypes are supported: \`csv\`, \`tsv\`, \`txt\`, and \`json\`.

If your data URL needs specific headers to be set, an Object with "url" and "headers" keys may also be passed.

Additionally, a custom formatting function can be passed as a second argument to this method. This custom function will be passed the data that has been loaded, as long as there are no errors. This function should return the final array of obejcts to be used as the primary data array. For example, some JSON APIs return the headers split from the data values to save bandwidth. These would need be joined using a custom formatter.

If you would like to specify certain configuration options based on the yet-to-be-loaded data, you can also return a full \`config\` object from the data formatter (including the new \`data\` array as a key in the object).`
    },
    groupBy: {
      type: {
        summary: "string | function | string[] | function[]",
        required: true
      },
      table: {
        defaultValue: {
          summary: "\"id\"",
          detail: `[d => d.id]`
        }
      },
      control: {type: "text"},
      description: `The unique key in each data point to use when grouping the data.

When passing a \`string\`, the value will be used in an accessor function to grab that key (ie. \`d => d[string]\`)

For visualizations with multiple hierarchies of data present, the function accepts an array of \`string\` and \`function\` values to determine each depth of nesting.`
    },
    legendPosition: {
      type: {
        summary: "string|function|false"
      },
      table: {
        category: "Legend",
        defaultValue: {
          summary: "function",
          detail: `() => this._width > this._height ? "right" : "bottom"`
        }
      },
      control: {
        type: "select",
        options: ["top", "right", "bottom", "left", false]
      },
      description: `Determines where the color legend should be positioned in relation to the main visualization.

The default behavior shows the legend on the "right" when the width/height aspect ratio of the visualization is landscape (> 1), and at the "bottom" when in portrait (< 1).

Passing the Boolean \`false\` will disable the legend from being displayed.`
    }
  }
}
