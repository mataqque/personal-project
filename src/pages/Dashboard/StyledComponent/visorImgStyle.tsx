import styled from 'styled-components';

export const VisorImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 20rem;
	min-height: 20rem;
	border-radius: 1rem;
	background-color: white;
	margin-bottom: 1rem;
	overflow: hidden;
	position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
