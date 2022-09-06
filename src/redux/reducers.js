import { createReducer } from "@reduxjs/toolkit";
import { 
  setSeachValueAction, 
  setPageValueAction, 
  setImagesAction, 
  addImagesAction } from './actions'

const initialState = {searchValue: '', page: '', images: []};

export const pexelsReducer = createReducer(initialState, {
  [setSeachValueAction]: (state, action) => {
    return {...state, searchValue: action.payload};
  },

  [setPageValueAction]: (state, action) => {
    return {...state, page: action.payload}
  },

  [setImagesAction]: (state, action) => {
    // console.log('IMAGES:', action.payload);
    // {searchValue: '', images: []}
    // {               , images: action.payload}
    return {...state, images: action.payload}
  },

  [addImagesAction]: (state, action) => {
    return { ...state, images: [...state.images, ...action.payload]}
  }

})
