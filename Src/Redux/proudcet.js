// import {createSlice} from "@reduxjs/toolkit";

// const Proudcet=createSlice({
//     name:'Proudcet',
//     initialState:{
//         Proudcet:[],
//     },
//     reducers:{
//         list:(state, action) => {
//             const itemInCart = state.Proudcet.find((item) => item._id === action.payload.id);
//             if (itemInCart) {
//               itemInCart.quantity++;
//             } else {
//               state.Proudcet.push({ ...action.payload, quantity: 1 });
//             }
//           },
//         },

//     }
// );
// export const cardReducer=Proudcet.reducer;
// export const {list}=Proudcet.actions;


import { createSlice } from '@reduxjs/toolkit';

const Proudcet = createSlice({

  name: 'cart1',
  initialState: {
    cart1:[],
  },
  reducers: {
    addToCart: (state, action) => { 
      const itemInCart = state.cart1.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart1.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart1.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart1.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart1.filter((item) => item.id !== action.payload);
      state.cart1 = removeItem;
     
    },
  },
});

export const cartReducer = Proudcet.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = Proudcet.actions;
    
