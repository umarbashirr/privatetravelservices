import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { COLORS } from '../../utils/colors';

const PageHero = ({ title }) => {
	return (
		<Hero>
			<Container>
				<h1>{title}</h1>
			</Container>
		</Hero>
	);
};

export default PageHero;

const Hero = styled.div`
	padding: 100px 0;
	padding-top: 130px;
	background-color: ${COLORS.primary};
	color: ${COLORS.white};
`;
