import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../util/types/sliceTypes";

const initialState: IUser = {
  email: undefined,
  password: undefined,
  favorites: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (uuid) => uuid !== action.payload
      );
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((uuid) => uuid !== action.payload);
    },
  },
});

export const {
  setUser,
  addToFavorites,
  addToCart,
  removeFromFavorites,
  removeFromCart,
} = userSlice.actions;

export default userSlice.reducer;
