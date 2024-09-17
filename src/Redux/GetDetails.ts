import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserSelectionType = {
  name: string;
  location: string;
  seatType: string;
  ticketQuantity: string;
  artist: string;
  seatPrice: string;
  img: string;
};

type UserSelectionState = {
  selectionDetails: UserSelectionType;
};

const initialState: UserSelectionState = {
  selectionDetails: {
    name: "",
    location: "",
    seatType: "",
    ticketQuantity: "",
    artist: "",
    seatPrice: "",
    img: "",
  },
};

const GetDetails = createSlice({
  name: "GetDetails",
  initialState,
  reducers: {
    getUserSelectionDetails: (
      state: UserSelectionState,
      action: PayloadAction<UserSelectionType>
    ) => {
      const {
        name,
        location,
        seatType,
        seatPrice,
        ticketQuantity,
        artist,
        img,
      } = action.payload;
      console.log(action.payload);
      state.selectionDetails = {
        name: name,
        location: location,
        seatType: seatType,
        ticketQuantity: ticketQuantity,
        artist: artist,
        seatPrice: seatPrice,
        img: img,
      };
    },
  },
});

export const { getUserSelectionDetails } = GetDetails.actions;

export default GetDetails.reducer;
