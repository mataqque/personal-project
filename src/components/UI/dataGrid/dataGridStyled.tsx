import styled from 'styled-components';

export const DataGridStyled = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
	--name: 17rem;
	--uso: 25rem;
	--lastupdate: 14rem;
	--actions: 10rem;
	.grid-head {
		grid-template-rows: repeat(1, auto);
		grid-template-columns: 3rem var(--name) var(--uso) var(--lastupdate) auto var(--actions);
	}
	.grid-body {
		height: 100%;
		max-height: 100%;
		overflow-y: scroll;
		.grid-table-row {
			display: grid;
			grid-template-rows: repeat(1, auto);
			grid-template-columns: 3rem var(--name) var(--uso) var(--lastupdate) auto var(--actions);
		}
		.mark-column {
			background-color: #fbfbfb;
		}
	}
	.checked {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
