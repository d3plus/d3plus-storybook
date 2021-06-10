import React from "react";
import {argTypes as pieArgTypes} from "./Pie.args";

import {Donut as D3plusDonut} from "d3plus-react";
export const Donut = ({config}) => <D3plusDonut config={config} />;

export const argTypes = {

    /**
     * Filters out unused argTypes from the Pie args and
     * overrides any defaults that have been changed in Donut
     */
    ...Object.keys(pieArgTypes)
      .reduce((obj, k) => (obj[k] = pieArgTypes[k], obj), {}),
  
    /**
     * Donnut-specific methods
     */ 
    innerRadius: {
      type: {
        summary: "function | number"
      },
      table: {
        defaultValue: {
          summary: "function | number",
          detail: `
          import {min} from "d3-array";

function innerRadius() {
  return min([
    this._width - this._margin.left - this._margin.right,
    this._height - this.margin.top - this._margin.bottom
  ]) / 4;
}`
        }
      },
      description: `The function or value to be used as inner radius in the Pie.`
    },
    padPixel: {
      type: {
        summary: "number"
      },
      table: {
        defaultValue: {
          summary: "number",
          detail: "2"
        }
      },
      control: {type: "number"},
      description: `The arc padding to the specified pixel value.
      
By default the value is \`2\`, setting a small padding between each arc.

If \`padAngle\` is defined, \`padPixel\` value will not be considered.`
    }
  }