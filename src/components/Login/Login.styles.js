import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	margin-top: 100px;
	align-items: center;
	justify-content: center;
	/* flex-direction: column; */
`;

export const Container = styled.div`
	box-shadow: 7px 5px 30px;
	width: 500px;
	height: 400px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	input {
		margin: 10px 0;
		height: 30px;
		width: 300px;
	}

	button {
		width: 290px;
		height: 30px;
		margin-top: 10px;
		background-color: black;
		border-radius: 20px;
		border: none;
		color: white;
	}

	.noaccount {
		margin-top: 30px;
		display: flex;

		span {
			margin-top: 15px;
			margin-right: 10px;
		}
		button {
			width: 70px;
			background-color: black;
		}
	}
`;
