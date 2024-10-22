import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios';

const ADD_CART = 'ADD_CART';
const GET_CATEGORIES = 'GET_CATEGORIES';
const DECREMENT_CART = 'DECREMENT_CART';
const DELETE_CART = 'DELETE_CART';

export const getCategories = () =>{
    let action = createAction(GET_CATEGORIES);
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => dispatch(action(data)))
    }
};

export const addCart = createAction('ADD_CART');
export const decrementCart = createAction('DECREMENT_CART');
export const deleteCart = createAction('DELETE_CART');

const initialState = {
    categories: [],
    cart: [],
}


export default createReducer(initialState, (builder)=>{
    builder
    .addCase(GET_CATEGORIES, (state, action)=>{
        state.categories = action.payload
    })
    .addCase(ADD_CART, (state, action)=>{
        let object = action.payload
        const idx = state.cart.findIndex(item => object.id === item.id);
        if(idx < 0){
            state.cart = [{
                ...object,
                count: 1
            }, ...state.cart]
        } else{
            state.cart[idx].count++
            state.cart = [...state.cart]
        }
    })
    .addCase(DECREMENT_CART, (state, action)=>{
        let object = action.payload
        const idx = state.cart.findIndex(item => object.id === item.id);
        state.cart[idx].count--
        state.cart = [...state.cart]

    })
    .addCase(DELETE_CART, (state, action)=>{
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
     })
 
});
