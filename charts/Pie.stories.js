import React from 'react';
import {argTypes, Pie} from './Pie.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/Pie",
  component: Pie,
  argTypes
};

const Template = (args) => <Pie config={configify(args)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "White Health Center Patients", value: 40},
    {id: "Black Health Center Patients", value: 20},
    {id: "Hispanic Health Center Patients", value: 25},
    {id: "Asian Health Center Patients", value: 10},
    {id: "American Indian Health Center Patients", value: 5}
  ],
  groupBy: "id",
  value: "value"
};