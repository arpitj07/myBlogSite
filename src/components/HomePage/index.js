import React from 'react';

//Styled Components
import { Wrapper, StyleLink } from './HomePage.styles';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../Auth';
import { Posts } from '../Posts';
import Auth from '../../assets/SVG/Auth.svg';

export const HomePage = () => {
	const navigate = useNavigate();

	const { currentUser } = useAuth();
	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					{currentUser ? (
						<React.Fragment>
							<h3>Welcome, {currentUser.displayName}</h3>
							<Posts />
						</React.Fragment>
					) : (
						<Row>
							<Col>
								<img src={Auth} alt="" />
							</Col>
							<Col>
								<StyleLink to="/login">Log In</StyleLink>
								<StyleLink to="/register">Sign Up</StyleLink>
							</Col>
						</Row>
					)}
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
