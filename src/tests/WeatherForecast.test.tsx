import { render, screen } from "@testing-library/react";

import { dailyWeatherMockData } from "mocks/weatherMapMock";
import WeatherForecast from "components/WeatherForecast";

describe("WeatherForecast component", () => {
  it("renders correct data in each column", () => {
    render(<WeatherForecast forecastData={dailyWeatherMockData} />);

    // Check date column
    const dateElement = screen.getByText("Today");
    expect(dateElement).toBeInTheDocument();

    // Check temperature column
    const tempElement = screen.getByText("26.9");
    expect(tempElement).toBeInTheDocument();

    // Check cloudiness column
    const cloudinessElement = screen.getByText("20%");
    expect(cloudinessElement).toBeInTheDocument();

    // Check Main & Descp column
    const mainAndDescpElement = screen.getByText("Clear (clear sky)");
    expect(mainAndDescpElement).toBeInTheDocument();

    // Check weather icon column
    const iconElement = screen.getByAltText("icon-01d");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/w/01d.png"
    );
  });
});
