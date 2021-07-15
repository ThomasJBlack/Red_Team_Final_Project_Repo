import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Header from '../organisms/header';
import SideBar from '../organisms/sidebar';
import RestaurantMenu from '../organisms/restaurantMenu';
import RestaurantOptions from '../organisms/restaurantOptions';
import { darkOrange } from '../../helpers/colors';

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
    const [menu, setMenu] = useState(false);
    const [options, setOptions] = useState(false);

    return (
        <BodyWrapper>
            <Header/>
            <SideBar />
            <TopRightPadding>
                <MainContentBox>
                    <RestaurantOptions/>
                </MainContentBox>                 
            </TopRightPadding>

        </BodyWrapper>
    )
}

export default Restaurant;