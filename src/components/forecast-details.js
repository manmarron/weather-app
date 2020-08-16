import React from 'react';
import moment from 'moment';
import PropTypes from "prop-types";

const ForecastDetails = props => {
  const { 
    date,
    temperature,
    humidity,
    wind,
  } = props.forecast;
 
  return (
    <div className="forecast-details">
      <div className="date">{moment(date).format("ddd Do MMM")}</div>
      <div className="temperatureMax"><b>Max Temp:</b> {temperature.max}&deg;c</div>
      <div className="temperatureMin"><b>Min Temp:</b> {temperature.min}&deg;c</div>
      <div className="humidity">Humidity: {humidity}</div>
      <div className="windSpeed">Wind Speed: {wind.speed}mph</div>
      <div className="windDirection">Wind Direction: {wind.direction}</div>
    </div>
  );
};

ForecastDetails.prototype = {
  forecast: PropTypes.object.isRequired,
};

  
  export default ForecastDetails;

