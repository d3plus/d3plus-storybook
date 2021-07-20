import React from 'react';
import {argTypes, Plot} from './Plot.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

export default {
  title: "Charts/ScatterPlot",
  component: Plot,
  argTypes
};

const Template = (args) => <Plot config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: [
    {id: "alpha", x: 4, y: 7},
    {id: "beta", x: 5, y: 2},
    {id: "gamma", x: 6, y: 13},
    {id: "delta", x: 2, y: 11},
    {id: "epsilon", x: 5, y: 5},
    {id: "zeta", x: 3, y: 4},
    {id: "eta", x: 2.5, y: 6},
    {id: "theta", x: 5.5, y: 9}
  ],
  groupBy: "id"
};

export const AddingBackgroundImagesToShapes = Template.bind({});
AddingBackgroundImagesToShapes.args = {
  data: "https://oec.world/api/gdp/eci?Year=2019&x=OEC.ECI&y=NY.GDP.MKTP.CD",
  groupBy: "Country",
  shapeConfig: {
    Circle: {
      backgroundImage: funcify(function(d) {return `https://oec.world/images/icons/country/country_${d["Country ID"].slice(2,5)}_circle.png`},
      "function(d) {return `https://oec.world/images/icons/country/country_${d['Country ID'].slice(2,5)}_circle.png`}"),
      label: funcify(function () {return ""}, "function () {return ''}")
    }
  },
  size: "Trade Value",
  sizeMax: 50,
  x: "ECI",
  xConfig: {
    title: "Economic Complexity Index (ECI)"
  },
  y: "Measure",
  yConfig: {
    domain: [100000000, 100000000000000],
    scale: "log",
    title: "Gross Domestic Product (GDP)"
  }
};

export const AddingTrendLineUsingAnnotations = Template.bind()
AddingTrendLineUsingAnnotations.args = {
  data: [
    "https://api.datamexico.org/tesseract/data.jsonrecords?Year=2020&cube=economy_foreign_trade_ent&drilldowns=State&measures=Trade+Value&parents=false&sparse=false",
    "https://api.datamexico.org/tesseract/data.jsonrecords?Year=2020&cube=complexity_eci&drilldowns=State&measures=ECI&parents=false&sparse=false"
  ],
  groupBy: "State ID",
  annotations: [
    {
      data: [
        {
          "id": "Trend",
          "x": 10000000,
          "y": -2.5
        },
        {
          "id": "Trend",
          "x": 1000000000000,
          "y": 2
        },
        {
          "id": "Baseline",
          "x": 10000000,
          "y": 0
        },
        {
          "id": "Baseline",
          "x": 1000000000000,
          "y": 0
        }
      ],
      shape: "Line",
      stroke: funcify(function(d) {
        return d["id"] === "Trend" ? "#6A994E" : "#c3c3c3"
      }, "function(d) {return d['id'] === 'Trend' ? '#6A994E' : '#c3c3c3'}"),
      strokeDasharray: "10",
      strokeWidth: 2
    }
  ],
  label: funcify(function(d) {
    return d["State"]
  }, "function(d) {return d['State']}"),
  legend: false,
  x: "Trade Value",
  xConfig: {
    domain: [10000000, 1000000000000],
    scale: "log"
  },
  y: "ECI",
  yConfig: {
    domain: [-2.5, 2]
  }
}

export const ChangingShapes = Template.bind({});
ChangingShapes.args = {
  data: [
    {"value": 100, "weight": .45,  "name": "alpha"},
    {"value": 70,  "weight": .60,  "name": "beta"},
    {"value": 40,  "weight": -.2,  "name": "gamma"},
    {"value": 15,  "weight": .1,   "name": "delta"},
    {"value": 5,   "weight": -.43, "name": "epsilon"},
    {"value": 1,   "weight": 0,    "name": "zeta"}
  ],
  groupBy: "name",
  shape: funcify(function(d) {
    if (d.name === "alpha" || d.name === "delta" || d.name === "epsilon") return "Rect";
    return "Circle";
  }, "function(d) {if (d.name === 'alpha' || d.name === 'delta' || d.name === 'epsilon') return 'Rect'; return 'Circle';}"),
  size: "value",
  x: "value",
  y: "weight"
};

export const BubbleChart = Template.bind({});
BubbleChart.args = {
  data: [
    {id: "alpha", x: 4, y: 7, value: 240},
    {id: "beta", x: 5, y: 2, value: 120},
    {id: "gamma", x: 6, y: 13, value: 180}
  ],
  groupBy: "id",
  size: "value",
  sizeMax: 90,
  sizeMin: 20
};

export const SortingShapes = Template.bind({});
SortingShapes.args = {
  data: [
    {id: "alpha", time: 4, value: 240},
    {id: "beta", time: 5, value: 120},
    {id: "gamma", time: 6, value: 180},
    {id: "delta", time: 4, value: 240},
    {id: "delta", time: 5, value: 120},
    {id: "delta", time: 6, value: 180}
  ],
  groupBy: "id",
  shape: funcify(function(d) {
    if (d.id === "delta") return "Line";
    return "Circle";
  }, "function(d) {if (d.id === 'delta') return 'Line'; return 'Circle';}"),
  shapeConfig: {
    Line: {
      strokeLinecap: "round",
      strokeWidth: 5
    }
  },
  shapeSort: funcify(function(a, b) {
    return ["Circle", "Line"].indexOf(b) - ["Circle", "Line"].indexOf(a)
  }, "function(a, b) {return ['Circle', 'Line'].indexOf(b) - ['Circle', 'Line'].indexOf(a)}"),
  sizeMin: 20,
  x: "time",
  y: "value"
};
