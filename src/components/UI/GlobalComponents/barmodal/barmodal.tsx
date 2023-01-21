import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';
import { closeModal } from '../modal/modalSlice';
import styled from 'styled-components';

const ModalStyled = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 27rem;
	background-color: #fff;
	box-shadow: 0px 0px 10px #0000001a;
	z-index: 15;
`;

export const BarModal = ({ children, ...props }: any) => {
	const modalActive = useSelector((state: any) => state.modalSlice.modalActive);
	const dispatch = useDispatch();
	return (
		<ModalStyled className={`modal-modalActive`}>
			<IconMask
				className='icon-close bg-black w-5 h-5 cursor-pointer'
				onClick={() => {
					dispatch(closeModal());
				}}
			></IconMask>
			{children}
		</ModalStyled>
	);
};
