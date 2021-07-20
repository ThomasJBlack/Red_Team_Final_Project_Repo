import styled from 'styled-components';
import { useState, useEffect } from 'react';

import RestaurantCard from '../molecules/restaurantCard';
import Header from '../organisms/header';
import SideBar from '../organisms/sidebar';
import RestaurantMenu from '../organisms/restaurantMenu';
import { darkOrange } from '../../helpers/colors';

import MaialinaLogo from '../../images/MaialinaPizzeriaNapoletana-logo.png';
import AlehouseLogo from '../../images/MoscowAlehouse-logo.png';
import SangriaLogo from '../../images/SangriaGrill-logo.png';

import localJsonData from '../../local-restaurant-json-data.json';


const BodyWrapper = styled.body`
margin: 0;
padding: 0;
overflow-x: hidden;
`;

const TopRightPadding = styled.div`
    padding-top: 120px;
    padding-right: 200px;
    background-color: ${darkOrange};
`;

const MainContentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    background-color: ${darkOrange};
    min-height: 100vh;
`;

const Restaurant = () => {
	const [toggleMainContent, setToggleMainContent] = useState(false);
	const [user, setUser] = useState('');

	const [userAccounts, setUserAccounts] = useState();
	const [currentRestaurant, setCurrentRestaurant] = useState();

	useEffect(() => {
		fetch("/user").then(res => res.json()).then(data => {
			setUserAccounts(data);
		});
	}, []);

	let restaurantData = [
		{
			id: 1,
			name: 'Maialina Pizzeria Napoletana',
			srcLogo: MaialinaLogo
		},
		{
			id: 2,
			name: 'Sangria Grill',
			srcLogo: SangriaLogo
		},
		{
			id: 3,
			name: 'Moscow Alehouse',
			srcLogo: AlehouseLogo
		}
	]
	const handleClick = (event) => {
		// itemName = event.target.value;
		// define the add to cart button here? 
	}

	return (
		<BodyWrapper key="restaurantWrapper">
			<Header user={user} setUser={setUser} userAccounts={userAccounts} />
			<SideBar setToggleMainContent={setToggleMainContent} />
			<TopRightPadding>
				<MainContentBox>
					{
						toggleMainContent ?
							<RestaurantMenu key="restaurantMenuKey" currentRestaurant={currentRestaurant} handleClick={handleClick} /> :
							restaurantData.map((data) => <RestaurantCard key={"dataKey" + data.len} {...data} setToggleMainContent={setToggleMainContent} setCurrentRestaurant={setCurrentRestaurant} />)
					}
				</MainContentBox>
			</TopRightPadding>

		</BodyWrapper>
	)
}

export default Restaurant;