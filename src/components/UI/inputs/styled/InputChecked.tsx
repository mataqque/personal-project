import styled from 'styled-components';
export const InputCheckedStyled = styled.div`
	input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
		&:checked + .input-checked {
			background-color: ${props => props.color || '#2f71ff'};
			border-color: ${props => props.color || '#2f71ff'};
			div,
			i {
				transform: rotate(0deg);
				background-color: white;
			}
		}
	}
	.input-checked {
		width: 16px;
		height: 16px;
		border-color: #bbbbbb;
		border-width: 1.5px;
		border-style: solid;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		transition: 0.3s;
		div,
		i {
			transition: 0.3s;
			transform: rotate(40deg);
			width: 100%;
			height: 100%;
			background-color: transparent;
		}
	}
`;
