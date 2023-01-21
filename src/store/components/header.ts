import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
	data: string;
}

const initialState: InitialStateType = {
	data: '',
};
export const headerSlice = createSlice({
	name: 'headerSlice',
	initialState,
	reducers: {
		setData: (state: InitialStateType, action: PayloadAction<string>) => {
			state.data = action.payload;
		},
	},
});

export const { setData } = headerSlice.actions;
export default headerSlice.reducer;
