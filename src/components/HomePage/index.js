import React, { useContext } from 'react';

//Styled Components
import { Container, Wrapper } from './HomePage.styles';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Auth';

export const HomePage = () => {
	const navigate = useNavigate();
	const user = useContext(AuthContext);

	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					{user ? (
						<h1>
							You are logged - <Link to="/dashboard">View Dashboard</Link>
						</h1>
					) : (
						<h1>
							<Link to="/login">Log In</Link> or <Link to="/register">Sign Up</Link>
						</h1>
					)}
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
