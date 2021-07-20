import styled from 'styled-components';

const ItemWrapper = styled.div`
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const ItemDescription = styled.p`
    width: 100%;
    font-style: italic;
`;

const MenuItem = ({ title, description, price }) => {
    console.log("MenuItem");
    return (
        <ItemWrapper>
            <h1>{title}</h1>
            <ItemDescription>
                {description}
            </ItemDescription>
            <h5>${price}</h5>
        </ItemWrapper>
    )
}

export default MenuItem;