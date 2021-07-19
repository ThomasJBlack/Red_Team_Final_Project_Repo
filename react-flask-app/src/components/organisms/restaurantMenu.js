import styled from "styled-components";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import MaialinaBanner from '../../images/MaialinaPizzeriaNapoletana-banner.png';
import AlehouseLogo from '../../images/MoscowAlehouse-logo.png';
import SangriaLogo from '../../images/SangriaGrill-logo.png';
import DescriptionBox from '../atoms/descriptionBox';

import { useState, useEffect } from "react";

const MenuWrapper = styled.div`
    position: relative;
`;




const RestaurantMenu = ({ setUsers }) => {

    useEffect(() => {
        fetch("/user").then(res => res.json()).then(data => {
            console.log(data);
            setUsers(data);
        });
    }, []);

    return (
        <MenuWrapper>
            <div>
                <img src={MaialinaBanner} />
            </div>
            <DescriptionBox />
        </MenuWrapper>
    );
}

export default RestaurantMenu;