import React from "react";
import {argTypes, Tree} from "../args/Tree.args";
import configify from "../helpers/configify";

export default {
  title: "Advanced/Tree",
  component: Tree,
  argTypes
};

const Template = (args) => <Tree config={configify(args, argTypes)} />;

/**
 export const GettingStarted = Template.bind({});
 GettingStarted.args = {

};
*/
