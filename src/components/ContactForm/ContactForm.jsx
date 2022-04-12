import { Button, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactForm = () => {
	return (
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
			<Typography
				variant='h5'
				component='h2'
				sx={{ fontWeight: 'bold', color: '#444' }}
			>
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
				<TextField label='Message' multiline rows={10} type='text' required />
			</FormControl>
			<Button variant='contained'>Submit Now</Button>
		</Box>
	);
};

export default ContactForm;
