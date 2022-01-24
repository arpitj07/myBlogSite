import React, { useState, createContext } from 'react';
import { Container, Wrapper } from './Login.styles';
import { useNavigate } from 'react-router-dom';

export const LogContext = createContext();

export const Login = () => {
	const [ loginEmail, setLoginEmail ] = useState('');
	const [ loginPassword, setLoginPassword ] = useState('');
	const [ isLogin, setIsLogin ] = useState(false);

	const navigate = useNavigate();

	const handleLogin = () => {
		setIsLogin(true);
		console.log('The state of:', isLogin);
		navigate('/posts');
	};

	const redirectToRegister = () => {
		navigate('/register');
	};

	return (
		<React.Fragment>
			<LogContext.Provider value={isLogin}>
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
			</LogContext.Provider>
		</React.Fragment>
	);
};
