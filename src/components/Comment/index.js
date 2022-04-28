import React, { useState, useCallback } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../../index.css';

export const Comments = () => {
	const [ showPostButton, setShowPostButton ] = useState(false);
	const [ isPostComment, setIsPostComment ] = useState(false);

	const [ comment, setComment ] = useState('');

	const handleComment = (e) => {
		console.log('hello');
		if (e.target.value.length > 0) {
			setShowPostButton(true);
		} else {
			setShowPostButton(false);
		}

		setComment(e.target.value);
	};

	const handlePostButton = (e) => {
		setIsPostComment(true);
	};

	return (
		<Form>
			<p className="my-2">Comments</p>

			{isPostComment && (
				<Row className="d-flex flex-column">
					<Col>
						<Col className="my-3 border">{comment}</Col>
						<Col className="mt-3">
							<Button className="border-0 mx-2" style={{ background: '#fca311' }}>
								Edit
							</Button>
							<Button className="border-0 mx-2" style={{ background: '#d00000' }}>
								Delete
							</Button>
							<Button className="border-0 mx-2" style={{ background: 'purple' }}>
								Reply
							</Button>
						</Col>
					</Col>
				</Row>
			)}

			<Form.Control
				className="my-3"
				type="textarea"
				name="Comment"
				placeholder="Write Comment"
				onChange={(e) => handleComment(e)}
			/>
			{showPostButton && (
				<Button className="btn-postcomment" bg="primary" onClick={(e) => handlePostButton(e)}>
					Comment
				</Button>
			)}
		</Form>
	);
};
