import React from 'react';

//Styled Components
import { StyleLink } from './HomePage.styles';
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
			{currentUser ? (
				<Container>
					<h3 className="my-3 mx-5">Welcome, {currentUser.displayName}</h3>
					<Posts />
				</Container>
			) : (
				<Container className="mt-4">
					<Row className="d-flex flex-lg-wrap container-md flex-1">
						<Col className="d-flex justify-content-center align-items-center flex-column">
							<h1 className="mb-3 text-wrap">Welcome to myBlog</h1>
							<p className="mb-3 text-wrap">This is your one stop for blogging</p>
							<Row>
								<StyleLink to="/login">Log In</StyleLink>
								<StyleLink to="/register">Sign Up</StyleLink>
							</Row>
						</Col>
						<Col>
							<img className="img-fluid" src={Auth} />
						</Col>
					</Row>
				</Container>
			)}
		</React.Fragment>
	);
};
