import { createSlice } from "@reduxjs/toolkit";
import { events } from "../Data/data.json";

export type EventDataType = {
  artist: string;
  type: string;
  img: string;
  status: string;
  city: string[];
  frontSeatPrice: string;
  midSeatPrice: string;
  backSeatPrice: string;
};

const initialState: EventDataType[] = events;

const GetDataSlice = createSlice({
  name: "GetData",
  initialState,
  reducers: {},
});

export default GetDataSlice.reducer;
