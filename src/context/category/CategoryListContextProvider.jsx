import React,{useState} from 'react'
import CategoryListContext from './categoryListContext'

function CategoryListContextProvider({children}) {

    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch ("API call to get list of category");
            setCategoryList(response);
        } catch (error) {
            setError(error);
        }finally{
            setLoading(false);
        }
    }

  return (
    <CategoryListContext.Provider  value={{fetchData, categoryList, loading, error}}>
        {children}
    </CategoryListContext.Provider>
  )
}

export default CategoryListContextProvider