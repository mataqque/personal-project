import styled from 'styled-components';

export const InputRadioStyled = styled.div`
	width: 20px;
	height: 20px;
	input {
		display: none;
	}
	label,
	svg {
		width: 100%;
		height: 100%;
		circle.radioOutline {
			stroke: #cbd6e2;
			transition: 0.3s;
		}
		circle.radioDot {
			transition: 0.3s;
			fill: transparent;
		}
	}
	input:checked ~ label {
		svg {
			circle.radioOutline {
				stroke: ${props => props.color || '#0073d1'};
			}
			circle.radioDot {
				fill: ${props => props.color || '#0073d1'};
			}
		}
	}
`;
