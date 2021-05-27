import React from "react";
import Viz from "../primitives/Viz";

import {Pie as D3plusPie} from "d3plus-react";
export const Pie = ({config}) => <D3plusPie config={config} />;

export const argTypes = {

    /**
     * Filters out unused argTypes from the Viz primitive and
     * overrides any defaults that have been changed in Treemap
     */
    ...Object.keys(Viz.argTypes)
      .filter(k => !k.match(/^(discrete|shape|zoom.*)$/))
      .reduce((obj, k) => (obj[k] = Viz.argTypes[k], obj), {}),
  
    /**
     * Pie-specific methods
     */
     innerRadius: {
      type: {
        summary: "funciton | number"
      },
      table: {
        defaultValue: {
          summary: "funciton | number",
          detail: "0"
        }
      },
      description: `The function or value to be used as inner radius in the Pie.`
    },
    padAngle: {
      type: {
        summary: "number"
      },
      table: {
        defaultValue: {
          summary: "number",
          detail: "0"
        }
      },
      control: {
        type: "number"
      },
      description: `The arc padding to the specified radian value between \`0\` and \`1\`.
      
By default the value is \`0\`, without setting any padding between each arc.`
    },
    padPixel: {
      type: {
        summary: "number"
      },
      table: {
        defaultValue: {
          summary: "number",
          detail: "0"
        }
      },
      control: {
        type: "number"
      },
      description: `The arc padding to the specified pixel value.
      
By default the value is \`0\`, without setting any padding between each arc.

If \`padAngle\` is defined, \`padPixel\` value will not be considered.`
    },
    sort: {
      type: {
        summary: "function"
      },
      table: {
        defaultValue: {
          summary: "function",
          detail: `(a, b) => b.value - a.value`
        }
      },
      description: `The comparator function that sort order for the Pie slices.`
    },
    value: {
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
      description: `The accessor key for each data point used to calculate the size of each Pie section.`
    }
  }