import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({
	title,
	description,
	backgroundImg,
	leftBtnText,
	rightBtnText,
}) {
	return (
		<Wrap bgImage={backgroundImg}>
			<Fade direction={"up"} fraction={1} triggerOnce>
				<ItemText>
					<h1>{title}</h1>
					{description && <p>{description}</p>}
				</ItemText>
			</Fade>
			<Buttons>
				<Fade direction={"up"} fraction={1} triggerOnce>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	margin-top: 15vh;
	text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	height: 40px;
	width: 256px;
	background-color: rgba(23, 26, 32, 0.8);
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 100px;
	opacity: 0.85px;
	text-transform: uppercase;
	font-size: 12px;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background-color: #fff;
	opacity: 0.65;
	color: #000;
`;

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
`;
