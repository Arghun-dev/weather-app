import { render, fireEvent, screen } from "@testing-library/react";

import SearchCity from "components/SearchCity";

describe("SearchCity component", () => {
  it("displays the correct search term and calls setSearchTerm on change", () => {
    const searchTerm = "London";
    const setSearchTerm = jest.fn();

    render(
      <SearchCity searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue(searchTerm);

    fireEvent.change(inputElement, { target: { value: "New York" } });
    expect(setSearchTerm).toHaveBeenCalledWith("New York");
  });
});
