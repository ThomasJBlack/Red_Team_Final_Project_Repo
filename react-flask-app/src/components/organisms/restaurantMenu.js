import styled from "styled-components";
import { useState, useEffect } from "react";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import Button, { BlackBtn } from "../atoms/button";
import MaialinaBanner from '../../images/MaialinaPizzeriaNapoletana-banner.png';
import AlehouseBanner from '../../images/MoscowAlehouse-banner.png';
import SangriaBanner from '../../images/SangriaGrill-banner.webp';
import DescriptionBox from '../atoms/descriptionBox';
import MenuItemEx from '../atoms/menuItem';

import localJsonData from '../../local-restaurant-json-data.json';

const MenuWrapper = styled.div`
    position: relative;
`;

//order card for menu will be here instead of it's own component to save time

const MenuFormContainer = styled.div `
    padding: 30px;
    background-color: darkorange;
    position: relative;
    top: -5px;
    border-top: 3px solid;
`;

const MenuItemContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid;
    margin-bottom: 30px;
`;

const MenuItem = styled.div `
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

const ItemDesc = styled.p `
    width: 100%;
    font-style: italic;
`;

const ItemQuantity = styled.input `
    background-color: blanchedalmond;
    border: 2px solid;
    height: 30px;
    width: 50px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    border-radius: 2px;
    font-size: 14px;
`;
 
const ItemPrice = styled.h5 `
    font-size: 18px;
    margin: 0;
    border-bottom: 2px solid;
`;

const RestaurantMenu = ({ currentRestaurant }) => {

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
                        menuData.menus[0].menu_sections.map( (section) => {
                            <h3>{section.section_name}</h3>

                            {section.menu_items.map((item) => {
                                return (
                                    <MenuItem key={item.name}>
                                        <h4>{item.name}</h4>
                                        <ItemDesc>{item.description}</ItemDesc>
                                        <ItemPrice>${item.price}</ItemPrice>
                                        {/* <ItemQuantity /> */}
                                        {/* <Button></Button> */}
                                    </MenuItem>
                                )
                            } 
                        )}})
                    }
                    {/* <MenuItem>
                        <h4>asfsadf</h4>
                        <ItemDesc>sdfasfwf</ItemDesc>
                        <ItemPrice>price</ItemPrice>
                        {/* <ItemQuantity>sssss</ItemQuantity>
                        <BlackBtn>wwwwww</BlackBtn>
                    </MenuItem> */}

                </MenuItemContainer>
            </MenuFormContainer>
            
        </MenuWrapper>
    );
}

export default RestaurantMenu;




// {localJsonData[currentRestaurant - 1].menus[0].menu_sections.forEach((section_name, index_top) => {
//     section_name.menu_items.map((item, index_low) => {
//         // change state so that the DOM re renders
//         return (
//             <div key={index_top + index_low}>
//                 <MenuItemEx title={item.name} description={item.description} price={item.pricing[0].price.toFixed(2)} />
//                 <input id="food1" type="checkbox" />
//                 {/* {() => { // not running for some reason.
//                     setMenu(item);
//                     if (index_top) {
//                         console.log("update!");

//                         return setMenu(item);
//                     }
//                 }} */}
//                 <select name="quantity">
//                     <option value="1">One</option>
//                     <option value="2">Two</option>
//                     <option value="3">Three</option>
//                     <option value="4">Four</option>
//                     <option value="5">Five</option>
//                     <option value="6">Six</option>
//                 </select>
//             </div>
//         );
//     })
// })}

// </MenuWrapper>
// );
// }
