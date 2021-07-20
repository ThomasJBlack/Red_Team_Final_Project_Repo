import styled from "styled-components";
import { useState, useEffect } from "react";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import Button, { BlackBtn } from "../atoms/button";
import MaialinaBanner from '../../images/MaialinaPizzeriaNapoletana-banner.png';
import AlehouseBanner from '../../images/MoscowAlehouse-banner.png';
import SangriaBanner from '../../images/SangriaGrill-banner.webp';
import DescriptionBox from '../atoms/descriptionBox';
import MenuItem from '../atoms/menuItem';

import localJsonData from '../../local-restaurant-json-data.json';

const MenuWrapper = styled.div`
    position: relative;
`;

//order card for menu will be here instead of it's own component to save time

const MenuFormContainer = styled.div`
    padding: 30px;
    background-color: darkorange;
    position: relative;
    top: -5px;
    border-top: 3px solid;
`;

const MenuItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid;
    margin-bottom: 30px;
`;

const MenuItemEx = styled.div`
    /* position: relative; */
    /* min-width: 10rem; */
    /* border: 2rem solid red; */

    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    & > button {
        height: 30px;
        border-radius: 2px;
        background-color: black;
        color: orange;
        font-size: 14px;
    }
`;

const ItemDesc = styled.p`
    width: 100%;
    font-style: italic;
`;

const ItemPrice = styled.h5`
    font-size: 18px;
    margin: 0;
    border-bottom: 2px solid;
`;

const RestaurantMenu = ({ currentRestaurant, handleClick }) => {

    const menuData = localJsonData[currentRestaurant[0] - 1];
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
        fetch("/restaurant").then(res => res.json()).then(data => {
            setRestaurants(data);
        });
    }, []);

    const restaurantImages = [
        {
            id: 1,
            name: '',
            src: MaialinaBanner
        },
        {
            id: 2,
            name: '',
            src: SangriaBanner,
        },
        {
            id: 3,
            name: '',
            src: AlehouseBanner,
        }

    ]

    return (
        <MenuWrapper>
            <div>
                <img src={restaurantImages[currentRestaurant[0] - 1].src} />
                <DescriptionBox name={menuData.restaurant_name} digits={menuData.restaurant_phone} />
            </div>

            <MenuFormContainer key="MenuFormContainer">
                <MenuItemContainer key="MenuItemContainer">

                    <h3>{menuData.menus[0].menu_name}</h3>
                    {
                        menuData.menus[0].menu_sections.map((section) => {
                            return <>
                                <h3>{section.section_name}</h3>
                                {section.menu_items.map((item) => {
                                    console.log(item.name);
                                    return (
                                        <MenuItem
                                            key={item.name + item.price + "key"}
                                            name={item.name}
                                            description={item.description}
                                            price={item.price} 
                                            handleClick={handleClick} >
                                        </MenuItem>)
                                })}
                            </>
                        })
                    }
                </MenuItemContainer>
            </MenuFormContainer>

        </MenuWrapper>
    );
}

export default RestaurantMenu;