import styled from 'styled-components';

export const MainContainer = styled.main`
	background-color: #ebf7fc;
	padding-top: calc(var(--heightNav) + 49px);
	@media (prefers-color-scheme: var(--themeMode)) {
		background-color: red;
	}
`;
