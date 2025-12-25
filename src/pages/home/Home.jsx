import React from 'react'
import { Element } from "react-scroll";
import Banner from '../../components/banner/Banner';
import NewCardItemList from '../../components/cards/NewCardItemList';
import CardLists from '../../components/cards/CardLists';
import ExploreCategory from '../../components/category/ExploreCategory';
import RecommendedCards from '../card/RecommendedCards';

export default function Home() {
  return (
    <div>
        <Element name="Banner" className='min-h-screen'><Banner/></Element>
        <Element name="NewCardItemList" className=" min-h-screen"><NewCardItemList/></Element>
        <Element name="CardList" className=' min-h-screen'><CardLists/></Element>
        <Element name="ExploreCategory" className=' min-h-screen'><ExploreCategory/></Element>
        <Element name='RecommendedCards' className=' min-h-screen'><RecommendedCards/></Element>
    </div>
  )
}
