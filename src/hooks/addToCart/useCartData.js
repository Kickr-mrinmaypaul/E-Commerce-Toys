import React,{useContext} from "react";
import CartContext from "../../context/addToCart/cartContext";

export default function useCratData (){
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}