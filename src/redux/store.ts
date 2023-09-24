import { configureStore } from "@reduxjs/toolkit";
import { userReducer, marketReducer } from "./slices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    marketplace: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
