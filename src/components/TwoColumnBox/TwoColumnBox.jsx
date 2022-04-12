import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

const TwoColumnBox = ({ title, image, imageAlt, reversed, text }) => {
	return (
		<Box
			display='flex'
			alignItems='center'
			spacing={4}
			sx={{
				margin: { xs: '50px 0', md: '100px 0' },

				gap: '4rem',
				flexDirection: {
					xs: reversed ? 'column' : 'column',
					sm: reversed ? 'column' : 'column',
					md: reversed ? 'row-reverse' : 'row',
				},
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Box
					component='img'
					src={image}
					alt={imageAlt}
					sx={{ width: '100%', borderRadius: '10px', overFlow: 'hidden' }}
				/>
			</Box>

			<Stack spacing={2} sx={{ flex: 1, textAlign: 'justify' }}>
				<Typography variant='h4' component='h3' fontWeight='bold'>
					{title}
				</Typography>
				{text.map((para, index) => {
					return (
						<Typography key={index} sx={{ fontSize: '18px' }}>
							{para}
						</Typography>
					);
				})}
			</Stack>
		</Box>
	);
};

export default TwoColumnBox;