import styled from 'styled-components';
import { useEffect, useState } from 'react'


import { blanchedAlmond, black, orangeRed } from '../../helpers/colors';
import { DarkOrangeBtn, BlackBtn } from '../atoms/button';
import localJsonData from '../../local-restaurant-json-data.json';

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 350px;
    background-color: ${blanchedAlmond};
    margin: 30px 10px;
    padding: 30px;
    border: 4px solid ${black};
    box-shadow: 2px 2px 20px ${orangeRed};
    transform: rotate(3deg);

    &:hover {
        border: 4px solid orange;
        border-radius: 10px;
        transform: rotate(0deg);
    }

    & > * {
        transform: rotate(-3deg)
    }
`;
// Here you go!
// const AddFavorite = async (body) => {
//     const response = await fetch("add_favorite", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })
// }


// const RemoveFavorite = async (body) => {
//     const response = await fetch("remove_favorite", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })
// }

const RestaurantCard = ({ id, name, srcLogo, setToggleMainContent, setCurrentRestaurant, user }) => {
    const [favorite, setFavorite] = useState(true)

    // useEffect(() => {
    //     const body = {
    //         favorite_id: id,
    //         user_id: user
    //     }
    //     AddFavorite(body);
    // }, [favorite]);



    const AddFavorite = async (restaurant_id, user_id) => {
        const addFavorite = { restaurant_id, user_id };
        const response = await fetch("add_favorite", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addFavorite)
        })
    }

    return (
        <CardBox key={id + "key"}>
            <img src={srcLogo} />
            <DarkOrangeBtn onClick={() => { setToggleMainContent(true); setCurrentRestaurant([id, name]) }} >Order from {name}</DarkOrangeBtn>
            {
                favorite ?
                    <DarkOrangeBtn onClick={() => { AddFavorite(id, user); setFavorite(false) }} >Favorite this Restaurant</DarkOrangeBtn> :
                    <BlackBtn onClick={() => { setFavorite(true) }} >Unfavorite this Restaurant</BlackBtn>
            }
        </CardBox>
    );
}
export default RestaurantCard;