import React, { Suspense } from 'react';
import Boundary from './Boundary';

const Account = React.lazy(
	async () =>
		await import(/* webpackChunkName:"account" */ '../pages/Account/Account').then(module => {
			return { default: module.Account };
		})
);
const Login = React.lazy(
	async () =>
		await import(/* webpackChunkName:"login" */ '../pages/Account/login/login').then(module => {
			return { default: module.Login };
		})
);

const Register = React.lazy(
	async () =>
		await import(/* webpackChunkName:"register" */ '../pages/Account/register/register').then(module => {
			return { default: module.Register };
		})
);
const RecoveryPass = React.lazy(
	async () =>
		await import(/* webpackChunkName:"recovery" */ '../pages/Account/recoveryPassword/recoveryPassword').then(module => {
			return { default: module.RecoveryPassword };
		})
);
const Components = React.lazy(
	async () =>
		await import(/* webpackChunkName:"recovery" */ '../pages/Components/Components').then(module => {
			return { default: module.default };
		})
);

export const PublicRoutes = {
	Account: (
		<Boundary>
			<Account />
		</Boundary>
	),
	Login: (
		<Boundary>
			<Login />
		</Boundary>
	),
	Register: (
		<Boundary>
			<Register />
		</Boundary>
	),
	Recovery: (
		<Boundary>
			<RecoveryPass />
		</Boundary>
	),
	Components: (
		<Boundary>
			<Components />
		</Boundary>
	),
	Default: (
		<Boundary>
			<h1>Page Default</h1>
		</Boundary>
	),
};
