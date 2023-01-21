import styled from 'styled-components';

export const InputTextStyled = styled.input`
	writing-mode: horizontal-tb !important;
	text-rendering: auto;
	color: -internal-light-dark(black, white);
	letter-spacing: normal;
	word-spacing: normal;
	line-height: normal;
	text-transform: none;
	text-indent: 0px;
	text-shadow: none;
	display: inline-block;
	text-align: start;
	appearance: auto;
	-webkit-rtl-ordering: logical;
	cursor: text;
	background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
	padding: 1px 2px;
	border-width: 2px;
	border-style: inset;
	border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
	border-image: initial;
	background-color: var(--backgroundInput);
	@media (prefers-color-scheme: dark) {
		background-color: var(--body-bg);
		border-width: 1px;
		border-style: solid;
		border-color: #2d2d2d;
		&:autofill ~ .content-icon {
			.mask {
				background-color: black;
			}
		}
		&:-webkit-autofill ~ .content-icon {
			.mask {
				background-color: black !important;
			}
		}
	}
	&::placeholder {
		color: #97a1ac;
		font-size: 0.9rem;
	}
	&.--invalid {
		border-color: red !important;
		& ~ .label-accept {
			border-color: red !important;
		}
		& ~ .input {
			border-color: red !important;
		}
	}
	&.--valid {
		border-color: #00cc00 !important;
		& ~ .label-accept {
			border-color: #00cc00 !important;
		}
		& ~ .input {
			border-color: #00cc00 !important;
			color: white;
		}
	}
`;
