import styled from "styled-components";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import MaialinaLogo from '../../images/MaialinaPizzeriaNapoletana-logo.png';
import AlehouseLogo from '../../images/MoscowAlehouse-logo.png';
import SangriaLogo from '../../images/SangriaGrill-logo.png';


const RestaurantOptions = () => {
    let cardData = [
        {
            name: 'Maialina Pizzeria Napoletana',
            src: MaialinaLogo
        },
        {
            name: 'Moscow Alehouse',
            src: AlehouseLogo
        },
        {
            name: 'Sangria Grill',
            src: SangriaLogo
        },
    ]
    return (
        <>
            {cardData.map((data) => {
                return (
                    <Card {...data} />
                )
            })}
        </>
    );
}

export default RestaurantOptions;