import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Keep whatever was already in the basket using the spread operater, and add to the end whatever was in the payload
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Gives access to global store so items can be pulled from basket
export const selectBasketItems = (state) => state.basket.items;

// Filter out the items in the basket that match the id passed in, will return an array of only the specified ids
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
