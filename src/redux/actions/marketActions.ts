import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "marketplace/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    return response.data;
  }
);
