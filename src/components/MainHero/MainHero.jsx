import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import HeroVideo from '../../assets/videos/herovideo.mp4';
import { COLORS } from '../../utils/colors';

const MainHero = () => {
	return (
		<Hero>
			<HeroContainer>
				<Video loop='true' autoPlay='true' muted='true' preload='auto'>
					<source src={HeroVideo} type='video/mp4' />
				</Video>
				<HeroContent>
					<TextContent>
						<h1>Lorem ipsum dolor sit amet</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							alias reprehenderit et amet sequi earum hic dolor voluptatum totam
							doloremque.
						</p>
						<ButtonContainer>
							<Button>Call Us</Button>
							<Button>Get Quote</Button>
						</ButtonContainer>
					</TextContent>
					{/* <FormWrapper>
						<Form></Form>
					</FormWrapper> */}
				</HeroContent>
			</HeroContainer>
		</Hero>
	);
};

export default MainHero;

const Hero = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	/* @media screen and (max-width: 1024px) {
		height: 80vh;
	}

	@media screen and (max-width: 768px) {
		height: 50vh;
	}

	@media screen and (max-width: 550px) {
		height: 30vh;
	} */

	&::after {
		content: '';
		z-index: 10;
		position: absolute;
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
	}
`;

const HeroContainer = styled(Container)``;

const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const HeroContent = styled.div`
	z-index: 11;
	position: relative;
	height: 100%;
	display: flex;
	gap: 3rem;
	align-items: center;
	color: ${COLORS.white};

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const TextContent = styled.div`
	flex-grow: 1;
	display: flex;
	width: 30%;
	gap: 1rem;
	flex-direction: column;

	h1 {
		font-size: 50px;
	}

	p {
		font-size: 20px;
	}

	@media screen and (max-width: 1024px) {
		text-align: center;
		align-items: center;
		justify-content: center;
		width: 70%;

		h1 {
			font-size: 30px;
		}

		p {
			font-size: 16px;
		}
	}
`;

// const FormWrapper = styled.div`
// 	flex-grow: 1;
// 	display: flex;
// 	justify-content: flex-end;
// `;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;

const Button = styled.button`
	display: inline-block;
	padding: 0.6rem 1.3rem;
	border: 1px solid transparent;
	outline: none;
	border-radius: 4px;
`;

// const Form = styled.form`
// 	width: 400px;
// 	height: 450px;
// 	border-radius: 8px;
// 	background-color: ${COLORS.white};
// `;
