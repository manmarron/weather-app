import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';


describe("ForecastSummary", () => {

    it('renders', () => {
    const { asFragment } = render(
        <ForecastSummary
        Date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
        />
      );
  
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders the correct props', () => {
        const { getByText } = render(
            <ForecastSummary
            Date="mockDate"
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
