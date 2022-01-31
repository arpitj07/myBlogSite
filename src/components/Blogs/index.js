import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper } from './Blogs.styles';
import { useAuth } from '../Auth';

//Firebase Dependensies
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const CreateBlogs = () => {
	//useState Hooks
	const [ title, setTitle ] = useState('');
	const [ textArea, setTextArea ] = useState('');
	const { currentUser } = useAuth();

	const postCollection = collection(db, 'BlogPosts');
	const navigate = useNavigate();

	const submitpost = async () => {
		await addDoc(postCollection, {
			Title: title,
			Blog: textArea,
			author: { name: currentUser.displayName, id: currentUser.uid }
		});
		navigate('/');
	};

	useEffect(() => {
		if (!currentUser) {
			navigate('/login');
		}
	}, []);

	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<h1>Welcome</h1>
					<p>Create New Blog.</p>
					<div className="title">
						<input
							type="text"
							name="Title"
							placeholder="Enter title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>

					<div className="textarea">
						<textarea
							placeholder="Create Your Blog"
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
