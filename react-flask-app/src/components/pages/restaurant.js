import styled from 'styled-components';
import react from 'react';

import Header from '../organisms/header';
import SideBar from '../organisms/sidebar';
import RestaurantMenu from '../organisms/restaurantMenu';
import RestaurantOptions from '../organisms/restaurantOptions';

const BodyWrapper = styled.body `
margin: 0;
padding: 0;
overflow-x: hidden;
`;

const MainContentBox = styled.div `
    padding-top: 120px;
    padding-right: 200px;
`;

const Restaurant = () => {
    return (
        <BodyWrapper>
            <Header/>
            <SideBar />
            <MainContentBox>
                <RestaurantOptions/>
            </MainContentBox> 
        </BodyWrapper>
    )
}

export default Restaurant;