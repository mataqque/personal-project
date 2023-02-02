import { createSlice } from '@reduxjs/toolkit';

const addImagesSlice = createSlice({
	name: 'addImagesSlice',
	initialState: {
		listImages: [],
	},
	reducers: {
		modifyListImages: (state, action) => {
			state.listImages = action.payload;
		},
	},
});

export const { modifyListImages } = addImagesSlice.actions;
export default addImagesSlice.reducer;
