import React from 'react';
import {Treemap} from './Treemap';

export default {
  title: "Charts/Treemap",
  component: Treemap
};

const Template = (args) => <Treemap config={args} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {parent: "Group 1", id: "alpha", value: 29},
    {parent: "Group 1", id: "beta", value: 10},
    {parent: "Group 1", id: "gamma", value: 2},
    {parent: "Group 2", id: "delta", value: 29},
    {parent: "Group 2", id: "eta", value: 25}
  ],
  groupBy: "id"
};
