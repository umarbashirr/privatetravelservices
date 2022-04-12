import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ContactForm, Footer, PageHero } from '../../components';
import ContactImage from '../../assets/images/pageHeroImage.jpg';

const ContactPage = () => {
	return (
		<div>
			<PageHero title='Contact us' image={ContactImage} />
			<Container maxWidth='xl'>
				<Box sx={{ m: '100px 0' }}>
					<Grid
						container
						spacing={4}
						alignItems='center'
						justifyContent='center'
					>
						{/* <Grid item xs={12} lg={6}>
							<Box
								component='img'
								src={ContactLogo}
								sx={{ width: '100%' }}
								alt={'Contact Us'}
							/>
						</Grid> */}
						<Grid item xs={12} lg={8}>
							<ContactForm />
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Footer />
		</div>
	);
};

export default ContactPage;
