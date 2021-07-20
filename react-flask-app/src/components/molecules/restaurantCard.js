import styled from 'styled-components';

import { blanchedAlmond, black, orangeRed } from '../../helpers/colors';
import { DarkOrangeBtn } from '../atoms/button';
import localJsonData from '../../local-restaurant-json-data.json';

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 350px;
background-color: ${blanchedAlmond};
    margin: 30px 10px;
    padding: 30px;
    border: 4px solid ${black};
    box-shadow: 2px 2px 20px ${orangeRed};
    transform: rotate(3deg);

    &:hover {
        border: 4px solid orange;
        border-radius: 10px;
        transform: rotate(0deg);
    }

    & > * {
        transform: rotate(-3deg)
    }
`;

const RestaurantCard = ({ id, name, srcLogo, setToggleMainContent, setCurrentRestaurant }) => {


    return (
        <CardBox key={id + "key"}>
            <img src={srcLogo} />
            <DarkOrangeBtn onClick={() => { setToggleMainContent(true); setCurrentRestaurant([id, name]) }} >Order from {name}</DarkOrangeBtn>
        </CardBox>
    );
}

export default RestaurantCard;