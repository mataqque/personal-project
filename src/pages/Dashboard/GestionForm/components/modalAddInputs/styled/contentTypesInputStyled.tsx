import styled from 'styled-components';

export const ContentTypesInputStyled = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	gap: 0.8rem;
	grid-row: max-content;
	grid-template-rows: repeat(3, max-content);
	grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
	@media (max-width: 1400px) {
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
	}
	.select-option {
		width: 1rem;
		height: 1rem;
		border-radius: 100%;
		background: white;
		box-shadow: 0px 0px 10px 4px #1c2b520f;
		border: 1px solid #5974c840;
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
	}
	.type {
		position: relative;
		cursor: pointer;
		padding: 1rem;
		padding-top: 0;
		width: 100%;
		height: 8rem;
		border-radius: 0.5rem;
		border: 1px solid #cbd6e2;
		box-shadow: 3px 3px 9px rgba(203, 214, 226, 0.5);
		margin-bottom: 0;
		@media (max-width: 1400px) {
			height: 7rem;
			padding-bottom: 0.5rem;
		}
		.paragraph {
			line-height: 1rem;
			font-size: 0.9rem;
		}
		&.active {
			border: 1px solid var(--success);
			.select-option {
				background: var(--success);
			}
		}
		&.error {
			border: 1px solid red;
		}
		.icon-type {
			height: 4.5rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-content: center;
			img {
				height: 100%;
				width: 3.5rem;
				object-fit: contain;
			}
		}
	}
`;
