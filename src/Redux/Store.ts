import { configureStore } from "@reduxjs/toolkit";
import GetDataSlice from "./GetDataSlice.ts";
import SelectedEvent from "./SelectedEvent.ts";
import GetDetails from "./GetDetails.ts";

export const store = configureStore({
  reducer: {
    getData: GetDataSlice,
    selectedEvent: SelectedEvent,
    getDetails: GetDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
