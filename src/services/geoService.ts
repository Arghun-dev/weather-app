import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TagTypeEnums } from "types/TagTypesEnums";

interface IGetGeoLocationQueries {
  cityName: string;
}

export const geoService = createApi({
  reducerPath: "geoService",
  tagTypes: [TagTypeEnums.GEO_LOCATION],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_API,
  }),

  endpoints: (builder) => ({
    getGeoLocation: builder.query({
      query: ({ cityName }: IGetGeoLocationQueries) =>
        `geo/1.0/direct?q=${cityName}&appid=${process.env.REACT_APP_OPENMAP_API_KEY}`,
      providesTags: [TagTypeEnums.GEO_LOCATION],
    }),
  }),
});

export const { useGetGeoLocationQuery } = geoService;
export const { getGeoLocation } = geoService.endpoints;
