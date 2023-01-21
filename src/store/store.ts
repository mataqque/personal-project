import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi, account } from './apis/authApi.api';
import headerSlice from './components/header';
import authSlice from './globlalSlice/auth/auth.slice';
import dashboardSlice from '../pages/Dashboard/domain/dashboard.slice';
import FileManagerSlice from '../components/modalUpload/FileManagerSlice';
import { filesApi } from '../pages/Dashboard/FileManager/FileManager.api';
const middleware = [account.middleware, authApi.middleware, filesApi.middleware];

export const store = configureStore({
	reducer: {
		headerSlice: headerSlice,
		authSlice: authSlice,
		dashboardSlice: dashboardSlice,
		//self reducers
		fileManagerSlice: FileManagerSlice,
		[authApi.reducerPath]: authApi.reducer,
		[account.reducerPath]: account.reducer,
		[filesApi.reducerPath]: filesApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch)
