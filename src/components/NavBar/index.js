import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, StyleLink } from './NavBar.styles';
import { useNavigate } from 'react-router-dom';

//firebase
import { getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
//Contexts
import { LogContext } from '../Login';

export const Navbar = () => {
	const UserCollection = collection(db, 'UserData');
	const [ user, setUser ] = useState('');
	const isLogin = useContext(LogContext);
	const navigate = useNavigate();

	useEffect(() => {
		const getUserData = async () => {
			const data = await getDoc(UserCollection);
			console.log(data);
		};
		if (isLogin) {
			getUserData();
		}
	});

	const signUserOut = () => {
		navigate('/');
	};

	return (
		<React.Fragment>
			<Nav>
				<h2>myBlog</h2>
				<StyleLink>
					<Link to="/">Home</Link>
					{isLogin ? <span>Arpit</span> : null}
					{!isLogin ? (
						<Link to="/login">Login</Link>
					) : (
						<React.Fragment>
							<Link to="/blogposts">Create Post</Link>
							<button
								onClick={() => {
									signUserOut();
								}}
							>
								Log Out
							</button>
						</React.Fragment>
					)}
				</StyleLink>
			</Nav>
		</React.Fragment>
	);
};
