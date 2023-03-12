import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeModal: true,
};

const modalAddInputSlice = createSlice({
	name: 'modalAddInputSlice',
	initialState,
	reducers: {
		setActiveModalAddInput: (state, action) => {
			state.activeModal = action.payload;
		},
	},
});

export const { setActiveModalAddInput } = modalAddInputSlice.actions;
export default modalAddInputSlice.reducer;
