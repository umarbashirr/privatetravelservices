import { Container, Box, Grid } from '@mui/material';
import React from 'react';
import { Features, Footer, PageHero, TwoColumnBox } from '../../components';
import { AboutPageData } from '../../utils/data';

const AboutPage = () => {
	const { whoWeAre, features, bannerData, coreValues } = AboutPageData;
	return (
		<div>
			<PageHero title='About Us' />
			<Container maxWidth='lg'>
				<TwoColumnBox {...whoWeAre} reversed />
				<Features features={features} />
				{/* Banner */}
			</Container>
			<Box
				sx={{
					margin: { xs: '50px 0', md: '100px 0' },
					backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${bannerData.image})`,
					backgroundAttachment: 'fixed',
				}}
				height={600}
			></Box>
			<Container maxWidth='lg'>
				{coreValues.map((core) => {
					const shrinked = true;
					return <TwoColumnBox {...core} shrinked={shrinked} />;
				})}
			</Container>
			<Footer />
		</div>
	);
};

export default AboutPage;
