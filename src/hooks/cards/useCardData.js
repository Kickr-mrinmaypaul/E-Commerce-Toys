import React,{useState, useEffect} from 'react'

export default function useCardData(apiEndpoints) {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
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
    },[apiEndpoints]);

    return {cardData, loading, error};
    
}
