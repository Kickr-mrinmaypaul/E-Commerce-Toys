import React from 'react'
import { Element } from "react-scroll";
import Banner from '../../components/banner/Banner';
import NewCardItemList from '../../components/cards/NewCardItemList';
import CardLists from '../../components/cards/CardLists';
import RecommendedCards from '../card/RecommendedCards';
import MeetYourFriends from '../card/MeetYourFriends';
import PopularSearch from '../popularSearch/PopularSearch';
import IpProduct from '../product/IpProduct';

export default function Home() {
  return (
    <div>
        <Element name="Banner" className='min-h-screen'><Banner/></Element>
        <Element name="NewCardItemList" className=" min-h-screen"><NewCardItemList/></Element>
        <Element name="CardList" className=' min-h-screen'><CardLists/></Element>
        <Element name="PopularSearch" className=' min-h-screen'><PopularSearch/></Element>
        <Element name="IpProduct" className=' min-h-screen'><IpProduct/></Element>
        <Element name='MeetYourFriends' className=' min-h-screen'><MeetYourFriends/></Element>
        <Element name='RecommendedCards' className=' min-h-screen'><RecommendedCards/></Element>
    </div>
  )
}
