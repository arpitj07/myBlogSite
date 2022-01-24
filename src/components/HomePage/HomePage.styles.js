import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	/* display: flex;
	align-items: center;
	justify-content: center; */
	position: relative;

	h1 {
		position: absolute;
		left: 640px;
		top: 270px;
		color: white;
		font-size: 2.5rem;
		font-weight: 700;
	}
	button {
		width: 120px;
		height: 40px;
		color: white;
		background-color: black;
		position: absolute;
		left: 750px;
		top: 400px;
		border-radius: 20px;
		font-size: 1.3rem;
		font-weight: 700;
	}
`;

export const Image = styled.img`
	background-size: cover;
	width: 100%;
	height: 720px;
	z-index: -1;
`;
