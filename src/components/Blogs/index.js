import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper } from './Blogs.styles';
import { AuthContext } from '../Auth';

//Firebase Dependensies
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const CreateBlogs = () => {
	//useState Hooks
	const [ title, setTitle ] = useState('');
	const [ textArea, setTextArea ] = useState('');

	const postCollection = collection(db, 'BlogPosts');
	const navigate = useNavigate();
	const user = useContext(AuthContext);

	const submitpost = async () => {
		await addDoc(postCollection, { title, textArea, author: {} });
		navigate('/dashboard');
	};

	// useEffect(() => {
	// 	if (!user) {
	// 		navigate('/login');
	// 	}
	// }, []);

	if (!user) {
		navigate('/login');
	}

	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<h1>Welcome</h1>
					<p>Create New Blog.</p>
					<div className="title">
						<label htmlFor="Title">Title:</label>
						<input
							type="text"
							name="Title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>

					<div className="textarea">
						<label htmlFor="blog">Blog:</label>
						<textarea
							onChange={(e) => {
								setTextArea(e.target.value);
							}}
						/>
					</div>

					<button
						onClick={() => {
							submitpost();
						}}
					>
						Submit
					</button>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};
