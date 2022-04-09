import {
	Button,
	Container,
	FormControl,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { PageHero } from '../../components';
import { COLORS } from '../../utils/colors';
import ContactLogo from '../../assets/images/contact.svg';

const ContactPage = () => {
	return (
		<div>
			<PageHero title='Contact us' />
			<Container maxWidth='lg'>
				<Box sx={{ m: '100px 0' }}>
					<Grid container spacing={4} alignItems='center'>
						<Grid item xs={12} lg={6}>
							<Box
								component='img'
								src={ContactLogo}
								sx={{ width: '100%' }}
								alt={'Contact Us'}
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Box
								component='form'
								autoComplete='off'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: '1rem',
									boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
									p: 4,
									borderRadius: '10px',
								}}
							>
								<Typography variant='h5' component='h2'>
									Get In Touch Now
								</Typography>
								<FormControl variant='outlined' fullWidth>
									<TextField label='Full Name' type='text' required />
								</FormControl>
								<FormControl variant='outlined' fullWidth>
									<TextField label='Email' type='text' required />
								</FormControl>
								<FormControl variant='outlined' fullWidth>
									<TextField label='Phone No.' type='text' required />
								</FormControl>
								<FormControl variant='outlined' fullWidth>
									<TextField
										label='Message'
										multiline
										rows={10}
										type='text'
										required
									/>
								</FormControl>
								<Button
									variant='contained'
									sx={{
										alignSelf: 'flex-start',
										background: `${COLORS.primary}`,
									}}
								>
									Submit Now
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default ContactPage;
