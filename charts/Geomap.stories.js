import React from 'react';
import { argTypes, Geomap } from './Geomap.args';
import configify from "../helpers/configify";

export default {
  title: "Charts/Geomap",
  component: Geomap,
  argTypes
};

const Template = (args) => <Geomap config={configify(args, argTypes)} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  data: []
};

export const ChangingMapProjections = Template.bind({});
ChangingMapProjections.args = {
  data: "https://datausa.io/api/data?Geography=01000US:children&measure=Household%20Income%20by%20Race,Household%20Income%20by%20Race%20Moe&drilldowns=State",
  groupBy: "ID State",
  colorScale: "Household Income by Race",
  projection: "geoAlbersUsa",
  time: "Year",
  topojson: "https://datausa.io/topojson/State.json"
};

export const HiddingTheColorScale = Template.bind({});
HiddingTheColorScale.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  colorScalePosition: false,
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/State.json"
};

export const OverridingDefaultColorscaleBehavior = Template.bind({});
OverridingDefaultColorscaleBehavior.args = {
  data: "https://oec.world/olap-proxy/data?cube=trade_i_baci_a_92&Exporter+Country=eudeu&Year=2018,2019&drilldowns=Year,Importer+Country&locale=en&measures=Trade+Value&growth=Year,Trade+Value&parents=true&sparse=false&properties=Importer+Country+ISO+3",
  groupBy: "ISO 3",
  colorScale: "Trade Value Growth Value",
  colorScaleConfig: {
    scale: "linear"
  },
  projection: "geoMiller",
  topojson: "https://oec.world/topojson/world-50m.json",
  topojsonFilter: function(d) {return d.id !== "ata"}
}


export const RemovingBackgroundOceanAndTilesFromAGeomap = Template.bind({});
RemovingBackgroundOceanAndTilesFromAGeomap.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  colorScaleConfig: {
    axisConfig: {
      tickFormat: function(d) { return `${(d * 100).toFixed(1)}%` }
    }
  },
  ocean: "transparent",
  projection: "geoAlbersUsa",
  tiles: false,
  topojson: "https://datausa.io/topojson/State.json"
};

export const SimpleChoroplethMap = Template.bind({});
SimpleChoroplethMap.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  colorScaleConfig: {
    axisConfig: {
      tickFormat: function(d) { return `${(d * 100).toFixed(1)}%` }
    }
  },
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/State.json"
};
