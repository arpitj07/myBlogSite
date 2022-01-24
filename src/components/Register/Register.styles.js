import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	margin-top: 120px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Container = styled.div`
	width: 500px;
	height: 400px;
	display: flex;
	padding: 30px 20px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-shadow: 10px 5px 20px;

	h3 {
		margin-bottom: 20px;
		font-size: 1.7rem;
		font-weight: 700;
	}
	input {
		margin-top: 20px;
		width: 350px;
		height: 40px;
	}

	button {
		background-color: black;
		color: white;
		width: 190px;
		height: 40px;
		margin-top: 20px;
		border-radius: 20px;
	}
`;
