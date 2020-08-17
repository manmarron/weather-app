import React, { useState, useEffect }  from 'react';
import axios from "axios";
//components
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/forecast-details';
import SearchForm from './components/search-form';
//styles
import './styles/app.css';

const App = props => {

//hooks  
  const [forecasts, setSelectedForecasts] = useState([]);
  const [Location, setSelectedLocation] = useState({ city: "", country: ""});
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
      async function fetchData() {
        const response = await axios.get(
          "https://mcr-codes-weather.herokuapp.com/forecast"
        );
        setSelectedLocation(response.data.location);
        setSelectedForecasts(response.data.forecasts);
      }
      fetchData();
    }, []);

//methods
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value)
  }


  const searchFunction = (event) => {
    async function fetchData() {
      const response = await axios.get(
        `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`
      );
      setSelectedLocation(response.data.location);
      setSelectedForecasts(response.data.forecasts);
    }
    fetchData();
  }
  
//render components
  return (
  <div className="forecast">
    <LocationDetails city={Location.city} country={Location.country}/>   
    <SearchForm value={searchText} handleSearch={handleInputChange} searchFunction={searchFunction}/>
    <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect}/>
    {selectedForecast && <ForecastDetails forecast={selectedForecast}/>}
  </div>
)};

export default App;