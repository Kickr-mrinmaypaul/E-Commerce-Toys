import React,{useState, useMemo} from 'react'
import CardContext from './CardContext';
import useCardData from '../../hooks/cards/useCardData';

function CardContextProvider({children}) {

    const {newCards, blindBoxCards, loading, error, getCardByTypeAndId} = useCardData();

    const [cart, setCart] = useState([]);

    const addToCart = (card) =>{
      setCart((prev)=> [...prev, card]);
    }

    const value = useMemo(()=>({
      newCards,
      blindBoxCards,
      cart,
      loading,
      error,
      addToCart,
      getCardByTypeAndId,
    }),[cart,newCards, blindBoxCards, loading, error]);

  return (
    <CardContext.Provider value={value}>
        {children}
    </CardContext.Provider>
  )
}

export default CardContextProvider;