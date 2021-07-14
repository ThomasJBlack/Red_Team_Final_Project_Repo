import styled from 'styled-components';
import { useState, useEffect } from 'react';

import CartTotal from '../molecules/cartTotal';
import { black, blanchedalmond } from '../../helpers/colors';
import { BlackBtn, DarkOrangeBtn } from '../atoms/button';

const SideBarWrapper = styled.div `
    position: fixed;
    top: -90px;
    right: 0;
    height: calc(100vh + 90px);
    width: 200px;
    background-color: ${blanchedalmond};
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${black};
    z-index: 5;
`;

const TextWrapper = styled.p `
    text-align: center;
    margin: 5px 0;
`;

const PriceCost = styled.p `
    font-size: 36px;
`;

const SideBar = (props) => {
    return (
        <SideBarWrapper>
            <DarkOrangeBtn>Show Location</DarkOrangeBtn>
            <CartTotal />
            <BlackBtn>Finish and Pay</BlackBtn>
        </SideBarWrapper>
    );
}

export default SideBar;