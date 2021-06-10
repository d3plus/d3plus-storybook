import React from 'react';
import {argTypes, Donut} from './Donut.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/Donut",
  component: Donut,
  argTypes
};

const Template = (args) => <Donut config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {Topping: "Powdered sugar", Sold: 40},
    {Topping: "Cinnamon", Sold: 20},
    {Topping: "Sprinkles", Sold: 25},
    {Topping: "Fruits", Sold: 30},
    {Topping: "Cream", Sold: 15}
  ],
  groupBy: "Topping",
  value: "Sold"
};