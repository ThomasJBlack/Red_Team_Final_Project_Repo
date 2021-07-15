import styled from 'styled-components';
import { useState, useEffect } from 'react';

import RestaurantCard from '../molecules/restaurantCard';
import Header from '../organisms/header';
import SideBar from '../organisms/sidebar';
import RestaurantMenu from '../organisms/restaurantMenu';
import { darkOrange } from '../../helpers/colors';

import MaialinaLogo from '../../images/MaialinaPizzeriaNapoletana-logo.png';
import AlehouseLogo from '../../images/MoscowAlehouse-logo.png';
import SangriaLogo from '../../images/SangriaGrill-logo.png';


const BodyWrapper = styled.body `
margin: 0;
padding: 0;
overflow-x: hidden;
`;

const TopRightPadding = styled.div `
    padding-top: 120px;
    padding-right: 200px;
    background-color: ${darkOrange};
`;

const MainContentBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    background-color: ${darkOrange};
    min-height: 100vh;
`;

const Restaurant = () => {
    const [toggleMainContent, setToggleMainContent] = useState(false);

    let cardData = [
        {
            name: 'Maialina Pizzeria Napoletana',
            srcLogo: MaialinaLogo
        },
        {
            name: 'Moscow Alehouse',
            srcLogo: AlehouseLogo
        },
        {
            name: 'Sangria Grill',
            srcLogo: SangriaLogo
        },
    ]

    return (
        <BodyWrapper>
            <Header />
            <SideBar setToggleMainContent={setToggleMainContent} />
            <TopRightPadding>
                <MainContentBox>
                    {
                        toggleMainContent ?
                        <RestaurantMenu /> :
                        cardData.map((data) => <RestaurantCard {...data} setToggleMainContent={setToggleMainContent}/>)
                    }
                </MainContentBox>
            </TopRightPadding>

        </BodyWrapper>
    )
}

export default Restaurant;