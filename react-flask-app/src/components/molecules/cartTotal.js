import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { orange } from '../../helpers/colors';
import BagImage from '../../images/bag-icon.png'

const BagWrapper = styled.p `
    background-image: url(${BagImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 128px;
    width: 103px;
    padding-top: 50px;
    color: ${orange};
`;

const TextWrapper = styled.p `
    text-align: center;
    margin: 5px 0;
`;

const PriceCost = styled.p `
    font-size: 36px;
`;


const CartTotal = (props) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [totalCost, setTotalCost] = useState(0.00);

    const dummyCartTotal = 500;
    const dummyCost = 1.23;

    useEffect(() => {
        setCartTotal(dummyCartTotal)
        setTotalCost(dummyCost);
    }, [dummyCartTotal, dummyCost])

    return (
        <>
            <TextWrapper>You have</TextWrapper>
            <BagWrapper>
                <TextWrapper style={{fontSize: '36px'}}>{cartTotal}</TextWrapper>
            </BagWrapper>
            <TextWrapper>items in your bag, for a total of</TextWrapper>
            <TextWrapper style={{fontSize: '36px'}}>${totalCost}</TextWrapper>
        </>
    );
}

export default CartTotal;