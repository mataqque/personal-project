import styled from 'styled-components';
import './form.scss';
export const FormStyled = styled.form`
	width: 100%;
	--widthIcon: 3rem;
	@media (max-width: 600px) {
		--widthIcon: 2.5rem;
	}
	.content-input {
		width: 100%;
		--backgroundInput: white;
		@media (prefers-color-scheme: dark) {
			--backgroundInput: var(--body-bg);
		}

		.input:-internal-autofill-selected {
			background-color: var(--body-bg) !important;
		}
		.input,
		button.select {
			display: flex;
			width: 100%;
			padding: 0 0.75rem;
			height: 3rem;
			font-size: 0.9rem;
			font-weight: 400;
			line-height: 1.5;
			color: var(--letterInput);
			background-clip: padding-box;
			border: 1px solid var(--border);
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			border-radius: 0.5rem;
			text-align: left;
			align-items: center;
			@media (max-width: 1400px) {
				height: 2.5rem;
			}
			/* @media (prefers-color-scheme: dark) {
				color: white;
			} */
			&.ligth {
				background-color: white;
				color: #5e6278;
				border: 1px solid var(--border);
				border-radius: 0.5rem;
			}
		}
		button.select {
			position: relative;
			&.Mui-expanded {
				&::after {
					transform: rotate(180deg);
				}
			}
			&::after {
				content: '';
				width: 1rem;
				height: 1rem;
				transition: 0.5s;
				position: absolute;
				background-image: url('https://www.cosapiinmobiliaria.com.pe/static/media/down.75a3c65b.svg');
				background-repeat: no-repeat;
				background-position: 97%;
				background-size: contain;
				right: 0.5rem;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		.content-sub-input {
			position: relative;
			&.include-icon {
				.input {
					padding-left: var(--widthIcon);
				}
				select {
					padding-left: calc(var(--widthIcon) - 0.5rem) !important;
				}
			}
			input.input-select {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				opacity: 0;
				pointer-events: none;
			}
			.options {
				position: absolute;
				bottom: 0;
				background-color: white;
				width: 100%;
				top: calc(100% + 2px);
				z-index: 2;
				border-radius: 0.5rem;
				display: flex;
				flex-direction: column;
				height: max-content;
				overflow: hidden;
				.option {
					height: 28px;
					width: 100%;
					padding: 0 0.5rem;
					display: flex;
					align-items: center;
					transition: 0.2s;
					cursor: pointer;
					&:hover {
						background-color: #852dda;
						color: white;
					}
				}
			}
		}
		input {
		}
		.content-icon {
			position: absolute;
			width: var(--widthIcon);
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			align-content: center;
			justify-content: center;
			top: 0;
			.mask {
				width: 1rem;
				height: 1rem;
				background-color: black;
				@media (prefers-color-scheme: dark) {
					background-color: white;
				}
			}
		}
		.content-icon ~ input {
			padding-left: var(--widthIcon);
		}
		.icon-valid {
			bottom: 0;
			height: 1.5rem;
			margin: auto;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			right: 0.5rem;
			top: 0;
			width: 1.5rem;
		}
		.icon-error {
			bottom: 0;
			height: 1.5rem;
			margin: auto;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			right: 0.5rem;
			top: 0;
			width: 1.5rem;
		}
		.--invalid ~ .icon-error {
			opacity: 1;
		}
		.--valid ~ .icon-valid {
			opacity: 1;
		}
	}
`;
