import {
	Box,
	Card,
	CardContent,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';

const IconCard = ({ icon, label }) => {
	return (
		<Grid item xs={12} sm={6} md={3}>
			<Box>
				<Card
					sx={{
						boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
						padding: '1rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 'auto',
						borderRadius: '6px',
						textAlign: 'center',
					}}
				>
					<CardContent>
						<IconButton sx={{ mb: '.5rem' }}>{icon}</IconButton>
						<Typography fontSize='20px' letterSpacing='1px'>
							{label}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
};

export default IconCard;
