import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const Container = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyleLink = styled(Link)`
	color: white;
	text-decoration: none;
	background-color: black;
	width: 100px;
	border-radius: 10px;
	padding: 10px 20px;
	margin: 0 5px;
`;
