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
	width: 500px;
	height: 100%;
	display: flex;
	padding: 30px 20px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 1px solid red;
	border-radius: 20px;

	label {
		padding: 10px 0;
		font-weight: 700;
	}
`;
