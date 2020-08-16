import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import './styles/app.css';
import './styles/forecast-summaries.css';
import './styles/forecast-summary.css';
import './styles/forecast-details.css';
import './styles/location.css';
import ForecastDetails from './components/forecast-details';

const App = props => {
  const { location, forecasts } = props;

  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);


  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
  <div className="forecast">
    <LocationDetails
      city={location.city}
      country={location.country}
    />
    <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
    {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
  </div>
)};


App.propTypes = {
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
  };
  
export default App;