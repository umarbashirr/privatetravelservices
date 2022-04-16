import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../utils/colors';

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: COLORS.primary,
				color: COLORS.white,
				zIndex: 10,
				marginTop: { xs: '50', md: '100px' },
			}}
		>
			<Container maxWidth='lg'>
				<Box sx={{ textAlign: 'center', p: 6 }}>
					<Typography variant='body1'>
						Copyrighted &copy; 2022 by Private Travel Services. All Rights
						Reserved.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
