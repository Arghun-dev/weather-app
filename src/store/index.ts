import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { weatherService } from "services/weatherService";
import { geoService } from "services/geoService";

export const store = configureStore({
  reducer: {
    [geoService.reducerPath]: geoService.reducer,
    [weatherService.reducerPath]: weatherService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      weatherService.middleware,
      geoService.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
