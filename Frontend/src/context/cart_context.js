import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();
// const getLocalCartData = () =>{
//  let localCartData = localStorage.getItem("yourcart");
//  if (localCartData == []){
//   return [];
//  } else {
//   return JSON.parse(localCartData)
//  }
// };
const initialState = {
  cart: [],
  // cart:getLocalCartData,
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const setDecrease = (id) =>{
    dispatch ({type:"SET_DECREMENT",payload:id})
  }
  const setIncrement = (id) =>{
    dispatch ({type:"SET_INCREMENT",payload:id})
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart =() =>{
    dispatch({ type: "CLEAR_CART"});
  }
useEffect(() =>{
  dispatch({type:"CART_TOTAL_ITEM"})
  dispatch({type:"CART_TOTAL_PRICE"});
  localStorage.setItem("yourcart",JSON.stringify(state.cart));
},[state.cart]
);
  return (
    <CartContext.Provider value={{ ...state,
     addToCart, 
     removeItem,
     clearCart,
     setDecrease,
     setIncrement }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };