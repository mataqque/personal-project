import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi, account } from './apis/authApi.api';
import headerSlice from './components/header';
import authSlice from './globlalSlice/auth/auth.slice';
import dashboardSlice from '../pages/Dashboard/domain/dashboard.slice';
import FileManagerSlice from '../pages/Dashboard/FileManager/FileManagerSlice';
import { filesApi } from '../pages/Dashboard/FileManager/FileManager.api';
import modalSlice from '../components/UI/GlobalComponents/modal/modalSlice';
import addImagesSlice from '../pages/Dashboard/GestionProduct/components/addImagesSlice';
import { gestionApiProduct } from '../pages/Dashboard/GestionProduct/gestionApiProduct';
import { gestionProductsApi } from '../pages/Dashboard/GestionProducts/gestionProductsApi';
const middleware = [account.middleware, authApi.middleware, filesApi.middleware, gestionApiProduct.middleware, gestionProductsApi.middleware];

export const store = configureStore({
	reducer: {
		headerSlice: headerSlice,
		authSlice: authSlice,
		dashboardSlice: dashboardSlice,
		modalSlice: modalSlice,
		addImagesSlice: addImagesSlice,
		//self reducers
		fileManagerSlice: FileManagerSlice,
		[gestionProductsApi.reducerPath]: gestionProductsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[account.reducerPath]: account.reducer,
		[filesApi.reducerPath]: filesApi.reducer,
		[gestionApiProduct.reducerPath]: gestionApiProduct.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch)
