import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventDataType } from "./GetDataSlice";

type SelectedEventState = {
  selectedEvent: EventDataType;
};

const initialState: SelectedEventState = {
  selectedEvent: {
    artist: "",
    type: "",
    img: "",
    status: "",
    city: [],
    frontSeatPrice: "",
    midSeatPrice: "",
    backSeatPrice: "",
  },
};

const SelectedEvent = createSlice({
  name: "SelectedSlice",
  initialState,
  reducers: {
    getEvent: (
      state: SelectedEventState,
      action: PayloadAction<EventDataType>
    ) => {
      const {
        artist,
        type,
        img,
        status,
        city,
        frontSeatPrice,
        midSeatPrice,
        backSeatPrice,
      } = action.payload;
      state.selectedEvent = action.payload;
      state.selectedEvent = {
        artist: artist,
        type: type,
        img: img,
        status: status,
        city: city,
        frontSeatPrice: frontSeatPrice,
        midSeatPrice: midSeatPrice,
        backSeatPrice: backSeatPrice,
      };
    },
  },
});

export const { getEvent } = SelectedEvent.actions;

export default SelectedEvent.reducer;
