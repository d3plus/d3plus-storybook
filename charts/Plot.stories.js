import React from 'react';
import {argTypes, Plot} from './Plot.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/Plot",
  component: Plot,
  argTypes
};

const Template = (args) => <Plot config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "alpha", x: 4, y: 7},
    {id: "beta", x: 5, y: 2},
    {id: "gamma", x: 6, y: 13}
  ],
  groupBy: "id"
};
