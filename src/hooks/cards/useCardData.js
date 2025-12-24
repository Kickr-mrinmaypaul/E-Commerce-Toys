import React,{useState, useEffect} from 'react'

export default function useCardData(cartId) {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
      if(!cartId) return;
      
      const fetchCardData = async () =>{

        try {
          setLoading(true);
          // const response = await (api fetch)
          //if(!response.ok){
          //throw new error("API response error");
          //}
          // setCardData(response);
        } catch (error) {
          setError(error);
        }finally{
          setLoading(false);
        }
      }
      fetchCardData();
    },[cartId]);

    return {cardData, loading, error};
    
}
