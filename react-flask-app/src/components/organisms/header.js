import styled from 'styled-components';
import react from 'react';

import { black } from '../../helpers/colors';
import { OrangeBtn } from '../atoms/button'

const HeaderWrapper = styled.header `
    width: 100%;
    padding: 5px 30px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${black};
    color: orange;
    z-index: 6;

    & > * {
        z-index: 7;
    }

    &::after {
        position: absolute;
        content: " ";
        display: block;
        left: -30%;
        bottom: -50px;
        transform: rotate(-2deg);
        width: 150%;
        background-color: black;
        z-index: 0;
        height: 90px;
    }
`;

const LocationWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;
`;


const header = () => {

    return (
        <HeaderWrapper>
            <h1>Dinner Delivery</h1>
            <LocationWrapper>
                <p>Current Location: Moscow Idaho</p>
                <OrangeBtn>change</OrangeBtn>                
            </LocationWrapper>
        </HeaderWrapper>
    );
}

export default header;