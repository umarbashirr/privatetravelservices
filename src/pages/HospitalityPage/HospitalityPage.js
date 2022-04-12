import React from 'react';
import { Footer, PageHero } from '../../components';
import hospitalityImage from '../../assets/images/hospitality.jpg';

const HospitalityPage = () => {
	return (
		<div>
			<PageHero title='Hospitality' image={hospitalityImage} />
			HospitalityPage
			<Footer />
		</div>
	);
};

export default HospitalityPage;
