import React from 'react';
import {argTypes, BarChart} from './BarChart.args';
import configify from "../helpers/configify";

import {formatAbbreviate} from 'd3plus-format';

export default {
  title: "Charts/BarChart",
  component: BarChart,
  argTypes
};

const Template = (args) => <BarChart config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13}
  ],
  groupBy: "id"
};

export const HorizontalBarchart = Template.bind({});
HorizontalBarchart.args = {
  data: [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13}

  ],
  groupBy: "id",
  discrete: "y",
  x: "y",
  xConfig: {
    title: ""
  },
  y: "x"
};

export const PopulationPyramid = Template.bind({});
PopulationPyramid.args = {
  data: [
    {
      "Age range ID": 1,
      "Age range": "0 to 4",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1445122
    },
    {
      "Age range ID": 1,
      "Age range": "0 to 4",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1385933
    },
    {
      "Age range ID": 2,
      "Age range": "5 to 9",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1473968
    },
    {
      "Age range ID": 2,
      "Age range": "5 to 9",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1417319
    },
    {
      "Age range ID": 3,
      "Age range": "10 to 15",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1483727
    },
    {
      "Age range ID": 3,
      "Age range": "10 to 15",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1430083
    },
    {
      "Age range ID": 4,
      "Age range": "15 to 19",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1466289
    },
    {
      "Age range ID": 4,
      "Age range": "15 to 19",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1420257
    },
    {
      "Age range ID": 5,
      "Age range": "20 to 24",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1438000
    },
    {
      "Age range ID": 5,
      "Age range": "20 to 24",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1401017
    },
    {
      "Age range ID": 6,
      "Age range": "25 to 29",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1371191
    },
    {
      "Age range ID": 6,
      "Age range": "25 to 29",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1344048
    },
    {
      "Age range ID": 7,
      "Age range": "30 to 34",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1251238
    },
    {
      "Age range ID": 7,
      "Age range": "30 to 34",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1233884
    },
    {
      "Age range ID": 8,
      "Age range": "35 to 39",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1156915
    },
    {
      "Age range ID": 8,
      "Age range": "35 to 39",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1145477
    },
    {
      "Age range ID": 9,
      "Age range": "40 to 44",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 1038422
    },
    {
      "Age range ID": 9,
      "Age range": "40 to 44",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -1034343
    },
    {
      "Age range ID": 10,
      "Age range": "45 to 49",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 899326
    },
    {
      "Age range ID": 10,
      "Age range": "45 to 49",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -903752
    },
    {
      "Age range ID": 11,
      "Age range": "50 to 54",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 774590
    },
    {
      "Age range ID": 11,
      "Age range": "50 to 54",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -788241
    },
    {
      "Age range ID": 12,
      "Age range": "55 to 59",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 634510
    },
    {
      "Age range ID": 12,
      "Age range": "55 to 59",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -658490
    },
    {
      "Age range ID": 13,
      "Age range": "60 to 64",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 501128
    },
    {
      "Age range ID": 13,
      "Age range": "60 to 64",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -532940
    },
    {
      "Age range ID": 14,
      "Age range": "65 to 69",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 379352
    },
    {
      "Age range ID": 14,
      "Age range": "65 to 69",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -415647
    },
    {
      "Age range ID": 15,
      "Age range": "70 to 74",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 271687
    },
    {
      "Age range ID": 15,
      "Age range": "70 to 74",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -311231
    },
    {
      "Age range ID": 16,
      "Age range": "75 to 79",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 186805
    },
    {
      "Age range ID": 16,
      "Age range": "75 to 79",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -229221
    },
    {
      "Age range ID": 17,
      "Age range": "80+",
      "Sex ID": 1,
      "Sex": "Male",
      "Population": 166789
    },
    {
      "Age range ID": 17,
      "Age range": "80+",
      "Sex ID": 2,
      "Sex": "Female",
      "Population": -235076
    }
  ],
  groupBy: ["Sex"],
  height: 400,
  discrete: "y",
  shapeConfig: {
    label: function(d) {return ""}
  },
  stacked: true,
  tooltipConfig: {
    tbody: [
      ["Age range:", function(d) {return d["Age range"]}],
      ["Population:", function(d) {return formatAbbreviate(Math.abs(d["Population"]))}]
    ]
  },
  x: "Population",
  xConfig: {
    tickFormat: function(d) {
      return formatAbbreviate(Math.abs(d))
    }
  },
  y: "Age range"
};