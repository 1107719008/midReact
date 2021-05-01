import product from "../json/products.json";

import { 
    TEST,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
} from "../utils/constants";

export const onChangeC = ( dispatch ) => {
    
    dispatch({
        type:TEST,
        payload:"Changed",
    });
}

export const CartItemAdd = ( dispatch, product ) =>{
    const item = {
        id: product.id,
        title: product.class_name,
        image: product.class_cover,
        price: product.class_price,
    }
    dispatch({
        type: ADD_CART_ITEM,
        payload: item
    })
}

export const cartItemRemove = (dispatch, productId) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: productId,
    });
  };