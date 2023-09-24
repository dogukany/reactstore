import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("marketplace/fetchProducts", async () => {
  const response = await fetch("https://honey-badgers-ecommerce.glitch.me/products");
  const data = await response.json();
  return data;
});

