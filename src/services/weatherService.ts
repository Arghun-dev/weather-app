import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TagTypeEnums } from "types/TagTypesEnums";

interface IGetWeatherQuery {
  lat: number;
  lon: number;
}

export const weatherService = createApi({
  reducerPath: "weatherService",
  tagTypes: [TagTypeEnums.WEATHER],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_API,
  }),

  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon }: IGetWeatherQuery) =>
        `data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENMAP_API_KEY}`,
      providesTags: [TagTypeEnums.WEATHER],
    }),
  }),
});

export const { useGetWeatherQuery } = weatherService;
export const { getWeather } = weatherService.endpoints;
