import React from 'react';
import { Footer, PageHero, TwoColumnBox } from '../../components';
import travelImage from '../../assets/images/travel.jpg';
import { Container } from '@mui/material';
import { TravelPageData } from '../../utils/data';

const TravelPage = () => {
	return (
		<div>
			<PageHero title='Travel' image={travelImage} />
			<Container maxWidth='xl'>
				{TravelPageData.map((data) => {
					return <TwoColumnBox {...data} key={data.id} />;
				})}
			</Container>
			<Footer />
		</div>
	);
};

export default TravelPage;
