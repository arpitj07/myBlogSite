import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Container = styled.div`
	box-shadow: 7px 5px 30px;
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid black;

	button {
		width: 200px;
		height: 30px;
		margin-top: 10px;
		background-color: black;
		border-radius: 20px;
		border: none;
		color: white;
	}

	textarea {
		margin-top: 10px;
		display: flex;
		height: 300px;
		width: 500px;
	}
	input {
		display: flex;
		width: 500px;
		height: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	label {
		font-size: 1.5rem;
		font-weight: 700;
	}

	p,
	h1 {
		margin-bottom: 10px;
	}
`;
