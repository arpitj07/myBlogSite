import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const CustomContainer = styled(Container)`
	background-image: linear-gradient(#0693E3, #FCB901);
`;

export const StyleLink = styled(Link)`
	color: white;
	text-decoration: none;
	background-color: black;
	width: 100px;
	text-align: center;
	border-radius: 10px;
	padding: 10px 20px;
	margin: 0 5px;
`;
