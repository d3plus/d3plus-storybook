import React from "react";
import Viz from "../primitives/Viz";

import {Treemap as D3plusTreemap} from "d3plus-react";
export const Treemap = ({config}) => <D3plusTreemap config={config} />;

export const argTypes = {
  ...Object.keys(Viz.argTypes)
    .filter(k => !k.match(/^zoom*/))
    .reduce((obj, k) => (obj[k] = Viz.argTypes[k], obj), {}),
  sum: {
    type: {
      summary: "string | function",
      required: true
    },
    table: {
      defaultValue: {
        summary: "\"value\"",
        detail: `d => d.value`
      }
    },
    description: `The accessor key for each data point used to calculate the size of each rectangle.`
  }
}
