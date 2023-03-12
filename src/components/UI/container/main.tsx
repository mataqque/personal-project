import styled from 'styled-components';

export const MainContainerStyled = styled.main`
	background-color: #ebf7fc;
	padding-top: calc(var(--heightNav) + 49px);
	&.mode-dark {
		.main:color-mode-dark-white {
			color: white;
		}
	}
`;

export const MainContainer = (props: any) => {
	return <MainContainerStyled className='main-public main'>{props.children}</MainContainerStyled>;
};
