import React, { useState, useContext, useEffect } from 'react';

import { Nav, StyleLink } from './NavBar.styles';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Auth';
//firebase
import { getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const Navbar = () => {
	const UserCollection = collection(db, 'UserData');
	const navigate = useNavigate();

	// useEffect(() => {
	// 	const getUserData = async () => {
	// 		const data = await getDoc(UserCollection);
	// 		console.log(data);
	// 	};
	// 	if (isLogin) {
	// 		getUserData();
	// 	}
	// });
	const user = useContext(AuthContext);
	const signUserOut = () => {
		navigate('/');
	};

	return (
		<React.Fragment>
			<Nav>
				<h2>myBlog</h2>
				<div className="navlinks">
					<Link to="/">Home</Link>
					{user ? <span>Arpit</span> : null}
					{!user ? (
						<Link to="/login">Login</Link>
					) : (
						<React.Fragment>
							<Link to="/dashboard">Create Post</Link>
							<button
								onClick={() => {
									signUserOut();
								}}
							>
								Log Out
							</button>
						</React.Fragment>
					)}
				</div>
			</Nav>
		</React.Fragment>
	);
};
