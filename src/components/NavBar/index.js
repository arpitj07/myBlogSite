import React, { useState } from 'react';

import { Button } from './NavBar.styles';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Auth';

import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
	const [ error, setError ] = useState('');
	const navigate = useNavigate();
	const { currentUser, signout } = useAuth();

	const signUserOut = async (e) => {
		e.preventDefault();
		try {
			setError('');
			await signout();
			navigate('/');
		} catch (error) {
			setError('Failed to Log Out');
		}
	};

	return (
		<React.Fragment>
			<Navbar bg="black" variant="dark" expand="md">
				<Container>
					<Navbar.Brand>myBlog</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse>
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							{currentUser ? <Nav.Link>{currentUser.displayName}</Nav.Link> : null}
							{!currentUser ? (
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
							) : (
								<React.Fragment>
									<Nav.Link as={Link} to="/createposts">
										CreatePost
									</Nav.Link>

									<Button
										onClick={(e) => {
											signUserOut(e);
										}}
									>
										Log Out
									</Button>
								</React.Fragment>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};
