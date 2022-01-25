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

	.navlinks {
		display: flex;
		justify-content: space-between;
	}
`;
