import product from "../json/products.json";

import {
    TEST,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
} from "../utils/constants";
import {
    getProducts,
    getProductById,
    feedProducts,
    signInWithEmailPassword,
    registerWithEmailPassword,
    signOut,
    updateUserInfoApi,
    createOrderApi,
    getOrderById,
    checkLoginApi,
  } from "../api";
export const onChangeC = (dispatch) => {

    dispatch({
        type: TEST,
        payload: "Changed",
    });
}

export const CartItemAdd = (dispatch, product) => {
    const item = {
        id: product.id,
        title: product.class_name,
        image: product.class_cover,
        price: product.class_price,
    };
    dispatch({
        type: ADD_CART_ITEM,
        payload: item,
    });
};

export const cartItemRemove = (dispatch, productId) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: productId,
    });
};
export const loginToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
      const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
      dispatch({
        type: SUCCESS_LOGIN_REQUEST,
        payload: user.user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const rememberLoginUser = (dispatch, remember) => {
    dispatch({
      type: REMEMBER_LOGIN,
      payload: remember,
    })
  }
  
  export const registerToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
      const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
      console.log(user)
      dispatch({
        type: SUCCESS_REGISTER_REQUEST,
        payload: user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_REGISTER_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const updateUserInfo = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_UPDATE_USERINFO });
    try {
      const user = await updateUserInfoApi(
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      dispatch({
        type: SUCCESS_UPDATE_USERINFO,
        payload: user.providerData[0],
      });
    } catch (e) {
      dispatch({
        type: FAIL_UPDATE_USERINFO,
        payload: e.message,
      });
      console.log(e);
    }
  };
  
  export const logoutFromFirebase = async (dispatch) => {
    signOut();
    dispatch({ type: LOGOUT_REQUEST });
  }
  export const checkLogin = (dispatch) => {
    const isLogin = checkLoginApi();
    if(!isLogin) {
      localStorage.removeItem('orderInfo')
      dispatch({ type: LOGOUT_REQUEST });    
    }
    return isLogin;
  }