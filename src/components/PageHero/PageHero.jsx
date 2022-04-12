import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const PageHero = ({ title, image }) => {
	return (
		<Hero image={image}>
			<Container maxWidth='lg'>
				<Typography
					variant='h1'
					sx={{
						fontSize: '60px',
						fontWeight: 'bold',
						textAlign: 'center',
						textTransform: 'capitalize',
					}}
				>
					{title}
				</Typography>
			</Container>
		</Hero>
	);
};

export default PageHero;

const Hero = styled.div`
	padding: 150px 0;
	padding-top: 210px;
	background: linear-gradient(
			to right,
			rgba(230, 7, 118, 0.7),
			rgba(25, 37, 209, 0.7)
		),
		url(${({ image }) => (image ? image : null)});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	color: ${COLORS.white};
	position: relative;
`;
