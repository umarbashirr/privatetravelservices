import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../utils/utils';
import {
	AppBar,
	Toolbar,
	Box,
	Stack,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Container,
	Button,
} from '@mui/material';
import { Close, Dehaze } from '@mui/icons-material';
import whiteLogo from '../../assets/images/logo.png';
import darkLogo from '../../assets/images/logodark.jpg';
import DrawerLogo from '../../assets/images/logodark.jpg';
import { COLORS } from '../../utils/colors';

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isscrolled, setisscrolled] = useState(false);
	const navigate = useNavigate();

	const navigatePage = (path) => {
		navigate(path);
	};

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setisscrolled(true);
		} else {
			setisscrolled(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);

	return (
		<AppBar
			sx={{
				background: !isscrolled ? 'transparent' : '#fff',
				boxShadow: isscrolled ? '0 1px 6px #444' : 'none',
			}}
			position='fixed'
		>
			<Container maxWidth='xl'>
				<Toolbar sx={{ height: '100%' }}>
					<Box
						component='img'
						src={!isscrolled ? whiteLogo : darkLogo}
						alt='Private Travel Services'
						width={100}
					/>
					<IconButton
						onClick={() => {
							setIsDrawerOpen(true);
						}}
						color='warning'
						sx={{
							display: { xs: 'flex', md: 'none' },
							color: '#fff',
							marginLeft: 'auto',
						}}
					>
						{isDrawerOpen ? <Close /> : <Dehaze />}
					</IconButton>
					<Drawer
						anchor='left'
						open={isDrawerOpen}
						onClose={() => setIsDrawerOpen(false)}
						sx={{ display: { xs: 'flex', md: 'none' } }}
					>
						<Box
							p={2}
							role='presentation'
							width={350}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<Box
								component='img'
								src={DrawerLogo}
								width={100}
								alt='Private Travel Services'
							/>
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
							<Button variant='contained'>Get Quote</Button>
						</Box>
					</Drawer>
					<Stack
						direction='row'
						spacing={2}
						sx={{
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							marginLeft: 'auto',
						}}
					>
						{/* {routes.map((route, index) => {
							const { label, path } = route;
							return (
								<NavLink to={path} key={index} isscrolled={isscrolled}>
									{label}
								</NavLink>
							);
						})} */}
						{routes.map((route, index) => {
							const { label, path } = route;
							return (
								<NavLink
									onClick={() => {
										navigatePage(path);
									}}
									key={index}
									isscrolled={isscrolled}
								>
									{label}
								</NavLink>
							);
						})}
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;

const NavLink = styled.button`
	background: transparent;
	border: none;
	font-size: 1rem;
	text-decoration: none;
	color: ${({ isscrolled }) => (isscrolled ? COLORS.primary : '#fff')};
	position: relative;
	font-weight: 500;

	&:hover {
		color: orange;
	}

	&:active {
		color: orange;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -60%;
		left: 0;
		width: 0;
		height: 2px;
		background-color: orange;
		border-radius: 50px;
		transition: 0.7s ease;
	}

	&:hover::after {
		width: 100%;
	}
`;
