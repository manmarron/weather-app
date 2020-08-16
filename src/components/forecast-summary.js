import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  const { 
    date,
    temperature,
    description,
    icon,
    onSelect
  } = props;

  return (
    <div className="forecast-summary">
      <div className="date" data-testid="date-id">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {description}
      </div>
      <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" />
      </div>
      <button value={date} onClick={() => onSelect(date)}>
        More Details
      </button>
      </div>
  );
};





ForecastSummary.propTypes = {
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.number,
  };
export default ForecastSummary;
