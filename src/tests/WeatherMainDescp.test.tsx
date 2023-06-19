import { render, screen } from "@testing-library/react";

import WeatherMainDescp from "components/WeatherMainDescp";

describe("WeatherMainDescp component", () => {
  it("displays the correct weather main and description", () => {
    const main = "Clouds";
    const description = "overcast clouds";

    render(<WeatherMainDescp main={main} description={description} />);

    const expectedText = "Clouds (overcast clouds)";
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
