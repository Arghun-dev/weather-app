interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IDailyFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface IDailyTemp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface ICurrentWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: number;
}

export interface IDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IDailyFeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: IDailyTemp;
  uvi: number;
  weather: IWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface IWeatherData {
  current: ICurrentWeather;
  daily: IDaily[];
}
