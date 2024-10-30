import { configureStore } from "@reduxjs/toolkit";
import datareducer from "./DataSlice";

const Store = configureStore({
   reducer: {
      data: datareducer,
   },
});

export default Store;
