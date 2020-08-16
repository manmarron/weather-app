import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';


describe("ForecastSummary", () => {

    xit('renders', () => {
    const { asFragment } = render(
        <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
        />
      );
  
      expect(asFragment()).toMatchSnapshot();
    });

    xit('renders the correct props', () => {
        const { getByText } = render(
            <ForecastSummary
            date="mockDate"
            temperature="mockTemperature"
            description="mockDescription"
            icon="mockIcon"
            />
          );

      expect(getByText("mockDate")).toHaveClass("date");
      expect(getByText("mockTemperature")).toHaveClass("temperature");
      expect(getByText("mockDescription")).toHaveClass("description");
      expect(getByText("mockIcon")).toHaveClass("icon");
});

});
