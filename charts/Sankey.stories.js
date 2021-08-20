import React from 'react';
import {argTypes, Sankey} from './Sankey.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Sankey",
  component: Sankey,
  argTypes
};

const Template = (args) => <Sankey config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  links: [
    {source: "alpha", target: "beta"},
    {source: "alpha", target: "gamma"},
    {source: "epsilon", target: "zeta"},
    {source: "epsilon", target: "theta"},
    {source: "theta", target: "alpha"}
  ],
  nodes: [
    {id: "alpha"},
    {id: "beta"},
    {id: "gamma"},
    {id: "epsilon"},
    {id: "zeta"},
    {id: "theta"}
  ]
};