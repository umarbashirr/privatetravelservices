import React from 'react';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import {
	Home,
	AboutPage,
	TravelPage,
	HospitalityPage,
	ContactPage,
	ErrorPage,
} from './pages';
import { MobileNavigation } from './components';

function App() {
	return (
		<>
			<AppContainer>
				<Navbar />
				<MobileNavigation />
				<MainContainer>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/travel' element={<TravelPage />} />
						<Route path='/hospitality' element={<HospitalityPage />} />
						<Route path='/contact' element={<ContactPage />} />
						<Route path='*' element={<ErrorPage />} />
					</Routes>
				</MainContainer>
				{/* <Footer /> */}
			</AppContainer>
		</>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContainer = styled.div`
	flex-grow: 1;
`;
