import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./componant/ProductSlice";

export default configureStore({
  reducer: {
    product : ProductSlice
    
  },
});