import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { COLORS } from '../../utils/colors';
import { HiMenuAlt3 } from 'react-icons/hi';
import { routes } from '../../utils/utils';

const Navbar = () => {
	return (
		<Header>
			<Container>
				<Nav>
					<Logo to='/'>PTS</Logo>
					<Toggler>
						<HiMenuAlt3 />
					</Toggler>
					<Menu>
						{routes.map((route, index) => {
							const { label, path } = route;
							return (
								<Item to={path} key={index}>
									{label}
								</Item>
							);
						})}
					</Menu>
				</Nav>
			</Container>
		</Header>
	);
};

export default Navbar;

const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
	flex-shrink: 0;
	color: #fff;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: rgba(0, 0, 0, 0.5);
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled(Link)`
	color: ${COLORS.white};
`;

const Toggler = styled.div`
	color: ${COLORS.white};
	display: flex;
	font-size: 22px;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const Menu = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		gap: 1rem;
	}
`;

const Item = styled(Link)`
	color: ${COLORS.white};
`;
