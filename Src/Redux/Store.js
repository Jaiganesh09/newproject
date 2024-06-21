import {configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "../Redux/proudcet";
import { favReducer } from "./FavoriteSlice";


export const Store=configureStore({
    reducer:{
        cart1:cartReducer,
        fav1:favReducer,

},
});
