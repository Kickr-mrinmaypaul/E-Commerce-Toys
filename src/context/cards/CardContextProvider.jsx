import React,{useState, useEffect, useContext} from 'react'
import CardContext from './CardContext';
import useCardData from '../../hooks/cards/useCardData';

function CardContextProvider({children, cartId}) {

    const {cardData, loading, error} = useCardData(cartId);

  return (
    <CardContext.Provider value={{cardData, loading, error}}>
        {children}
    </CardContext.Provider>
  )
}

export default CardContextProvider;