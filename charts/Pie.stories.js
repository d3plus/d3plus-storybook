import React from 'react';
import {argTypes, Pie} from './Pie.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/Pie",
  component: Pie,
  argTypes
};

const Template = (args) => <Pie config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {Type: "Apple pie", Percentage: 30},
    {Type: "Butter pie", Percentage: 20},
    {Type: "Cherry pie", Percentage: 25},
    {Type: "Lemon pie", Percentage: 15},
    {Type: "Sugar pie", Percentage: 10}
  ],
  groupBy: "Type",
  value: "Percentage"
};