import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState();

const slice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: cardsAdapter.addMany,
    removeCard: cardsAdapter.removeOne,
    addToFavourites: (state, { payload }) => {
      cardsAdapter.updateOne(state, { id: payload, changes: { isLiked: true } });
    },
    removeFromFavourites: (state, { payload }) => {
      cardsAdapter.updateOne(state, { id: payload, changes: { isLiked: false } });
    },
  },
});

export const { actions } = slice;
export const selectors = cardsAdapter.getSelectors((state) => state.cards);
export default slice.reducer;
