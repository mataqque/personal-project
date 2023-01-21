import styled from 'styled-components';

export const InputCheckboxStyled = styled.div`
	input {
		display: none;
	}
	input:checked ~ .toggle-switch label {
		transform: translateX(100%);
		right: 0;
	}
	input:checked ~ .toggle-switch {
		background-color: ${props => props.color || '#0073d1'};
	}
	&.radio {
		.content-sub-input {
			.toggle-switch {
				border-radius: 10rem;
			}
			.handle-toggle {
				border-radius: 10rem;
			}
		}
	}
	.toggle-switch {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		height: 19px;
		width: 37px;
		min-width: 0px;
		background-color: #cbd6e2;
		border-radius: 3px;
		transition: 0.3s;
		.handle-toggle {
			position: absolute;
			top: 0px;
			left: 0px;
			transform: translateX(0%);
			will-change: left;
			height: 19px;
			width: 19px;
			padding: 5px;
			overflow: hidden;
			background-color: white;
			box-shadow: 0px 0px 10px 0px #cbccce;
			border-radius: 3px;
			transition: all 150ms ease-out 0s;
			cursor: pointer;
			transition: 0.5s;
		}
	}
`;
export const InputCheckboxStyledSm = styled.div`
	input {
		display: none;
	}
	input:checked ~ .toggle-switch label {
		transform: translateX(100%);
		right: 0;
	}
	input:checked ~ .toggle-switch {
		background-color: ${props => props.color || '#0073d1'};
	}
	&.radio {
		.content-sub-input {
			.toggle-switch {
				border-radius: 10rem;
			}
			.handle-toggle {
				border-radius: 10rem;
			}
		}
	}
	.toggle-switch {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 20px;
		width: 36px;
		min-width: 0px;
		background-color: #cbd6e2;
		border-radius: 3px;
		transition: 0.3s;
		padding: 3px;
		.handle-toggle {
			position: relative;
			top: 0px;
			bottom: 0px;
			transform: translateX(0%);
			will-change: left;
			height: 15px;
			max-height: 15px;
			width: 15px;
			overflow: hidden;
			background-color: white;
			border-radius: 3px;
			transition: all 150ms ease-out 0s;
			cursor: pointer;
			transition: 0.5s;
		}
	}
`;
