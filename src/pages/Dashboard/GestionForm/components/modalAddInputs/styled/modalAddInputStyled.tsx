import styled from 'styled-components';

export const ModalAddInputStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 30rem;
	height: 100%;
	z-index: 2;
	background-color: white;
	box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.01);
	transform: translateX(-100%);
	transition: 0.3s;
	border-right: 1px solid #ededed;
	&.active {
		transform: translateX(0%);
	}
	.content-scrollbar {
		right: 0.5rem;
	}
`;
