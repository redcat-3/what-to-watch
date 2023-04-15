import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchFilmAction, fetchCommentsAction, fetchPromoFilmAction } from '../api-actions';

const initialState: FilmProcess = {
  film: null,
  promo: null,
  comments: [],
  isFilmDataLoading: false,
  isPromoLoading: false,
  isCommentsDataLoading: false,
  isPlayerOpen: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setPlayerOpen: (state, action: PayloadAction<boolean>) => {
      state.isPlayerOpen = action.payload;
    }},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isPromoLoading = false;
      });
  }
});

export const { setPlayerOpen } = filmProcess.actions;
