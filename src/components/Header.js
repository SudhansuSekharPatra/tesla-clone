import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";

function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);

	const cars = useSelector(selectCars);

	return (
		<Container>
			<a href="/">
				<img src="/images/logo.svg" alt="logo" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="/">
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				<a href="/">Shop</a>
				<a href="/">Tesla Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CustomClose onClick={() => setBurgerStatus(false)} />
				{cars &&
					cars.map((car, index) => (
						<li key={index}>
							<a href="/">{car}</a>
						</li>
					))}
				<li>
					<a href="/">Existing Inventory</a>
				</li>
				<li>
					<a href="/">Used Inventory</a>
				</li>
				<li>
					<a href="/">Trade-in</a>
				</li>
				<li>
					<a href="/">Cybertruck</a>
				</li>
				<li>
					<a href="/">Roadster</a>
				</li>
			</BurgerNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	min-height: 60px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	z-index: 1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.ul`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #fff;
	width: 300px;
	list-style: none;
	padding: 20px;
	text-align: left;
	display: flex;
	flex-direction: column;
	z-index: 9999999;
	transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(100%)`)};
	transition: transform 0.3s ease-in-out;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
	margin-left: auto;
`;
