import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
	width: 100%;
	height: 70px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;

	h2 {
		margin: 0 80px;
	}
`;

export const StyleLink = styled(Link)`
	color: white;
	text-decoration: none;
	margin: 0 20px;

`;

export const Button = styled.button`
	color: red;
	margin-right: 40px;
	background: transparent;
	border: none;
`;
