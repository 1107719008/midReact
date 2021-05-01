import { createContext, useReducer } from "react";
import products from "../json/products.json";
import useReducerWithThunk from 'use-reducer-thunk';
import {
    TEST,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
} from "../utils/constants";

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const initialState = {
    page: {
       products,
    },
    navBar: {
       activeItem: "/",
    },
    test:"unchanged",
    cartItems: [],
 };



function reducer(state, action){
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id);
            if (product) {
            cartItems = state.cartItems.map((x) =>
                x.id === product.id ? item : x
            );
            return { ...state, cartItems };
            }
            cartItems = [...state.cartItems, item];
            return { ...state, cartItems };
        case REMOVE_CART_ITEM:
            cartItems = state.cartItems.filter((x) => x.id !== action.payload);
            return { ...state, cartItems };
        case TEST:
            return{
                ...state,
                test: action.payload,
            }
    }
}

export function StoreProvider(props){
    const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");
    const value = {state, dispatch};
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}