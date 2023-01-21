import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modalActive: '',
	},
	reducers: {
		closeModal: state => {
			state.modalActive = 'close';
		},
		openModal: state => {
			console.log('openModal');
			state.modalActive = 'open';
		},
	},
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
