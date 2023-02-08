import styled from 'styled-components';

export const ContainerEditorStyled = styled.div``;

interface IInterfaceEditorHtml {
	children: JSX.Element | JSX.Element[] | string;
	className?: string;
}

export const Conta = (props: IInterfaceEditorHtml) => {
	const { className } = props;
	return <ContainerEditor className={`Editor-html ${className}`}>{props.children}</ContainerEditor>;
};
