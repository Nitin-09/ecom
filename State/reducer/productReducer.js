import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '@/utils/request';
import axios from 'axios';

export const addProduct = createAsyncThunk('add/product', async (productData, thunkAPI) => {
  try {
    // Make the API request to add the product using Axios
    const response = await axios.post('http://localhost:3000/api/products', productData);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and reject with a custom error message
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchProducts = createAsyncThunk('get/products', async (_, thunkAPI) => {
  try {
    const response = await request({}, 'http://localhost:3000/api/products');
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchProductBySlug = createAsyncThunk('get/product/slug', async (data, thunkAPI) => {
  try {
    const response = await request({}, `http://localhost:3000/api/products/${data.query}`);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const buildGetProductsWithSlug=(builder)=>{
  builder
      .addCase(fetchProductBySlug.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      });
}
const buildGetProducts=(builder)=>{
  builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      });
}

const buildAddProduct = (builder) => {
  builder
    .addCase(addProduct.pending, (state) => {
      state.loading = 'pending';
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.loading = 'fulfilled';
      // Assuming the response contains the newly added product
      state.data.push(action.payload.product);
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload;
    });
};

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [], loading: 'idle', error: null, selectedProduct: {} },
  reducers: {},
  extraReducers: (builder) => {
    buildGetProducts(builder);
    buildGetProductsWithSlug(builder);
    buildAddProduct(builder);
  },
});

export default productsSlice.reducer;
