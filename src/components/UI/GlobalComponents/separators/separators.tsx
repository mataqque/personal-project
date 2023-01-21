import styled from 'styled-components';

export const SeparatorHorizontal = styled.div`
	width: 100%;
	height: 1px;
	background-color: #dedddf;
	margin: 1rem 0;
`;

export const SeparatorVertical = styled.div`
	width: 1px;
	height: 100%;
	background-color: #dedddf;
	margin: 0 1rem;
	opacity: ${(props: { opacity?: number }) => props.opacity || 1};
`;
