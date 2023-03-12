import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi, account } from './apis/authApi.api';
import { filesApi } from '../pages/Dashboard/FileManager/FileManager.api';
import { gestionApiProduct } from '../pages/Dashboard/GestionProduct/gestionApiProduct';
import { gestionProductsApi } from '../pages/Dashboard/GestionProducts/gestionProductsApi';
import { getProductsApi } from '../pages/Home/productsSlice';
import { gestionUsersApi } from '../pages/Dashboard/GestionUsers/gestionUsersApi';
import { gestionFormsApi } from '../pages/Dashboard/GestionForms/gestionFormsApi';
import { gestionCategoryApi } from '../pages/Dashboard/GestionAddCategory/GestionAddCategory.Api';
import headerSlice from './components/header';
import authSlice from './globlalSlice/auth/auth.slice';
import dashboardSlice from '../pages/Dashboard/domain/dashboard.slice';
import FileManagerSlice from '../pages/Dashboard/FileManager/FileManagerSlice';
import modalSlice from '../components/UI/GlobalComponents/modal/modalSlice';
import addImagesSlice from '../pages/Dashboard/GestionProduct/components/addImagesSlice';
import editorHtmlSlice from '../components/UI/inputs/editorhtml/editohtmlSlice';
import userSlice from './globlalSlice/user/user.slice';
import addInputsSlice from '../pages/Dashboard/GestionForm/components/addInputsSlice';
import modalAddInputSlice from '../pages/Dashboard/GestionForm/components/modalAddInputs/modalAddInputSlice';

const middleware = [
	account.middleware,
	authApi.middleware,
	filesApi.middleware,
	gestionApiProduct.middleware,
	gestionProductsApi.middleware,
	getProductsApi.middleware,
	gestionUsersApi.middleware,
	gestionFormsApi.middleware,
	gestionCategoryApi.middleware,
];

export const store = configureStore({
	reducer: {
		headerSlice: headerSlice,
		authSlice: authSlice,
		dashboardSlice: dashboardSlice,
		modalSlice: modalSlice,
		addImagesSlice: addImagesSlice,
		editorHtmlSlice: editorHtmlSlice,
		userSlice: userSlice,
		addInputsSlice: addInputsSlice,
		modalAddInputSlice: modalAddInputSlice,
		//self reducers
		fileManagerSlice: FileManagerSlice,
		[gestionCategoryApi.reducerPath]: gestionCategoryApi.reducer,
		[gestionFormsApi.reducerPath]: gestionFormsApi.reducer,
		[gestionProductsApi.reducerPath]: gestionProductsApi.reducer,
		[getProductsApi.reducerPath]: getProductsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[account.reducerPath]: account.reducer,
		[filesApi.reducerPath]: filesApi.reducer,
		[gestionApiProduct.reducerPath]: gestionApiProduct.reducer,
		[gestionUsersApi.reducerPath]: gestionUsersApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch)
