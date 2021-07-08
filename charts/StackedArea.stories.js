import React from 'react';
import {argTypes, StackedArea} from './StackedArea.args';
import configify from "../helpers/configify";

import { formatAbbreviate } from 'd3plus-format';

export default {
  title: "Charts/StackedArea",
  component: StackedArea,
  argTypes
};

const Template = (args) => <StackedArea config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13}
  ],
  groupBy: "id"
};

export const HorizontalStackedAreaChart = Template.bind({});
HorizontalStackedAreaChart.args = {
  data: [
    {id: "alpha", x:  7, y: 4},
    {id: "alpha", x: 25, y: 5},
    {id: "alpha", x: 13, y: 6},
    {id: "beta",  x: 17, y: 4},
    {id: "beta",  x:  8, y: 5},
    {id: "beta",  x: 13, y: 6}
  ],
  groupBy: "id",
  discrete: "y"
};

export const StackedAreaAsSharePercentages = Template.bind({});
StackedAreaAsSharePercentages.args = {
  data: [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13},
    {id: "gamma", x: 4, y: 10},
    {id: "gamma", x: 5, y: 18},
    {id: "gamma", x: 6, y:  5}
  ],
  groupBy: "id",
  stackOffset: "expand",
  yConfig: {
    tickFormat: function(d) {
      return `${formatAbbreviate(d * 100)}%`;
    }
  }
};