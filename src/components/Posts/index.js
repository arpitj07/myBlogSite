import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { db } from '../../firebase-config';
import { useAuth } from '../Auth';

export const Posts = () => {
	const [ postBlogs, setPostBlogs ] = useState([]);
	const getPostCollections = collection(db, 'BlogPosts');
	const { currentUser } = useAuth();

	useEffect(
		() => {
			const getPosts = async () => {
				const data = await getDocs(getPostCollections);
				setPostBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};
			getPosts();
		},
		[ getPostCollections ]
	);

	const deletePost = async (id) => {
		const doctToBeDelete = doc(db, 'BlogPosts', id);
		await deleteDoc(doctToBeDelete);
	};

	return (
		<Container>
			{postBlogs ? (
				postBlogs.map((post) => {
					return (
						<Row className="my-4 mx-md-4" key={post.id}>
							<Card style={{ boxShadow: '5px 5px 25px' }}>
								<Card.Body>
									<Row className="">
										<Col>
											<Card.Title className="d-flex align-items-center justify-content-between">
												<u>{post.Title}</u>
												{currentUser &&
												post.author.id === currentUser.uid && (
													<button
														class="btn btn-md"
														onClick={() => {
															deletePost(post.id);
														}}
													>
														&#128465;
													</button>
												)}
											</Card.Title>
										</Col>
									</Row>

									<Card.Subtitle className="mt-3 mb-3 text-muted">
										Author: @{post.author.name}
									</Card.Subtitle>
									<Card.Text className="p4">{post.Blog}</Card.Text>
								</Card.Body>
							</Card>
						</Row>
					);
				})
			) : (
				<h3>No More Posts to Load</h3>
			)}
		</Container>
	);
};
