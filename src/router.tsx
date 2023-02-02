import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/TypeRoute/PublicRoute';
import PrivateRoute from './components/TypeRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { Header } from './components/helpers/header/header';

export default function RoutesDom(props: any): JSX.Element {
	return (
		<Router>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/product/:name' element={<PublicRoute>{PublicRoutes.Product}</PublicRoute>}></Route>
				<Route path='/account' element={<PublicRoute>{PublicRoutes.Account}</PublicRoute>}>
					<Route path='login' element={PublicRoutes.Login} />
					<Route path='register' element={PublicRoutes.Register} />
					<Route path='password-recovery' element={PublicRoutes.Recovery} />
				</Route>
				<Route path='/components' element={<PublicRoute>{PublicRoutes.Components}</PublicRoute>} />
			</Routes>
			<Routes>
				<Route path='/dashboard' element={<PrivateRoute>{PrivateRoutes.Dashboard}</PrivateRoute>}>
					<Route path='file-manager' element={PrivateRoutes.FileManager} />
					<Route path='gestion-products' element={PrivateRoutes.GestionProducts} />
					<Route path='add-product' element={PrivateRoutes.GestionProduct} />
					<Route path='product/:id' element={PrivateRoutes.GestionProduct} />
					<Route path='gestion-users' element={PrivateRoutes.GestionUsers} />
					<Route path='gestion-user' element={PrivateRoutes.GestionUser} />
				</Route>
			</Routes>
		</Router>
	);
}
