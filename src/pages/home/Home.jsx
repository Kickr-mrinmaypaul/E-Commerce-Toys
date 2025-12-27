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
        <Element name="Banner"><Banner/></Element>
        <Element name="NewCardItemList"><NewCardItemList/></Element>
        <Element name="CardList"><CardLists/></Element>
        <Element name="PopularSearch"><PopularSearch/></Element>
        <Element name="IpProduct"><IpProduct/></Element>
        <Element name='MeetYourFriends'><MeetYourFriends/></Element>
        <Element name='RecommendedCards'><RecommendedCards/></Element>
    </div>
  )
}
