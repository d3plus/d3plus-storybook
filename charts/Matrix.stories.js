import React from 'react';
import {argTypes, Matrix} from './Matrix.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Matrix",
  component: Matrix,
  argTypes
};

const Template = (args) => <Matrix config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: "https://api.oec.world/tesseract/data.jsonrecords?cube=trade_i_baci_a_17&drilldowns=Year,Exporter+Continent,Importer+Continent&measures=Trade+Value&Year=2018",
  groupBy: ["Exporter Continent", "Importer Continent"],
  column: "Importer Continent",
  columnConfig: {
    title: "Importer Continent"
  },
  row: "Exporter Continent",
  rowConfig: {
    title: "Exporter Continent"
  },
  colorScale: "Trade Value",
  colorScaleConfig: {
    legendConfig: {
      title: "Trade Value"
    },
    scale: "jenks"
  },
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
