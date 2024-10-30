import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   dataList: [],
};

const DataSlice = createSlice({
   name: "DataSlice",
   initialState,
   reducers: {
      setupData(state, action) {
         state.dataList = action.payload;
      },
   },
});

export const { setupData } = DataSlice.actions;
export default DataSlice.reducer;
