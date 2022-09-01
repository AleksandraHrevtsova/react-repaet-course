import { createReducer } from "@reduxjs/toolkit";
import {setSeachValueAction, setImagesAction} from './actions'

const initialState = {searchValue: '', images: []};

export const pexelsReducer = createReducer(initialState, {
  [setSeachValueAction]: (state, action) => {
    return {...state, searchValue: action.payload};
  },

  [setImagesAction]: (state, action) => {
    console.log('IMAGES:', action.payload);
    // {searchValue: '', images: []}
    // {               , images: action.payload}
    return {...state, images: action.payload}
  }
})
