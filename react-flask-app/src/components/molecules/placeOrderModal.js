import styled from 'styled-components';

import { orange, darkOrange, blanchedAlmond } from '../../helpers/colors';
import DeliveryBikeImg from '../../images/delivery-bike-icon.png'
import { DarkOrangeBtn } from '../atoms/button';

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;    
    background-color: ${blanchedAlmond};
    background-image: url(${DeliveryBikeImg});
    background-position: 90% 90%;
    background-repeat: no-repeat;
    background-size: 100px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    box-shadow: 2px 2px 50px black;
    color: black;
    padding: 30px;
    border-radius: 2px;
    padding: 10px;
    overflow: auto;
    z-index: 8;

    & > li {
        margin-bottom: 8px;
    }
    & > button {
        background-color: ${darkOrange};
        padding: 10px;
        margin: 10px;
    }
    & > button:hover {
        background-color: ${orange};
    }
`;

const TotalAmountText = styled.h1`
    margin-bottom: 0;
    font-style: italic;
    font-weight: lighter;
    font-family: garamond;
    font-size: 30px;
    color: black;
`;

const OrderList = styled.ol`
    display: inline;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const Modal = (props) => {

    // const dummyData = ['French Fries', 'Burger', 'Milk Shake'];
    let data = '';
    let cart = props.cart;
    for (let i = 0; i < cart.length; i++)   {
        data += cart[i]['name'] + '; ';
    }
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++)   {
        totalCost += cart[i]['price'];
    }

    return (
        <ModalContainer>
            <TotalAmountText>Your total is: ${totalCost.toFixed(2)}</TotalAmountText>
            <OrderList>{data}</OrderList>
            <DarkOrangeBtn onClick={() => {props.setCart([]); props.onClose()}}>Place Order</DarkOrangeBtn>
            <DarkOrangeBtn onClick={props.onClose}>Back</DarkOrangeBtn>
        </ModalContainer>
    )
};


export default Modal;