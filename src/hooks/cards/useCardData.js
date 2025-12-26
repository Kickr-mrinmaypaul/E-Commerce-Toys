import React,{useState, useEffect} from 'react'
import cardsData from "../../data/cardsData.json"
import cardBoxData from "../../data/cardBoxData.json"

export default function useCardData() {

    const [newCards, setNewCards] = useState([]);
    const [blindBoxCards, setBlindBoxCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
      
      const fetchCardData = async () =>{

        try {
          setLoading(true);
          // const response = await (api fetch)
          setNewCards(cardsData);
          setBlindBoxCards(cardBoxData);

        } catch (error) {
          setError(error);
        }finally{
          setLoading(false);
        }
      }
      fetchCardData();
    },[]);

    // const getCardById = (id) =>{
    //   return cards.find((card)=> card.id === Number(id));
    // };
    const getCardByTypeAndId = (type, id)=>{
      const source = type === "new" ? newCards : blindBoxCards;

      return source.find((card)=> card.id === Number(id));
    }

    return {newCards, blindBoxCards, loading, error, getCardByTypeAndId};
}
