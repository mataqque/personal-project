import styled from 'styled-components';

export const ButtonSubmit = styled.button`
	width: 100%;
	height: 40px;
	background-color: var(--secondary);
	border-radius: 0.5rem;
	color: white;
	transition: 0.5s;
	@media (max-width: 768px) {
		height: 40px;
	}
	&:hover {
		box-shadow: 0px 6px 31px #2d38da6f;
	}
`;
