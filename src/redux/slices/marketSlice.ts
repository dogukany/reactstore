import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
import { IMarketState, IProduct } from "../../util/types/sliceTypes";
import { fetchProducts } from "../actions/marketActions";

const initialState: IMarketState = {
  products: [],
  status: "idle",
  error: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProductsByPrice: (state, action) => {
      state.products.sort((a, b) => {
        if (action.payload === "asc") {
          return a.price - b.price;
        } else if (action.payload === "desc") {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        action.payload.forEach((item) => {
          item.id = uuid.v4();
        });

        state.products.push(...action.payload);
        state.status = "idle";
      }
    );
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { sortProductsByPrice } = productsSlice.actions;
export default productsSlice.reducer;
