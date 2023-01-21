import { lazy, Suspense } from 'react';
import { Login } from '../pages/Account/login/login';
import { ErrorBoundary } from './Boundary';
import { StyledEngineProvider } from '@mui/material/styles';

type Props = {
	children: React.ReactNode;
};
const Dashboard = lazy(
	async () =>
		await import(/* webpackChunkName:"dashboard" */ '../pages/Dashboard/dashboard').then(module => {
			return { default: module.default };
		})
);
const FileManager = lazy(
	async () =>
		await import(/* webpackChunkName:"filemanager" */ '../pages/Dashboard/FileManager/FileManager').then(module => {
			return { default: module.FileManager };
		})
);
const GestionUser = lazy(
	async () =>
		await import(/* webpackChunkName:"GestionUser" */ '../pages/Dashboard/GestionUsers/gestionUser').then(module => {
			return { default: module.default };
		})
);

const GestionUsers = lazy(
	async () =>
		await import(/* webpackChunkName:"GestionUsers" */ '../pages/Dashboard/GestionUsers/gestionUsers').then(module => {
			return { default: module.default };
		})
);

function Component(props: Props) {
	return (
		<Suspense fallback={<></>}>
			<ErrorBoundary>{props.children}</ErrorBoundary>
		</Suspense>
	);
}

export const PrivateRoutes = {
	Dashboard: (
		<Component>
			<Dashboard />
		</Component>
	),
	FileManager: (
		<Component>
			<FileManager />
		</Component>
	),
	GestionUser: (
		<Component>
			<GestionUser />
		</Component>
	),
	GestionUsers: (
		<Component>
			<GestionUsers />
		</Component>
	),
};
