import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Top from '../../assets/images/Top.png';
import { useAuth } from '../Auth';
import { Alert, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState('');
	const navigate = useNavigate();

	const { login } = useAuth();
	const redirectToRegister = () => {
		navigate('/register');
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setError('');
			await login(email, password);
			navigate('/');
		} catch (error) {
			setError('Failed to log in');
		}
	};

	return (
		<React.Fragment>
			<Container className="d-flex mt-4 justify-content-center align-items-center" style={{ minHeight: '600px' }}>
				<Row className="w-100" style={{ maxWidth: '450px', minHeight: '250px' }}>
					<Col>
						<Card>
							<Card.Body>
								<Form
									className="w-100 p-4 d-flex  flex-column"
									style={{ maxWidth: '450px', minHeight: '250px' }}
								>
									<h3 className="text-center mb-4">Log In</h3>
									{error && <Alert variant="danger">{error}</Alert>}
									<Form.Group>
										<Form.Control
											type="text"
											name="EmailID"
											placeholder="email"
											id="EmailID"
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
									</Form.Group>

									<Form.Group>
										<Form.Control
											className="w-100 my-3"
											type="Password"
											name="Password"
											placeholder="password"
											id="Password"
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</Form.Group>

									<Form.Group>
										<Button
											className="w-100 my-3"
											bg="dark"
											variant="dark"
											disabled={loading}
											onClick={(e) => {
												handleLogin(e);
											}}
										>
											Login
										</Button>
									</Form.Group>
									<div className="text-center mt-4">
										<span className="mx-2">Not registered?</span>
										<Button
											bg="dark"
											variant="dark"
											onClick={() => {
												redirectToRegister();
											}}
										>
											Register
										</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};
