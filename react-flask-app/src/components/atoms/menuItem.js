import styled from 'styled-components';

const ItemWrapper = styled.div `
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const ItemDescription = styled.p `
    width: 100%;
    font-style: italic;
`;

const MenuItem = () => {

    return (
        <ItemWrapper>
            <h1>Food Title</h1>
            <ItemDescription>
                Yummy Yummy
            </ItemDescription>
            <h5>$12.00</h5>
        </ItemWrapper>
    )
}

export default MenuItem;