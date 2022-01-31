import React, { useState } from 'react';
import { Alert, Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';

export const Register = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ error, setError ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ FullName, setFullName ] = useState('');
	const { signup, updateprofile } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			return setError("Password Doesn't Match");
		}

		try {
			setError('');
			setLoading(true);
			await signup(email, password);
			await updateprofile(FullName);
			navigate('/');
		} catch (error) {
			setError('Failed to create an Account');
		}
		setLoading(false);
	};

	return (
		<React.Fragment>
			<Container className="mt-4 d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
				<Row className="w-100" style={{ maxWidth: '450px', minHeight: '250px' }}>
					<Col>
						<Card className="mt-4">
							<Card.Body>
								<Form
									className=" w-100 d-flex flex-column"
									style={{ maxWidth: '450px', minHeight: '250px' }}
								>
									<h3 className="text-center mb-4">Register User</h3>
									{error && <Alert variant="danger">{error}</Alert>}
									<Form.Group>
										<Form.Control
											className="w-100 mb-3"
											type="text"
											name="Fullname"
											placeholder="Fullname"
											id="Fullname"
											onChange={(e) => {
												setFullName(e.target.value);
											}}
										/>

										<Form.Control
											className="w-100 mb-3"
											type="tel"
											name="PhoneNum"
											id="PhoneNum"
											placeholder="phonenumber"
											pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
										/>

										<Form.Control
											className="w-100 mb-3"
											type="text"
											name="EmailID"
											placeholder="email"
											id="EmailID"
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>

										<Form.Control
											className="w-100 mb-3"
											type="Password"
											name="Password"
											placeholder="password"
											id="Password"
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>

										<Form.Control
											className="w-100 mb-3"
											type="Password"
											name="Cassword"
											placeholder="confirm password"
											id="CPassword"
											onChange={(e) => {
												setConfirmPassword(e.target.value);
											}}
										/>

										<Button
											className="w-100 mt-3"
											bg="dark"
											variant="dark"
											disabled={loading}
											onClick={(e) => {
												handleSubmit(e);
											}}
										>
											Register
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};
