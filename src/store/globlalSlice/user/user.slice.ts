import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		saveData: (state, action) => {},
		destroyData: (state, action) => {},
	},
});

export const { saveData, destroyData } = userSlice.actions;
export default userSlice.reducer;
