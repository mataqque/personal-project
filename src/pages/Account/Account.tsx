import './Account.scss';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
const background = require('../../assets/images/Account/imgs/background-infinix-login.jpg');
const brand = require('../../assets/images/global/icons/infinix.svg?url');

export const Account = () => {
	return (
		<>
			<Helmet>
				<title>Login</title>
				<script src='https://kit.fontawesome.com/6611670d58.js' crossOrigin='anonymous'></script>
			</Helmet>
			<main className='auth-page'>
				<div className='bg-auth'>
					<div className='content-img'>
						<img className='img-expand' src={background}></img>
					</div>
				</div>
				<div className='auth-full-page-content'>
					<div className='auth-brand'>
						<img className='w-100' src={brand}></img>
					</div>
					<Outlet />
					<div className='auth-footer c-letter'>@2022 - Infinix Software. Todos los derechos reservados</div>
				</div>
			</main>
		</>
	);
};
