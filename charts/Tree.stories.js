import React from 'react';
import {argTypes, Tree} from './Tree.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/Tree",
  component: Tree,
  argTypes
};

const Template = (args) => <Tree config={configify(args, argTypes)} />;

/**
 export const GettingStarted = Template.bind({});
 GettingStarted.args = {
   
};
*/
