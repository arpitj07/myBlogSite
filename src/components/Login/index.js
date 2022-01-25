import React, { useState, useContext } from 'react';
import { Container, Wrapper } from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
	const [ loginEmail, setLoginEmail ] = useState('');
	const [ loginPassword, setLoginPassword ] = useState('');

	const navigate = useNavigate();

	const handleLogin = () => {
		try {
			signInWithEmailAndPassword(loginEmail, loginPassword);
			navigate('/dashboard');
		} catch (error) {
			alert(error);
		}
	};

	const redirectToRegister = () => {
		navigate('/register');
	};
	const user = useContext(AuthContext);
	if (user) {
		navigate('/dashboard');
	}

	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<input
						type="text"
						name="EmailID"
						placeholder="email"
						id="EmailID"
						onChange={(e) => {
							setLoginEmail(e.target.value);
						}}
					/>

					<input
						type="Password"
						name="Password"
						placeholder="password"
						id="Password"
						onChange={(e) => {
							setLoginPassword(e.target.value);
						}}
					/>

					<button
						onClick={() => {
							handleLogin();
						}}
					>
						Login
					</button>
					<div className="noaccount">
						<span>Not registered?</span>
						<button
							onClick={() => {
								redirectToRegister();
							}}
						>
							Register
						</button>
					</div>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
