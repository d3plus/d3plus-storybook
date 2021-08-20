import React from 'react';
import {argTypes, Network} from './Network.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Network",
  component: Network,
  argTypes
};

const Template = (args) => <Network config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  nodes: [
    {id: "alpha", x: 1, y: 1},
    {id: "beta", x: 2, y: 1},
    {id: "gamma", x: 1, y: 2},
    {id: "epsilon", x: 3, y: 2},
    {id: "zeta", x: 2.5, y: 1.5},
    {id: "theta", x: 2, y: 2}
  ],
  links: [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 3, target: 4},
    {source: 3, target: 5},
    {source: 5, target: 0}
  ]
};

export const ForceDirectedNetwork = Template.bind({});
ForceDirectedNetwork.args = {
  nodes: [
    {id: "alpha"},
    {id: "beta"},
    {id: "gamma"},
    {id: "epsilon"},
    {id: "zeta"},
    {id: "theta"}
  ],
  links: [
    {source: 0, target: 1, weight: 10},
    {source: 0, target: 2, weight: 10},
    {source: 3, target: 4, weight: 10},
    {source: 3, target: 5, weight: 5},
    {source: 5, target: 0, weight: 20},
    {source: 2, target: 1, weight: 12},
    {source: 4, target: 5, weight: 12}
  ],
  linkSize: funcify(
    d => d.weight,
    "d => d.weight"
  )
}