import React from 'react';
import PropTypes from 'prop-types';

import {Treemap as D3plusTreemap} from "d3plus-react";
export const Treemap = ({config}) => <D3plusTreemap config={config} />;

Treemap.propTypes = {
  /**
   * Sets the primary data array to be used when drawing the visualization. The value passed should be an *Array* of objects or a *String* representing a filepath or URL to be loaded.
   */
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ])
    )
  ]),
  /**
   * Unique key in the data array to match on.
   */
  groupBy: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
      ])
    )
  ]).isRequired
};

Treemap.defaultProps = {
  data: [],
  groupBy: "id"
};
