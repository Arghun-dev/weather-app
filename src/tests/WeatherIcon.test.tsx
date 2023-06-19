import { render, screen } from "@testing-library/react";
import WeatherIcon from "components/WeatherIcon";

describe("WeatherIcon component", () => {
  it("renders the correct weather icon when iconId is provided", () => {
    const iconId = "01d";

    render(<WeatherIcon iconId={iconId} />);

    const expectedIconUrl = "http://openweathermap.org/img/w/01d.png";
    const imgElement = screen.getByTestId("weather-icon");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", expectedIconUrl);
  });

  it("renders nothing when iconId is not provided", () => {
    render(<WeatherIcon iconId="" />);

    const imgElement = screen.queryByRole("img");
    expect(imgElement).not.toBeInTheDocument();
  });
});
