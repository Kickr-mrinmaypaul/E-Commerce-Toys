import React,{useEffect, useState} from 'react'
import CartContext from './cartContext'
import useCardData from '../../hooks/cards/useCardData';

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendData = async()=>{
        try {
            setLoading(true);
            // const response = await ("post api",cartItems);
            //console.log(response);
        } catch (error) {
            setError(error)
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    const fetchData = async()=>{
        try {
            setLoading(true);
            //const response = await ("fetch card data");
            //setCartData(response);
        } catch (error) {
            setError(error);
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

  return (
    <CartContext.Provider value={{sendData, fetchData, cartItems, setCartItems, cartData, setCartData, error, loading}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;