import { Container } from '@mui/material';
import React from 'react';
import { PageHero, TwoColumnBox } from '../../components';
import { AboutPageData } from '../../utils/data';

const AboutPage = () => {
	return (
		<div>
			<PageHero title='About Us' />
			<Container maxWidth='lg'>
				<TwoColumnBox {...AboutPageData.whoWeAre} reversed />
			</Container>
		</div>
	);
};

export default AboutPage;
