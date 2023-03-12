import styled from 'styled-components';

export const PoligonImageStyled = styled.div`
	position: absolute;
	background-color: rgba(255, 0, 0, 0.644);
	z-index: 2;
	.coord {
		width: 14px;
		height: 14px;
		background-color: rgba(255, 0, 0, 0.356);
		position: absolute;
		user-select: none;
	}
	.left-top {
		top: -7px;
		left: -7px;
		cursor: nw-resize;
	}
	.right-top {
		top: -7px;
		right: -7px;
		cursor: sw-resize;
	}
	.left-bottom {
		bottom: -7px;
		left: -7px;
		cursor: ne-resize;
	}
	.rigth-bottom,
	.prove {
		bottom: -7px;
		right: -7px;
		cursor: se-resize;
	}
	.config {
		opacity: 0;
		position: absolute;
		top: 1rem;
		left: 0;
		right: 0;
		bottom: auto;
		margin: auto;
		width: max-content;
		height: 3rem;
		border-radius: 1rem;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		transition: 0.5s;
		cursor: pointer;
		i {
			margin-right: 0.5rem;
		}
	}
	&:hover {
		.config {
			opacity: 1;
		}
	}
`;

interface IInterfaceEditorHtml {
	children: JSX.Element | JSX.Element[] | string;
	className?: string;
}

export const PoligonoResize = (props: IInterfaceEditorHtml) => {
	const { className } = props;
	return (
		<PoligonImageStyled>
			<div className='config'>
				<i className='fas fa-list-ul' aria-hidden='true'></i>
				Atributos de imagen
			</div>
			{/* <div onMouseDownCapture={(e)=>{Resizer.clickBtnCoord(e,"se")}} className='coord rigth-bottom'></div> */}
		</PoligonImageStyled>
	);
};
