import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		userLoggedIn: {},
	},
	reducers: {
		saveDataUser: (state, action) => {
			state.userLoggedIn = action.payload;
		},
		destroyData: (state, action) => {},
	},
});

export const { saveDataUser, destroyData } = userSlice.actions;
export default userSlice.reducer;
