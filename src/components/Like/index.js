import React, { useState } from 'react';
import '../../index.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export const LikeButton = () => {
	const [ active, setActive ] = useState(false);
	const [ counter, setCounter ] = useState(0);

	const handleToggle = (e) => {
		e.preventDefault();

		setActive((previousLike) => {
			return !previousLike;
		});
	};
	return (
		<Row>
			<Col>
				<span>Likes:</span>
				{!active ? (
					<FontAwesomeIcon
						className="mr-2"
						icon={farHeart}
						onClick={(e) => {
							handleToggle(e);
						}}
					/>
				) : (
					<FontAwesomeIcon
						className="text-red"
						icon={faHeart}
						onClick={(e) => {
							handleToggle(e);
						}}
					/>
				)}
				<span className="m-2">{counter}</span>
			</Col>
		</Row>
	);
};
