import styled from 'styled-components';
import react from 'react';

import Header from '../organisms/header';
import SideBar from '../organisms/sidebar';

const BodyWrapper = styled.body `
margin: 0;
padding: 0;
overflow-x: hidden;
`;

const Restaurant = () => {
    return (
        <BodyWrapper>
            <Header/>
            <SideBar />            
        </BodyWrapper>
    )
}

export default Restaurant;