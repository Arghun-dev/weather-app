import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";

import { weatherMockData } from "mocks/weatherMapMock";
import { store } from "store";

import App from "../App";

const customRender = (ui: any, options = {}): any =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...options,
  });

const server = setupServer(
  rest.get("/geoService", async (req, res, ctx) => {
    return await res(
      ctx.json([{ lat: weatherMockData.lat, lon: weatherMockData.lon }])
    );
  }),
  rest.get("/weatherService", async (req, res, ctx) => {
    return await res(
      ctx.json({
        current: weatherMockData.current,
        daily: weatherMockData.daily,
      })
    );
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

test("renders App component with the correct content", async () => {
  customRender(<App />);

  // Check if the SearchCity component is rendered
  expect(screen.getByTestId("search-city-column")).toBeInTheDocument();

  // Simulate a search term input
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "London" },
  });

  // Check if the loading state is finished and the CurrentWeather and WeatherForecast components are rendered
  await waitFor(() => {
    expect(screen.queryByTestId("weatherData-loading")).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByTestId("current-weather-column")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByTestId("forecast-column")).toBeInTheDocument();
  });
});
