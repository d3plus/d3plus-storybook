import React from 'react';
import {argTypes, BoxWhisker} from './BoxWhisker.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/BoxWhisker",
  component: BoxWhisker,
  argTypes
};

const Template = (args) => <BoxWhisker config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "alpha", value: 300},
    {id: "alpha", value: 20},
    {id: "alpha", value: 180},
    {id: "alpha", value: 40},
    {id: "alpha", value: 170},
    {id: "alpha", value: 125},
    {id: "alpha", value: 74},
    {id: "alpha", value: 80},
    {id: "beta", value: 180},
    {id: "beta", value: 30},
    {id: "beta", value: 120},
    {id: "beta", value: 50},
    {id: "beta", value: 140},
    {id: "beta", value: 115},
    {id: "beta", value: 14},
    {id: "beta", value: 30}
  ],
  groupBy: ["id", "value"],
  legend: false,
  x: "id",
  y: "value"
};

export const BoxAndWhiskerChartWithOutliers = Template.bind({});
BoxAndWhiskerChartWithOutliers.args = {
  data: [
    {id: "alpha", value: 840},
    {id: "alpha", value: 940},
    {id: "alpha", value: 780},
    {id: "alpha", value: 650},
    {id: "alpha", value: 720},
    {id: "alpha", value: 430},
    {id: "alpha", value: 1850},
    {id: "alpha", value: 300},
    {id: "alpha", value: 360},
    {id: "alpha", value: 1690},
    {id: "alpha", value: 690},
    {id: "alpha", value: -950},
    {id: "alpha", value: -600},
    {id: "alpha", value: -850},
    {id: "beta", value: 980},
    {id: "beta", value: 300},
    {id: "beta", value: 120},
    {id: "beta", value: 500},
    {id: "beta", value: 140},
    {id: "beta", value: 115},
    {id: "beta", value: 14},
    {id: "beta", value: -30},
    {id: "beta", value: -1050},
    {id: "beta", value: -100},
    {id: "beta", value: -800},
    {id: "beta", value: -1100}
  ],
  groupBy: ["id", "value"],
  legend: false,
  x: "id",
  y: "value"
};

export const ChangingBoxAndWhiskerEndpointShapes = Template.bind({});
ChangingBoxAndWhiskerEndpointShapes.args = {
  data: [
    {id: "alpha", value: 300},
    {id: "alpha", value: 20},
    {id: "alpha", value: 180},
    {id: "alpha", value: 40},
    {id: "alpha", value: 170},
    {id: "alpha", value: 125},
    {id: "alpha", value: 74},
    {id: "alpha", value: 80},
    {id: "beta",  value: 180},
    {id: "beta",  value: 30},
    {id: "beta",  value: 120},
    {id: "beta",  value: 50},
    {id: "beta",  value: 140},
    {id: "beta",  value: 115},
    {id: "beta",  value: 14},
    {id: "beta",  value: 30},
  ],
  groupBy: ["id", "value"],
  legend: false,
  shapeConfig: {
    whiskerConfig: {
      endpoint: function(d) {
        return d.id === "alpha" ? "Rect" : "Circle"
      }
    }
  },
  x: "id",
  y: "value"
};

export const ChangingBoxAndWhiskerOutlierStyles = Template.bind({});
ChangingBoxAndWhiskerOutlierStyles.args = {
  data: [
    {id: "alpha", value: 840},
    {id: "alpha", value: 940},
    {id: "alpha", value: 780},
    {id: "alpha", value: 650},
    {id: "alpha", value: 720},
    {id: "alpha", value: 430},
    {id: "alpha", value: 1850},
    {id: "alpha", value: 300},
    {id: "alpha", value: 360},
    {id: "alpha", value: 1690},
    {id: "alpha", value: 690},
    {id: "alpha", value: -950},
    {id: "alpha", value: -600},
    {id: "alpha", value: -850},
    {id: "beta", value: 980},
    {id: "beta", value: 300},
    {id: "beta", value: 120},
    {id: "beta", value: 500},
    {id: "beta", value: 140},
    {id: "beta", value: 115},
    {id: "beta", value: 14},
    {id: "beta", value: -30},
    {id: "beta", value: -1050},
    {id: "beta", value: -100},
    {id: "beta", value: -800},
    {id: "beta", value: -1100}
  ],
  groupBy: ["id", "value"],
  legend: false,
  shapeConfig: {
    outlier: function(d) {
      return d.id === "alpha" ? "Circle" : "Rect";
    },
    outlierConfig: {
      Rect: {
        fill: "green"
      },
      Circle: {
        fill: "red"
      }
    }
  },
  x: "id",
  y: "value"
};

export const HorizontalBoxAndWhiskerChart = Template.bind({});
HorizontalBoxAndWhiskerChart.args = {
  data: [
    {id: "alpha", value: 300},
    {id: "alpha", value:  20},
    {id: "alpha", value: 180},
    {id: "alpha", value:  40},
    {id: "alpha", value: 170},
    {id: "alpha", value: 125},
    {id: "alpha", value:  74},
    {id: "alpha", value:  80},
    {id: "beta",  value: 180},
    {id: "beta",  value:  30},
    {id: "beta",  value: 120},
    {id: "beta",  value:  50},
    {id: "beta",  value: 140},
    {id: "beta",  value: 115},
    {id: "beta",  value:  14},
    {id: "beta",  value:  30}
  ],
  groupBy: ["id", "value"],
  discrete: "y",
  legend: false,
  shapeConfig: {
    Box: {
      orient: "horizontal"
    }
  },
  x: "value",
  y: "id"
};
