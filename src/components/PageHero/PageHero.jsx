import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const PageHero = ({ title }) => {
	return (
		<Hero>
			<Container maxWidth='lg'>
				<Typography variant='h1' sx={{ fontSize: '44px', fontWeight: 'bold' }}>
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
	background-color: ${COLORS.primary};
	color: ${COLORS.white};
	position: relative;
`;
