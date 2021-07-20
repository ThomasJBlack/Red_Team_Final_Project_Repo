import styled from "styled-components";
import { useState, useEffect } from "react";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import MaialinaBanner from '../../images/MaialinaPizzeriaNapoletana-banner.png';
import AlehouseBanner from '../../images/MoscowAlehouse-logo.png';
import SangriaBanner from '../../images/SangriaGrill-logo.png';
import DescriptionBox from '../atoms/descriptionBox';

const MenuWrapper = styled.div `
    position: relative;
`;


const RestaurantMenu = (props) => {  

    const [restaurants, setRestaurants] = useState();

    useEffect(() => {
		fetch("/restaurant").then(res => res.json()).then(data => {
			console.log(data);
			setRestaurants(data);
		});
	}, []);
    
    const restaurantImages = [
        {
            id: 1,
            src: MaialinaBanner
        },
        {
            id: 2,
            src: AlehouseBanner,
        },
        {
            id: 3,
            src: SangriaBanner,
        }
    ]

    return (
        <MenuWrapper>
            <div>
                <img  src={MaialinaBanner}/>
            </div>
            <DescriptionBox />
        </MenuWrapper>
    );
}

export default RestaurantMenu;