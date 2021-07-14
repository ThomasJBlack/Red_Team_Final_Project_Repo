import styled from 'styled-components';

import { orange, darkOrange, black, blanchedalmond, wheat } from '../../helpers/colors';

const Button = styled.button `
    border: none;
    background-color: ${orange};
    color: ${black};
    border-radius: 6px;
    cursor: pointer;
`;

const RestaurantButton = styled.button `
    background-color: ${orange};
    padding: 5px 10px;
    font-weight: bold;
    font-size: 15px;
    &:hover {
        background-color: ${black};
        color: ${orange};
    }
`;

const BlackBtn = styled.button `
    background-color: ${black};
    color: ${wheat};
    border: none;
    border-radius: 6px;
    font-size: 14px;
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
        background-color: ${orange};
        color: ${black};
    }
`;

const OrangeBtn = styled.button `
    padding: 5px 10px;
    border: 1px solid ${black};
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    &:hover {
        background-color: ${black};
        color: ${orange};
        border: 1px solid ${orange};
    }
`;

const DarkOrangeBtn = styled.button `
    background-color: ${darkOrange};
    border: none;
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 70px;

    &:hover {
        background-color: ${black};
        color: ${darkOrange};
    }
`;

export default Button;
export { RestaurantButton, BlackBtn, OrangeBtn, DarkOrangeBtn };