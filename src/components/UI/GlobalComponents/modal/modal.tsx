import styled from 'styled-components';
import { useState } from 'react';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './modalSlice';
interface IModalProps {
	className?: string;
	children: any;
}

export const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 21;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	pointer-events: none;
	&.close {
		animation: closeModal 0.2s forwards;
	}
	&.open {
		animation: openModal 0.2s forwards;
	}
	@keyframes openModal {
		0% {
			opacity: 0;
			pointer-events: none;
		}
		20% {
			pointer-events: all;
		}
		100% {
			pointer-events: all;
			opacity: 1;
		}
	}
	@keyframes closeModal {
		0% {
			opacity: 1;
			poiner-events: all;
		}
		20% {
			poiner-events: none;
		}
		99% {
			display: flex;
		}
		100% {
			poiner-events: none;
			display: none;
			opacity: 0;
		}
	}
	.icon-close {
		z-index: 2;
		position: absolute;
		right: 1rem;
		top: 1rem;
	}
	.content-modal {
		width: 30rem;
		height: max-content;
		position: relative;
		padding: 2rem;
		border-radius: 0.5rem;
	}
`;

export const Modal = ({ children, className, ...rest }: IModalProps) => {
	const modalActive = useSelector((state: any) => state.modalSlice.modalActive);
	const dispatch = useDispatch();
	return (
		<ModalStyled className={'modal ' + modalActive + ' ' + (className ? className : '')} {...rest}>
			<div className='content-modal bg-white'>
				<IconMask
					className='icon-close bg-black w-5 h-5 cursor-pointer'
					onClick={() => {
						dispatch(closeModal());
					}}
				></IconMask>
				{children}
			</div>
		</ModalStyled>
	);
};
