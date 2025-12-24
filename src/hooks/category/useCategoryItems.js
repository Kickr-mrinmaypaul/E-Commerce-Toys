import React,{useState, useEffect} from "react";

export default function useCategoryItems (categoryId){
    const [categoryItems, setCategoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!categoryId) return;

        const fetchData = async()=>{
            try {
                setLoading(true);
                setError(nul);
                // const response = await fetch("api call/${category}");   // API CALL
                setCategoryItems(response);
            } catch (error) {
                setError(error);
                console.error(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[categoryId])
    
    return {categoryItems, loading, error}
}