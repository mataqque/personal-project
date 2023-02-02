import { createSlice } from '@reduxjs/toolkit';
import { disableCheckables } from '../../../helpers/helpers';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modalActive: '',
	},
	reducers: {
		closeModal: state => {
			state.modalActive = 'close';
			disableCheckables('.component_file_manager');
		},
		openModal: state => {
			state.modalActive = 'open';
		},
	},
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
