import React from 'react';
import { Wrapper, Container } from './Register.styles';
export const Register = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<h1>Welcome to myBlog</h1>
				<Container>
					<label htmlFor="Fullname">Full Name:</label>
					<input type="text" name="Fullname" id="Fullname" />
					<label htmlFor="PhoneNum">Phone Number:</label>
					<input type="tel" name="PhoneNum" id="PhoneNum" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
					<label htmlFor="EmailID">Email:</label>
					<input type="email" name="EmailID" id="EmailID" />
					<label htmlFor="Password">Password:</label>
					<input type="Password" name="Password" id="Password" />
					<label htmlFor="Password">Confirm Password:</label>
					<input type="Password" name="Password" id="Password" />
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
