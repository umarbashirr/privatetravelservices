import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, Box, Button } from '@mui/material';

const TwoColumnBox = ({
	title,
	image,
	imageAlt,
	reversed,
	desc,
	button,
	buttonLink,
	shrinked,
}) => {
	const navigate = useNavigate();

	// Function to navigate to given link using button click
	const navigatePage = (link) => {
		navigate(link, { replace: true });
	};

	return (
		// Parent Container for Two Column Box, Here I have checked different conditions related to shrinked or reversed
		<Box
			display='flex'
			alignItems='center'
			spacing={`${!shrinked ? 4 : 0}`}
			sx={{
				margin: !shrinked && { xs: '50px 0', md: '100px 0' },
				gap: !shrinked ? '4rem' : null,
				flexDirection: {
					xs: reversed ? 'column' : 'column',
					sm: reversed ? 'column' : 'column',
					md: reversed ? 'row-reverse' : 'row',
				},
			}}
		>
			{/* First Child Box which contain image part along with condition check related to shrinked or not */}
			<Box sx={{ flex: 1 }}>
				<Box
					component='img'
					src={image}
					alt={imageAlt}
					sx={{
						width: '100%',
						borderRadius: !shrinked && '10px',
						overFlow: 'hidden',
					}}
				/>
			</Box>

			{/* Second Child Box which contain text content of the box and here I have applied margin and padding conditionally on basis of reversed and shrinked */}
			<Stack
				spacing={2}
				sx={{
					flex: 1,
					textAlign: 'justify',
				}}
			>
				<Typography
					variant='h4'
					component='h3'
					fontWeight='bold'
					sx={{
						marginRight: shrinked && reversed ? '2rem' : '0',
						marginLeft: shrinked && !reversed ? '02rem' : '0',
					}}
				>
					{title}
				</Typography>
				{desc.map((para, index) => {
					return (
						<Typography
							key={index}
							sx={{
								fontSize: '18px',
								paddingRight: shrinked && reversed ? '2rem' : '0',
								paddingLeft: shrinked && !reversed ? '02rem' : '0',
							}}
						>
							{para}
						</Typography>
					);
				})}
				{button && (
					<Button
						variant='contained'
						sx={{ alignSelf: 'flex-start' }}
						onClick={() => navigatePage(buttonLink)}
					>
						{button}
					</Button>
				)}
			</Stack>
		</Box>
	);
};

export default TwoColumnBox;
