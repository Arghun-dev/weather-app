export const dailyWeatherMockData = [
  {
    clouds: 20,
    dew_point: 280,
    dt: 1624003200,
    feels_like: {
      day: 300,
      night: 290,
      eve: 295,
      morn: 285,
    },
    humidity: 80,
    moon_phase: 0.5,
    moonrise: 1624003200,
    moonset: 1624046400,
    pop: 0.1,
    pressure: 1013,
    sunrise: 1623981600,
    sunset: 1624035200,
    temp: {
      day: 300,
      min: 290,
      max: 310,
      night: 290,
      eve: 295,
      morn: 285,
    },
    uvi: 5,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    wind_deg: 270,
    wind_gust: 5,
    wind_speed: 3,
  },
];

export const currentWeatherMockData = {
  clouds: 0,
  dew_point: 269.82,
  dt: 1687090198,
  feels_like: 305.89,
  humidity: 8,
  pressure: 1008,
  sunrise: 1687051101,
  sunset: 1687103556,
  temp: 308.66,
  uvi: 5.18,
  visibility: 10000,
  weather: [{ description: "clear sky", icon: "01d", id: 800, main: "Clear" }],
  wind_deg: 270,
  wind_speed: 10.29,
};

export const weatherMockData = {
  current: currentWeatherMockData,
  daily: dailyWeatherMockData,
  lat: 51.5073,
  lon: -0.1276,
};
