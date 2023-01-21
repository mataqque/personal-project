import styled from 'styled-components';

export const IconMask = styled.div`
	mask-position: center;
	-webkit-mask-position: center;
	mask-size: contain;
	-webkit-mask-size: contain;
	mask-repeat: no-repeat;
	-webkit-mask-repeat: no-repeat;
	/* @media (prefers-color-scheme: dark) {
		background-color: white;
	} */
`;

export const IconDownStyleSelect = styled.div`
	position: relative;
	right: 0rem;
	transition: 0.2s;
	pointer-events: none;
	div {
		width: 1rem;
		height: 1rem;
	}
	&.open {
		transform: rotate(180deg);
	}
`;
