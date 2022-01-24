import React from 'react';

//Styled Components
import { Wrapper, Image, Button } from './HomePage.styles';
import { Register } from '../Register';
import { Navbar } from '../NavBar';
import { useNavigate } from 'react-router-dom';
//Assets
import HomeImage from '../../assets/images/HomeBackground.jpg';

export const HomePage = () => {
	const navigate = useNavigate();

	const redirectToRegister = () => {
		navigate('/register');
	};
	return (
		<React.Fragment>
			<Wrapper>
				<h1>Welcome to myBlog</h1>
				<Image src={HomeImage} />
				<button
					onClick={() => {
						redirectToRegister();
					}}
				>
					Register
				</button>
			</Wrapper>
		</React.Fragment>
	);
};
