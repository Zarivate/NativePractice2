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
      // Loop through basket and see if the passed in item's id matches with any of those already existing
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // Copy of basket
      let newBasket = [...state.items];

      // If any matching item is found, the index value should be greater than 0
      if (index >= 0) {
        // Cut the found item out
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.payload.id}) as does not exist in basket`
        );
      }

      // Replace old basket items with newly spliced copy of basket
      state.items = newBasket;
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

export const basketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
