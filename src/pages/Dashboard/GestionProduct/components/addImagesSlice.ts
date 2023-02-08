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
		clearAddImages: state => {
			state.listImages = [];
		},
	},
});

export const { modifyListImages, clearAddImages } = addImagesSlice.actions;
export default addImagesSlice.reducer;
