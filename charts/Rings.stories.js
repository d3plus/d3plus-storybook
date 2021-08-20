import React from 'react';
import {argTypes, Rings} from './Rings.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Rings",
  component: Rings,
  argTypes
};

const Template = (args) => <Rings config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  links: [
    {"source": "alpha", "target": "beta"},
    {"source": "alpha", "target": "gamma"},
    {"source": "beta", "target": "delta"},
    {"source": "beta", "target": "epsilon"},
    {"source": "zeta", "target": "gamma"},
    {"source": "theta", "target": "gamma"},
    {"source": "eta", "target": "gamma"}
  ],
  label: funcify(
    d => d.id,
    "d => d.id"
  ),
  center: "alpha"
};
