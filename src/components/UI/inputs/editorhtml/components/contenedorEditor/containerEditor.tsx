import styled from 'styled-components';

export const ContainerEditorStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	--border: #dddada;
	border: 1px solid var(--border);
	border-radius: 1rem;
`;

interface IInterfaceEditorHtml {
	children: JSX.Element | JSX.Element[] | string;
	className?: string;
}

export const ContainerEditor = (props: IInterfaceEditorHtml) => {
	const { className } = props;
	return <ContainerEditorStyled className={`Editor-html ${className}`}>{props.children}</ContainerEditorStyled>;
};
