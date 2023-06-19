import { render, screen } from "@testing-library/react";

import Layout from "components/Layout";
import { ColorEnums } from "types/ColorEnums";

describe("Layout component", () => {
  it("renders children correctly", () => {
    const testMessage = "Test message";

    render(
      <Layout>
        <p>{testMessage}</p>
      </Layout>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("renders the header with the correct title and image", () => {
    render(
      <Layout>
        <p></p>
      </Layout>
    );

    const headerStyle = {
      backgroundColor: ColorEnums.DARK_GREEN,
      display: "flex",
      alignItems: "center",
    };

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveStyle(headerStyle);
    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.getByAltText("app-logo")).toBeInTheDocument();
  });
});
