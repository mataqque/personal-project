import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

export const ButtonBase = styled.button`
	height: ${(props: any) => {
		if (props.type === 'sm') return '1.5rem';
		if (props.type === 'md') return '2.5rem';
		if (props.type === 'lg') return '3.5rem';
		return '2.5rem'; // valor por defecto si no se especifica type
	}};
	width: max-content;
	border-radius: 7px;
	border-width: 1px;
	border-style: solid;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1.2rem;
	min-width: 4rem;
`;

export const ButtonOutline = styled(ButtonBase)`
	background-color: transparent;
	transition: 0.5s;
`;

export const BtnIcon = styled.button`
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	transition: 0.5s;
	border-radius: 7px;
	border-width: 1px;
	border-style: solid;
`;

export const BtnTag = styled.button`
	border-radius: 100px;
	height: max-content;
	background-color: ${props => props.color};
	color: white;
	width: max-content;
	padding: 2px 10px;
`;
