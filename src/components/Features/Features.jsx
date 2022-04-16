import { Box, Grid } from '@mui/material';
import React from 'react';
import IconCard from '../IconCard/IconCard';

const Features = ({ features }) => {
	return (
		<Box sx={{ margin: { md: '50px 0', lg: '100px 0' } }}>
			<Grid container spacing={4}>
				{features.map((feature, index) => {
					return <IconCard key={index} {...feature} />;
				})}
			</Grid>
		</Box>
	);
};

export default Features;
