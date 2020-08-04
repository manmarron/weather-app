import React from 'react';
import PropTypes from 'prop-types';


const ForecastSummary = props => <div className="forecast-summary">
    {props.date}, {props.description}, {props.icon}, {props.temperature.max}
    </div>;


ForecastSummary.propTypes = {
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.string,
  };
export default ForecastSummary;