import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: localStorage.getItem('token') || '',
	},
	reducers: {
		saveToken: (state, action) => {
			state.token = action.payload.token;
			localStorage.setItem('token', action.payload.token);
		},
		destroyToken: () => {
			localStorage.removeItem('token');
		},
	},
});

export const { saveToken, destroyToken } = authSlice.actions;
export default authSlice.reducer;
