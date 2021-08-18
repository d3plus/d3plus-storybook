import React from 'react';
import { argTypes, Geomap } from './Geomap.args';
import configify from "../helpers/configify";
import funcify from "../helpers/funcify";

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

export const ChangingCoordinatePointSizes = Template.bind({});
ChangingCoordinatePointSizes.args = {
  data: "https://d3plus.org/data/city_coords.json",
  groupBy: "slug",
  colorScale: "dma_code",
  label: funcify(
    d => d.city + ", " + d.region, 
    `d => d.city + ", " + d.region`
  ),
  point: funcify(
    d => [d.longitude, d.latitude], 
    "d => [d.longitude, d.latitude]"
  ),
  pointSize: funcify(
    d => d.dma_code, 
    "d => d.dma_code"
  ),
  pointSizeMin: 1,
  pointSizeMax: 10
}

export const ChangingMapProjections = Template.bind({});
ChangingMapProjections.args = {
  data: [],
  projection: "geoMercator",
  topojson: "https://oec.world/topojson/world-50m.json",
  topojsonFilter: funcify(
    d => d.id !== "ata", 
    "d => d.id !== 'ata'"
  )
};

export const ChangingGeomapTiles = Template.bind({});
ChangingGeomapTiles.args = {
  tileUrl: "https://tile.opentopomap.org/{z}/{x}/{y}.png"
}

export const ChangingTheFallbackTopojsonFill = Template.bind({});
ChangingTheFallbackTopojsonFill.args = {
  data: "https://datausa.io/api/data?PUMS%20Industry=481&drilldowns=PUMA&measure=Total%20Population,ygipop%20RCA,Record%20Count&Record%20Count>=5",
  groupBy: "ID PUMA",
  colorScale: "Total Population",
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/Puma.json",
  topojsonFill: "#ffcccc"
}

export const ChoropletWithCustomColors = Template.bind({});
ChoropletWithCustomColors.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  colorScaleConfig: {
    color: ["red", "orange", "yellow", "green", "blue"]
  },
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/State.json"
};

export const ChoropletWithJenksBreaks = Template.bind({});
ChoropletWithJenksBreaks.args = {
  data: "https://datausa.io/api/data?PUMS%20Occupation=399011&drilldowns=PUMA&measure=ygopop%20RCA,Record%20Count&Record%20Count%3E=5&Year=2019",
  groupBy: "ID PUMA",
  colorScale: "ygopop RCA",
  colorScaleConfig: {
    scale: "jenks"
  },
  topojson: "https://datausa.io/topojson/Puma.json",
  projection: "geoAlbersUsa",
};

export const CoordinatePointsOnAMap = Template.bind({});
CoordinatePointsOnAMap.args = {
  data: "https://d3plus.org/data/city_coords.json",
  groupBy: "slug",
  colorScale: "dma_code",
  colorScaleConfig: {
    color: ["red", "orange", "yellow", "green", "blue"]
  },
  point: funcify(
    d => [d.longitude, d.latitude], 
    "d => [d.longitude, d.latitude]"
  )
}

export const CustomCoordinatePointZoom = Template.bind({});
CustomCoordinatePointZoom.args = {
  fitObject: {
    "type": "Topology",
    "objects": {
      "custom-bounds": {
        "type": "GeometryCollection",
        "geometries":[
          {
            "type": "MultiPoint",
            "coordinates": [[-160, 70], [170, -55]]
          }
        ]
      }
    }
  }
}

export const DisableGeomapZooming = Template.bind({});
DisableGeomapZooming.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  ocean: "transparent",
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/State.json",
  zoom: false
}

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
  topojsonFilter: funcify(
    d => d.id !== "ata", 
    "d => d.id !== 'ata'"
  )
};

export const RemovingBackgroundOceanAndTilesFromAGeomap = Template.bind({});
RemovingBackgroundOceanAndTilesFromAGeomap.args = {
  data: "https://datausa.io/api/data?measure=Diabetes%20Prevalence&drilldowns=State&Year=2021",
  groupBy: "ID State",
  colorScale: "Diabetes Prevalence",
  colorScaleConfig: {
    axisConfig: {
      tickFormat: funcify(
        d => `${(d * 100).toFixed(1)}%`, 
        "d => `${(d * 100).toFixed(1)}%`"
      )
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
      tickFormat: funcify(
        d => `${(d * 100).toFixed(1)}%`, 
        "d =>`${(d * 100).toFixed(1)}%`"
      )
    }
  },
  projection: "geoAlbersUsa",
  topojson: "https://datausa.io/topojson/State.json"
};
