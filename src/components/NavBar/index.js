import React, { useState } from 'react';

import { Nav, StyleLink, Button } from './NavBar.styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';

export const Navbar = () => {
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
			<Nav>
				<h2>myBlog</h2>
				<div className="navlinks">
					<StyleLink to="/">Home</StyleLink>
					{currentUser ? <span>{currentUser.displayName}</span> : null}
					{!currentUser ? (
						<StyleLink to="/login">Login</StyleLink>
					) : (
						<React.Fragment>
							<StyleLink to="/createposts">Create Post</StyleLink>
							<Button
								onClick={(e) => {
									signUserOut(e);
								}}
							>
								Log Out
							</Button>
						</React.Fragment>
					)}
				</div>
			</Nav>
		</React.Fragment>
	);
};
