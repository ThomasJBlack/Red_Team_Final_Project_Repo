import styled from 'styled-components';
import Button, { BlackBtn } from "../atoms/button";

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

const ItemQuantity = styled.select`
    background-color: blanchedalmond;
    border: 2px solid;
    height: 30px;
    width: 80px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    border-radius: 2px;
    font-size: 14px;
`;

const MenuItem = ({ name, description, price, handleClick }) => {
    return (
        <ItemWrapper>
            <h1>{name}</h1>
            <ItemDescription>
                {description}
            </ItemDescription>
            <h5>${price}</h5>
            <ItemQuantity>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
            </ItemQuantity>
            <Button onClick={handleClick} value="Add to cart" />
        </ItemWrapper>
    )
}

export default MenuItem;