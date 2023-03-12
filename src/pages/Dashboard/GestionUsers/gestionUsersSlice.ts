import { createSlice } from '@reduxjs/toolkit';
import { IUserDataExtend } from './interface';

const initialState = {
	listUsers: [] as IUserDataExtend[],
};

const gestionUserSlice = createSlice({
	name: 'gestionUserSlice',
	initialState,
	reducers: {
		setListUser: (state, action) => {
			state.listUsers = action.payload;
		},
	},
});

export const {} = gestionUserSlice.actions;
export default gestionUserSlice.reducer;
