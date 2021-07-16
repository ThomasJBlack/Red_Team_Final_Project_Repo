import styled from 'styled-components';
import { useState, useEffect } from 'react';

import CartTotal from '../molecules/cartTotal';
import Modal from '../molecules/placeOrderModal'
import { black, blanchedAlmond } from '../../helpers/colors';
import Button, { BlackBtn, DarkOrangeBtn } from '../atoms/button';

const SideBarWrapper = styled.div `
    position: fixed;
    top: -90px;
    right: 0;
    height: calc(100vh + 90px);
    width: 200px;
    background-color: ${blanchedAlmond};
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${black};
    z-index: 5;
    margin-top: 5%;
`;

const TextWrapper = styled.p `
    text-align: center;
    margin: 5px 0;
`;

const PriceCost = styled.p `
    font-size: 36px;
`;

const SideBar = (props) => {

    const [showModal, setShowModal] = useState(false);
    const dummyPrice = 1.23;

    return (
        <SideBarWrapper>
            <DarkOrangeBtn onClick={() => props.setToggleMainContent(false)} >Show Locations</DarkOrangeBtn>
            <CartTotal />
            <BlackBtn onClick={() => setShowModal(true)}>Finish and Pay</BlackBtn>
            <Modal onClose={() => setShowModal(false)} showModal={showModal} price={dummyPrice}/>
        </SideBarWrapper>
    );
}

export default SideBar;