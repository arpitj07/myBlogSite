import React from 'react';

import { Wrapper, Container } from './Register.styles';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

//Firebase Dependensies
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';

export const Register = () => {
	const [ registerEmail, setRegisterEmail ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');
	const [ phoneNum, setPhoneNum ] = useState('');
	const [ FullName, setFullName ] = useState('');

	const navigate = useNavigate();
	const postCollection = collection(db, 'UserData');

	const regDetails = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
			await addDoc(postCollection, { username: FullName, email: registerEmail });
			console.log(user);
			navigate('/login');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<h3>Register User</h3>

					<input
						type="text"
						name="Fullname"
						placeholder="Fullname"
						id="Fullname"
						onChange={(e) => {
							setFullName(e.target.value);
						}}
					/>

					<input
						type="tel"
						name="PhoneNum"
						id="PhoneNum"
						placeholder="phonenumber"
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						onChange={(e) => {
							setPhoneNum(e.target.value);
						}}
					/>

					<input
						type="text"
						name="EmailID"
						placeholder="email"
						id="EmailID"
						onChange={(e) => {
							setRegisterEmail(e.target.value);
						}}
					/>

					<input
						type="Password"
						name="Password"
						placeholder="password"
						id="Password"
						onChange={(e) => {
							setRegisterPassword(e.target.value);
						}}
					/>

					<input
						type="Password"
						name="Cassword"
						placeholder="confirm password"
						id="CPassword"
						onChange={(e) => {
							setRegisterPassword(e.target.value);
						}}
					/>

					<button
						onClick={() => {
							regDetails();
						}}
					>
						Register
					</button>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
