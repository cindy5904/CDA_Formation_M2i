import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [
            { id: 1, name: "Ordinateur portable HP", price: 799.99 },
            { id: 2, name: "Smartphone Samsung Galaxy", price: 699.99 },
            { id: 3, name: "Casque audio Sony", price: 149.99 },
            { id: 4, name: "Caméra numérique Canon", price: 399.99 },
        ],
      counterProduct: 6,
    },
    reducers: {
      addProduct: (state, action) => {
        const { name, price } = action.payload;
        const newProduct = {
          name: name,
          id: Date.now(),
          price: price
        }
  
        state.products.push(newProduct);
        state.counterProduct += 1;
      },
      deleteProduct: (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
        state.counterProduct -= 1;
      },
      updateProduct: (state, action) => {
        const { id, updatedProduct } = action.payload;
        const index = state.products.findIndex((product) => product.id === id);
        if (index !== -1) {
          state.products[index] = { ...state.products[index], ...updatedProduct };
        }
      },
    },
  });
  
  export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
  export default productSlice.reducer;
  