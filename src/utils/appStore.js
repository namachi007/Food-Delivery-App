import {configureStore} from '@reduxjs/toolkit';
import cartRedure from './cartSlice';

const appStore = configureStore({
    reducer:{
        cart: cartRedure,
    }
    
});


export default appStore;