import styled from "styled-components";
import { useState, useEffect } from "react";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import MaialinaBanner from '../../images/MaialinaPizzeriaNapoletana-banner.png';
import AlehouseBanner from '../../images/MoscowAlehouse-logo.png';
import SangriaBanner from '../../images/SangriaGrill-logo.png';
import DescriptionBox from '../atoms/descriptionBox';
import MenuItem from '../atoms/menuItem';

import localJsonData from '../../local-restaurant-json-data.json';

const MenuWrapper = styled.div`
    position: relative;
`;


const RestaurantMenu = ({ currentRestaurant }) => {


    const [restaurants, setRestaurants] = useState();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const clear = [];
        setMenu(clear); // clear the menu when there's a different restaurant

        fetch("/restaurant").then(res => res.json()).then(data => {
            console.log(data);
            setRestaurants(data);
        });
    }, [currentRestaurant]);

    const restaurantImages = [
        {
            id: 1,
            src: MaialinaBanner
        },
        {
            id: 2,
            src: SangriaBanner,
        },
        {
            id: 3,
            src: AlehouseBanner,
        }

    ]
    console.log("\n\nrender\n\n");

    return (
        <MenuWrapper>
            <div>
                <img src={restaurantImages[currentRestaurant - 1].src} />
            </div>
            {localJsonData[currentRestaurant - 1].menus[0].menu_sections.forEach((section_name, index_top) => {
                section_name.menu_items.map((item, index_low) => {
                    // change state so that the DOM re renders
                    return (
                        <div key={index_top + index_low}>
                            <MenuItem title={item.name} description={item.description} price={item.pricing[0].price.toFixed(2)} />
                            <input id="food1" type="checkbox" />
                            {/* {() => { // not running for some reason.
                                setMenu(item);
                                if (index_top) {
                                    console.log("update!");

                                    return setMenu(item);
                                }
                            }} */}
                            <select name="quantity">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                            </select>
                        </div>
                    );
                })
            })}

            <DescriptionBox name={localJsonData[currentRestaurant - 1].restaurant_name} digits={localJsonData[currentRestaurant - 1].restaurant_phone} />
        </MenuWrapper>
    );
}

export default RestaurantMenu;