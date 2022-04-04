import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/utils';
import {
	AppBar,
	Toolbar,
	Box,
	Typography,
	Stack,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Button,
} from '@mui/material';
import { Close, Dehaze } from '@mui/icons-material';

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<AppBar sx={{ background: 'transparent' }} position='fixed'>
			<Toolbar>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					PTS
				</Typography>
				<IconButton
					onClick={() => {
						setIsDrawerOpen(true);
					}}
					color='warning'
					sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
				>
					{isDrawerOpen ? <Close /> : <Dehaze />}
				</IconButton>
				<Drawer
					anchor='left'
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					sx={{ display: { xs: 'flex', md: 'none' } }}
				>
					<Box p={2} role='presentation' width={350}>
						<List>
							{routes.map((route, index) => {
								const { label, path } = route;
								return (
									<ListItem disablePadding key={index}>
										<ListItemButton
											onClick={() => setIsDrawerOpen(false)}
											color='dark'
										>
											<Link
												to={path}
												style={{
													textDecoration: 'none',
													color: '#555',
												}}
											>
												<ListItemText>{label}</ListItemText>
											</Link>
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</Drawer>
				<Stack
					direction='row'
					spacing={2}
					sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
				>
					{routes.map((route, index) => {
						const { label, path } = route;
						return (
							<Link
								to={path}
								key={index}
								style={{
									textDecoration: 'none',
									color: '#fff',
								}}
							>
								{label}
							</Link>
						);
					})}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
