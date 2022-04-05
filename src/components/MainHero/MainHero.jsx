import { Container, Grid, Box, Stack, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import HeroVideo from '../../assets/videos/herovideo.mp4';
import { COLORS } from '../../utils/colors';
import HeroLogo from '../../assets/images/heroLogo.svg';
import { Phone, WhatsApp } from '@mui/icons-material';

const MainHero = () => {
	return (
		<Hero>
			<Container maxWidth={'xl'}>
				<Video loop='true' autoPlay='true' muted='true' preload='auto'>
					<source src={HeroVideo} type='video/mp4' />
				</Video>
				<HeroContent>
					<Box
						flexDirection='column'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Grid container>
							<Grid
								item
								lg={12}
								md={12}
								xs={12}
								sx={{ display: 'flex', justifyContent: 'center' }}
							>
								<Box
									component='img'
									src={HeroLogo}
									sx={{ width: { xs: '350px', md: '500px' } }}
								/>
							</Grid>
						</Grid>
						<Stack direction='row' spacing={2} sx={{ mt: '-50px' }}>
							<Button variant='contained' endIcon={<Phone />}>
								Call Us
							</Button>

							<Button variant='contained' endIcon={<WhatsApp />}>
								WhatsApp
							</Button>
						</Stack>
					</Box>
				</HeroContent>
			</Container>
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
	justify-content: center;
	gap: 3rem;
	align-items: center;
	color: ${COLORS.white};

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;
