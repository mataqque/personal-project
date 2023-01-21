import styled from 'styled-components';

export const Options = styled.div`
	position: absolute;
	bottom: 0;
	background-color: white;
	width: 100%;
	top: calc(100% + 2px);
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	height: max-content;
	overflow: hidden;
	overflow: hidden;
	transform-origin: top;
	z-index: 2;
	max-height: 0rem;
	@keyframes showOptions {
		0% {
			max-height: 0;
			/* opacity: 0; */
			opacity: 1;
		}
		30% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			max-height: 10rem;
		}
	}
	@keyframes closeOptions {
		0% {
			max-height: 10rem;
			opacity: 1;
			border: 1px solid #e3e3e3a6;
		}
		30% {
			opacity: 1;
		}
		99% {
			border: 0px solid #e3e3e3a6;
		}
		100% {
			opacity: 1;
			max-height: 0rem;
		}
	}
	&.active {
		border: 1px solid #e3e3e3a6;
		box-shadow: 0px 8px 15px -9px #0000004d;
		animation: showOptions 0.3s linear forwards;
	}
	&.close {
		box-shadow: 0px 8px 15px -9px #0000004d;
		animation: closeOptions 0.3s linear forwards;
	}
	.content-options {
		overflow: auto;
		max-height: 10rem;
		&.scroll {
			&::-webkit-scrollbar-thumb {
				background-color: ${props => props.color || '#3f0a85'};
			}
		}
	}
	.option {
		height: 28px;
		min-height: 28px;
		width: 100%;
		padding: 0 0.5rem;
		display: flex;
		align-items: center;
		transition: 0.2s;
		cursor: pointer;
		user-select: none;
		&:hover {
			background-color: #f2f2f2;
		}
	}
`;

export const InputSelectStyled = styled.input`
	width: 100%;
	user-select: none;
`;

export const ContentOptions = (props: any) => {
	const { color } = props;
	const show = props.show.toString();
	return (
		<Options className={`${show == 'true' ? 'active' : ''} ${show == 'false' ? 'close' : ''}`} color={color}>
			<div className='overflow-hidden'>
				<div className='content-options scroll'>{props.children}</div>
			</div>
		</Options>
	);
};
