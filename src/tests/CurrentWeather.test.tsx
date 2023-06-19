import { render, screen } from "@testing-library/react";

import { currentWeatherMockData } from "mocks/weatherMapMock";
import CurrentWeather from "components/CurrentWeather";

describe("CurrentWeather component", () => {
  it("renders correctly with data", () => {
    render(<CurrentWeather currentWeatherData={currentWeatherMockData} />);

    const currentTemp = screen.getByTestId("current-temp");

    expect(currentTemp).toHaveTextContent("35.5");

    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("10.29")).toBeInTheDocument();
    expect(screen.getByText("Clear (clear sky)")).toBeInTheDocument();
  });

  it("renders null when no data", () => {
    const { container } = render(<CurrentWeather currentWeatherData={null} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeNull();
  });
});
