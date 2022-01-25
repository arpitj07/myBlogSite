import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './Blogs.styles';
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

	const submitpost = async () => {
		await addDoc(postCollection, { title, textArea, author: {} });
		navigate('/dashboard');
	};

	const { user } = useContext(AuthContext);
	if (!user) {
		return navigate('/login');
	}
	return (
		<React.Fragment>
			<Wrapper>
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
					<textArea
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
			</Wrapper>
		</React.Fragment>
	);
};