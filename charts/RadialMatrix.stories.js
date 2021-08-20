import React from 'react';
import {argTypes, RadialMatrix} from './RadialMatrix.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/RadialMatrix",
  component: RadialMatrix,
  argTypes
};

const Template = (args) => <RadialMatrix config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: "https://api.oec.world/tesseract/data.jsonrecords?cube=trade_i_baci_a_17&drilldowns=Year,Exporter+Continent,Importer+Continent&measures=Trade+Value&Year=2018",
  groupBy: ["Exporter Continent", "Importer Continent"],
  column: "Importer Continent",
  row: "Exporter Continent",
  colorScale: "Trade Value",
  colorScaleConfig: {
    legendConfig: {
      title: "Trade Value"
    },
    scale: "jenks"
  },
  colorScalePosition: "left",
  title: "Continent to Continent Product Trade",
  titleConfig: {
    fontSize: 20
  },
  tooltipConfig: {
    tbody: [
      ["Trade Value", funcify(
        d => Math.round(d["Trade Value"]),
        `d => Math.round(d["Trade Value"])`
        )
      ]
    ]
  }
};
