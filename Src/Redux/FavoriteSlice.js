
import { createSlice } from '@reduxjs/toolkit';

const FavoriteSlice = createSlice({

  name: 'fav1',
  initialState: {
    fav1:[],
  },
  reducers: {

    addProductToMyfav: (state, action) => {

       state.fav1.push({ ...action.payload});
      },
  
      removeFromfav: (state, action) => {
   
       state.fav1 = state.fav1.filter(item => item._id !== action.payload);
   
      },
  
  },
});

export const favReducer = FavoriteSlice.reducer;
export const {
    addProductToMyfav,
    removeFromfav,
} = FavoriteSlice.actions;