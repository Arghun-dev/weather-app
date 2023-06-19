import { render, screen } from "@testing-library/react";
import Centigrade from "components/Centigrade";

describe("Centigrade component", () => {
  it("displays the correct temperature in centigrade", () => {
    const tempInKelvin = 300;

    render(<Centigrade temp={tempInKelvin} />);

    const expectedTempInCentigrade = "26.9"; // Assuming converToCentigrad(300) returns 26.85
    expect(screen.getByText(expectedTempInCentigrade)).toBeInTheDocument();
    expect(screen.getByText("℃")).toBeInTheDocument();
  });
});
