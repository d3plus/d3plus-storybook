import React from 'react';
import {argTypes, Pack} from './Pack.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Pack",
  component: Pack,
  argTypes
};

const Template = (args) => <Pack config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {parent: "Group 1", id: "alpha", value: 29},
    {parent: "Group 1", id: "beta", value: 10},
    {parent: "Group 1", id: "gamma", value: 2},
    {parent: "Group 2", id: "delta", value: 29},
    {parent: "Group 2", id: "eta", value: 25}
  ],
  groupBy: ["parent", "id"],
  sum: funcify(d => d.value, "d => d.value")
};
