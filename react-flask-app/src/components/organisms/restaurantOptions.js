import styled from "styled-components";

import { darkOrange } from "../../helpers/colors";
import Card from '../molecules/restaurantCard';
import MaialinaLogo from '../../images/MaialinaPizzeriaNapoletana-logo.png';
import AlehouseLogo from '../../images/MoscowAlehouse-logo.png';
import SangriaLogo from '../../images/SangriaGrill-logo.png';


const CardsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    background-color: ${darkOrange};
    min-height: 100vh;
`;

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
        <CardsContainer>
            {cardData.map((data) => {
                return (
                    <Card {...data} />
                )
            })}
        </CardsContainer>
    );
}

export default RestaurantOptions;