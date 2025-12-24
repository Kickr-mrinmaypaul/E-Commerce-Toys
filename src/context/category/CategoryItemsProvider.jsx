import React,{useContext} from 'react'
import CategoryItemsContext from './categoryItemsContext';
import useCategoryItems from '../../hooks/category/useCategoryItems';

function CategoryItemsProvider({children, categoryId}) {

    const {categoryItems, error, loading} = useCategoryItems(categoryId);

  return (
    <CategoryItemsContext.Provider value={{categoryItems, error, loading}}>
        {children}
    </CategoryItemsContext.Provider>
  )
}

export default CategoryItemsProvider;