import { createSlice } from "@reduxjs/toolkit";
import { IMarketState } from "../../util/types/sliceTypes";
import { fetchProducts } from "../actions/marketActions";

const initialState: IMarketState = {
  products: [],
  status: "idle",
  error: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.push(...action.payload);
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default productsSlice.reducer;
