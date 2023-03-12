import { createSlice } from '@reduxjs/toolkit';

const addInputsSlice = createSlice({
	name: 'addImagesSlice',
	initialState: {
		listInputs: [],
	},
	reducers: {
		modifyListInputs: (state, action) => {
			state.listInputs = action.payload;
		},
		clearAddInputs: state => {
			state.listInputs = [];
		},
	},
});

export const { modifyListInputs, clearAddInputs } = addInputsSlice.actions;
export default addInputsSlice.reducer;
