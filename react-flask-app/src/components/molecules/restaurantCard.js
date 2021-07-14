import styled from 'styled-components';

import { blanchedAlmond, black, orangeRed } from '../../helpers/colors';
import { DarkOrangeBtn } from '../atoms/button';

const CardBox = styled.div `
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
    }

    & > * {
        transform: rotate(-3deg)
    }
`;

const RestaurantCard = (props) => {

    return (
        <CardBox>
            <img src={props.src}/>
            <DarkOrangeBtn>Order from {props.name}</DarkOrangeBtn>
        </CardBox>
    );
}

export default RestaurantCard;