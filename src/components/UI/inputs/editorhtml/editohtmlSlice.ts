import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
	selected: string;
}

const initialState: InitialStateType = {
	selected: '',
};
export const editorHtmlSlice = createSlice({
	name: 'editorHtmlSlice',
	initialState,
	reducers: {
		setSelected: (state: InitialStateType, action) => {
			state.selected = action.payload;
		},
	},
});

export const { setSelected } = editorHtmlSlice.actions;
export default editorHtmlSlice.reducer;
