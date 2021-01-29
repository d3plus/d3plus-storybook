import React from 'react';
import {Treemap} from './Treemap';

export default {
  title: "Treemap",
  component: Treemap
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
};

const Template = (args) => <Treemap config={args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {parent: "Group 1", id: "alpha", value: 29},
    {parent: "Group 1", id: "beta", value: 10},
    {parent: "Group 1", id: "gamma", value: 2},
    {parent: "Group 2", id: "delta", value: 29},
    {parent: "Group 2", id: "eta", value: 25}
  ],
  groupBy: "id"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
