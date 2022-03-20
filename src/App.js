import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from './assets/lotties/preloader.json';

import {
	Home,
	AboutPage,
	TravelPage,
	HospitalityPage,
	ContactPage,
	ErrorPage,
} from './pages';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 6000);
	}, []);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<>
			{loading ? (
				<Lottie
					options={defaultOptions}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: '100vh',
					}}
					height={400}
					width={400}
				/>
			) : (
				<AppContainer>
					<Navbar />
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
					<Footer />
				</AppContainer>
			)}
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
