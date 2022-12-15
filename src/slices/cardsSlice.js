import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState();

const slice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: cardsAdapter.addMany,
    removeCard: cardsAdapter.removeOne,
  },
});

export const { actions } = slice;
export const selectors = cardsAdapter.getSelectors((state) => state.cards);
export default slice.reducer;
